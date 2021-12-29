import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Grid } from '@mui/material'
import axios from 'axios';
import { createData, renderCustomizedLabel } from '../../../../utilities/dataAnalize';
const OverView = () => {
    const [data, setData] = useState([]);
    const [monthOrders, setMonthORders] = useState([]);
    const [monthOrdersInfo, setMonthOrdersInfo] = useState([]);
    useEffect(() => {
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
    const COLORS = ['#24f1ff', 'red', '#494949'];

    return (
        <div>
            <Grid container >
                <Grid item sm={12}>
                    <div style={{ width: '100%', height: 300 }}>
                        <ResponsiveContainer>
                            <LineChart data={monthOrders}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="total_orders" stroke="#8884d8" />
                                <Line type="monotone" dataKey="total_items" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>

                <Grid item sm={12} md={6}>
                    <div className=' ' style={{ width: '100%', height: "300px" }}>
                        <ResponsiveContainer >
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
                </Grid>
                <Grid item sm={12} md={6}>
                    uygdsafffff
                </Grid>
            </Grid>


        </div>
    );
};

export default OverView;