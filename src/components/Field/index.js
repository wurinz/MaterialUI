import { Box } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const Field = (props) => {
    const {label, placeholder, error, autoFocus} = props;
    return (
        <Box>
            <TextField error={error} autoFocus={autoFocus} label={label} placeholder={placeholder}/>
        </Box>
    )
}

export default Field;