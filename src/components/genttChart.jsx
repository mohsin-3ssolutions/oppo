import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import moment from 'moment/moment';

export default function GanttChart() {
    const [projects, setProjects] = useState([]);
    const [projectLabel, setProjectLabel] = useState([]);
    const [selectedTimeUnit, setSelectedTimeUnit] = useState('quarter'); // Default value

    const handleTimeUnitChange = (event) => {
        setSelectedTimeUnit(event.target.value);
    };
    useEffect(() => {
        const fetchData = async () => {

            const currentYear = moment().format('YYYY');
            const startDate = `${currentYear}-01-01`;
            const endDate = `${currentYear}-12-31`;

            try {
                let url = process.env.REACT_APP_BASE_URL;
                const token = localStorage.getItem('authToken');
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                };

                // const response = await fetch(
                //     url +
                //     `/gantt_chart?start_date=${startDate}&end_date=${endDate}`,
                //     requestOptions
                // );

                const response = await fetch(
                    url +
                    `/gantt_chart?start_date=2022-10-25&end_date=2026-10-26`,
                    requestOptions
                );

                const data = await response.json();
                setProjects(data.data)
                const projectNames = data.data.map(project => project.assign_to.company_name);
                setProjectLabel(projectNames)

                const transformedData = data.data.map(project => [
                    project.project_start_date,
                    project.project_end_date
                ]);

                const taskCompleted = data.data.map(project => '100')

                const actualTaskCompleted = data.data.map(project => Number(project.status).toFixed(0));

                console.log(actualTaskCompleted)

                const currentDate = moment();

                const actualDate = data.data.map(project => [
                    project.project_start_date, // Format start date
                    moment(project.project_end_date) > currentDate
                        ? currentDate.format('YYYY-MM-DD') // If end date is greater than current date, use current date
                        : moment(project.project_end_date).format('YYYY-MM-DD') // Format end date
                ]);

                console.log(actualDate, transformedData);

                initializeChart(projectNames, transformedData, actualDate, taskCompleted, actualTaskCompleted);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [selectedTimeUnit]);


    const initializeChart = (labels, transformedData, actualDate, taskCompleted, actualTaskCompleted) => {

        const existingChart = Chart.getChart('myChart');
        if (existingChart) {
            existingChart.destroy();
        }

        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Project Time',
                    data: transformedData,
                    taskCompleted: taskCompleted,
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    borderColor:
                        'rgba(0, 0, 0, 1)',
                    borderWidth: 1,
                    // barPercentage: 0.8
                    borderSkipped: false
                },
                {
                    label: 'Actual Time',
                    data: actualDate,
                    taskCompleted: actualTaskCompleted,
                    backgroundColor: 'rgba(255, 26, 104, 0.2)',
                    borderColor:
                        'rgba(255, 26, 104, 1)',
                    borderWidth: 1,
                    // barPercentage: 0.8
                    borderSkipped: false
                },
            ],
        };

        const currentYear = moment().format('YYYY');
        const startDate = `${currentYear}-01-01`;
        const endDate = `${currentYear}-12-31`;

        const config = {
            type: 'bar',
            data,
            options: {
                plugins: {
                    tooltip: {
                        // enabled: false
                        callbacks: {
                            label: (context) => {
                                console.log(context)
                                if (context.dataset.label == 'Project Time') {
                                    return `Project Time : ${context.raw[0]} - ${context.raw[1]}`
                                } else {
                                    return `Actual Time: ${context.raw[0]} - ${context.raw[1]}`
                                }
                            }
                        }
                    },
                    datalabels: {
                        formatter: (value, context) => {
                            const taskPercentage = context.dataset.taskCompleted[context.dataIndex]
                            return `${taskPercentage}%`
                        }
                    }
                },
                indexAxis: 'y',
                scales: {
                    x: {
                        // min: startDate,
                        // max: endDate,
                        offset: false,
                        min: '2023-01-01',
                        max: '2024-12-12',
                        type: 'time',
                        time: {
                            unit: selectedTimeUnit,
                        },
                        ticks: {
                            align: 'start'
                        },
                        grid: {
                            borderDash: [5, 5]
                        },
                        position: 'top'
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
            plugins: [ChartDataLabels],
        };

        const myChart = new Chart(document.getElementById('myChart'), config);
    };

    return (
        <div className='container'>
            <div className="color_bg">
                <div className="project_detail">
                    <div>
                        <div className="chartCard">
                            <div className="chartBox">
                                <div className="form-group w-25">
                                    <label htmlFor="timeUnit">Select Time Unit: </label>
                                    <select
                                        id="timeUnit"
                                        className="form-control"
                                        value={selectedTimeUnit}
                                        onChange={handleTimeUnitChange}
                                    >
                                        <option value="quarter">Quarter</option>
                                        <option value="month">Month</option>
                                    </select>
                                </div>
                                <canvas id="myChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
