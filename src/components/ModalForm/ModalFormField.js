import PropTypes from "prop-types";
import {Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";


const ModalFormField = ({control, label, name, type}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({field, fieldState: {error}}) => (
                <TextField
                    {...field}
                    id="outlined-basic"
                    label={label}
                    type={type}
                    variant="outlined"
                    error={!!error}
                    helperText={error?.message}
                />
            )}
        />
    );
};

ModalFormField.propTypes = {
    control: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default ModalFormField;