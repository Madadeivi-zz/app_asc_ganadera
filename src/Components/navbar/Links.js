import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled.div`
color: #1C439E;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


const Links = () => {
    return (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center"
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item>
                <StyledLink to="/guias">
                    <NavItem>GUIAS</NavItem>
                </StyledLink>
            </Grid>
            <Grid item>
                <StyledLink to="/farmacia" underline="none">
                    <NavItem>FARMACIA</NavItem>
                </StyledLink>
            </Grid>
            <Grid item>
                <StyledLink to="/dosis">
                    <NavItem>DOSIS</NavItem>
                </StyledLink>
            </Grid>
            <Grid item>
                <StyledLink to="/administrador">
                    <NavItem>ADMINISTRACION</NavItem>
                </StyledLink>
            </Grid>
        </Grid>
    )
}

export default Links;