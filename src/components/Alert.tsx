import React from "react";
import { FaInfoCircle } from "react-icons/fa";

type AlertProp = { message: string; type: any };

export const AlertMsg: React.FC<AlertProp> = ({ message, type }) => {
  return (
    <div className={type + ' flex items-center space-x-2'} >
      <FaInfoCircle />
      <span> {message} </span>
    </div>
  );
};