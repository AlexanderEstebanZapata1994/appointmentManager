import React, { useState } from 'react';
import { v4 as uuid } from "uuid";

import { Grid, FormControl, TextField, Typography, Paper, FormHelperText, TextareaAutosize, Button} from "@material-ui/core";

const FormComponent = ({classes, createAppointment}) => {
    
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [error, setError] = useState(false);
    const [appointment, setAppointment] = useState({
        petName: '',
        ownerPetName: '',
        date: '',
        time: '',
        sicknesses: ''
    });

    const handleChangeEvent = evt =>{
        const { name }  = evt.target;
        const { value }  = evt.target;

        setAppointment( {...appointment, [name]: value})
    }

    const handleBlurEvent = evt =>{
        if (appointment.petName.trim().length === 0 || appointment.ownerPetName.trim().length === 0) {
            setButtonDisabled( true );
            setError( true ); 
            return;
        }

        setError( false ); 
        setButtonDisabled( false );
    }
    
    const handleSubmitEvent = evt =>{
        evt.preventDefault();

        //Asign an id
        appointment.id = uuid();
        
        //Create the appointment
        createAppointment(appointment);

        //Restart the form
        setAppointment({
            petName: '',
            ownerPetName: '',
            date: '',
            time: '',
            sicknesses: ''
        })
        setButtonDisabled( true );
    }

    const {petName, ownerPetName, date, time, sicknesses } = appointment;
    return ( 
        <>
            <Paper elevation={1} >
                <Typography variant='h6' className={classes.createTitle}>Create new appointment</Typography>
                <form onSubmit={handleSubmitEvent} >
                    <FormControl error={error} variant='filled' className={classes.root}>
                    {error && <FormHelperText>All fields are required</FormHelperText>}
                        <Grid item xs={12}>
                            <TextField 
                                id='petName' 
                                name="petName" 
                                type='text' 
                                label='Pet Name'
                                placeholder='Type your pet name'
                                aria-describedby="my-helper-text-pet-name"
                                variant='outlined'
                                className={classes.input}
                                size='small'
                                onChange={handleChangeEvent}
                                onBlur={handleBlurEvent}
                                value={petName}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                id='ownerPetName' 
                                name="ownerPetName" 
                                type='text' 
                                label='Owner name'
                                placeholder='Type the owners name'
                                aria-describedby="my-helper-text-owner-pet-name"
                                variant='outlined'
                                className={classes.input}
                                size='small'
                                onChange={handleChangeEvent}
                                onBlur={handleBlurEvent}
                                value={ownerPetName}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                id='date' 
                                name="date" 
                                type='date' 
                                aria-describedby="my-helper-text-date"
                                variant='filled'
                                className={classes.input}
                                size='small'
                                onChange={handleChangeEvent}
                                value={date}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField 
                                id='time' 
                                name="time" 
                                type='time' 
                                aria-describedby="my-helper-text-time"
                                variant='filled'
                                className={classes.input}
                                size='small'
                                onChange={handleChangeEvent}
                                value={time}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize
                                name='sicknesses'
                                rowsMin={5}
                                placeholder="Sicknesses"
                                size='small'
                                onChange={handleChangeEvent}
                                value={sicknesses}
                                />
                        </Grid>
                        <Button disabled={buttonDisabled} type='submit' variant='contained' color='primary'>
                            Add appointment
                        </Button>
                    </FormControl>
                </form>
            </Paper>
        </>
     );
}
 
export { FormComponent };