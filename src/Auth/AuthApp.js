import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';


export const AuthApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<DashBoardRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}