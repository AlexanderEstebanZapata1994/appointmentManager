import React, { useState, useEffect } from 'react';

//Import components
import { Form } from "../Form";
import { AppointmentList } from "../AppointmentList";

// Import material UI
import Typography from "@material-ui/core/Typography";
import { Box, Grid, Container } from '@material-ui/core';

const App = () => {

  // Appointment in the local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments){
    initialAppointments = [];
  }

  // Appointment list
  const [appointmentList, setAppointmentList] = useState(initialAppointments);

  const handleCreateNewAppointment = appointment => {
    setAppointmentList([...appointmentList, appointment])
  }

  useEffect(() => {
    if (initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointmentList));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointmentList, initialAppointments]);
  return (
    <>
      <Typography variant='h6' align="center" style={{fontSize:'28px'}}>Appointment Manager</Typography>
      <Container maxWidth='md'>
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Form  createAppointment={handleCreateNewAppointment}/>
            </Grid>
            <Grid item xs={6}>
              <AppointmentList appointmentList={appointmentList} updateAppointmentListState={setAppointmentList} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export {App};
