import React, { useEffect } from 'react'
import Chart from 'chart.js/auto';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';

export default function GenttChart() {
    useEffect(() => {
        // Your Chart.js initialization code
        const data = {
            labels: ['Mik Jason', 'Travor Smith', 'Shane Watsaon', 'Kevin Peterson', 'James Anderson', 'Ashley', 'Lee'],
            datasets: [
                {
                    label: 'My Chart',
                    data: [
                        ['2023-01-01', '2023-03-11', '2023-06-01', '2023-08-11'],
                        ['2023-03-01', '2023-04-01'],
                        ['2023-04-01', '2023-07-01'],
                        ['2023-04-01', '2023-05-01'],
                        ['2023-06-01', '2023-09-01'],
                        ['2023-03-01', '2023-05-01'],
                        ['2023-02-01', '2023-08-01'],
                    ],
                    backgroundColor: [
                        'rgba(255, 26, 104, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(0, 0, 0, 1)',
                    ],
                    borderColor: [
                        'rgba(255, 26, 104, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(0, 0, 0, 1)',
                    ],
                    // borderWidth: 1,
                    barPercentage: 0.2
                },
            ],
        };

        const config = {
            type: 'bar',
            data,
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        min: '2023-01-01',
                        type: 'time',
                        time: {
                            unit: 'month',
                        },
                    },
                    y: {
                        // type: 'linear', // Explicitly specify the scale type
                        beginAtZero: true,
                    },
                },
            },
        };

        const myChart = new Chart(document.getElementById('myChart'), config);
    }, []);

    return (
        // <div className="tab-pane fade gant_tab" id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <div className='container'>
            <div className="color_bg">
                <div className="project_detail">
                    <div>
                        <div className="chartCard">
                            <div className="chartBox">
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
