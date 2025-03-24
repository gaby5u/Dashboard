import ApexCharts from "apexcharts";

var options = {
  series: [100, 70, 55],
  chart: {
    type: "radialBar",
    // width: "100%",
    height: "300px",
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      track: {
        strokeWidth: "97%",
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          offsetY: -2,
          fontSize: "22px",
        },
      },
    },
  },
  labels: ["Sell", "Distribute", "Return"],
    legend: {
      show: true,
      position: "bottom",
      offsetY: -120,
      markers: {
        size: 3,
        strokeWidth: 0,
      },
      labels: {
        colors: "#AEB9E1",
      },
    },
  colors: ["#00C2FF", "#0E43FB", "#CB3CFF"],
};

var chart = new ApexCharts(document.querySelector("#semiCircleChart"), options);
chart.render();
