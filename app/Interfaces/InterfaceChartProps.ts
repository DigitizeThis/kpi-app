import { ChartData, ChartOptions } from 'chart.js';

export interface LineChartProps {
    title?: string;
    options?: ChartOptions<'line'>;
    data: ChartData<'line', number[]>;
}

export interface PieChartProps {
    title?: string;
    abstract?: string | number;
    data: ChartData<'pie', number[]>;
    options?: ChartOptions<'pie'>;
}

export interface DoughnutChartProps {
    title?: string;
    abstract?: string | number;
    data: ChartData<'doughnut', number[]>;
}

export interface BarChartProps {
    labels: string[];
    options?: ChartOptions<'bar'>;
    datasets: {
        label: string;
        data: number[];
        backgroundColor: string;
    }[];
}
