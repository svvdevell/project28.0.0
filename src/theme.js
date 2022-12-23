import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#605DEC"
        },
    },
    typography: {
        fontFamily: "'Nunito Sans', sans-serif",
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: "18px",
                    minWidth: "200px",
                    height: "48px",
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "16px",
                    lineHeight: "22px",
                    padding: "13px 20px"
                }
            }
        }
    }
});

export default theme;