import { Grid } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const TitleText = styled.span`
color: #1C439E;
display: block;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 42px;
line-height: 62px;
`;

const ParagraphSubtitle = styled.p`
color: #425267;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 29px;
text-transform: capitalize;
`;

const ButtonStart = styled.button`
transition: background-color 0.3s, box-shadow 0.3s;

background: #1C439E;
border: 3px solid #1C439E;
border-radius: 14px;
color: #FFFFFF;
cursor: pointer;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 20px;
height: 50px;
line-height: 32px;
text-align: center;
width: 150px;

&:hover {
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 3px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

&:active {
  background-color: #eeeeee;
}

&:focus {
  outline: none;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
    0 0 0 3px #c8dafc;
}

`;

const HeroImage = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 50%;
`;


const LandingPageElements = () => {
    return (
        <Grid container columns={16} columnSpacing={2} direction="row" justifyContent="center" alignItems="center" sx={{
            minHeight: 590
        }}>
            <Grid item md={1} />
            <Grid item md={7} >
                <Grid container
                    direction="column"
                    alignItems="flex-start"
                    spacing={4}>
                    <Grid item>
                        <h1>
                            <TitleText>DESCUBRE</TitleText>
                            <TitleText>NUESTROS</TitleText>
                            <TitleText>SERVICIOS</TitleText>
                        </h1>
                    </Grid>
                    <Grid item>
                        <ParagraphSubtitle>
                            Descubre los beneficios en los servicios al formar parte de la asociación ganadera local de porcicultores de querétaro.
                        </ParagraphSubtitle>
                    </Grid>
                    <Grid item>
                        <Link to="/login"><ButtonStart>Iniciar</ButtonStart></Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={7} alignSelf="center">
                <Grid container justifyContent="center" alignItems="center">
                    <HeroImage src="https://images.unsplash.com/photo-1617167152074-821b4f8af3d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjkyMjZ8MHwxfHNlYXJjaHwyfHxwaWdsZXRzfGVufDB8MXx8fDE2Mzc5MDUzNTE&ixlib=rb-1.2.1&q=80&w=1080" alt='HeroImage' />
                </Grid>
            </Grid>
            <Grid item md={1} />
        </Grid >
    )
}

export default LandingPageElements;