import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const index = () => {

    const columns = [
        { field: "id", hide: true },
        {
            field: 'date',
            headerName: 'Fecha',
            width: 100,
            editable: true,
        },
        {
            field: 'client',
            headerName: 'Cliente',
            width: 150,
            editable: true,
        },
        {
            field: 'addressOrigin',
            headerName: 'Direccion Cliente',
            width: 180,
            editable: true,
        },
        {
            field: 'finalDestination',
            headerName: 'Destino Final',
            width: 180,
            editable: true,
        },
        {
            field: 'addressFinal',
            headerName: 'Direccion Destino',
            width: 180,
            editable: true,
        },
        {
            field: 'vehicle',
            headerName: 'Vehiculo',
            width: 90,
            editable: true,
        },
        {
            field: 'placas',
            headerName: 'Placas',
            width: 110,
            editable: true,
        },
        {
            field: 'jaula',
            headerName: 'Jaula',
            width: 100,
            editable: true,
        },
        {
            field: 'pigsQuantity',
            headerName: 'Cantidad de Cerdos',
            width: 120,
            editable: true,
            type: 'number',
        },
        {
            field: 'flejes',
            headerName: 'Flejes',
            width: 100,
            editable: true,
            type: 'number',
        },
    ];

    const rows = [
        { id: 1, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 },
        { id: 2, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 },
        { id: 3, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 },
        { id: 4, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 },
        { id: 5, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 },
        { id: 6, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 },
        { id: 7, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 },
        { id: 8, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 },
        { id: 9, date: "25/10/2021", client: 'La Granjita', addressOrigin: 'Allende 128, Col. San Javier', finalDestination: 'Agropecuaria Caliacac', addressFinal: 'Av Gran Canal sn', vehicle: 'DINA', placas: '63-UG-6V', jaula: '32AN4W', pigsQuantity: 20, flejes: 4 }
    ];

    return (
        <Grid container spacing={2} columns={16} direction="columns" justifyContent="center" alignContent="center">
            <Grid item md={16}>
                <Typography variant="h3" component="h3" md={16}>
                    Solicitud de GUIA
                </Typography>
            </Grid>
            <Grid item md={16}>
                <Grid container>
                    <TextField
                        required
                        id="outlined-required"
                        label="Razón Social"
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Razón Social"
                    />
                </Grid>
            </Grid>
            <Grid item md={16}>
                <DataGrid rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick>
                </DataGrid>
            </Grid>
            <Grid item md={16}>
                <Button variant="contained">Registrar Petición</Button>
            </Grid>
        </Grid>
    )
}

export default index;