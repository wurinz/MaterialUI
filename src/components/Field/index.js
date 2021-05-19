import { Box, ExpansionPanel } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const Field = (props) => {
    const {label, placeholder} = props;
    return (
        <Box>
            <TextField label={label} placeholder={placeholder}/>
        </Box>
    )
}

export default Field;