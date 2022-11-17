import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { feeder } from "../../test";
import { TablePagination } from "@mui/material";
import axios from "../../services/axios.instance";



/*
localhost:4000/series/filtered?filter={}&limit=1&pagenumber=1&sort={}
*/

class PaginatedTable extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            limit: 5,
            pagenumber: 1,
            rowData: []
        }


    }



    async componentDidMount() {
        const response = await axios.get(`series/filtered?filter={}&limit=${this.state.limit}&pagenumber=${this.state.pagenumber}&sort={}`);
        this.setState({ rowData: response.data.data })
    }
    async componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevState !== this.state) {
            const response = await axios.get(`series/filtered?filter={}&limit=${this.state.limit}&pagenumber=${this.state.pagenumber}&sort={}`);
            this.setState({ rowData: response.data.data })
        }
    }



    render(): React.ReactNode {

        const rows = this.state.rowData

        return (

            <Paper>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="right">Genre</TableCell>
                                <TableCell align="right">Rating</TableCell>
                                <TableCell align="right">Release Year</TableCell>
                                <TableCell align="right">Streaming On</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <>
                                {console.log(rows)}
                                {rows.map((row: any, i: number) => (
                                    <TableRow
                                        key={`${i}${row.name}`}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="right">{row.genre}</TableCell>
                                        <TableCell align="right">{row.rating}</TableCell>
                                        <TableCell align="right">{row.yearOfRelease}</TableCell>
                                        <TableCell align="right">{row.streamingOn}</TableCell>
                                    </TableRow>
                                ))}
                            </>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    rowsPerPageOptions={[5, 10, 15, 20, 25]}
                    count={24}
                    rowsPerPage={this.state.limit}
                    page={this.state.pagenumber}
                    onPageChange={(event: unknown, newPage: number) => { this.setState({ pagenumber: newPage }) }}
                    onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ limit: event.target.value }) }}

                // nextIconButtonProps={{ disabled: true }}
                // backIconButtonProps={{ disabled: true }}
                />
            </Paper>

        );
    }
}

export default PaginatedTable;
