import ApexCharts from "apexcharts";

var options = {
  series: [
    {
      name: "Curreent clients",
      data: [12, 30, 39, 38, 13, 22, 10, 40, 12, 5, 13, 23],
    },
    {
      name: "Subscribers",
      data: [24, 38, 70, 98, 41, 23, 50, 17, 49, 20, 30, 29],
    },
    {
      name: "New cutomers",
      data: [38, 71, 84, 70, 30, 65, 10, 90, 38, 43, 41, 67],
    },
  ],
  chart: {
    type: "bar",
    height: "100%",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "7px",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        colors: "#AEB9E1",
      },
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tickAmout: 5,
    labels: {
      formatter: function (val) {
        const ticks = {0: 0, 50: 20, 100: 40, 150: 80, 200: 100}
        return ticks[val] !== undefined ? `${ticks[val]}K` : "";
      },
      style: {
        colors: "#AEB9E1",
      },
    },
  },
  tooltip: {
    theme: "dark",
    y: {
      formatter: function (val) {
        return "$ " + val + " K";
      },
    },
  },
  legend: {
    show: true,
    position: "top",
    offsetY: -35,
    fontSize: "10px",
    markers: {
      size: 3,
      strokeWidth: 0,
      shape: "circle",
    },
    labels: {
      colors: "#AEB9E1",
    },
  },
  colors: ["#CB3CFF", "#0E43FB", "#00C2FF"],
};

var chart = new ApexCharts(document.querySelector("#barChart"), options);
chart.render();
