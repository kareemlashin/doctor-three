  
      var randomizeArray = function(arg) {
        var array = arg.slice();
        var currentIndex = array.length,
          temporaryValue,
          randomIndex;
    
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
    
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        };
    
        return array;
      };
    
      // data for the sparklines that appear below header area
      var sparklineData = [
        47,
        45,
        54,
        38,
        56,
        24,
        65,
        31,
        37,
        39,
        62,
        51,
        35,
        41,
        35,
        27,
        93,
        53,
        61,
        27,
        54,
        43,
        19,
        46
      ];
    
      var spark1 = {
        chart: {
          type: "area",
          height: 150,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: "straight"
        },
        fill: {
          opacity: 0.3
        },
        series: [
          {
            data: randomizeArray(sparklineData)
          }
        ],
        yaxis: {
          min: 0
        },
        colors: ["#00d5a5"],
        title: {
          text: "$424,652",
          offsetX: 0,
          style: {
            fontSize: "24px",
            cssClass: "apexcharts-yaxis-title"
          }
        },
        subtitle: {
          text: "Sales",
          offsetX: 0,
          style: {
            fontSize: "14px",
            cssClass: "apexcharts-yaxis-title"
          }
        }
      };
          
      var spark1 = new ApexCharts(document.querySelector("#spark1"), spark1);
      spark1.render();