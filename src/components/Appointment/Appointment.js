import React from 'react';
import PropTypes from 'prop-types';

//We import the MUI Components
import { List, ListItem, ListItemText, IconButton, Box, ListItemSecondaryAction, Typography } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const AppointmentComponent = ({appointment, classes, handleDeleteAction}) => {
    const { petName, ownerPetName, date, time, sicknesses }= appointment;
    return ( 
        <Box className={classes.root}>
            <List dense={false}>
                <ListItem>
                  <ListItemText
                    key="1"
                    primary={`Pet name: ${ petName ? petName : '' }`}
                    secondary={`Owner: ${ ownerPetName ? ownerPetName :'' }`}
                  />
                  <ListItemText
                    key="2"
                    primary={`Date: ${ date ? date : '' } `}
                    secondary={`Time: ${ time ? time : ''} `}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteAction(appointment.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                  
                </ListItem>
                {sicknesses && <Typography className={classes.sicknessesText}>{`Sicknesses: ${sicknesses}`}</Typography>}
            </List>
        </Box>
    );
}

AppointmentComponent.propTypes = {
    appointment: PropTypes.object.isRequired,
    handleDeleteAction: PropTypes.func.isRequired
}
 
export { AppointmentComponent };