import { createMuiTheme } from '@material-ui/core/styles';

const colors = {
    green: '#6D9B12',
    greenHover: "#77a814",
    blue: '#4285F4',
    blueHover: "#478dff",
    grey: '#E5E5E5'
};

const theme = createMuiTheme({
    props: {
        MuiInput: {
            disableUnderline: true,
        },
        MuiInputLabel: {
            shrink: "true"
        }
    },


    overrides: {
        MuiButton: {
            root: {
                borderRadius: "6px",
                textTransform: "none",
                color: '#ff0000', 
                fontSize: '16px'
            },
            containedPrimary: {
                backgroundColor: colors.green,
                "&:hover": {
                    backgroundColor: colors.greenHover
                }

            },
            containedSecondary: {
                backgroundColor: colors.blue,
                "&:hover": {
                    backgroundColor: colors.blueHover
                }
            }, 
            
        },
        MuiInput: {
            root: {
                backgroundColor: "#EFEFEF",
                borderRadius: "6px",
                fontSize: "14px",
                width: "550px",
                height: "50px", 
                color: "#000",
                paddingLeft: "10px",
                border: "2px solid #EFEFEF",
                top: "5px",
                "&$focused": {
                    border: "2px solid #77a814",
                },
                "&$invalid": {
                    border: "2px solid #FF0000"
                }
            }, 
            
        },
        MuiInputLabel: {
            root: {
                color: "#000",
                fontWeight: "bold",
                fontSize: "14px",
                "&$focused": {
                color: "#77a814",
                },
                "&$invalid": {
                    border: "2px solid #FF0000"
                }
            }
        }
    }}
)

export default theme;