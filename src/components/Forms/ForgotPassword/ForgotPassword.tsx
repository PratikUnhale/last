import axios from '../../../services/axios.instance'
import { Form, Formik } from 'formik'
import React from 'react'
import { forgotPasswordSchema } from '../../../utility'
import withRouter from '../../Hooks/withRouter/withRouter'
import MyTextfield from '../FormUI/InputMUI/InputMUI'
import { Box, Button, Container, CssBaseline, Typography, Snackbar, IconButton } from '@mui/material'
import {
    CloseTwoTone,
} from "@mui/icons-material";

class ForgotPassword extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            snackbarOpen: false,
            SnackbarMessage: "",
        }
    }


    initialValues = {
        email: "",
    }
    onSubmit = async (values: any) => {
        try {
            const response = await axios.put("auth/forgotPassword", values)
            console.log(response)
            this.toggleSnackbar(true, "Request sent successfully")
            setTimeout(() => this.props.router.navigate("/"), 2000)

        }
        catch (e: any) {
            // console.log(e)
            this.toggleSnackbar(true, e.response.data.error.message)
        }
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
            <>
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
                        <Typography component="h1" variant="h5">
                            Forgot Password
                        </Typography>
                        <Box sx={{ mt: 1 }}>

                            <Formik
                                initialValues={this.initialValues}
                                validationSchema={forgotPasswordSchema}
                                onSubmit={this.onSubmit}
                            >

                                <Form>
                                    <MyTextfield
                                        name="email"
                                        label="Email"
                                        id="email"
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
                                        Submit
                                    </Button>

                                </Form>

                            </Formik>
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
            </>
        )

    }

}

export default withRouter(ForgotPassword)


/*
 <Formik
                    initialValues={this.initialValues}
                    validationSchema={forgotPasswordSchema}
                    onSubmit={this.onSubmit}
                >
                    {
                        formik =>
                            <Form>

                                <FormikControl
                                    control="input"
                                    type="email"
                                    name="email"
                                    label="Email"
                                />
                                <button type="submit">Submit</button>

                            </Form>

                    }

                </Formik>

            </>
*/