import { FormComponent } from "./Form";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
    root : {
        padding: theme.spacing(4)
    },
    createTitle: {
        marginTop: theme.spacing(2),
        textAlign: 'center'
    },
    input: {
        margin: theme.spacing(1)
    }
})

export const Form = withStyles (styles) (FormComponent) 