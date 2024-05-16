import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Device_Id from './components/Device_Id'
import './App.css'
import Charts from './components/Charts'
import Device_List from './components/Device_List'

function App() {
  const data = {
    hasData: true,
    temperature: 25,
    pressure: 1013,
    humidity: 70
  };

  const [count, setCount] = useState(0)
  
  return (
    <>
   <div className="container">
      <Navbar />
      <main className="main-content">
        <div className="sidebar">
          <Device_Id deviceNumber={0} {...data} />
        </div>
        <div className="content">
          <Charts
            temperatureData={[data.temperature]}
            humidityData={[data.humidity]}
            pressureData={[data.pressure]}
          />
        </div>
      </main>
      <footer className="footer">
       <Device_List/>
      </footer>
    </div>
    
    </>
  );
}

export default App
