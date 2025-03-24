import ApexCharts from "apexcharts";

var options = {
  series: [50, 30, 20],
  chart: {
    height: 209,
    width: 400,
    type: "radialBar",
    
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      track: {
        show: false,
      },
      dataLabels: {
        name: {
          fontSize: "22px",
        },
        value: {
          fontSize: "16px",
        },
        total: {
          show: true,
          label: "",
          formatter: function (w) {
            return 249;
          },
        },
      },
    },
  },
  labels: ["Social", "Organic", "Direct"],
  legend: {
    show: true,
    position: "bottom",
    verticalAlign: "center",
  },
  // markers: {
  //   size: 2,
  //   strokeWidth: 0,
  // },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
  colors: ["#0E43FB", "#CB3CFF", "#00C2FF"],
};

var chart = new ApexCharts(document.querySelector("#radialChart"), options);
chart.render();
