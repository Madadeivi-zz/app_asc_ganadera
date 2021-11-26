import { Grid } from '@mui/material';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button'

const LoginPage = () => {
    return (
        <Grid container columns={16} columnSpacing={2} direction="row" justifyContent="center" alignItems="center" sx={{
            minHeight: 590
        }}>
            <Grid item md={1} />
            <Grid item md={7}>
                <img src="" alt="" />
            </Grid>
            <Grid item md={7}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="email">Corrreo Electronico</InputLabel>
                        <Input id="email" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="password">Contraseña</InputLabel>
                        <Input id="password" />
                    </FormControl>
                    <Button size="medium" variant="contained" fullWidth="false">Iniciar</Button>
                </FormGroup>
            </Grid>
            <Grid item md={1} />
        </Grid>
    )
}

export default LoginPage;