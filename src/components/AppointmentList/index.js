import { AppointmentListComponent } from "./AppointmentList";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    root: {
        color: 'blue'
    }
})

export const AppointmentList = withStyles (styles) (AppointmentListComponent)