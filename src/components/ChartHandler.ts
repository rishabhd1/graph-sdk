import Chart from 'chart.js/auto';
import { ChartTypes } from '../models/ChartHandler';

export class ChartHandler {
    type: ChartTypes;
    data: any;

    constructor(type: ChartTypes, data: any) {
        this.type = type;
        this.data = data;
    }

    render() {
        new Chart(this.type, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }
}
