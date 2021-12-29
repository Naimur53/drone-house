import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Grid } from '@mui/material'
import axios from 'axios';
import { createData, renderCustomizedLabel } from '../../../../utilities/dataAnalize';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
const OverView = () => {
    const [data, setData] = useState([]);
    const [monthOrders, setMonthORders] = useState([]);
    const [monthOrdersInfo, setMonthOrdersInfo] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get('https://enigmatic-headland-64217.herokuapp.com/orders')
            .then(res => setData(res.data));
    }, []);
    useEffect(() => {
        if (data.length) {
            const { lineData, pieData } = createData(data)
            setMonthORders(lineData);
            setMonthOrdersInfo(pieData);
        }
    }, [data])
    const COLORS = ['#91125d', '#663399cc', '#494949'];
    return (
        <div>
            <Grid className='justify-center ' container spacing={2}>
                <Grid item xs={12} md={12}>
                    <div className="shadow-lg pb-5 rounded-lg">
                        <div className='mb-10'  >
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={monthOrders}
                                >
                                    <CartesianGrid strokeDasharray="5 5" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend height={1} />
                                    <Line type="monotone" dataKey="total_orders" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="total_items" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={6}>
                    <h2 className='text-center text-lg font-poppins '>Orders Information</h2>
                    <div className="shadow-lg pb-5 rounded-lg  ">
                        <div className='mb-10'  >
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart >
                                    <Pie
                                        data={monthOrdersInfo}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={120}
                                        fill="#8884d8"
                                        dataKey="value"
                                        isAnimationActive={false}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Legend verticalAlign="bottom" height={10} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2 className='text-center text-lg font-poppins '>Recent Orders</h2>
                    <div className='shadow-lg'>
                        <ManageAllOrders preview></ManageAllOrders>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default OverView;