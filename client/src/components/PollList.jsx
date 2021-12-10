import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";



export const PollList = (props) => {
  const navigate = useNavigate();

  console.log(props.polls);

  return (
    <div className="flex flex-col items-center">
      {props.polls.map((m) => {
        return (
          <div key={m._id} class="p-2 sm:w-1/2 w-full">
            <div onClick={() => navigate(`/admin/${m._id}`)} class="bg-gray-100 rounded flex p-4 h-full justify-between hover:bg-yellow-300">
              <span class="title-font font-medium">
                {m.question}
              </span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAW0lEQVRIie3UOwqAMBBAwcE7KHj/m2gh+Gm08DixSW1nIroDqbZ4hIUlhBBeaMCKrnR4RsJROt5iz/ETfcRhzIMSb4PmoV/eSaVCVfb8nygsKh2QSaWTGUL4uAv27TYumDohlgAAAABJRU5ErkJggg=="></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};
