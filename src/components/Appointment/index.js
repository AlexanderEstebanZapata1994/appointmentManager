import { AppointmentComponent } from "./Appointment";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    root: {
        margin: '10px',
        flexGrow: 1,
        maxWidth: 752,
        backgroundColor: theme.palette.background.paper
    }, 
    sicknessesText: {
        backgroundColor: '#ffcdcd',
        color: '#b10000'
    }
    
})

export const Appointment = withStyles (styles) (AppointmentComponent)