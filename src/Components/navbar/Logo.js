import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import urlLogo from "../../assets/logo_porcicultores.png";
import styled from 'styled-components'

const TitleLogo = styled.span`
color: #003B99;
display: block;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Logo = () => {
    return (
        <StyledLink to="/">
            <Grid container spacing={1} direction="row"
                justifyContent="center"
                alignItems="center" >
                <Grid item><img src={urlLogo} alt="Logo Porcicultores" /></Grid>
                <Grid item><h3><TitleLogo>PORCICULTORES</TitleLogo><TitleLogo>DE QUERETARO</TitleLogo></h3></Grid>
            </Grid>
        </StyledLink>
    )
}

export default Logo;