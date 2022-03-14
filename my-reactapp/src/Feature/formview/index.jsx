import React from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const Formview = ({ props }) => {

    return (
        props.length > 0 && (
            <div>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {props.map(p => (
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.age}</td>
                        </tr>
                    ))}
                </tbody>


            </div>
        )

    )

}
export default Formview