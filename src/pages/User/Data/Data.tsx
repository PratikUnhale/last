import {
    SearchTwoTone,
    TuneTwoTone,
} from "@mui/icons-material";
import {
    Box,
    Button,
    InputAdornment,
    Stack,
    TextField,
} from "@mui/material";
import { Component, ReactNode } from "react";
import PaginatedTable from "../../../components/PaginatedTable/PaginatedTabel";


class Data extends Component {


    render(): ReactNode {
        return (
            <div>
                <Box overflow="hidden">
                    <Stack direction="row" spacing={4} padding={5}>
                        <TextField
                            fullWidth
                            size="medium"
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Search ....."
                            onChange={e => this.setState({ searchQuery: e.target.value })}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchTwoTone />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="outlined">
                            <TuneTwoTone />
                        </Button>
                    </Stack>

                    <Box pl={5} pr={5} pb={5}>
                        <PaginatedTable />
                    </Box>
                </Box>


            </div>
        );
    }
}

export default Data;

