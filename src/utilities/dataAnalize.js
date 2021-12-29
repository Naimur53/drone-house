
export const createData = (data) => {
    let lineData = [];
    let pieData = [];
    const dt = new Date();
    const month = dt.getMonth() + 1;
    const year = dt.getFullYear();
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        const oneDayData = data.filter(element => `${month}/${i}/${year}` === element.date)
        let totalItems = 0;
        oneDayData.forEach(element => {
            totalItems += element.quantity;
        });

        lineData.push({
            total_items: totalItems,
            total_orders: oneDayData.length,
            date: `${month}/${i}/${year}`
        })
    }
    // get pie data 
    let paid = 0;
    let unpaid = 0;
    let pending = 0;

    data.forEach(element => {
        if (element.isPaid === 'unPaid') {
            unpaid++;
        }
        else if (element.isPaid.amount) {
            paid++;

        }
        if (element.status === "Pending") {
            pending++;
        }
    });
    pieData = [
        { name: 'Paid', value: paid },
        { name: 'UnPaid', value: unpaid },
        { name: 'pending', value: pending }
    ]
    return { lineData, pieData };

}


// custom pie chart
const RADIAN = Math.PI / 180;
export const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

