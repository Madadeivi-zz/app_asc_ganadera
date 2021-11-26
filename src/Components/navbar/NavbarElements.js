import React from 'react';
import { ButtonsLogin } from './ButtonsLogin';
import Links from './Links';
import Logo from './Logo';
import { Grid } from '@mui/material';
import styled from 'styled-components';



const StyledGrid = styled(Grid)`
    height: 80px;
`;

const NavbarElements = () => {
    return (
        <StyledGrid container spacing={2} columns={16}
            direction="row"
            justifyContent="center"
            alignItems="center">
            <Grid item md={4}><Logo /></Grid>
            <Grid item md={8}><Links /></Grid>
            <Grid item md={4}><ButtonsLogin /></Grid>
        </StyledGrid>
    )
}

export default NavbarElements;