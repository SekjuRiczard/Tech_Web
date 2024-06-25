import './App.css'
import Navbar from "./components/shared/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import LoginForm from './components/Login';
import SignUpForm from './components/SingUpForm';
import { isExpired } from "react-jwt";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
/**/
function App() {

    return (
        <Router>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />

                <Navbar></Navbar>
                <Routes>
                    
                    <Route path="/DashBoard" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/" /> : <Dashboard />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/device/:id" element={<Dashboard />} />
                    <Route path="/Login" element={<LoginForm/>}/>
                    <Route path="/SignUp" element={<SignUpForm/>}/>
                </Routes>
            </ThemeProvider>
        </Router>
    )
}

export default App
