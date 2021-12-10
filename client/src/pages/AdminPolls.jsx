import { Link, useNavigate, Navigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import Chart from "react-google-charts";
import QRCode from "qrcode.react";
import { useParams } from "react-router";
import { AuthContext } from "../context/auth";
import { Button } from "../components/Button";
import axios from "axios";

export const AdminPolls = () => {
  const { id } = useParams();
  const { isLoggedIn, user } = useContext(AuthContext);
  const [poll, setPoll] = useState();
  const [chartData, setChartData] = useState([]);
  const pollLink = `${window.location.href.split("/admin")[0]}/polls/${id}`;
  console.log(pollLink);

  const updatePoll = () => {
    axios.get(`/api/polls/${id}`).then((res) => {
      setPoll(res.data);
      setChartData([
        ...res.data.answers.map((a) => [a.text, a.votes, "#fbbf24", null]),
      ]);
    });
  };
  useEffect(() => {
    updatePoll();
  }, [id]);

  if (!isLoggedIn) return <Navigate to="/login" />;
  if (!poll) return <></>;
  return (
    <div className="flex justify-around flex-wrap mt-1">
      <div className="flex flex-col">
        <h1 className="title-font text-3xl font-medium m-5 text-center">{poll.question}</h1>
        <Chart
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Element",
              "votes",
              { role: "style" },
              {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
              },
            ],
            ...chartData,
          ]}
          options={{
            // title: poll.question,
            width: 1200,
            height: 800,
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        />
        <Button className="" onClick={() => updatePoll()}>
          Refresh
        </Button>
      </div>
      <div className="flex justify-center items-center flex-col">
        <QRCode size={521} value={pollLink} />
        <p className="mt-2">{pollLink}</p>
      </div>
    </div>
  );
};
