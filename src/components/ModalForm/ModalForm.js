import {useState, useContext} from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import {ReactComponent as CloseIcon} from "../../assets/icons/close-icon.svg";
import {modalStyle, modalTitleStyle, modalDescriptionStyle, modalCloseButtonStyle} from "./styles";
import AuthContext from "../../contexts/auth/AuthContext";
import ModalFormField from "./ModalFormField";

const schema = yup.object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});

export default function BasicModal() {

    const {handleSubmit, control, reset} = useForm({resolver: yupResolver(schema)});
    const {isLoggedIn, logoutUser, loginUser, userInfo} = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onSubmit = (data) => {
        loginUser(data);
        setOpen(false);
        reset();
    };

    return (<div>
        {!isLoggedIn ? <Button onClick={handleOpen} variant="contained" color="primary">Login</Button> :
            <Button onClick={logoutUser} variant="contained" color="primary">Logout</Button>}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Button sx={modalCloseButtonStyle} onClick={handleClose} startIcon={<CloseIcon/>}></Button>
                <Typography id="modal-modal-title" variant="h3" component="h3" sx={modalTitleStyle}>
                    Sign up for Tripma
                </Typography>
                <Typography id="modal-modal-description" variant="subtitle1" sx={modalDescriptionStyle}>
                    Tripma is totally free to use. Sign up using your email address or phone number below to get
                    started.
                </Typography>
                <form name="Login form" onSubmit={handleSubmit(onSubmit)}>
                    <Box display="flex" flexDirection="column" gap="12px">
                        <ModalFormField control={control} name="username" label="Username" type="text"/>
                        <ModalFormField control={control} name="password" label="Password" type="password"/>
                        <Button variant="contained" color="primary" fullWidth type="submit">Login</Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    </div>);
}