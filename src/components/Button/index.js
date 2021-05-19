import Button from '@material-ui/core/Button';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BluetoothSearchingIcon from '@material-ui/icons/BluetoothSearching';



const MainButton = (props) => {
    const { width, color, text, icon } = props;

    if(width === "large"){
        return(
            <Button
                style={{width: "270px", height: "50px"}}
                variant="contained"
                color={color}
            >
            { icon === "google" ? <AutorenewIcon /> :  null}
            { icon === "facebook" ? <BluetoothSearchingIcon /> : null }
            {text}</Button>
        )
    } else if (width === "medium"){
        return (
            <Button            
            style={{width: "133px", height: "50px"}}
            variant="contained"
            color={color}
            >{text}</Button>
        )
    } else if (width === "small"){
        return (
            <Button
            style={{width: "120px", height: "40px"}}
            variant="contained"
            color={color}
            >{text}</Button>
        )
    } else {
        return (
            <Button
            style={{width: "133px", height: "50px"}}
            variant="contained"
            color={color}
            >{text}</Button>
        )
    }
}

export default MainButton