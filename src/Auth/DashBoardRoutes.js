import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "../Components/navbar/index";
import LandinPage from "../Pages/LandingPage/index";
import Guias from "../Pages/Guias/index";
import Farmacia from "../Pages/Farmacia/index";
import Dosis from "../Pages/Dosis/index";
import Administrador from "../Pages/Administrador/index";
import Profile from "../Pages/Profile/index";
import Login from "../Pages/Login/index";
import Register from "../Pages/Register/index";

export const DashBoardRoutes = () => {
    return (
        //     <>
        //   <NavBar />
        //   <Box className="mainContainer">
        //     <Routes>
        //     <button onClick={signInWithGoogle} className="login-with-google-btn">SignIn with Google</button>
        //     <h1>{localStorage.getItem("name")}</h1>
        //     <h1>{localStorage.getItem("email")}</h1>
        //     <img src={localStorage.getItem("profilePic")} alt={localStorage.getItem("name")} />
        //   </Box >
        // </>
        <>
            <Navbar />
            <Routes>
                <Route path="home" element={<LandinPage />} />
                <Route path="guias" element={<Guias />} />
                <Route path="farmacia" element={<Farmacia />} />
                <Route path="dosis" element={<Dosis />} />
                <Route path="administrador" element={<Administrador />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<LandinPage />} />
            </Routes>
        </>
    )
}