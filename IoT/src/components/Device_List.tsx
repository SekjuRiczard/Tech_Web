import React from 'react';
import Device_Id from './Device_Id'; 

export default function Device_List() {
 
  const devicesData = [
    { hasData: true, temperature: 25, pressure: 1013, humidity: 70, deviceNumber: 1 },
    { hasData: true, temperature: 26, pressure: 1014, humidity: 71, deviceNumber: 2 },
    { hasData: true, temperature: 27, pressure: 1015, humidity: 72, deviceNumber: 3 },
    { hasData: true, temperature: 27, pressure: 1015, humidity: 72, deviceNumber: 4 },
    { hasData: true, temperature: 27, pressure: 1015, humidity: 72, deviceNumber:  5},
    { hasData: true, temperature: 27, pressure: 1015, humidity: 72, deviceNumber: 6 },
    
  ];

  
  const numberOfTilesToShow = 6; 

  return (
    <div className="devices">
      {/* Iteracja przez dane urządzeń i renderowanie kafelków Device_Id */}
      {devicesData.slice(0, numberOfTilesToShow).map((device, index) => (
        <Device_Id key={index} {...device} />
      ))}
    </div>
  );
}
