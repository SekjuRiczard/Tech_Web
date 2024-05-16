import React from "react";
import { Typography } from "@mui/material";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import OpacityIcon from "@mui/icons-material/Opacity";
import "../index.css";

interface Props {
  hasData: boolean;
  temperature: number;
  pressure: number;
  humidity: number;
  deviceNumber: number;
}

function Device_Id({ hasData, temperature, pressure, humidity, deviceNumber }: Props) {
  return (
    <>
    
      {hasData && (
        
          
        <Typography className="typography" component="div">
          <Typography className="h6" component="div">
            Device No. {deviceNumber}
          </Typography>
          <Typography variant="h6" component="div">
            <DeviceThermostatIcon className="icon" />
            <span className="value">{temperature}</span> <span className="value deg">&deg;C</span>
          </Typography>
          <Typography variant="h6" component="div">
            <CloudUploadIcon className="icon"/>
            <span className="value">{pressure}  Hpa</span> 
          </Typography>
          <Typography variant="h6" component="div">
            <OpacityIcon className="icon"/>
            <span className="value">{humidity} %</span> 
          </Typography>
        </Typography>
       
      )}
    </>
    
  );
}

export default Device_Id;
