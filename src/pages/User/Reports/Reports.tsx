import {
    Box,
    Card,
    Grid,
    Stack,
    TextField,
    // Toolbar,
    Typography,
} from "@mui/material";
import {
    DatePicker,
    // DesktopDatePicker,
    LocalizationProvider,
} from "@mui/x-date-pickers";
import { Component, ReactNode } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
// import { primaryColor, primaryLight } from "../../../assets/Theme";
import { primaryLight } from "../../../theme/Theme";
// import { bills } from "../../../test/testdata";


const data = [
    { month: "Sept", uv: 400, pv: 2400, amt: 2400 },
    { month: "Oct", uv: 450, pv: 2400, amt: 2400 },
    { month: "Nov", uv: 450, pv: 2400, amt: 2400 },
    { month: "Dec", uv: 600, pv: 2400, amt: 2400 },
    { month: "Jan", uv: 330, pv: 2400, amt: 2400 },
];

const Reports = () => {
    return (
        <div>
            <Box sx={{ padding: 5 }}>
                <Grid container spacing={5}>
                    <Grid item>
                        <Card>
                            <RevenueChart />
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card>
                            <Stack sx={{ padding: 2 }} spacing={2}>
                                <Typography>No. of Faulty Meters / Time</Typography>
                                <LineChart width={500} height={300} data={data}>
                                    <Line type="monotone" dataKey="uv" stroke={primaryLight} />
                                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                </LineChart>
                            </Stack>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

// type RevenueChartState = {
//     fromDate: string;
//     toDate: string;
// };

class RevenueChart extends Component {
    state = {
        fromDate: null,
        toDate: null,
    };

    render(): ReactNode {
        return (
            <Stack sx={{ padding: 2 }} spacing={2} alignItems="center">
                <Typography>Revenue / Time</Typography>

                <LineChart width={500} height={300}>
                    <Line type="monotone" dataKey="total" stroke={primaryLight} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                </LineChart>

                <Stack direction="row" spacing={2}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="From"
                            value={this.state.fromDate}
                            onChange={(newValue) => {
                                this.setState({ fromDate: newValue });
                            }}
                            renderInput={(params) => (
                                <TextField sx={{ maxWidth: 100 }} size="small" {...params} />
                            )}
                        />

                        <DatePicker
                            label="To"
                            value={this.state.toDate}
                            onChange={(newValue) => {
                                this.setState({ toDate: newValue });
                            }}
                            renderInput={(params) => (
                                <TextField sx={{ maxWidth: 100 }} size="small" {...params} />
                            )}
                        />
                    </LocalizationProvider>

                    <TextField
                        type="number"
                        label="Min Bill Amt."
                        variant="outlined"
                        size="small"
                        sx={{ maxWidth: 150 }}
                    />
                </Stack>
            </Stack>
        );
    }
}

export default Reports;
