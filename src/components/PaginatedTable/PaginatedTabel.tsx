import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import axios from "../../services/axios.instance";


class PaginatedTable extends React.Component<any, any>{

    constructor(props: any) {
        super(props);

        this.state = {
            limit: 5,
            pagenumber: 1,
            rowData: [],
            isNext: true,
            isPrev: false
        }


    }

    async componentDidMount() {
        const response = await axios.get(`series/filtered?filter={}&limit=${this.state.limit}&pagenumber=${this.state.pagenumber}&sort={}`)
        this.setState({
            rowData: response.data.data.data,
            isNext: response.data.data.next == 'true' ? true : false,
            isPrev: response.data.data.prev == 'true' ? true : false
        })
    }


    async componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (prevState.limit !== this.state.limit) {
            const response = await axios.get(`series/filtered?filter={}&limit=${this.state.limit}&pagenumber=${this.state.pagenumber}&sort={}`)

            this.setState({
                rowData: response.data.data.data,
                isNext: response.data.data.next == 'true' ? true : false,
                isPrev: response.data.data.prev == 'true' ? true : false
            })
        } else if (prevState.pagenumber !== this.state.pagenumber) {
            const response = await axios.get(`series/filtered?filter={}&limit=${this.state.limit}&pagenumber=${this.state.pagenumber}&sort={}`)

            this.setState({
                rowData: response.data.data.data,
                isNext: response.data.data.next == 'true' ? true : false,
                isPrev: response.data.data.prev == 'true' ? true : false
            })
        }
    }



    render(): React.ReactNode {
        console.log(this.state)
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

                                {this.state.rowData?.map((row: any, i: number) => (
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
                    page={this.state.pagenumber - 1}
                    onPageChange={(event: unknown, newPage: number) => { this.setState({ pagenumber: newPage + 1 }) }}
                    onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) => { this.setState({ limit: event.target.value }) }}

                    nextIconButtonProps={{ disabled: !this.state.isNext }}
                    backIconButtonProps={{ disabled: !this.state.isPrev }}
                />
            </Paper>

        );
    }
}

export default PaginatedTable;
