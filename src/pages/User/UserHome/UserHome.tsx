import { ChevronLeftTwoTone, MenuTwoTone } from "@mui/icons-material";
import { Box, Divider, IconButton, List, Toolbar } from "@mui/material";
import { Component, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { backDrop } from '../../../theme/Theme'
import CustomAppBar from '../../../components/CustomAppBar/CustomAppBar';
import WrappedDrawer from "../../../components/WrappedDrawer/WrapperDrawer";
import { mainListItems } from './ListItems'
import { IDrawerState } from './UserHome.types'



class UserHome extends Component {

    state: IDrawerState = {
        drawerOpen: false,
    };

    toggleDrawer = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    };

    render(): ReactNode {
        return (
            <>
                <Box
                    sx={{
                        display: "flex",
                        height: "100vh",
                        backgroundColor: backDrop,
                    }}
                >
                    <CustomAppBar title={"User"} />

                    <WrappedDrawer variant="permanent" open={this.state.drawerOpen}>
                        <Toolbar variant="dense"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: this.state.drawerOpen ? "flex-end" : "center",
                                px: [1],
                            }}
                        >
                            <IconButton onClick={this.toggleDrawer}>
                                {this.state.drawerOpen ? (
                                    <ChevronLeftTwoTone />
                                ) : (
                                    <MenuTwoTone />
                                )}
                            </IconButton>
                        </Toolbar>

                        <Divider />

                        <List
                            sx={{
                                align: "center"
                            }}
                            component="nav">{mainListItems}</List>
                    </WrappedDrawer>

                    <Box component="main"
                        sx={{
                            flexGrow: 1,
                            overflow: 'auto',
                        }}><Toolbar variant="dense" />
                        <Outlet />
                    </Box>
                </Box>
            </>
        );
    }
}

export default UserHome;
