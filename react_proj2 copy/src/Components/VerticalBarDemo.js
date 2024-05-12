import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function VerticalBarDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");
    const data = {
      labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "Unsuccessful Donation",
          borderColor: "rgba(54, 162, 235, 1)",
          data: [0, 2, 4, 6, 8, 10, 12],
        },
        {
          label: "Successful Donation",
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          data: [1, 3, 5, 7, 9, 13, 15],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            fontColor: textColor,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Year",
            color: textColorSecondary,
            font: {
              weight: "bold",
            },
          },
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          title: {
            display: true,
            text: "Count",
            color: textColorSecondary,
            font: {
              weight: "bold",
            },
          },
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <div className="card">
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
}
