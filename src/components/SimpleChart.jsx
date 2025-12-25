import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function SimpleChart({ chartData }) {
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: "Career stages (grouped)",
        data: chartData.values,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
  };

  return (
    <div>
      <Bar data={data} options={options} />
      <p className="small">{chartData.note}</p>
    </div>
  );
}
