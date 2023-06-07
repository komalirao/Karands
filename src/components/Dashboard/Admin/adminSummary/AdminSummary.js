import React from "react";
import "./AdminSummary.css";
//import { Chart } from "chart.js";

export default function AdminSummary() {
 
 {/* const  number_format = (number, decimals, dec_point, thousands_sep) =>
  {
   number = (number + '').replace(',', '').replace(' ', '');
    const n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function(n, prec) {
        const k = Math.pow(10, prec);
        return '' + Math.round(n * k) / k;
      };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }
  
  const ctx = document.getElementsByClassName("myBarChart");
  const myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{
        label: "Revenue",
        backgroundColor: "#4e73df",
        hoverBackgroundColor: "#2e59d9",
        borderColor: "#4e73df",
        data: [4215, 5312, 6251, 7841, 9821, 14984],
      }],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 25,
          top: 25,
          bottom: 0
        }
      },
      scales: {
        xAxes: [{
          time: {
            unit: 'month'
          },
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            maxTicksLimit: 6
          },
          maxBarThickness: 25,
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 15000,
            maxTicksLimit: 5,
            padding: 10,
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
              return '$' + number_format(value);
            }
          },
          gridLines: {
            color: "rgb(234, 236, 244)",
            zeroLineColor: "rgb(234, 236, 244)",
            drawBorder: false,
            borderDash: [2],
            zeroLineBorderDash: [2]
          }
        }],
      },
      legend: {
        display: false
      },
      tooltips: {
        titleMarginBottom: 10,
        titleFontColor: '#6e707e',
        titleFontSize: 14,
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: '#dddfeb',
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10,
        callbacks: {
          label: function(tooltipItem, chart) {
            var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
            return datasetLabel + ': $' + number_format(tooltipItem.yLabel);
          }
        }
      },
    }
  });
*/}

  return (
    <div>
      <div className="container-fluid">
        {/* <!-- Page Heading -->*/}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">details</h1>
        </div>

        <div className="row">
          {/*<!-- Earnings (Monthly) cards Example -->*/}
          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-dark shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      No of IU
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      12,000
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/*<!-- No. of Users Card Example -->*/}

          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      No of Users
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      4,000
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Earnings (Annual) Card Example -->*/}
          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      No of ICHP
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      2,1500
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/*<!-- Pending Requests Card Example -->*/}

          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      No of Online
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      1200
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>

            {/* <!-- Spent Amount Example -->*/}

          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      spent amount
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      1200
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>

            {/* <!-- Balance amount Card Example -->*/}

          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Balance
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      15000/-
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>

            {/* <!-- Earnings Card Example -->*/}

          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Earnings
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      100000/-
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>

            {/* <!-- Tasks Card Example -->*/}

          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-info shadow h-100">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase">
                      Tasks
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col">
                        <div className="h5 mb-0 text-gray-800">Accepted</div>
                        <div className="h6">100</div>
                      </div>
                      <div className="col">
                        <div className="h5 mb-0 text-gray-800">pending</div>
                        <div className="h6">60</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* <!-- company pages Card Example -->*/}

            <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                     Company Pages
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      50
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Job posted Card Example -->*/}

          <div className="col-xl-3 col-md-3 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                     Job Posted
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                     28
                    </div>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Content Row -->*/}
       
       {/* <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
           <!-- Card Header - Dropdown -->
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Donut Chart</h6>
            </div>
            <!-- Card Body -->
            <div className="card-body">
                <div className="chart-pie pt-4">
                    <canvas className="myPieChart"></canvas>
                </div>
                <hr/>
                Styling for the donut chart can be found in the
                <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
        </div>
  </div>*/}

  {/*  <div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Bar Chart</h6>
    </div>
    <div className="card-body">
        <div className="chart-bar">
            <canvas className="myBarChart"></canvas>
        </div>
        <hr/>
        Styling for the bar chart can be found in the
        <code>/js/demo/chart-bar-demo.js</code> file.
    </div>
</div>

*/}
      </div>
    </div>
  );
}
