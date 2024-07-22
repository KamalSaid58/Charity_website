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
      labels: ["2021", "2022", "2023"],
      datasets: [
        {
          label: "Unsuccessful Donation",
          //backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          //borderColor: documentStyle.getPropertyValue('--blue-500'),
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
          data: [203, 405, 802],
        },
        {
          label: "Successful Donation",
          //backgroundColor: documentStyle.getPropertyValue('--pink-500'),
          //borderColor: documentStyle.getPropertyValue('--pink-500'),
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
          data: [802, 2059, 5092],
        },
      ],
    };
    const options = {
      maintainAspectRatio: false,
      aspectRatio: 0.9,
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
      <Chart
        type="bar"
        data={chartData}
        options={chartOptions}
        style={{ scale: 50 }}
      />
    </div>
  );
}
