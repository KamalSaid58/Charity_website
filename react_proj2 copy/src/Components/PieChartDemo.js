
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PieChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Africa', 'Asia', 'Europe','North America','South America','Australia','Antarctica'],
            datasets: [
                {
                    data: [10, 20, 30, 40, 50, 60,70],
                    backgroundColor: [
                        '#007bff', // Blue
                        '#ffc107', // Yellow
                        '#28a745', // Green
                        '#dc3545', // Red
                        '#6f42c1', // Purple
                        '#20c997', // Teal
                        '#fd7e14'  // Orange
                    ],
                    hoverBackgroundColor: [
                        '#0056b3', // Darker Blue
                        '#d39e00', // Darker Yellow
                        '#218838', // Darker Green
                        '#c82333', // Darker Red
                        '#5a3e96', // Darker Purple
                        '#17a2b8', // Darker Teal
                        '#da1e2c'  // Darker Orange
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
        