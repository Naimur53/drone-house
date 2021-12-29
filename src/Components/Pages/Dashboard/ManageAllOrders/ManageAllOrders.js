import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllOrders = (props) => {
    const [allOrders, setAllOrders] = useState([]);
    const [action, setAction] = useState(0);
    useEffect(() => {
        axios.get('https://enigmatic-headland-64217.herokuapp.com/orders')
            .then(res => setAllOrders(res.data));
    }, [action]);
    const handleDelete = id => {
        if (window.confirm("Are you sure to delete this item")) {
            axios.delete(`https://enigmatic-headland-64217.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        setAction(action + 1);
                    }
                })
        }

    }
    const handleUpdate = id => {
        axios.put(`https://enigmatic-headland-64217.herokuapp.com/orders/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    setAction(action + 1);
                }
            })
    }
    if (props.preview) {
        return (
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item name</TableCell>
                            <TableCell >Name of customer</TableCell>
                            <TableCell >Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allOrders.slice(0, 5).map(data => <TableRow
                                key={data._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {data.name}
                                </TableCell>
                                <TableCell>{data.userName}</TableCell>
                                <TableCell>{data.status}</TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Item name</TableCell>
                            <TableCell >Name of customer</TableCell>
                            <TableCell >Address</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allOrders.map(data => <TableRow
                                key={data._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {data.name}
                                </TableCell>
                                <TableCell>{data.userName}</TableCell>
                                <TableCell>{data.address}</TableCell>
                                <TableCell>{data.status}, <span>{data?.isPaid.amount ? 'Paid' : 'UnPaid'}</span></TableCell>
                                <TableCell>
                                    <Button sx={{ mr: 1 }} onClick={() => handleDelete(data._id)} variant='outlined' size='small' color='error'>Delete</Button>
                                    {
                                        data.status === 'Pending' && <Button onClick={() => handleUpdate(data._id)} size='small' variant='outlined' color='success'>update Shipped</Button>
                                    }

                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;