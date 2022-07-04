import Chart, { ChartData, ChartTypeRegistry } from 'chart.js/auto';

export class ChartHandler {
    element: string;
    type: keyof ChartTypeRegistry;
    data: ChartData;
    chart: Chart;

    constructor(element: string) {
        this.element = element;
    }

    render(type: keyof ChartTypeRegistry, data: ChartData) {
        this.type = type;
        this.data = data;

        this.chart = new Chart(this.element, {
            type: this.type,
            data: this.data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    update(data: ChartData) {
        this.data = data;

        this.chart.data.labels = data.labels;
        this.chart.data.datasets = data.datasets;

        this.chart.update();
    }
}
