import React from "react";
import QRCode from "qrcode.react";
import { useParams } from 'react-router';

export const AdminPolls = () => {
    const { id } = useParams();
    console.log({id});
    return (
        <div>
            
        </div>
    )
}
