import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const Login = styled.button`
  background: #FFFFFF;
border: 1px solid #427DAC;
box-sizing: border-box;
border-radius: 6px;
color: #427DAC;
cursor: pointer;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
text-align: center;
height: 40px;
width: 110px;
`;

const SignIn = styled(Login)`
background: #427DAC;
color: #FFFFFF;
`;

export const ButtonsLogin = () => {
    return (
        <Stack spacing={2} direction="row"
            justifyContent="center"
            alignItems="center">
            <Link to="/login">
                <Login variant="outlined">Log in</Login>
            </Link>
            <Link to="/register">
                <SignIn variant="contained">Sign In</SignIn>
            </Link>
        </Stack>
    )
}