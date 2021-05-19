import { Box, ExpansionPanel } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useField } from 'formik'

const Field = (props) => {
    const {label, placeholder, error, autoFocus} = props;
    return (
        <Box>
            <TextField error={error} autoFocus={autoFocus} label={label} placeholder={placeholder}/>
        </Box>
    )
}

export default Field;