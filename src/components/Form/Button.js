import React from 'react'; 
import { Box } from '@material-ui/core';
import { useFormikContext } from 'formik';
import MainButton from '../Button'

const ButtonWrapper = ({
    children,
    ...otherProps
}) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        text: "Sign Up", 
        color: "primary",
        width: "large",
        size: "small",
    }


    return (
        <Box onClick={() => handleSubmit()}>
            <MainButton {...configButton}/>
        </Box>
    )
}

export default ButtonWrapper;