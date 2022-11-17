import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyTextfield from '../FormUI/InputMUI/InputMUI';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom'
import { loginSchema } from '../../../utility';
import axios from '../../../services/axios.instance'
import { LoginContext } from '../../Context/Login/LoginProvider';
import withRouter from '../../Hooks/withRouter/withRouter'
import { IconButton, Snackbar } from '@mui/material';
import { CloseTwoTone } from '@mui/icons-material';


class Login extends React.Component<any, any>{

    static contextType = LoginContext

    context: React.ContextType<typeof LoginContext>
    constructor(props: any) {
        super(props);
        this.state = {
            snackbarOpen: false,
            SnackbarMessage: "",
        }
    }

    initialValues = {
        email: "",
        password: ""

    }

    onSubmit = async (values: any) => {
        try {
            const response = await axios.post("auth/login", values)
            console.log(response)
            const token = response.data.data.token
            localStorage.setItem("token", token)
            this.context.dispatch({ type: "LOGIN_SUCCESSFULL", data: { isLoggedIn: true } })

        }
        catch (e: any) {
            // console.log(e.response.data.error.message)
            this.toggleSnackbar(true, e.response.data.error.message)
        }
    }

    handleGoogle = () => {
        this.props.router.navigate('auth/googleLogin')
    }

    toggleSnackbar = (show: boolean, message: string) => {
        this.setState({
            snackbarOpen: show,
            SnackbarMessage: message,
        });
    };
    snackbarClose = (event: React.SyntheticEvent | Event, reason?: string) => {

        this.toggleSnackbar(false, "");
    };


    render() {
        return (

            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Formik
                            initialValues={this.initialValues}
                            validationSchema={loginSchema}
                            onSubmit={this.onSubmit}
                        >

                            <Form>
                                <MyTextfield
                                    name="email"
                                    label="email"
                                    id="email"
                                    margin="normal"
                                    required
                                    fullWidth
                                    autoFocus
                                />
                                <MyTextfield
                                    name="password"
                                    label="password"
                                    id="password"
                                    margin="normal"
                                    required
                                    fullWidth
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    login
                                </Button>
                            </Form>


                        </Formik>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2 }}
                            onClick={this.handleGoogle}
                        >
                            Continue with google
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link to="forgotPassword">
                                    Forgot Password?
                                </Link>

                            </Grid>

                        </Grid>
                    </Box>
                </Box>

                <Snackbar
                    open={this.state.snackbarOpen}
                    autoHideDuration={2000}
                    onClose={this.snackbarClose}
                    message={this.state.SnackbarMessage}
                    action={
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={this.snackbarClose}
                        >
                            <CloseTwoTone fontSize="small" />
                        </IconButton>
                    }
                />

            </Container>

        )
    }
}

export default withRouter(Login)