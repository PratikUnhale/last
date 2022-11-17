import { Form, Formik } from 'formik'
import React from 'react'
import { forgotPasswordLinkSchema } from '../../../utility'
import withRouter from '../../Hooks/withRouter/withRouter'
import axios from '../../../services/axios.instance'
import MyTextfield from '../FormUI/InputMUI/InputMUI'
import { Box, Button, Container, CssBaseline, Typography } from '@mui/material'


class ForgotPasswordLink extends React.Component<any, any> {
    initialValues = {
        password: "",
        confirm_password: ""
    }

    onSubmit = async (values: any) => {
        const token = this.props.router.params.id
        localStorage.setItem("token", token)
        const { password } = values
        const response = await axios.put("auth/setNewPassword", { "password": password })
        console.log(response)
    }
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
                    <Typography component="h1" variant="h5">
                        Enter your new password
                    </Typography>
                    <Box sx={{ mt: 1 }}>

                        <Formik
                            initialValues={this.initialValues}
                            validationSchema={forgotPasswordLinkSchema}
                            onSubmit={this.onSubmit}
                        >

                            <Form>
                                <MyTextfield
                                    name="password"
                                    label="Password"
                                    id="password"
                                    margin="normal"
                                    required
                                    fullWidth
                                    autoFocus
                                />
                                <MyTextfield
                                    name="confirm_password"
                                    label="Confirm Password"
                                    id="confirm_password"
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

            </Container>

        )
    }
}

export default withRouter(ForgotPasswordLink)