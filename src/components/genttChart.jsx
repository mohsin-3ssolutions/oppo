// import React, { useEffect } from 'react'
// import Chart from 'chart.js/auto';
// import 'chart.js/auto';
// import 'chartjs-adapter-date-fns';
// import 'chartjs-plugin-datalabels';

// export default function GenttChart() {
//     useEffect(() => {
//         // Your Chart.js initialization code
//         const data = {
//             labels: ['Mik Jason', 'Travor Smith', 'Shane Watsaon', 'Kevin Peterson', 'James Anderson', 'Ashley', 'Lee'],
//             datasets: [
//                 {
//                     label: 'My Chart',
//                     data: [
//                         ['2023-01-01', '2023-03-11'],
//                         ['2023-03-01', '2023-04-01'],
//                         ['2023-04-01', '2023-07-01'],
//                         ['2023-04-01', '2023-05-01'],
//                         ['2023-06-01', '2023-09-01'],
//                         ['2023-03-01', '2023-05-01'],
//                         ['2023-02-01', '2023-08-01'],
//                     ],
//                     backgroundColor: [
//                         'rgba(255, 26, 104, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)',
//                         'rgba(0, 0, 0, 1)',
//                     ],
//                     borderColor: [
//                         'rgba(255, 26, 104, 1)',
//                         'rgba(54, 162, 235, 1)',
//                         'rgba(255, 206, 86, 1)',
//                         'rgba(75, 192, 192, 1)',
//                         'rgba(153, 102, 255, 1)',
//                         'rgba(255, 159, 64, 1)',
//                         'rgba(0, 0, 0, 1)',
//                     ],
//                     // borderWidth: 1,
//                     barPercentage: 0.2
//                 },
//             ],
//         };

//         const config = {
//             type: 'bar',
//             data,
//             options: {
//                 indexAxis: 'y',
//                 scales: {
//                     x: {
//                         min: '2023-01-01',
//                         type: 'time',
//                         time: {
//                             unit: 'month',
//                         },
//                     },
//                     y: {
//                         // type: 'linear', // Explicitly specify the scale type
//                         beginAtZero: true,
//                     },
//                 },
//                 plugins: {
//                     datalabels: {
//                         color: 'black',
//                         formatter: (value, context) => {
//                             // Calculate percentage and format it
//                             const dataset = context.chart.data.datasets[context.datasetIndex];
//                             const startDate = dataset.data[context.dataIndex][0];
//                             const endDate = dataset.data[context.dataIndex][1];
//                             const totalDuration = new Date(endDate) - new Date(startDate);
//                             const barWidth = context.chart.width / context.chart.data.labels.length;
//                             const percentage = (barWidth / totalDuration) * 100;

//                             return percentage.toFixed(2) + '%';
//                         },
//                         anchor: 'end',
//                         align: 'end',
//                     },
//                 },
//             },
//         };

//         const myChart = new Chart(document.getElementById('myChart'), config);
//     }, []);

//     return (
//         // <div className="tab-pane fade gant_tab" id="contact" role="tabpanel" aria-labelledby="contact-tab">
//         <div className='container'>
//             <div className="color_bg">
//                 <div className="project_detail">
//                     <div>
//                         <div className="chartCard">
//                             <div className="chartBox">
//                                 <canvas id="myChart"></canvas>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';

export default function GanttChart() {
    useEffect(() => {
        const data = {
            labels: ['Mik Jason', 'Travor Smith', 'Shane Watsaon', 'Kevin Peterson', 'James Anderson', 'Ashley', 'Lee'],
            datasets: [
                {
                    label: 'My Chart',
                    data: [
                        {
                            x: '2023-03-01',
                            y: 'Mik Jason',
                            base: '2023-03-01',
                            height: '2023-03-11',
                            backgroundColor: 'rgba(255, 26, 104, 0.5)',
                            borderColor: 'rgba(255, 26, 104, 1)',
                            percentage: 20,
                        },

                        {
                            x: '2023-04-01',
                            y: 'Travor Smith',
                            base: '2023-04-01',
                            height: '2023-04-11',
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                        },
                        {
                            x: '2023-02-01',
                            y: 'Shane Watsaon',
                            base: '2023-02-01',
                            height: '2023-02-01',
                            backgroundColor: 'rgba(255, 206, 86, 0.5)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                        },
                        {
                            x: '2023-04-01',
                            y: 'Kevin Peterson',
                            base: '2023-04-01',
                            // height: '2023-06-01',
                            backgroundColor: 'rgba(75, 192, 192, 0.5)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                        },
                        {
                            x: '2023-06-01',
                            y: 'James Anderson',
                            base: '2023-06-01',
                            height: '2023-09-01',
                            backgroundColor: 'rgba(153, 102, 255, 0.5)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                        },
                        {
                            x: '2023-03-01',
                            y: 'Ashley',
                            base: '2023-03-01',
                            height: '2023-05-01',
                            backgroundColor: 'rgba(255, 159, 64, 0.5)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                        },
                        {
                            x: '2023-02-01',
                            y: 'Lee',
                            base: '2023-02-01',
                            height: '2023-08-01',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            borderColor: 'rgba(0, 0, 0, 1)',
                        },
                    ],
                    barPercentage: 0.8,
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
                        beginAtZero: true,
                    },
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const datasetLabel = context.dataset.label || '';
                                const label = context.parsed.x;
                                const value = context.parsed.y;
                                const percentage = context.dataset.data[context.dataIndex].percentage;

                                return `Percentage (${percentage}%)`;
                            },
                        },
                    },
                },
            },
        };

        const myChart = new Chart(document.getElementById('myChart'), config);
    }, []);

    return (
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
    );
}
