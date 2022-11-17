import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
    AssessmentTwoTone,
} from "@mui/icons-material";
import TableViewIcon from '@mui/icons-material/TableView';
import { Link } from "react-router-dom";
import style from "./UserHome.module.scss";

export const mainListItems = (
    <>
        <Link to="/" className={style['nav-link']}>
            <ListItemButton sx={{ alignContent: "center" }}>
                <ListItemIcon>
                    <AssessmentTwoTone />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItemButton>
        </Link>

        <Link to="/data" className={style['nav-link']}>
            <ListItemButton>
                <ListItemIcon>
                    <TableViewIcon />
                </ListItemIcon>
                <ListItemText primary="Field Workers" />
            </ListItemButton>
        </Link>
    </>
);
