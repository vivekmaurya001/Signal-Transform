import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function FrequencyDomainChart({ freqData }) {
  const frequencies = freqData.map(d => d.frequency)
  const amplitudes = freqData.map(d => d.magnitude)

  const data = {
    labels: frequencies,
    datasets: [
      {
        label: 'Magnitude',
        data: amplitudes,
        backgroundColor: 'rgba(153, 102, 255, 0.6)'
      }
    ]
  }

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Frequency (Hz)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amplitude'
        }
      }
    }
  }

  return <Bar data={data} options={options} />
}

export default FrequencyDomainChart
