import React from 'react';

import { Box, Typography } from "@material-ui/core";
import { Appointment } from "../Appointment";
import PropTypes from 'prop-types';

const AppointmentListComponent = ({appointmentList, updateAppointmentListState, classes}) => {

    const handleDeleteAction = appointmentId => {
        const newAppointmentList = appointmentList.filter(appointment => appointment.id !== appointmentId)
        updateAppointmentListState(newAppointmentList)
    }
    return ( 
        <Box>
            {appointmentList.length === 0 
            ? <Typography component="h1">There is not appointments yet</Typography> 
            : <Typography component="h1">Admin</Typography>}
            
            {appointmentList.map(appointment => (
                    <Box>
                        <Appointment key={appointment.id} appointment={appointment} handleDeleteAction={ handleDeleteAction } />
                    </Box>
                )) 
            }
        </Box> );
}
 

AppointmentListComponent.propTypes = {
    appointmentList: PropTypes.array,
    /**
     * @ignore 
     */
    classes: PropTypes.object.isRequired
}
export { AppointmentListComponent }