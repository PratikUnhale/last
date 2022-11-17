import { AccountCircleTwoTone } from "@mui/icons-material";
import { AppBar, Button, IconButton, Menu, Stack, TextField, Toolbar, Typography } from "@mui/material";
import { Component, ReactNode } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CustomModal from '../CustomModal/CustomModal';
import axios from '../../services/axios.instance'
import { LoginContext } from "../Context/Login/LoginProvider";
import withRouter from '../Hooks/withRouter/withRouter'


class CustomAppBar extends Component<any> {

    static contextType = LoginContext

    context: React.ContextType<typeof LoginContext>

    state = {
        anchor: null,
        isProfileModalVisible: false
    };

    openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        this.setState({ anchor: event.currentTarget });
    };

    closeMenu = () => {
        this.setState({ anchor: null });
    };
    handleLogout = () => {
        this.context.dispatch({ type: "LOGOUT", data: { isLoggedIn: false } })
        this.props.router.navigate("")
    }

    render(): ReactNode {
        return (
            <AppBar>
                <Toolbar variant="dense">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography fontSize={16} component="div" sx={{ flexGrow: 1 }}>
                        {this.props.title}
                    </Typography>

                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.openMenu}
                            color="inherit"
                        >
                            <AccountCircleTwoTone />
                        </IconButton>
                        <Menu
                            anchorEl={this.state.anchor}
                            open={Boolean(this.state.anchor)}
                            onClose={this.closeMenu}
                        >
                            <MenuItem onClick={() => { this.setState({ isProfileModalVisible: true }) }}>Change Password</MenuItem>
                            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
                <CustomModal
                    open={this.state.isProfileModalVisible}
                    title={"Change Password"}
                    closeCallback={() => { this.setState({ isProfileModalVisible: false }) }}
                    content={<ChangePasswordForm closeModalCallback={() => { this.setState({ isProfileModalVisible: false }) }} />}
                />

            </AppBar>
        );
    }
}

type ChangePasswordFormProps = {
    closeModalCallback: Function;
}

class ChangePasswordForm extends Component<ChangePasswordFormProps>{



    state = {
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    }

    handleSubmit = async () => {
        this.props.closeModalCallback();
        let values = {
            password: this.state.currentPassword,
            newpassword: this.state.newPassword,
            retypeNewPassword: this.state.confirmNewPassword,
        }
        try {
            const response = await axios.put("auth/resetPassword", values)

            console.log(response)

            console.log(values)
        }
        catch (e) {
            console.log(e)
        }
    }

    render(): ReactNode {
        return (
            <Stack spacing={2} pt={2}>
                <TextField
                    label="Enter Current"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={this.state.currentPassword}
                    onChange={(e) => { this.setState({ currentPassword: e.target.value }) }}
                />
                <TextField
                    label="Enter New Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    value={this.state.newPassword}
                    onChange={(e) => { this.setState({ newPassword: e.target.value }) }}
                />
                <TextField
                    label="Confirm New Password "
                    type="password"
                    variant="outlined"
                    size="small"
                    value={this.state.confirmNewPassword}
                    onChange={(e) => { this.setState({ confirmNewPassword: e.target.value }) }}
                />
                <Button variant="contained" onClick={this.handleSubmit}>
                    Change
                </Button>
            </Stack>
        );
    }
}

export default withRouter(CustomAppBar);
