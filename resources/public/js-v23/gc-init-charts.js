/* *********************************************************
 *
 * Author: Markus Wrobel 2014 - all rights reserved
 *
 * *********************************************************
 */


// ***********************************************************
//                                                           *
// GGR                                                       *
//                                                           *
// ***********************************************************

function initGGRCharts () {


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // GGR: ghg emissions chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_ggr_ghg_emissions = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            renderTo: 'container_ggr_1',
            marginRight:20
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
  	    text: translate('Global GHG emissions profile')
        },
        subtitle: {
            style: {
                font: 'normal 9px "Trebuchet MS", Verdana, sans-serif'
            },
         text: ''
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          line: {
            marker: {
                enabled: false
            }
          }
        },
        xAxis: {
          min: 1990,
          //max: 2100,
          tickInterval: 5,

          labels: {
            formatter: function() {
               if (this.value == '1990') return this.value;
               if (this.value == '2010') return this.value;
               if (this.value == '2050') return this.value;
               if (this.value == '2100') return this.value;
               return '';
             }
          }
        },

        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('GtCO2e'),
            margin: 5
          },
          min: -25,
          max: 125, //300,
          tickInterval: 25
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('GtCO2e') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
          name: translate('Total annual GHG emissions'),
          data: [ [1990, 5], [1995, 5], [2000, 5], [2005, 5], [2010, 5], [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], 
                  [2040, 10], [2045, 10], [2050, 10] ],
          color: '#bdbdbd',
          marker: { radius: 2 }
         }, 
         {
          name: translate('Total annual GHG emissions (trajectory)'),
          data: [ [2050, 10],  [2055, 10], [2060, 10], [2065, 10], [2070, 10], [2075, 10], [2080, 10], [2085, 10], [2090, 10], [2095, 10], [2100, 10]  ],
          color: '#dddddd',
          dashStyle: 'ShortDot',
          marker: { radius: 2 }
         },
         {
          name: translate('Total annual GHG emissions without GGR'),
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          color: '#3288bd',
          type: 'line',
          dashStyle: 'ShortDot',
          marker: { radius: 2 }
         }
         
        ]

    }, function(chart) {
        
       // ------------------------------------------------------------------------
       // add vertical separator line between observed and projected time series
       // ------------------------------------------------------------------------
       var x = chart.xAxis[0].toPixels(2010);
       var y  = chart.yAxis[0].toPixels(125);

       var y1  = chart.yAxis[0].toPixels(0);
       var x1 = chart.xAxis[0].toPixels(1990);
       var x2 = chart.xAxis[0].toPixels(2100);

       chart.renderer.path(['M', x1, y1, 'L', x2, y1])
         .attr({'stroke-width': 1, stroke: 'grey' }).add();


       chart.renderer.path(['M', x, y, 'L', x, 280])
         .attr({'stroke-width': 1, stroke: 'silver', dashstyle: 'dash' }).add();


       chart.renderer.text(translate('observed'), chart.xAxis[0].toPixels(1990)+3, 60)
         .css({ color: '#C0C0C0', fontSize: '9px'}).add();

       chart.renderer.text(translate('projected'), chart.xAxis[0].toPixels(2015), 60)
         .css({ color: '#C0C0C0', fontSize: '9px' }).add();


/*
       chart.renderer.text(translate('observed'), x-45, 60)
         .css({ color: '#C0C0C0', fontSize: '9px'}).add();

       chart.renderer.text(translate('projected'), x+12, 60)
         .css({ color: '#C0C0C0', fontSize: '9px' }).add();
*/
    });
} // end initGGRCharts ()


// ***********************************************************
//                                                           *
// Costs                                                     *
//                                                           *
// ***********************************************************

function initCostOverviewCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // Cost section: Cost range chart (overview)
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_costs_context = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_costs_in_context',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: translate('Total energy system costs')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: { marker: { enabled: false } }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('index (2011 = 100)'),
            margin: 5
          },
          min: 0,
          max: 400, 
          tickInterval: 50
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          valueSuffix: '',
          positioner: function () {
            return { x: 15, y: 30 };
          }
/*
          useHTML: true,
          headerFormat: '{point.key}' + ' ($bn)<br>' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
*/  
       },

        series: [
         {
          name: translate('GDP'),
          data: [ [2011, 4], [2015, 4], [2020, 4], [2025, 4], [2030, 4], [2035, 4], [2040, 4], [2045, 4], [2050, 4] ],
          color: '#ffffff', // '#c51b8a', // '#f03b20',
          dashStyle: 'ShortDot',
          zIndex: 3,
          marker: { radius: 2 }
         }, {
          name: translate('User pathway (central)'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#d95f0e',
          zIndex: 3,
          marker: { radius: 2 }
         }, {
          name: translate('User pathway (low/high)'),
          data: [ [2011, 2,4], [2015, 2,4], [2020, 2,4], [2025, 2,4], [2030, 2,4], [2035, 2,4], [2040, 2,4], [2045, 2,4], [2050, 2,4] ],
          color:  '#ffff33', // '#ffff00', // '#b30000', // '#74a9cf',
          type: 'arearange',
          fillOpacity: 0.7,
          tooltip: { formatter: function () { return false; }},
          lineWidth: 0
         }, {
          name: translate('Counterfact. pathway (central)'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#0570b0', // '#253494', // '#f781bf', // '#f0027f', //'#984ea3', // '#92c5de', // '#2b8cbe',
          zIndex: 3,
          marker: { radius: 2 }
         }, {
          name: translate('Counterfact. pathway (low/high)'),
          data: [ [2011, 2,4], [2015, 2,4], [2020, 2,4], [2025, 2,4], [2030, 2,4], [2035, 2,4], [2040, 2,4], [2045, 2,4], [2050, 2,4] ],
          color: '#74a9cf', // '#2c7fb8', // '#2b83ba', //'#fec44f',
          type: 'arearange',
          fillOpacity: 0.7,
          tooltip: { formatter: function () { return false; }},
          lineWidth: 0
         }        
        ]
    });

}


function createCostIndexChart (containerID, title) {

    var chart = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           renderTo: containerID,
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate(title)
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: { marker: { enabled: false } }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('index (2011 = 100)'),
            margin: 5
          },
          min: 0,
          max: 500, 
          tickInterval: 50
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          valueSuffix: '',
          positioner: function () {
            return { x: 15, y: 30 };
          }
/*
          useHTML: true,
          headerFormat: '{point.key}' + ' ($bn)<br>' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
*/  
        },

        series: [
         {
          name: translate('User pway (central)'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#d95f0e',
          zIndex: 3,
          marker: { radius: 2 }
         }, {
          name: translate('User pway (low/high)'),
          data: [ [2011, 2,4], [2015, 2,4], [2020, 2,4], [2025, 2,4], [2030, 2,4], [2035, 2,4], [2040, 2,4], [2045, 2,4], [2050, 2,4] ],
          type: 'arearange',
          color:  '#ffff33',
          fillOpacity: 0.7,
          tooltip: { formatter: function () { return false; }},
          lineWidth: 0
         }, {
          name: translate('Counterf. pway (central)'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#253494', 
          zIndex: 3,
          marker: { radius: 2 }
         }, {
          name: translate('Counterf. pway (low/high)'),
          data: [ [2011, 2,4], [2015, 2,4], [2020, 2,4], [2025, 2,4], [2030, 2,4], [2035, 2,4], [2040, 2,4], [2045, 2,4], [2050, 2,4] ],
          type: 'arearange',
          color: '#2c7fb8',
          fillOpacity: 0.7,

          tooltip: { formatter: function () { return false; }},
          lineWidth: 0
         }        
        ]
    });

  return chart;
}

function createCostIndexChart2015 (containerID, title) {

    var chart = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           renderTo: containerID,
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: title
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: { marker: { enabled: false } }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2015') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: 'index (2011 = 100)',
            margin: 5
          },
          min: 0,
          max: 500, 
          tickInterval: 50
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          valueSuffix: '',
          positioner: function () {
            return { x: 15, y: 30 };
          }
/*
          useHTML: true,
          headerFormat: '{point.key}' + ' ($bn)<br>' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
*/  
        },

        series: [
         {
          name: 'User pway (central)',
          data: [  [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          // color: '#2b8cbe',
          color: '#d95f0e',
          zIndex: 3,
          marker: { radius: 2 }
         }, {
          name: 'User pway (low/high)',
          data: [  [2015, 2,4], [2020, 2,4], [2025, 2,4], [2030, 2,4], [2035, 2,4], [2040, 2,4], [2045, 2,4], [2050, 2,4] ],
          type: 'arearange',
          // color: '#74a9cf',
          // fillOpacity: 0.4,
          color:  '#ffff33',
          fillOpacity: 0.7,
          tooltip: { formatter: function () { return false; }},
          lineWidth: 0
         }, {
          name: 'Counterf. pway (central)',
          data: [  [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          // color: '#d95f0e',
          color: '#f781bf', 
          zIndex: 3,
          marker: { radius: 2 }
         }, {
          name: 'Counterf. pway (low/high)',
          data: [  [2015, 2,4], [2020, 2,4], [2025, 2,4], [2030, 2,4], [2035, 2,4], [2040, 2,4], [2045, 2,4], [2050, 2,4] ],
          type: 'arearange',
          // color: '#fec44f',
          // fillOpacity: 0.2,
          color: '#2c7fb8',
          fillOpacity: 0.7,
          tooltip: { formatter: function () { return false; }},
          lineWidth: 0
         }        
        ]
    });

  return chart;
}




function initCostCharts () {


    

    chart_costs_split_capital     = createCostIndexChart ('container_costs_capital',   translate('Energy system costs') + '<br>' + translate('(capital)'));
    chart_costs_split_operational = createCostIndexChart ('container_costs_operating', translate('Energy system costs') + '<br>' + translate('(operating)'));
    chart_costs_split_fuel        = createCostIndexChart ('container_costs_fuel',      translate('Energy system costs') + '<br>' + translate('(fuel)'));

    chart_costs_split_bar = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_costs_bar',
            type: 'column'
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
            text: translate('Energy system costs')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        xAxis: {
          categories: [translate('2011 global avg'), translate('2050 user pathway'), translate('2050 counter-fact.')]
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: { fontSize: '9px', fontWeight: 'normal' },
            text: '%',
            margin: 5
          },
          min: 0,
          max: 100,
          tickInterval: 10
        },
        tooltip: {
          shared: true,
          // valueSuffix: ' calories',
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          // positioner: function () { return { x: 15, y: 30 }; },
          useHTML: true,
          headerFormat: '{point.key}' + ' (%)' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        plotOptions: {
          column: { stacking: 'normal' }
        },
        series: [
        {
          name: translate('Capital'),
          color: '#ff7f00',
          data: [null, null, null]
        }, {
          name: translate('Operating'),
          color: '#a6cee3',
          data: [null, null, null]
        }, {
          name: translate('Fuel'),
          color: '#1f78b4',
          data: [null, null, null]
        }
      ]
    });




} // end initCostCharts ()


function initCostBySectorCharts () {

    chart_costs_split_electricity   = createCostIndexChart ('container_costs_electricity',   translate('Electricity energy system') + '<br>' + translate('costs (op. & capital)'));
    chart_costs_split_transport     = createCostIndexChart ('container_costs_transport',     translate('Transport energy system') + '<br>' + translate('costs (op. & capital)'));
    chart_costs_split_manufacturing = createCostIndexChart ('container_costs_manufacturing', translate('Manufact. energy system') + '<br>' + translate('costs (op. & capital)'));
    chart_costs_split_buildings     = createCostIndexChart ('container_costs_buildings',     translate('Buildings energy system') + '<br>' + translate('costs (op. & capital)'));

}

/*

function initCostBySectorChartsOLDSTUFF () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // Cost section: Cost by sector chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_costs_compare = new Highcharts.Chart({
    
        credits: { enabled: false },
        chart: {
           renderTo: 'container_costs_1',
           marginRight:10,
           marginLeft:80,
          type: 'bar'
        },
        title: {
          style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
          text: 'Difference in sector costs' // 'Incremental energy system costs compared to counterfactual'
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: { marker: { enabled: false } }
        },
        xAxis: {
          categories: ['total costs', '', 
                       "a", "b", "c", "d"],
          lineWidth: 0,
          minorGridLineWidth: 0,
          lineColor: 'transparent',
          labels: {
            // enabled: false
            style: {
   	      fontSize: '9px'
       	    }
          },
          minorTickLength: 0,
          tickLength: 0,
           title: {
            style: {
   	      fontSize: '9px'
       	    },
            text: null
          }
        },
        yAxis: {
          tickInterval: 5000,
          min: -20000,
          max:  20000,
          title: {
            text: '$bn',
            style: {
   	      fontSize: '9px'
       	    },
            align: 'high'
          }
        },
        tooltip: {
         shared: true,
          style: {
 	    fontSize: '9px',
      	    padding: '8px'
      	  },

          positioner: function () {
            return { x: 15, y: 30 };
          },

          // valueSuffix: ' $tn',
          useHTML: true,
          headerFormat: '{point.key}' + ' ($bn)' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          // '<td style="text-align: right">{point.y}</td></tr>' + {this.points[0].y} + " " + {this.points[1].y,
          footerFormat: '</table>'
        },
        plotOptions: {
          bar: {
            grouping: false,
            shadow: false
          }
        },
        series: [
           {
             name: 'Point cost range',
             color:  '#c7e9b4',
             borderColor: '#303030', 
             data: [0, 0, 0, 0, 0, 0]
           }
          ]
         });
    
} // end initCostCharts ()

*/


// ***********************************************************
//                                                           *
// Lifestyle - HOMES: TEMP. AND SIZE                         *
//                                                           *
// ***********************************************************

function initHomeTempAndSizeCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Homes / Home Temp. and size section: avg home temp in summer
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_home_temp_summer = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_lifestyle_home_temp_summer',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Avg urban home temperature - summer')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('°C'),
            margin: 5
          },
          min: 0,
          max: 30, 
          tickInterval: 5
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
        useHTML: true,
        headerFormat: '{point.key}' + ' (' + translate('°C') + ')' + '<table>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                     '<td style="text-align: right">{point.y}</td></tr>',
        footerFormat: '</table>'
       },
        series: [
        {
          name: translate('Avg urban home temp.'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#4daf4a',
          marker: { radius: 2 }
        }        
        ]
    });
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Homes / Home Temp. and size section: avg home temp in winter
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_home_temp_winter = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_lifestyle_home_temp_winter',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Avg urban home temperature - winter')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('°C'),
            margin: 5
          },
          min: 0,
          max: 30, 
          tickInterval: 5
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
        useHTML: true,
        headerFormat: '{point.key}' + ' (' + translate('°C') + ')' + '<table>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                     '<td style="text-align: right">{point.y}</td></tr>',
        footerFormat: '</table>'
       },
        series: [
        {
          name: translate('Avg urban home temp.'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#4daf4a',
          marker: { radius: 2 }
        }        
        ]
    });
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Homes / Home Temp. and size section: avg size
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_home_size = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_lifestyle_home_size',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Avg household size (m2)')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('m2'),
            margin: 5
          },
          min: 0,
          max: 110, 
          tickInterval: 10
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
        useHTML: true,
        headerFormat: '{point.key}' + ' (' + translate('m2') + ')' + '<table>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                     '<td style="text-align: right">{point.y}</td></tr>',
        footerFormat: '</table>'
       },
        series: [
        {
          name: translate('Avg household size'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#ffffb3',
          marker: { radius: 2 }
        }        
        ]
    });
}

// ***********************************************************
//                                                           *
// Lifestyle - HOMES: APPLIANCES                             *
//                                                           *
// ***********************************************************

function initHomeAppliancesCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Homes / Appliances section: number of appliances per household
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
  chart_number_of_appliances = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_lifestyle_number_of_appliances',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Appliances per household')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: ['2011', '2050'] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: translate('number'),
        margin: 5
      },
      min: 0,
      max: 11, 
      tickInterval: 1
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      // valueSuffix: ' EJ',
      useHTML: true,
      headerFormat: '{point.key}' + '' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: translate('Urban'),
      color: '#8dd3c7',
      data: [3.3, 3.3]
    }, {
      name: translate('Rural'),
      color: '#ffffb3',
      data: [3.3, 3.3]
    }
    ]
  });


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Homes / Appliances section: number of lightbulbs per household
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_number_of_lightbulbs = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_lifestyle_number_of_lightbulbs',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Number of lightbulbs per household')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('number'),
            margin: 5
          },
          min: 0,
          max: 40, 
          tickInterval: 5
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + '<table>',
          pointFormat:  '<tr><td style="color: {series.color}">{series.name}: </td>' +
                        '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
        {
          name: translate('Urban'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#8dd3c7',
          marker: { radius: 2 }
        }, {
          name: translate('Rural'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#ffffb3',
          marker: { radius: 2 }
        }        
        ]
    });


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Homes / Appliances section: energy consumption per household
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_energy_consumption_per_household = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_lifestyle_energy_consumption',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Energy consumption per household')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('kwh'),
            margin: 5
          },
          min: 0,
          max: 12000, 
          tickInterval: 1000
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('kwh') + ')' + '<table>',
          pointFormat:  '<tr><td style="color: {series.color}">{series.name}: </td>' +
                        '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
        {
          name: translate('Urban'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#8dd3c7',
          marker: { radius: 2 }
        }, {
          name: translate('Rural'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#ffffb3',
          marker: { radius: 2 }
        }        
        ]
    });
}



// ***********************************************************
//                                                           *
// Lifestyle - TRAVEL: TRAVEL PER PERSON                     *
//                                                           *
// ***********************************************************

function initTravelSectionCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Travel/ Travel per person section: distance travelled by car per person
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_distance_travelled_by_car = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_lifestyle_distance_travelled_by_car',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Distance travelled by car per person')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('km'),
            margin: 5
          },
          min: 0,
          max: 8000, 
          tickInterval: 1000
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('km') + ')' + '<table>',
          pointFormat:  '<tr><td style="color: {series.color}">{series.name}: </td>' +
                        '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
        {
          name: translate('Average'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#4daf4a',
          marker: { radius: 2 }
        }        
        ]
    });

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Travel/ Travel per person section: % of km travelled by car
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_percent_km_travelled_by_car = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_lifestyle_percent_km_travelled_by_car',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('% of km travelled by car')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('%'),
            margin: 5
          },
          min: 0,
          max: 70, 
          tickInterval: 10
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('%') + ')' + '<table>',
          pointFormat:  '<tr><td style="color: {series.color}">{series.name}: </td>' +
                        '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
        {
          name: translate('Average'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#4daf4a',
          marker: { radius: 2 }
        }        
        ]
    });

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Homes / Travel section: cars per person
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_cars_per_person = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_lifestyle_cars_per_person',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Cars per person')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('number'),
            margin: 5
          },
          min: 0,
          max: 0.5, 
          tickInterval: 0.05
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + '<table>',
          pointFormat:  '<tr><td style="color: {series.color}">{series.name}: </td>' +
                        '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
        {
          name: translate('Average'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#4daf4a',
          marker: { radius: 2 }
        }        
        ]
    });
}








function initTravelPerPersonCharts () {

  chart_lifestyle_1 = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_lifestyle_chart_1',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Passenger km/head')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: ['2011', '2050'] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: translate('km'),
        margin: 5
      },
      min: 0,
      max: 12000, 
      tickInterval: 3000
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      // valueSuffix: ' EJ',
      useHTML: true,
      headerFormat: '{point.key}' + ' (' + translate('km/head') + ')' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: translate('Urban'),
      color: '#8dd3c7',
      data: [50, 50]
    }, {
      name: translate('Rural'),
      color: '#ffffb3',
      data: [50, 50]
    }
    ]
  });


  chart_lifestyle_2 = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_lifestyle_chart_2',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Passenger km using cars')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: ['2011', '2050'] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: translate('%'),
        margin: 5
      },
      min: 0,
      max: 100, 
      tickInterval: 25
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      // valueSuffix: ' EJ',
      useHTML: true,
      headerFormat: '{point.key}' + ' (' + translate('km') + ')' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: translate('Urban'),
      color: '#8dd3c7',
      data: [50, 50]
    }, {
      name: translate('Rural'),
      color: '#ffffb3',
      data: [50, 50]
    }
    ]
  });

}


function initHomeTemperatureAndSizeCharts () {

  chart_lifestyle_3 = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_lifestyle_chart_3',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Building size')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: ['2011', '2050'] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: translate('m2'),
        margin: 5
      },
      min: 0,
      max: 120, 
      tickInterval: 30
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      useHTML: true,
      headerFormat: '{point.key}' + ' (' + translate('m2') + ')' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: translate('Urban'),
      color: '#8dd3c7',
      data: [50, 50]
    }, {
      name: translate('Rural'),
      color: '#ffffb3',
      data: [50, 50]
    }
    ]
  });

  chart_lifestyle_5 = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_lifestyle_chart_5',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Building temperature warm months')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: ['2011', '2050'] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: translate('deg C'),
        margin: 5
      },
      min: 0,
      max: 30, 
      tickInterval: 10
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      useHTML: true,
      headerFormat: '{point.key}' + ' (' + translate('deg C') + ')' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: translate('Urban'),
      color: '#8dd3c7',
      data: [50, 50]
    }, {
      name: translate('Rural'),
      color: '#ffffb3',
      data: [50, 50]
    }
    ]
  });


  chart_lifestyle_6 = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_lifestyle_chart_6',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Building temperature cold months')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: ['2011', '2050'] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: translate('deg C'),
        margin: 5
      },
      min: 0,
      max: 30, 
      tickInterval: 10
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      useHTML: true,
      headerFormat: '{point.key}' + ' (' + translate('deg C') + ')' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: translate('Urban'),
      color: '#8dd3c7',
      data: [50, 50]
    }, {
      name: translate('Rural'),
      color: '#ffffb3',
      data: [50, 50]
    }
    ]
  });

}


function initAppliancesCharts () {

  chart_lifestyle_4 = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_lifestyle_chart_4',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Appliances per household')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: ['2011', '2050'] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: translate('number'),
        margin: 5
      },
      min: 0,
      max: 10, 
      tickInterval: 2
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      // valueSuffix: ' EJ',
      useHTML: true,
      headerFormat: '{point.key}' + '' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: translate('Urban'),
      color: '#8dd3c7',
      data: [50, 50]
    }, {
      name: translate('Rural'),
      color: '#ffffb3',
      data: [50, 50]
    }
    ]
  });



  chart_lifestyle_7 = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_lifestyle_chart_7',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Population')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: ['2011', '2050'] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: translate('%'),
        margin: 5
      },
      min: 0,
      max: 100, 
      tickInterval: 25
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      // valueSuffix: ' EJ',
      useHTML: true,
      headerFormat: '{point.key}' + ' (%)' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: translate('Urban'),
      color: '#8dd3c7',
      data: [50, 50]
    }, {
      name: translate('Rural'),
      color: '#ffffb3',
      data: [50, 50]
    }
    ]
  });
}



// ***********************************************************
//                                                           *
// Dashboard                                                 *
//                                                           *
// ***********************************************************


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // dashboard: init emission chart modus default
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------


function initEmissionChartDefault (container) {

    chart_dashboard_ghg_emissions = new Highcharts.Chart({

        //loading: { labelStyle: { color: 'white' }, style: {backgroundColor: 'grey'} },

        credits: {
           enabled: false
        },
        chart: {
            renderTo: container, // 'container_dashboard_ghg_emissions',
            type: 'area',
            marginRight:20
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
  	    text: translate ('Global GHG emissions profile')
        },
        subtitle: {
            style: {
                font: 'normal 9px "Trebuchet MS", Verdana, sans-serif'
            },
         text: ''
        },
        legend: {
          enabled: false
        },
        exporting: { enabled: false },
        plotOptions: {
            scatter: {
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '3.010 GT cumulative CO2e<br>exceeded by: {point.x}'
                }
            },
          line: {
            lineWidth: 2,
            marker: {
                enabled: false
            }
          },
          area: {
           stacking: 'normal',
            lineWidth: 0,
            marker: {
              enabled: false
            }
          }
        },
        xAxis: {
          min: 1990,
          max: 2100,
          tickInterval: 5,

          labels: {
            formatter: function() {
               if (this.value == '1990') return this.value;
               if (this.value == '2010') return this.value;
               if (this.value == '2050') return this.value;
               if (this.value == '2100') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('GtCO2e'),
            margin: 5
          },
          min: -25, // -50,
          max: 125, //300,
          tickInterval: 25
        },
        tooltip: {

          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          // valueSuffix: ' GtCO2e',
          positioner: function () {
            return { x: 170, y: 50 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate ('GtCO2e') + ')<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [ {
          name: 'dummy data',
          stacking: null,
          data: [ [1990,  5], [1995,  5], [2000,  5], [2005,  5], [2010,  5], [2011, 10], [2015, 10], [2020, 10], [2025, 10], 
                  [2030, 10], [2035, 10], [2040, 10], [2045, 10],  [2050, 10] ],
          color: '#bdbdbd'
         } ]
    }, 
   function(chart) {
     
       var ren = this.renderer;
       // ------------------------------------------------------------------------
       // add vertical separator line between observed and projected time series
       // ------------------------------------------------------------------------
       var point = chart.series[0].data[5];

        // var x = point.plotX + chart.plotLeft - point.plotW; 
        
       var y1  = chart.yAxis[0].toPixels(0);
       var x1 = chart.xAxis[0].toPixels(1990);
       var x2 = chart.xAxis[0].toPixels(2100);

       chart.renderer.path(['M', x1, y1, 'L', x2, y1])
         .attr({'stroke-width': 1, stroke: 'silver'}).add();

       var x = chart.xAxis[0].toPixels(2010);
       var y = chart.yAxis[0].toPixels(125);

       ren.path(['M', x, y, 'L', x, 280])
         .attr({'stroke-width': 1, stroke: 'silver', dashstyle: 'dash'}).add();


       ren.text(translate ('observed'), chart.xAxis[0].toPixels(1990)+3, 60)
         .css({color: '#C0C0C0', fontSize: '9px'}).add();

       

       ren.text(translate ('projected'), chart.xAxis[0].toPixels(2015), 60)
         .css({color: '#C0C0C0', fontSize: '9px'}).add();


/*
       var x1 = chart.xAxis[0].toPixels(2010) - 45-4;

       ren.text(translate ('observed'), x1, 60)
         .css({color: '#C0C0C0', fontSize: '9px'}).add();

       x1 = chart.xAxis[0].toPixels(2010) + 10;

       ren.text(translate ('projected'), x1, 60)
         .css({color: '#C0C0C0', fontSize: '9px'}).add();
*/

    });
}







// one might have to extend this with the activeTab/selectedTab?! [2018-03-18 Sun 12:45]


function initDashboardCharts (activeId) {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // dashboard: energy demand chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------

// in the following case only one active tab is allowed
    if (activeId == 2) {
    chart_dashboard_energy_demand = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
            renderTo: 'container_dashboard_energy_demand' + '-active-' + activeId,
            marginLeft:5,
            type: 'column'
        },
        title: {
            style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
            text: translate ('Final energy')
        },
        subtitle: {
            style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
            text: translate ('demand')
        },
        legend: {
            enabled: false,
            align: 'right',
            verticalAlign: 'middle',
            width:130,
            y: 20,
            padding:7,
            itemStyle: { fontSize: '10px' }
        },
        exporting: { enabled: false },
        xAxis: {
          categories: ['2011', '2050']
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            enabled: false,
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          labels : { enabled: false },
          min: 0,
          max: 2000, 
          tickInterval: 250
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {  return { x: 5, y: 30 }; },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate ('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'

        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              // enabled: true,
              // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
          }
        },
        series: [
/*
        {
          name: 'Losses',
          color: 'rgba(200, 200, 200, 0.3)', // '#bababa',
          // borderColor: 'white',
          // dashStyle: 'dot',
          data: [50, 50]
        }, 
*/
        {
          name: translate ('Manufactur.'),
          color: '#8dd3c7',
          data: [50, 50]
        }, {
          name: translate ('Transport'),
          color: '#ffffb3',
          data: [50, 50]
        }, {
          name: translate ('Buildings'),
          color: '#bebada',
          data: [50, 50]
        }, {
          name: translate ('Other'),
          color: '#fb8072',
          data: [50, 50]
        }, {
          name: translate ('GGR'),
          color: '#80b1d3',
          data: [50, 50]
        }
        ]
    });


    }



    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // dashboard: energy supply chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    if (activeId == 2) {
    chart_dashboard_energy_supply = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
            renderTo: 'container_dashboard_energy_supply' + '-active-' + activeId,
            type: 'column'
            // marginLeft:52,
            // marginTop:50,
            // marginBottom:20,
            // marginRight:140,
            // marginLeft:40,
            // zoomType: 'y'
        },
        title: {
            style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
            text: translate ('Primary energy')
        },
        subtitle: {
            style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
            text: translate ('supply')
        },
        legend: {
            enabled: false,
            align: 'right',
            verticalAlign: 'middle',
            width:130,
            y: 20,
            padding:7,
            itemStyle: { fontSize: '10px' }
        },
        exporting: { enabled: false },
        xAxis: {
          categories: ['2011', '2050']
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 2000, 
          tickInterval: 250
        },

      tooltip: {
          shared: true,
          //valueSuffix: ' EJ',
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 5, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate ('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',

          footerFormat: '</table>'
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            dataLabels: {
              // enabled: true,
              // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
            }
          }
        },
        series: [{
          name: translate ('Nuclear'),
          color: '#e41a1c',
          data: [50, 50]
        }, {
          name: translate ('Heat'),
          color: '#ff7f00',
          data: [50, 50]
        }, {
          name: translate ('Renewables'),
          color: '#4daf4a',
          data: [50, 50]
        }, {
          name: translate ('Fossil fuel'),
          color: '#377eb8',
          data: [50, 50]
        }
       ]
    });

    }


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // dashboard: ghg emissions chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    if ((activeId == 1) || (activeId == 3)) {
	initEmissionChartDefault ('container_dashboard_ghg_emissions' + '-active-' + activeId);
    }
	
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // dashboard: co2 budget chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------

    //// LEFT OUT FOR 9.5 - NOGLOBCALC - NOCO2BUDGET
    //// chart_dashboard_co2_budget = createCo2BudgetChart ('container_dashboard_co2_budget' + '-active-' + activeId);

/*
    chart_dashboard_co2_budget = new Highcharts.Chart({
      credits: { enabled: false},
      chart: {
        renderTo: 'container_dashboard_co2_budget',
        marginBottom:70,
        marginLeft:0,
        marginRight:25,

        spacingLeft:   4,
        spacingRight:  4,
        spacingBottom: 4,
        backgroundColor :'#191919'
      },
      title: {
        style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
        // text: '2°C\nCO2 budget'
        text: 'Cum. emissions\nto 2100'
      },
      legend: { enabled: false },
      exporting: { enabled: false},
      xAxis: {
        categories: ['2100'],
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: { enabled: false}
      },
      yAxis: {
        minPadding: 0.2,
        maxPadding: 0.2,
        opposite: true,
        title: {
          style: {
            fontSize: '8px',
            fontWeight: 'normal'
          },
          text: '',
          margin: 5
        },
        labels: { 
          style: {
            fontSize: '10px',
            fontWeight: 'normal'
          },
        },

        min: 0, //-2,
        max: 8000, // 8,
        tickInterval: 1000, // 1,
        // lineWidth: 0,
        // minorGridLineWidth: 0,
        // lineColor: 'transparent',
        // labels: { enabled: false}
      },
      tooltip: {
        shared: true,
        style: {
         fontSize: '9px',
         padding: '8px'
        },
        positioner: function () { return { x: 2, y: 10 }; }
        },
      plotOptions: {
        column: {
          borderWidth: 0,
          shadow: false
        }
      },
      series: [
      {
        name: 'Emissions',
        enabled: false,
        data: [ [2011, -999]],
        color: '#737373', //'#8c8a8c', // '#d53e4f', // 'silver', // '#8e8c8c', // 'silver', // '#FF8000', // 'orange',
        tooltip: {
          useHTML: true,
          headerFormat: 'Cumul. emissions<br>to 2100:<br>',
          pointFormat: '<span style="font-weight: normal; color: orange">{point.y} GT CO2</span><br>= Your pathway<br>--------------------<br>' 
                     + '<span style="font-weight: normal; color: orange">3,010 GT CO2</span><br>= 50% chance<br>of 2°C<br>--------------------<br>' 
                     + '<span style="font-weight: normal; color: orange">2,260 GT CO2</span><br>= 50% chance<br>of 1.5°C'
        }
      }  
      ]
    });
*/


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // climate: co2 budget chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_cc_co2_budget = createCo2BudgetChart ('container_cc_co2_budget');


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // all other screens: co2 budget chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------

    chart_screens_co2_budget = createCo2BudgetChart ('container_screens_co2_budget');



//// LEFT OUT FOR 9.5 - NOGLOBCALC - NOTHERMOMETER
////    // -------------------------------------------------------------------------------------------------------------------
////    // -------------------------------------------------------------------------------------------------------------------
////    // -------------------------------------------------------------------------------------------------------------------
////    // -------------------------------------------------------------------------------------------------------------------
////    //
////    // dashboard: thermometer chart
////    //
////    // -------------------------------------------------------------------------------------------------------------------
////    // -------------------------------------------------------------------------------------------------------------------
////    // -------------------------------------------------------------------------------------------------------------------
////    // -------------------------------------------------------------------------------------------------------------------
////    chart_dashboard_temperature_change = new Highcharts.Chart({
////
////        credits: { enabled: false },
////        chart: {
////          renderTo: 'container_dashboard_mean_temp',
////          spacingLeft:   4,
////          spacingRight:  4,
////          spacingBottom: 4,
////	    /*          backgroundColor :'#191919',*/
////	    backgroundColor :'#ffffff',
////          marginTop:53
////        },
////        title: {
////            style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
////            align: 'center',
////            x: 0,
////            text: '' //'Mean\ntemp. increase\n2100'
////        },
////        legend: {
////          enabled: false
////        },
////        exporting: {
////          enabled: false
////        },
////        xAxis: {
////          categories: ['2100'],
////          labels: {
////             enabled: false
////          }
////        },
////        yAxis: {
////          minPadding: 0.2,
////          maxPadding: 0.2,
////          title: {
////            style: {
////              fontSize: '9px',
////	      fontWeight: 'normal'
////            },
////            text: '',
////            margin: 0
////          },
////          min: -2,
////          max: 8,
////          tickInterval: 1,
////
////          labels: {
////            // enabled: false,	
////            formatter: function() {
////               if (this.value == '0') return this.value;
////               if (this.value == '1') return this.value;
////               if (this.value == '2') return this.value;
////               if (this.value == '3') return this.value;
////               if (this.value == '4') return this.value;
////               if (this.value == '5') return this.value;
////               if (this.value == '6') return this.value;
////               if (this.value == '7') return this.value;
////               if (this.value == '8') return this.value;
////               return '';
////             }
////          }
////        },
////        tooltip: {
////          shared: true,
////          style: {
////      	    fontSize: '9px',
////      	    padding: '8px'
////      	  },
////          positioner: function () { return { x: 2, y: 10 }; }
////        },
////        plotOptions: {
////          column: {
////            borderWidth: 0,
////            shadow: false
////          }
////        },
////        series: [
////        {
////	  name: 'Uncertainty',
////	  type: 'errorbar',
////	  data: [[2.2, 2.2]],
////          color: '#8c8a8c', // '#d53e4f', // 'silver', // '#8e8c8c', // 'silver', // '#FF8000', // 'orange',
////          tooltip: {
////            pointFormat: '<span style="font-weight: normal; color: orange">Temperature</span><br><span style="font-weight: normal; color: orange">increase:</span><br>between<br/>{point.low}C to {point.high}C<br/>'
////	  },
////           stemWidth: 1,
////	   whiskerWidth: 1,
////	   whiskerLength: '20%'
////        }
////        ]
////    })
////
} // end initDashboard ()


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // dashboard: co2 budget chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
function createCo2BudgetChart (container) {

    var chart = new Highcharts.Chart({

      credits: { enabled: false},
      chart: {
        renderTo: container,
        marginBottom:72,
        marginLeft:2,
        marginRight:2,
        marginTop:70,

        spacingLeft:   4,
        spacingRight:  24,
        spacingBottom: 4,
	  /*        backgroundColor :'#191919'*/
	  backgroundColor :'#ffffff'
      },
      title: {
        style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
        // text: '2°C\nCO2 budget'
        // useHTML: true,
        text: '   '
      },
      legend: { enabled: false },
      exporting: { enabled: false},
      xAxis: {
        categories: ['2100'],
        lineWidth: 0,
        minorGridLineWidth: 0,
        lineColor: 'transparent',
        labels: { enabled: false}
      },
      yAxis: {
        minPadding: 0.2,
        maxPadding: 0.2,
        opposite: true,
        title: {
          style: {
            fontSize: '10 px',
            fontWeight: 'normal'
          },
          text: '',
          margin: 12
        },
        labels: { 
          style: {
            fontSize: '10px',
            fontWeight: 'normal'
          },
          enabled: false 
        },

        min: 0, //-2,
        max: 8000, // 8,
        tickInterval: 1000, // 1,
         lineWidth: 0,
         minorGridLineWidth: 0,
         lineColor: 'transparent',
         labels: { enabled: false}
      },
      tooltip: {
        shared: true,
        style: {
         fontSize: '9px',
         padding: '8px'
        },
        positioner: function () { return { x: 2, y: 10 }; }
      },
      plotOptions: {
        column: {
          borderWidth: 0,
          shadow: false
        }
      },
      series: [
      {
        name: 'Emissions',
        enabled: false,
        data: [ [2011, -999]],
        color: '#737373', //'#8c8a8c', // '#d53e4f', // 'silver', // '#8e8c8c', // 'silver', // '#FF8000', // 'orange',
        tooltip: {
          useHTML: true,
          // headerFormat: 'Cumul. emissions<br>to 2100:<br>',
          headerFormat: translate ('Cumulative CO2') + '<br>' + translate ('emissions to 2100') + ':<br>',
          pointFormat: '<span style="font-weight: normal; color: orange">{point.y} GT CO2</span><br>= ' + translate ('Your pathway') + '<br>--------------------<br>' 
                     + '<span style="font-weight: normal; color: orange">3,010 ' + translate ('GT CO2') + '</span><br>= ' + translate ('50% chance') + '<br>' 
                     + translate ('of 2°C') + '<br>--------------------<br>' 
                     + '<span style="font-weight: normal; color: orange">2,260 ' + translate ('GT CO2') + '</span><br>= ' + translate ('50% chance') + '<br>' + translate ('of 1.5°C')
        }
      }  
      ]
    });

  return chart;
}




// ***********************************************************
//                                                           *
// Climate                                                   *
//                                                           *
// ***********************************************************

function initClimateCharts () {

  // alert ("initClimateCharts()");

    // -------------------------------------------------------------------------------------------------------------------
    //
    // climate: thermometer chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_cc_temperature_change = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_cc_1',
            spacingLeft:   4,
            spacingRight:  4,
            spacingBottom: 4,
	    /*            backgroundColor :'#191919',*/
	    backgroundColor :'#ffffff',
            marginTop:53
         },
        title: {
            style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
            align: 'center',
            x: 0,
            text: '' //'Mean\ntemp. increase\n2100'
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        xAxis: {
          categories: ['2100'],
          labels: { enabled: false }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: '',
            margin: 0
          },
          min: -2,
          max: 8,
          tickInterval: 1,

          labels: {
            // enabled: false,	
            formatter: function() {
               if (this.value == '0') return this.value;
               if (this.value == '1') return this.value;
               if (this.value == '2') return this.value;
               if (this.value == '3') return this.value;
               if (this.value == '4') return this.value;
               if (this.value == '5') return this.value;
               if (this.value == '6') return this.value;
               if (this.value == '7') return this.value;
               if (this.value == '8') return this.value;
               return '';
             }
          }
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () { return { x: 2, y: 10 }; }
        },
        plotOptions: {
          column: {
            borderWidth: 0,
            shadow: false
          }
        },
        series: [
        {
	  name: 'Uncertainty',
	  type: 'errorbar',
	  data: [[2.2, 2.2]],
          color: '#8c8a8c', // '#d53e4f', // 'silver', // '#8e8c8c', // 'silver', // '#FF8000', // 'orange',
          tooltip: {
            pointFormat: '<span style="font-weight: normal; color: orange">Temperature</span><br><span style="font-weight: normal; color: orange">increase:</span><br>between<br/>{point.low}C to {point.high}C<br/>'
	  },
           stemWidth: 1,
	   whiskerWidth: 1,
	   whiskerLength: '20%'
        }
        ]
    })





    chart_temperature_timeseries = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
            renderTo: 'container_cc_timeseries',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	    text: translate('Global mean temperature change')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            marker: { enabled: false }
          },
          arearange: {
            lineWidth: 0,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 1870,
          max: 2100,
          tickInterval: 10,

          labels: {

            formatter: function() {
               if (this.value == '1870') return this.value;
               if (this.value == '1900') return this.value;
               if (this.value == '1950') return this.value;
               if (this.value == '2000') return this.value;
               if (this.value == '2050') return this.value;
               if (this.value == '2100') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('degree Celsius'),
            margin: 5
          },
          min: -1, 
          max: 8, 
          tickInterval: 0.5
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          valueSuffix: ' ' + translate('C'),
          positioner: function () {
            return { x: 15, y: 30 };
          }
/*
          useHTML: true,
          headerFormat: '{point.key}<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
*/
        },


      series: [

         {
          name: translate('Actual (NASA)'),
          data: [  [1870, 0], [1880, 0], [1890, 0], 
                   [1900, 0], [1910, 0], [1920, 0], [1930, 0], [1940, 0], [1950, 0], [1960, 0], [1970, 0], [1980, 0], [1990, 0],           
                   [2000, 0], [2005, 0], [2010, 0], [2011, 0], [2013, 0]],
          // color: '#d53e4f',
          type: 'line'
         }, {
          name: translate('Actual (HadCRUT3)'),
          data: [  [1870, 0], [1880, 0], [1890, 0], 
                   [1900, 0], [1910, 0], [1920, 0], [1930, 0], [1940, 0], [1950, 0], [1960, 0], [1970, 0], [1980, 0], [1990, 0],           
                   [2000, 0], [2005, 0], [2010, 0], [2011, 0], [2013, 0]],
          // color: '#d53e4f',
          type: 'line'
         }, {
          name: translate('Actual (HadCRUT4)'),
          data: [  [1870, 0], [1880, 0], [1890, 0], 
                   [1900, 0], [1910, 0], [1920, 0], [1930, 0], [1940, 0], [1950, 0], [1960, 0], [1970, 0], [1980, 0], [1990, 0],           
                   [2000, 0], [2005, 0], [2010, 0], [2011, 0], [2013, 0]],
          // color: '#d53e4f',
          type: 'line'
         }, {
          name: translate('Projected (high estimate)'),
          data: [ [2020, 0], [2025, 0], [2030, 0], [2035, 0], [2040, 0], [2045, 0], [2050, 0], [2055, 0], [2060, 0], [2065, 0], 
                  [2070, 0], [2075, 0], [2080, 0], [2085, 0], [2090, 0], [2095, 0], [2100, 0]],
          color: '#cc4c02',
          type: 'line'
         }, {
          name: translate('Projected (low estimate)'),
          data: [ [2020, 0], [2025, 0], [2030, 0], [2035, 0], [2040, 0], [2045, 0], [2050, 0], [2055, 0], [2060, 0], [2065, 0], 
                  [2070, 0], [2075, 0], [2080, 0], [2085, 0], [2090, 0], [2095, 0], [2100, 0]],
          color: '#fe9929',
          type: 'line'
         }, {
          name: translate('Projected (high estimate)'),
          data: [ [2020, 0], [2025, 0], [2030, 0], [2035, 0], [2040, 0], [2045, 0], [2050, 0], [2055, 0], [2060, 0], [2065, 0], 
                  [2070, 0], [2075, 0], [2080, 0], [2085, 0], [2090, 0], [2095, 0], [2100, 0]],
          color: '#cc4c02',
          dashStyle: 'shortdot',
          type: 'line'
         }, {
          name: translate('Projected (low estimate)'),
          data: [ [2020, 0], [2025, 0], [2030, 0], [2035, 0], [2040, 0], [2045, 0], [2050, 0], [2055, 0], [2060, 0], [2065, 0], 
                  [2070, 0], [2075, 0], [2080, 0], [2085, 0], [2090, 0], [2095, 0], [2100, 0]],
          color: '#fe9929',
          dashStyle: 'shortdot',
          type: 'line'
         }
        ]
    }, function(chart) {
       

  
       var ren = this.renderer;
       // ------------------------------------------------------------------------
       // add vertical separator line between observed and projected time series
       // ------------------------------------------------------------------------
       var point = chart.series[0].data[5];

       
                     var x = chart.xAxis[0].toPixels(2013);
                     var y = chart.yAxis[0].toPixels(8);

                     ren.path(['M', x, y, 'L', x, 280])
                         .attr({
                             'stroke-width': 1,
                             stroke: 'silver',
                             dashstyle: 'dash'
                         })
                        .add();
/*
                     ren.text('observed', 170+78-3-6, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

                     ren.text('projected', 170+128, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();
*/

       var x1 = chart.xAxis[0].toPixels(1880);

       ren.text(translate('observed'), x1, 60)
         .css({color: '#C0C0C0', fontSize: '9px'}).add();

       x1 = chart.xAxis[0].toPixels(2023);

       ren.text(translate('projected'), x1, 60)
         .css({color: '#C0C0C0', fontSize: '9px'}).add();

    });












    
} // end initClimateCharts ()



// ***********************************************************
//                                                           *
// Electricity                                               *
//                                                           *
// ***********************************************************

function initElectricityCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // electricity: electricity supply chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_electricity_balancing_electricity_supply = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            renderTo: 'container_electricity_balancing_electricity_supply',
            marginRight:20,
            type: 'area'
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
 	    text: translate('Electricity supply')
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },

        plotOptions: {
          line: {
            lineWidth: 3,
            marker: { enabled: false }
          },
          area: {
            stacking: 'normal',
            // lineColor: '#666666',
            lineWidth: 0,
            marker: {
              enabled: false
            }
          }
        },


        xAxis: {
          min: 1975,
          max: 2050,
          tickInterval: 5,

          labels: {
            formatter: function() {
               if (this.value == '1975') return this.value;
               if (this.value == '2010') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },

        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
			  fontWeight: 'normal'
            },
            text: translate('EJ'),
            margin: 5
          },
          min: 0,
          max: 300,
          tickInterval: 50
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },

        series: [
         {
	  name: translate('Unabated solid fuel power plants'),
          data: [ [1975, 55], [1980, 57], [1985, 62], [1990, 64], [1995, 68], [2000, 78], [2005, 94], [2010, 113], 
                  [2011, 114], [2015, 125], [2020, 130], [2025, 140], [2030, 145], [2035, 150], [2040, 155], [2045, 141], [2050, 134] ],
          color: '#e41a1c',
          marker: { radius: 2 }
         }, {
	  name: translate('Unabated liquid fuel power plants'),
          data: [ [1975, 55], [1980, 57], [1985, 62], [1990, 64], [1995, 68], [2000, 78], [2005, 94], [2010, 113], 
                  [2011, 114], [2015, 125], [2020, 130], [2025, 140], [2030, 145], [2035, 150], [2040, 155], [2045, 141], [2050, 134] ],
          color: '#377eb8',
          marker: { radius: 2 }
         }, {
	  name: translate('Unabated gas fuel power plants'),
          data: [ [1975, 55], [1980, 57], [1985, 62], [1990, 64], [1995, 68], [2000, 78], [2005, 94], [2010, 113], 
                  [2011, 114], [2015, 125], [2020, 130], [2025, 140], [2030, 145], [2035, 150], [2040, 155], [2045, 141], [2050, 134] ],
          color: '#4daf4a',
          marker: { radius: 2 }
         }, {
	  name: translate('Carbon Capture and Storage'),
          data: [ [1975, 15], [1980, 17], [1985, 19], [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          color: '#984ea3',
          marker: { radius: 2 }
         }, {
	  name: translate('Nuclear'),
          data: [ [1975, 15], [1980, 17], [1985, 19], [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          color: '#ff7f00',
          marker: { radius: 2 }
         }, {
	  name: translate('Wind, solar, marine'),
          data: [ [1975, 15], [1980, 17], [1985, 19], [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          color: '#ffff33',
          marker: { radius: 2 }
         }, {
	  name: translate('Hydro'),
          data: [ [1975, 15], [1980, 17], [1985, 19], [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          color: '#a65628',
          marker: { radius: 2 }
         }, {
	  name: translate('Geothermal'),
          data: [ [1975, 25], [1980, 27], [1985, 32], [1990, 30], [1995, 35], [2000, 40], [2005, 45], [2010, 50], 
                  [2011, 50], [2015, 60], [2020, 65], [2025, 70], [2030, 75], [2035, 80], [2040, 90], [2045, 100], [2050, 105] ],
          color: '#f781bf',
          marker: { radius: 2 }
        }, {
          name: translate('Electricity demand'), 
          color: 'white',
          dashStyle: 'ShortDot',
          type: 'line',
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          marker: { radius: 2 }
         }
        ]
    }, function(chart) {
        
                     var ren = this.renderer;

                     // ------------------------------------------------------------------------
                     // add vertical separator line between observed and projected time series
                     // ------------------------------------------------------------------------
        
                     var x = chart.xAxis[0].toPixels(2010);

                     ren.path(['M', x, 40, 'L', x, 280])
                         .attr({
                             'stroke-width': 1,
                             stroke: 'silver',
                             dashstyle: 'dash'
                         })
                        .add();

                     var x1 = chart.xAxis[0].toPixels(1980);

                     ren.text(translate('observed'), x1, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

                     x1 = chart.xAxis[0].toPixels(2015);
                     ren.text(translate('projected'), x1, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();


/*
                     ren.text(translate('observed'), 135-3, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

                     ren.text(translate('projected'), 185, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();
*/
    });

} // end initElectricityCharts ()


function initElectricityCarbonIntensityCharts() {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // Electricity: Carbon Intensity
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_electricity_carbon_intensity = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_electricity_carbon_intensity',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate('Electricity generation - carbon intensity')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
        },
        xAxis: {
          min: 2010,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('g CO2e / kwh'),
            margin: 5
          },
          min: 0,
          max: 800,
          tickInterval: 100
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('g CO2e / kwh') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate('Carbon intensity'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

} // end initElectricityCarbonIntensityCharts



// ***********************************************************
//                                                           *
// Transport                                                 *
//                                                           *
// ***********************************************************

function initTransportTechAndFuelCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // transport: number of cars on the road
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_transport_cars_on_the_road = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            type: 'area',
            renderTo: 'container_transport_cars_on_the_road',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate('Number of cars on the road')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('number'),
            margin: 5
          },
          min: 0,
          max: 4500000000,
          tickInterval: 500000000
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate('Hydrogen'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate('Electric'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate('ICEs'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate('PHs'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

    // -------------------------------------------------------------------------------------------------------------------
    //
    // transport: avg efficiency of cars on the road
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_transport_avg_efficiency = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_transport_avg_efficiency',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Avg efficiency of cars on the road')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('litres of gasoline equivalent per 100 km'),
            margin: 5
          },
          min: 0,
          max: 10, 
          tickInterval: 1
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
        useHTML: true,
        headerFormat: '{point.key}' + ' (' + translate('litres of gasoline equivalent per 100 km') + ')' + '<table>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                     '<td style="text-align: right">{point.y}</td></tr>',
        footerFormat: '</table>'
       },
       series: [

       {
          name: translate('Average'),
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ],
          color: '#4daf4a',
          marker: { radius: 2 }
        }        
  
      ]
    });

} // end initTransportTechAndFuelCharts


function initTransportFuelTypeCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // transport: transport by fuel type
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_transport_by_fuel_type = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            type: 'area',
            renderTo: 'container_transport_by_fuel_type',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate('Transport by fuel type')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('EJ'),
            margin: 5
          },
          min: 0,
          max: 240,
          tickInterval: 20
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate('Liquid hydrocarbons'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate('Electricity (delivered to end user)'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate('Gaseous hydrocarbons'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate('H2'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

} // end initTransportFuelTypeCharts





function initTransportFreightCharts () {


    // -------------------------------------------------------------------------------------------------------------------
    //
    // transport: freight by load
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_transport_freight_by_load = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
           renderTo: 'container_transport_freight_by_load',
           type: 'column',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
  	   text: translate('Index of international freight by sea and output of coal/oil/iron products')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          line: {
            lineWidth: 2,
            marker: { enabled: false }
          },
          column: {
            stacking: 'normal'
          }
        },
        xAxis: {
          categories: [2011, 2015, 2020, 2025, 2030, 2035, 2040, 2045, 2050]
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('Index (2011=100)'),
            margin: 5
          },
          min: 0,
          max: 250, 
          tickInterval: 25
        },
       tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding:  '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
        useHTML: true,
        headerFormat: '{point.key}' + ' (' + translate('Index (2011=100)') + ')' + '<table>',
        pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                     '<td style="text-align: right">{point.y}</td></tr>',
        footerFormat: '</table>'
       },

       series: [
       {
          name: translate('International freight by sea'),
          type: 'line',
          data: [ 100, 105, 105, 105, 105, 105, 105, 105, 105 ],
          color: '#4daf4a',
          marker: { radius: 2 }
        }, { 
          name: translate('Output of coal/oil/iron products'),
          type: 'line',
          data: [ 100, 105, 105, 105, 105, 105, 105, 105, 105 ],
          color: '#e6550d',
          marker: { radius: 2 }
        }
      ]


    });


/*
    // -------------------------------------------------------------------------------------------------------------------
    //
    // transport: growth in output
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_transport_growth_in_output = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_transport_growth_in_output',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: 'Growth in output'
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: 'Index (2011=100)',
            margin: 5
          },
          min: 0,
          max: 250,
          tickInterval: 25
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (Index (2011=100))' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: 'Oil',
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: 'Coal',
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: 'Iron and Steel',
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });
*/

} // end initTransportFreightCharts



function initTransportModeCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // transport: observed energy demand chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_transport_energy_demand_observed = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_transport_energy_demand_observed',
            type: 'area',
            marginRight:0 // 5
        },
        title: {
            style: { font: 'normal 9px "Trebuchet MS", Verdana, sans-serif' },
	    text: translate('observed')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineWidth: 0,
            marker: { enabled: false },
            shadow: false,
            states: {
              hover: { lineWidth: 1 }
            },
            threshold: null
          }
        },
        xAxis: {
          min: 1990,
          max: 2010,
          tickInterval: 5,
          labels: {
       	    fontSize: '9px',
            formatter: function() {
               if (this.value == '1990') return this.value;
               if (this.value == '2005') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: { fontSize: '9px', fontWeight: 'normal' },
            text: 'EJ',
            margin: 5
          },
          min: 0,
          max: 500,
          tickInterval: 50
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate('All transport'),
          data: [ [1990, 595], [1995, 600], [2000, 620], [2005, 630], [2010, 655]],
          color: '#8080FF',
          marker: { radius: 2 }
         }

        ]

    });


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // transport: projected energy demand chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_transport_energy_demand_projected = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_transport_energy_demand_projected',
            type: 'area',
            // marginTop:50,
            // marginBottom:20,
            marginRight:20,
            marginLeft: 0 // 5
        },
        title: {
          style: { font: 'normal 9px "Trebuchet MS", Verdana, sans-serif' },
  	  text: translate('projected')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineWidth: 0,
            marker: { enabled: false },
            shadow: false,
            states: {
              hover: { lineWidth: 1 }
            },
            threshold: null
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
       	    fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          opposite: true,
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: { fontSize: '9px', fontWeight: 'normal' },
            text: '',
            margin: 5
          },
          min: 0,
          max: 500,
          tickInterval: 50,
          labels : {
            enabled: false
          }

        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },

        series: [
         {
	  name: translate('Passenger Light road'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Passenger Heavy road'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Passenger Rail'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Passenger Plane'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Passenger Ship'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Freight Light road'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Freight Heavy road'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Freight Rail'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Freight Plane'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }, {
	  name: translate('Freight Ship'),
          data: [ [2011, 100], [2015, 100], [2020, 178], [2025, 194], [2030, 113], [2035, 125], [2040, 130], [2045, 140], [2050, 150] ],
          marker: { radius: 2 }
         }
        ]
    });




} // end initTransportModeCharts ()



// ***********************************************************
//                                                           *
// Buildings                                                 *
//                                                           *
// ***********************************************************
function initBuildingsInsulationAndTechCharts() {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // buildings: heating
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_buildings_heating = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_buildings_heating',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate ('Space heating by zero carbon or electric technologies (urban)')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('%'),
            margin: 5
          },
          min: 0,
          max: 100,
          tickInterval: 10
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('%') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Urban'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

    // -------------------------------------------------------------------------------------------------------------------
    //
    // buildings: insulation
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_buildings_insulation = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_buildings_insulation',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate ('Building insulation (urban)')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('GW heat loss per m2'),
            margin: 5
          },
          min: 0,
          max: 20,
          tickInterval: 2
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('GW heat loss per m2') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Urban'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

} // initBuildingsInsulationAndTechCharts()

function initBuildingsFuelCharts() {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // buildings: Energy use by fuel type
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_buildings_by_fuel_type = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            type: 'area',
            renderTo: 'container_buildings_by_fuel_type',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate ('Energy use by fuel type')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 240,
          tickInterval: 20
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Solar'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Environmental heat'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Heat (supplied to grid)'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Liquid hydrocarbons'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Solid hydrocarbons'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Traditional biomass'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Gaseous hydrocarbons'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Global Electricity (delivered to end user)'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

} // end initBuildingsFuelCharts()



function initBuildingsEnergyUseCharts() {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // buildings: observed energy use chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_buildings_energy_use_observed = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            renderTo: 'container_buildings_2',
            type: 'area',
            marginRight:0 // 5
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
	    text: translate ('Observed')
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },

            plotOptions: {
                area: {
                  stacking: 'normal',

                    lineWidth: 0,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },


        xAxis: {
          min: 1975,
          max: 2010,
          tickInterval: 5,

          labels: {
        	    fontSize: '9px',
            formatter: function() {
               if (this.value == '1975') return this.value;
               if (this.value == '2005') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
			  fontWeight: 'normal'
            },
            text: 'EJ',
            margin: 5
          },
          min: 0,
          max: 250,
          tickInterval: 25
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('All buildings'),
          data: [ [1975, 10], [1980, 10], [1985, 10],[1990, 10], [1995, 10], [2000, 10], [2005, 10], [2010, 10]],

          color: '#8080FF',
          marker: { radius: 2 }
         }

        ]

    });
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // buildings: energy use chart projected
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_buildings_energy_use = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            renderTo: 'container_buildings_1',
            type: 'area',
            marginRight:20,
            marginLeft: 0 // 5
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
  	  text: translate ('Projected energy use')
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },

        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 0,
            marker: {
                        enabled: false
            }
          }
        },
        xAxis: {
          min: 2011, // 1990,
          max: 2050,
          tickInterval: 10,

          labels: {
            formatter: function() {
               if (this.value == '1990') return this.value;
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          opposite: true,
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
			  fontWeight: 'normal'
            },
            text: '',
            margin: 5
          },
          min: 0,
          max: 250,
          tickInterval: 25,
          labels : {
            enabled: false
          }
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [

           /*
           // ==============================================================================================================================
           // 
           // NOTE: the disabled version is  for combining observed and projected data.  Since observed data is not available for
           // version 1, we are only using projected data now
           // 
           // ==============================================================================================================================

         {
	  name: 'Heating and cooling',
          data: [ [1990, 30], [1995, 35], [2000, 40], [2005, 45], [2010, 50], 
                  [2011, 50], [2015, 60], [2020, 65], [2025, 70], [2030, 75], [2035, 80], [2040, 90], [2045, 100], [2050, 105] ],
          color: '#7FC97F',
          marker: { radius: 2 }
         },
         {
	  name: 'Lighting and applicances',
          data: [ [1990, 64], [1995, 68], [2000, 78], [2005, 94], [2010, 113], 
                  [2011, 114], [2015, 125], [2020, 130], [2025, 140], [2030, 145], [2035, 150], [2040, 155], [2045, 141], [2050, 134] ],
          color: '#FDC086',
          marker: { radius: 2 }
         },
         {
	  name: 'Cooking',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          color: '#BEAED4',
          marker: { radius: 2 }
         }
         */

         {
	  name: translate ('Heating'),
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          color: '#a6cee3',
          marker: { radius: 2 }
         },
         {
	  name: translate ('Cooling'),
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          color: '#1f78b4',
          marker: { radius: 2 }
         },
         {
	  name: translate ('Hot water'),
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          color: '#b2df8a',
          marker: { radius: 2 }
         },
         {
	  name: translate ('Applicances'),
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          color: '#33a02c',
          marker: { radius: 2 }
         },
         {
	  name: translate ('Cooking'),
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          color: '#fb9a99',
          marker: { radius: 2 }
         },
         {
	  name: translate ('Lighting'),
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          color: '#e31a1c',
          marker: { radius: 2 }
         },
         {
	  name: translate ('Non-residential'),
          data: [ [2011, 10], [2015, 10], [2020, 10], [2025, 10], [2030, 10], [2035, 10], [2040, 10], [2045, 10], [2050, 10] ],
          color: '#fee08b',
          marker: { radius: 2 }
         }
        ]

    });

} // end initBuildingsCharts ()


// ***********************************************************
//                                                           *
// Manufacturing                                             *
//                                                           *
// ***********************************************************

function initMaterialsCharts () {


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // Manufacturing: observed energy consumption chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_energy_consumption_observed = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            renderTo: 'container_manufacturing_energy_consumption_observed',
            type: 'area',
            marginRight: 0 // 5
        },
        title: {
            style: {
                font: 'normal 10px "Trebuchet MS", Verdana, sans-serif'
            },
  	   text: translate ('Observed')
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
                area: {
                  stacking: 'normal',

                    lineWidth: 0,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
        },
        xAxis: {
          min: 1990,
          max: 2010,
          tickInterval: 5,
          labels: {
       	    fontSize: '9px',
            formatter: function() {
               if (this.value == '1990') return this.value;
               if (this.value == '2005') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
   	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 500,
          tickInterval: 50
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('All manufacturing'),
          data: [ [1990, 595], [1995, 600], [2000, 620], [2005, 630], [2010, 655]],
          color: '#8080FF',
          marker: { radius: 2 }
         }

        ]

    });


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // Manufacturing: projected energy consumption chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_energy_consumption_projected = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            renderTo: 'container_manufacturing_energy_consumption_projected',
            type: 'area',
            marginRight:20,
            marginLeft:0 //5
        },
        title: {
            style: {
                font: 'normal 10px "Trebuchet MS", Verdana, sans-serif'
            },
	    text: translate ('Projected energy consumption')
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
                area: {
                  stacking: 'normal',

                    lineWidth: 0,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
       	    fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          opposite: true,
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
   	      fontWeight: 'normal'
            },
            text: '',
            margin: 5
          },
          min: 0,
          max: 500,
          tickInterval: 50,
          labels : {
            enabled: false
          }
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Iron and steel'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Aluminium'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Chemicals'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Pulp and paper'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Cement'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Timber'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Other'),
//          color: '#cacaca',
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }

       ]
    });


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // materials: energy efficiency of production chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------

    chart_manufacturing_energy_efficiency_of_production = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            type: 'area',
            renderTo: 'container_materials_2',
            marginRight:20
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
   	    text: translate ('Tonnes of output')
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
                area: {
                  stacking: 'normal',

                    lineWidth: 0,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },

        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('Gt'),
            margin: 5
          },
          min: 0,
          max: 20,
          tickInterval: 2.5
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('Gt') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Iron and steel'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Aluminium'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Chemicals'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Pulp and paper'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Cement'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Timber'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]

    });

} // end initMaterialsCharts ()







function initManufacturingEnergyUseChart (container, title, yMax, yTick) {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // materials: energy efficiency of production chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------

    var chart = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: container,
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: translate (title)
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('Gt'),
            margin: 5
          },
          min: 0,
          max: yMax,
          tickInterval: yTick
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('Gt') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },

        series: [
         {
	  name: translate ('Transport'),
          marker: { radius: 2 },
          color: '#66c2a5',
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Buildings'),
          marker: { radius: 2 },
          color: '#fc8d62',
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Infrastructure'),
          marker: { radius: 2 },
          color: '#8da0cb',
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Consumables e.g. appliances, packaging'),
          marker: { radius: 2 },
          color: '#e78ac3',
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Wind turbines'),
          marker: { radius: 2 },
          color: '#a6d854',
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('PV panels'),
          marker: { radius: 2 },
          color: '#ffd92f',
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Fertiliser'),
          marker: { radius: 2 },
          color: '#e5c494',
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Other'),
          marker: { radius: 2 },
          color: '#b3b3b3',
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

  return chart;
}



function initManufacturingIronAndSteelCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // manufacturing:  steel use
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_iron_and_steel_uses = initManufacturingEnergyUseChart ('container_manufacturing_iron_and_steel_uses', 'Steel uses', 3.5, 0.5);


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // manufacturing: energy demand iron and steel
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_iron_and_steel = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_iron_and_steel',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: translate ('Energy demand Iron/Steel')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 75,
          tickInterval: 5
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },

        series: [
         {
	  name: translate ('Oxygen'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Oxygen Hisarna'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Electric'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Electric DRI'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Other'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

/*
    chart_manufacturing_iron_and_steel_uses = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_iron_and_steel_uses',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: 'Steel uses'
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: 'Tonnes',
            margin: 5
          },
          min: 0,
          max: 75,
          tickInterval: 5
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (Tonnes)' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: 'Something',
          marker: { radius: 2 },
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ]
         }, {
	  name: 'Something else',
          marker: { radius: 2 },
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ]
         }
      ]
    }, function(chart) {
       chart.renderer.text('This chart',     90, 60).css({ color: '#C0C0C0', fontSize: '10px' }).add();
       chart.renderer.text('is under',       90, 75).css({ color: '#C0C0C0', fontSize: '10px' }).add();
       chart.renderer.text('construction !', 90, 90).css({ color: '#C0C0C0', fontSize: '10px' }).add();
    });
*/

} // end initManufacturingIronAndSteelCharts ()

function initManufacturingAluminiumCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // manufacturing:  aluminium use
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_aluminium_uses = initManufacturingEnergyUseChart ('container_manufacturing_aluminium_uses', 'Aluminium uses', 0.16, 0.02);

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // manufacturing: energy demand aluminium
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_aluminium = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_aluminium',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: translate ('Energy demand Aluminium')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 16,
          tickInterval: 2
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },

        series: [
         {
	  name: translate ('Alumina'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Primary'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Secondary'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

/*
    chart_manufacturing_aluminium_uses = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_aluminium_uses',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: 'Aluminium uses'
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: 'Tonnes',
            margin: 5
          },
          min: 0,
          max: 75,
          tickInterval: 5
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (Tonnes)' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: 'Something',
          marker: { radius: 2 },
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ]
         }, {
	  name: 'Something else',
          marker: { radius: 2 },
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ]
         }
      ]
    }, function(chart) {
       chart.renderer.text('This chart',     90, 60).css({ color: '#C0C0C0', fontSize: '10px' }).add();
       chart.renderer.text('is under',       90, 75).css({ color: '#C0C0C0', fontSize: '10px' }).add();
       chart.renderer.text('construction !', 90, 90).css({ color: '#C0C0C0', fontSize: '10px' }).add();
    });
*/
} // end initManufacturingAluminiumCharts ()


function initManufacturingPaperCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // materials: energy efficiency of Paper  chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_paper = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_paper',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: translate ('Energy demand Paper')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 20,
          tickInterval: 2
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },

        series: [
         {
	  name: translate ('Pulp'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Virgin'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Recycled'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

} // end initManufacturingPaperCharts ()


function initManufacturingChemicalsCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // manufacturing:  chemicals use
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_chemicals_uses = initManufacturingEnergyUseChart ('container_manufacturing_chemicals_uses', 'Chemicals uses', 2.5, 0.5);

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // manufacturing: energy demand chemicals
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_chemicals = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_chemicals',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: translate ('Energy demand Chemicals')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 110,
          tickInterval: 10
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },

        series: [
         {
	  name: translate ('HVC'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Ammonia'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Methanol'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }, {
	  name: translate ('Other'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

/*
    chart_manufacturing_chemicals_uses = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_chemicals_uses',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: 'Chemicals uses'
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: 'Tonnes',
            margin: 5
          },
          min: 0,
          max: 75,
          tickInterval: 5
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (Tonnes)' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: 'Something',
          marker: { radius: 2 },
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ]
         }, {
	  name: 'Something else',
          marker: { radius: 2 },
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ]
         }
      ]
    }, function(chart) {
       chart.renderer.text('This chart',     90, 60).css({ color: '#C0C0C0', fontSize: '10px' }).add();
       chart.renderer.text('is under',       90, 75).css({ color: '#C0C0C0', fontSize: '10px' }).add();
       chart.renderer.text('construction !', 90, 90).css({ color: '#C0C0C0', fontSize: '10px' }).add();
    });
*/

} // end initManufacturingChemicalsCharts ()

function initManufacturingCementCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // manufacturing:  cement use
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_cement_uses = initManufacturingEnergyUseChart ('container_manufacturing_cement_uses', 'Cement uses', 5, 0.5);


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // manufacturing: energy demand cement
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_cement = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_cement',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: translate ('Energy demand Cement')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 22,
          tickInterval: 2
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },

        series: [
         {
	  name: translate ('Cement'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

/*
    chart_manufacturing_cement_uses = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {
           type: 'area',
           renderTo: 'container_manufacturing_cement_uses',
           marginRight:20
        },
        title: {
           style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	   text: 'Cement uses'
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',
             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: 'Tonnes',
            margin: 5
          },
          min: 0,
          max: 75,
          tickInterval: 5
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + ' (Tonnes)' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: 'Something',
          marker: { radius: 2 },
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ]
         }, {
	  name: 'Something else',
          marker: { radius: 2 },
          data: [ [2011, null], [2015, null], [2020, null], [2025, null], [2030, null], [2035, null], [2040, null], [2045, null], [2050, null] ]
         }
      ]
    }, function(chart) {
       chart.renderer.text('This chart',     90, 60).css({ color: '#C0C0C0', fontSize: '10px' }).add();
       chart.renderer.text('is under',       90, 75).css({ color: '#C0C0C0', fontSize: '10px' }).add();
       chart.renderer.text('construction !', 90, 90).css({ color: '#C0C0C0', fontSize: '10px' }).add();
    });
*/

} // end initManufacturingCementCharts ()


function initManufacturingSalesOfProductsCharts() {

    // -------------------------------------------------------------------------------------------------------------------
    //
    // manufacturing: sales of lightbulbs
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_sales_of_lightbulbs = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_manufacturing_sales_of_lightbulbs',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate ('Sales of lightbulbs')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('number'),
            margin: 5
          },
          min: 0,
          max:          22000000000,
          tickInterval:  2000000000
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Total'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

    // -------------------------------------------------------------------------------------------------------------------
    //
    // manufacturing: sales of refrigerators
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_sales_of_refrigerators = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_manufacturing_sales_of_refrigerators',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate ('Sales of refrigerators')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('number'),
            margin: 5
          },
          min: 0,
          max:           2000000000,
          tickInterval:   250000000
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Total'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });


    // -------------------------------------------------------------------------------------------------------------------
    //
    // manufacturing: sales of televisions
    //
    // -------------------------------------------------------------------------------------------------------------------
    chart_manufacturing_sales_of_televisions = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_manufacturing_sales_of_televisions',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate ('Sales of televisions')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
           area: {
             stacking: 'normal',

             lineWidth: 0,
             marker: { enabled: false },
             shadow: false,
             states: {
               hover: { lineWidth: 1}
             },
             threshold: null
           }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('number'),
            margin: 5
          },
          min: 0,
          max:           2000000000,
          tickInterval:   250000000
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' Gt',
          useHTML: true,
          headerFormat: '{point.key}' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Total'),
          marker: { radius: 2 },
          data: [ [2011, 1], [2015, 1], [2020, 1], [2025, 1], [2030, 1], [2035, 1], [2040, 1], [2045, 1], [2050, 1] ]
         }
       ]
    });

} // initManufacturingSalesOfProductsCharts()


// ***********************************************************
//                                                           *
// Food                                                      *
//                                                           *
// ***********************************************************

function initFoodCharts () {

  var unit = "grams / day";
  if (dietTableUnit == 1) unit = translate ("grams/day");
  else                    unit = translate ("kcal/day");

  var maxX = 3000;
  var tick =  250;
  if (dietTableUnit == 1) {
    maxX = 2000;
    tick =  200;
  }


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // food: food consumption chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_food_bioenergy_food_consumption = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_food_bioenergy_1',
            type: 'column'
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
            text: translate ('Food consumption/head')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        xAxis: {
          categories: [translate ('2011 global avg'), translate ('2050 user pathway'), translate ('Botswana 2011'), translate ('Brazil 2011'), 
                       translate ('China 2011'), translate ('India 2011'), translate ('Japan 2011'), translate ('UK 2011'), translate ('US 2011')]
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: { fontSize: '9px', fontWeight: 'normal' },
            text: unit,
            margin: 5
          },
          min: 0,
          max: maxX,
          tickInterval: tick
        },
        tooltip: {
          shared: true,
          // valueSuffix: ' calories',
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          // positioner: function () { return { x: 15, y: 30 }; },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate(unit) + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        plotOptions: {
          column: { stacking: 'normal' }
        },
        series: [
        {
          name: translate ('Beef'),
          color: '#ff7f00',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Poultry'),
          color: '#a6cee3',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Pork'),
          color: '#e31a1c',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Sheep and goat meat'),
          color: '#b2df8a',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Fish'),
          color: '#33a02c',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Eggs'),
          color: '#fb9a99',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Milk products'),
          color: '#1f78b4',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Other animal products'),
          color: '#fdbf6f',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Cereals and grains'),
          color: '#ff7f00',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Sugars'),
          color: '#cab2d6',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Fruit, vegetables'),
          color: '#7fc97f',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Pulses'),
          color: '#ffff33',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Vegetable oil'),
          color: '#6a3d9a',
          data: [100, 200, null, null, null, null, null, null, null]
        }, {
          name: translate ('Other'),
          color: '#ffff99',
          data: [100, 200, null, null, null, null, null, null, null]
        }
      ]
    });



} // end initFoodCharts ()


// ***********************************************************
//                                                           *
// Bioenergy                                                 *
//                                                           *
// ***********************************************************

function initBioenergyCharts () {


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // Bioenergy: projected energy supply chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_bioenergy_energy_supply_1 = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            type: 'area',
            renderTo: 'container_bioenergy_1',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate ('Bioenergy supply by source')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
                area: {
                  stacking: 'normal',
                    lineWidth: 0,
                    marker: { enabled: false },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 325,
          tickInterval: 25
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Bionergy unused'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#a6cee3',
          marker: { radius: 2 }
         }, {
          name: translate ('Waste'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#fef0d9',
          marker: { radius: 2 }
         }, {
	  name: translate ('Forest residues'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#fdcc8a',
          marker: { radius: 2 }
         }, {
	  name: translate ('Bioenergy crops'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#fc8d59',
          marker: { radius: 2 }
         }, {
	  name: translate ('Traditional biomass'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#d7301f',
          marker: { radius: 2 }
         }
        ]
    });



    chart_bioenergy_energy_supply_2 = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            type: 'area',
            renderTo: 'container_bioenergy_2',
            marginRight:20
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
   	    text: translate ('Bioenergy supply by solid/liquid/gas')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
                area: {
                  stacking: 'normal',
                    lineWidth: 0,
                    marker: { enabled: false },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,
          labels: {
            fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 325,
          tickInterval: 25
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate ('Solid oversupply'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#1f78b4',
          marker: { radius: 2 }
         }, {
	  name: translate ('Liquid oversupply'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#a6cee3',
          marker: { radius: 2 }
         }, {
          name: translate ('Solid'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#b2df8a',
          marker: { radius: 2 }
         }, {
	  name: translate ('Liquid'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#fb9a99',
          marker: { radius: 2 }
         }, {
	  name: translate ('Gasous'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#33a02c',
          marker: { radius: 2 }
         }, {
	  name: translate ('Losses'),
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#cfcfcf',
          marker: { radius: 2 }
         }
        ]
    });

         
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // Bioenergy: projected energy demand chart   DO NOT DELETE - CURRENTLY DEACTIVATED
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------

/*
    chart_bioenergy_energy_demand = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            type: 'area',
            renderTo: 'container_bioenergy_2',
            marginRight:20
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
   	    text: 'Bioenergy demand'
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
                area: {
                  stacking: 'normal',

                    lineWidth: 0,
                    marker: {
                        enabled: false
                    },
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 5,

          labels: {
        	  fontSize: '9px',
            formatter: function() {
               if (this.value == '2011') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },

        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: 'EJ',
            margin: 5
          },
          min: 0,
          max: 150,
          tickInterval: 25
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (EJ)' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [

         {
          name: 'Losses',
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#bababa',
          marker: { radius: 2 }
         },
       {
	  name: 'Transport',
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#a6cee3',
          marker: { radius: 2 }
         },
         {
	  name: 'Electricity (unabated thermal)',
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#1f78b4',
          marker: { radius: 2 }
         },
         {
	  name: 'Electricity (carbon capture and storage)',
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#b2df8a',
          marker: { radius: 2 }
         },
         {
	  name: 'Buildings',
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#33a02c	',
          marker: { radius: 2 }
         },
         {
	  name: 'Manufacturing',
          data: [ [2011, 3], [2015, 3], [2020, 3], [2025, 3], [2030, 3], [2035, 3], [2040, 3], [2045, 3], [2050, 3] ],
          color: '#fdbf6f',
          marker: { radius: 2 }
         }
        ]
    });
*/

} // end initBioenergyCharts ()



// ***********************************************************
//                                                           *
// Energy flows                                              *
//                                                           *
// ***********************************************************

function initEnergyFlowsCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // energy flows: energy supply chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_energy_energy_supply = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            renderTo: 'container_energy_1',
            type: 'area',
            marginRight:20
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
   	    text: translate ('Energy supply')
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 0,
            marker: {
                        enabled: false
            }
          }
        },
        xAxis: {
          min: 1990,
          max: 2050,
          tickInterval: 10,
          labels: {
            formatter: function() {
               if (this.value == '1990') return this.value;
               if (this.value == '2010') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
			  fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 2000,
          tickInterval: 200
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
          name: translate ('Nuclear fission'),
          color: '#d53e4f',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Solar, wind, wave and tidal'),
          color: '#f46d43',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Heat'),
          color: '#fdae61',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Geothermal'),
          color: '#ffffbf',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Hydro'),
          color: '#e6f598',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Bioenergy and waste'),
          color: '#abdda4',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Coal and peat'),
          color: '#fee08b',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Oil'),
          color: '#66c2a5',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Gas'),
          color: '#3288bd',
          data: [ [1990, 20], [1995, 25], [2000, 20], [2005, 25], [2010, 30], 
                  [2011, 30], [2015, 30], [2020, 35], [2025, 30], [2030, 35], [2035, 40], [2040, 40], [2045, 45], [2050, 50] ],
          marker: { radius: 2 }
         }
        ]
    }, function(chart) {
        
                     var ren = this.renderer;

                     // ------------------------------------------------------------------------
                     // add vertical separator line between observed and projected time series
                     // ------------------------------------------------------------------------
        
                     var x = chart.xAxis[0].toPixels(2010);

                     ren.path(['M', x, 40, 'L', x, 280])
                         .attr({
                             'stroke-width': 1,
                             stroke: 'silver',
                             dashstyle: 'dash'
                         })
                        .add();

                     var x1 = chart.xAxis[0].toPixels(1990)+3;

                     ren.text(translate ('observed'), x1, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

                     x1 = chart.xAxis[0].toPixels(2015);

                     ren.text(translate ('projected'), x1, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

/*
                     ren.text(translate ('observed'), 109, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

                     ren.text(translate ('projected'), 159+1, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();
*/

    });



    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // energy flows: energy demand chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_energy_energy_demand = new Highcharts.Chart({

        credits: {
           enabled: false
        },
        chart: {
            renderTo: 'container_energy_2',
            marginRight:20,
            type: 'area'
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
	    text: translate ('Energy demand')
        },
        legend: {
          enabled: false
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 0,
            marker: {
              enabled: false
            }
          }
        },
        xAxis: {
          min: 1990,
          max: 2050,
          tickInterval: 10,
          labels: {
            formatter: function() {
               if (this.value == '1990') return this.value;
               if (this.value == '2010') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate ('EJ'),
            margin: 5
          },
          min: 0,
          max: 2000,
          tickInterval: 200
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          // valueSuffix: ' EJ',
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('EJ') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
/*
         {
          name: 'Losses',
          color: 'rgba(200, 200, 200, 0.3)', // '#bababa',
          data: [ 
                  [1990, null], [1995, null], [2000, null], [2005, null], [2010, null], 
                  [2011, 50], [2015, 60], [2020, 65], [2025, 70], [2030, 75], [2035, 80], [2040, 90], [2045, 100], [2050, 105] ],
          marker: { radius: 2 }
         },
*/
         {
          name: translate ('Manufacturing'),
          color: '#8dd3c7',
          data: [ [1990, 30], [1995, 35], [2000, 45], [2005, 50], [2010, 50], 
                  [2011, 50], [2015, 60], [2020, 65], [2025, 70], [2030, 75], [2035, 80], [2040, 90], [2045, 100], [2050, 105] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Transport'),
          color: '#ffffb3',
          data: [ [1990, 30], [1995, 35], [2000, 45], [2005, 50], [2010, 50], 
                  [2011, 50], [2015, 60], [2020, 65], [2025, 70], [2030, 75], [2035, 80], [2040, 90], [2045, 100], [2050, 105] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Buildings'),
          color: '#bebada',
          data: [ [1990, 30], [1995, 35], [2000, 45], [2005, 50], [2010, 50], 
                  [2011, 50], [2015, 60], [2020, 65], [2025, 70], [2030, 75], [2035, 80], [2040, 90], [2045, 100], [2050, 105] ],
          marker: { radius: 2 }
         }, {
          name: translate ('Other'),
          color: '#fb8072',
          data: [ [1990, 30], [1995, 35], [2000, 45], [2005, 50], [2010, 50], 
                  [2011, 50], [2015, 60], [2020, 65], [2025, 70], [2030, 75], [2035, 80], [2040, 90], [2045, 100], [2050, 105] ],
          marker: { radius: 2 }
         }, {
          name: translate ('GGR'),
          color: '#80b1d3',
          data: [ [1990, 30], [1995, 35], [2000, 45], [2005, 50], [2010, 50], 
                  [2011, 50], [2015, 60], [2020, 65], [2025, 70], [2030, 75], [2035, 80], [2040, 90], [2045, 100], [2050, 105] ],
          marker: { radius: 2 }
         }
        ]
    }, function(chart) {
        
                     var ren = this.renderer;

                     // ------------------------------------------------------------------------
                     // add vertical separator line between observed and projected time series
                     // ------------------------------------------------------------------------
        
                     var x = chart.xAxis[0].toPixels(2010);

                     ren.path(['M', x, 40, 'L', x, 280])
                         .attr({
                             'stroke-width': 1,
                             stroke: 'silver',
                             dashstyle: 'dash'
                         })
                        .add();

                     var x1 = chart.xAxis[0].toPixels(1990)+3;

                     ren.text(translate ('observed'), x1, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

                     x1 = chart.xAxis[0].toPixels(2015);
                     ren.text(translate ('projected'), x1, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

/*
                     ren.text(translate ('observed'), 109, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();

                     ren.text(translate ('projected'), 159+1, 60)
                      .css({
                        color: '#C0C0C0',
                        fontSize: '9px'
                      })
                      .add();
*/

    });



} // end initEnergyFlowsCharts ()


// ***********************************************************
//                                                           *
// Fossil fuels etc                                          *
//                                                           *
// ***********************************************************

function createHalfDonutChart (container, variable, title) {

  var chart = new Highcharts.Chart({
       credits: { enabled: false },
       chart: {
            renderTo: container,
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            spacingTop:    4,
            spacingLeft:   4,
            spacingRight:  4,
            spacingBottom: 7,
            plotShadow: false
        },
        title: {
            style: { font: 'normal 10px "Trebuchet MS", Verdana, sans-serif' },
            text:   translate (title),
            align:  'center',
            verticalAlign: 'middle',
            y: 33
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        tooltip: {
          pointFormat: '{point.percentage:.1f}%',
          style: {
      	    fontSize: '10px',
      	    padding: '8px'
      	  }
        },
        plotOptions: {
            pie: {
               colors : ['#f46d43', '#41b6c4'],
               dataLabels: {
                 enabled: false,
                 distance: -0,
                 style: {
                   fontWeight: 'bold',
                   color: 'white',
                   textShadow: '0px 1px 2px black'
                 }
               },
               startAngle: -90,
               endAngle:    90,
               size: 125,
               center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Estimate',
            innerSize: 50,
            data: [
                [translate ('consumed '  + variable),  50.0],
                [translate ('available ' + variable),  50.0]
            ]
        }]
    });

  return chart;
}

function initUraniumCharts () {

  // ---------------------------------------------------
  // resources pie charts:
  // ---------------------------------------------------
  chart_uranium_pie_1a = createHalfDonutChart ('container_uranium_pie_1a', 'resources', 'Resources 2050');
  chart_uranium_pie_2a = createHalfDonutChart ('container_uranium_pie_2a', 'resources', 'Resources 2050');
  chart_uranium_pie_3a = createHalfDonutChart ('container_uranium_pie_3a', 'resources', 'Resources 2050');

  // ---------------------------------------------------
  // reserves pie charts:
  // ---------------------------------------------------
  chart_uranium_pie_1b = createHalfDonutChart ('container_uranium_pie_1b', 'reserves', 'Reserves 2050');
  chart_uranium_pie_2b = createHalfDonutChart ('container_uranium_pie_2b', 'reserves', 'Reserves 2050');
  chart_uranium_pie_3b = createHalfDonutChart ('container_uranium_pie_3b', 'reserves', 'Reserves 2050');
}

function initFossilFuelsCharts () {

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // fossil fuels etc: overview chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    chart_ff_and_resources_all_1 = new Highcharts.Chart({

        credits: { enabled: false },
        chart: {
            renderTo: 'container_ff_and_resources_all_1',
            marginRight:20,
            type: 'area'
        },
        title: {
            style: {
                font: 'normal 11px "Trebuchet MS", Verdana, sans-serif'
            },
	    text: translate ('Coal')
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        plotOptions: {
          area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 0,
            marker: {
              enabled: false
            }
          }
        },
        xAxis: {
          min: 2011,
          max: 2050,
          tickInterval: 10,
          labels: {
            formatter: function() {
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }

          }
        },
        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
		fontWeight: 'normal'
            },
            text: translate ('GT'),
            margin: 5
          },
          min: 0,
          max: 2000,
          tickInterval: 200
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          valueSuffix: ' ',
          useHTML: true,
          headerFormat: '{point.key}<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
          name: translate ('Cumulative consumption'),
          color: '#f46d43',
          data: [ [2011, 50], [2015, 50], [2020, 50], [2025, 50], [2030, 50], [2035, 50], [2040, 50], [2045, 50], [2050, 50] ],
          marker: { radius: 2 }
         }
        ]
    });


// ---------------------------------------------------
// resources pie charts:
// ---------------------------------------------------
chart_ff_and_resources_pie_1a = createHalfDonutChart ('container_ff_and_resources_pie_1a', 'resources', 'Resources 2050');
chart_ff_and_resources_pie_2a = createHalfDonutChart ('container_ff_and_resources_pie_2a', 'resources', 'Resources 2050');
chart_ff_and_resources_pie_3a = createHalfDonutChart ('container_ff_and_resources_pie_3a', 'resources', 'Resources 2050');

// ---------------------------------------------------
// reserves pie charts:
// ---------------------------------------------------
chart_ff_and_resources_pie_1b = createHalfDonutChart ('container_ff_and_resources_pie_1b', 'reserves', 'Reserves 2050');
chart_ff_and_resources_pie_2b = createHalfDonutChart ('container_ff_and_resources_pie_2b', 'reserves', 'Reserves 2050');
chart_ff_and_resources_pie_3b = createHalfDonutChart ('container_ff_and_resources_pie_3b', 'reserves', 'Reserves 2050');


/*
    chart_ff_and_resources_pie_1a = new Highcharts.Chart({
       credits: { enabled: false },
       chart: {
            renderTo: 'container_ff_and_resources_pie_1a',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            spacingTop:    4,
            spacingLeft:   4,
            spacingRight:  4,
            spacingBottom: 7,
            plotShadow: false
        },
        title: {
            style: {
	      font: 'normal 10px "Trebuchet MS", Verdana, sans-serif'
	    },
            text:   'Resources 2050',
            align:  'center',
            verticalAlign: 'middle',
            y: 33
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
          pointFormat: '{point.percentage:.1f}%',
          style: {
      	    fontSize: '10px',
      	    padding: '8px'
      	  }
        },
        plotOptions: {
            pie: {
               colors : ['#f46d43', '#41b6c4'],
               dataLabels: {
                 enabled: false,
                 distance: -0,
                 style: {
                   fontWeight: 'bold',
                   color: 'white',
                   textShadow: '0px 1px 2px black'
                 }
               },
               startAngle: -90,
               endAngle:    90,
               size: 125,
               center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Estimate',
            innerSize: 50,
            data: [
                ['consumed resources',   50.0],
                ['available resources',  50.0]
            ]
        }]
    });


    chart_ff_and_resources_pie_2a = new Highcharts.Chart({
       credits: { enabled: false },
       chart: {
            renderTo: 'container_ff_and_resources_pie_2a',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            spacingTop:    4,
            spacingLeft:   4,
            spacingRight:  4,
            spacingBottom: 7,
            plotShadow: false
        },
        title: {
            style: {
	      font: 'normal 10px "Trebuchet MS", Verdana, sans-serif'
	    },
            text:   'Resources 2050',
            align:  'center',
            verticalAlign: 'middle',
            y: 33
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
          pointFormat: '{point.percentage:.1f}%',
          style: {
      	    fontSize: '10px',
      	    padding: '8px'
      	  }
        },
        plotOptions: {
            pie: {
               colors : ['#f46d43', '#41b6c4'],
               dataLabels: {
                 enabled: false,
                 distance: -0,
                 style: {
                   fontWeight: 'bold',
                   color: 'white',
                   textShadow: '0px 1px 2px black'
                 }
               },
               startAngle: -90,
               endAngle:    90,
               size: 125,
               center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Resource estimate',
            innerSize: 50,
            data: [
                ['consumed resources',   50.0],
                ['available resources',  50.0]
            ]
        }]
    });

    chart_ff_and_resources_pie_3a = new Highcharts.Chart({
       credits: { enabled: false },
       chart: {
            renderTo: 'container_ff_and_resources_pie_3a',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            spacingTop:    4,
            spacingLeft:   4,
            spacingRight:  4,
            spacingBottom: 7,
            plotShadow: false
        },
        title: {
            style: {
	      font: 'normal 10px "Trebuchet MS", Verdana, sans-serif'
	    },
            text:   'Resources 2050',
            align:  'center',
            verticalAlign: 'middle',
            y: 33
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
          pointFormat: '{point.percentage:.1f}%',
          style: {
      	    fontSize: '10px',
      	    padding: '8px'
      	  }
        },
        plotOptions: {
            pie: {
               colors : ['#f46d43', '#41b6c4'],
               dataLabels: {
                 enabled: false,
                 distance: -0,
                 style: {
                   fontWeight: 'bold',
                   color: 'white',
                   textShadow: '0px 1px 2px black'
                 }
               },
               startAngle: -90,
               endAngle:    90,
               size: 125,
               center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Resource estimate',
            innerSize: 50,
            data: [
                ['consumed resources',   50.0],
                ['available resources',  50.0]
            ]
        }]
    });

// ---------------------------------------------------
// reserves pie charts:
// ---------------------------------------------------

    chart_ff_and_resources_pie_1b = new Highcharts.Chart({
       credits: { enabled: false },
       chart: {
            renderTo: 'container_ff_and_resources_pie_1b',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            spacingTop:    4,
            spacingLeft:   4,
            spacingRight:  4,
            spacingBottom: 7,
            plotShadow: false
        },
        title: {
            style: {
	      font: 'normal 10px "Trebuchet MS", Verdana, sans-serif'
	    },
            text:   'Reserves 2050',
            align:  'center',
            verticalAlign: 'middle',
            y: 33
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
          pointFormat: '{point.percentage:.1f}%',
          style: {
      	    fontSize: '10px',
      	    padding: '8px'
      	  }
        },
        plotOptions: {
            pie: {
               colors : ['#f46d43', '#41b6c4'],
               dataLabels: {
                 enabled: false,
                 distance: -0,
                 style: {
                   fontWeight: 'bold',
                   color: 'white',
                   textShadow: '0px 1px 2px black'
                 }
               },
               startAngle: -90,
               endAngle:    90,
               size: 125,
               center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Reserve estimate',
            innerSize: 50,
            data: [
                ['consumed reserves',   50.0],
                ['available reserves',  50.0]
            ]
        }]
    });

    chart_ff_and_resources_pie_2b = new Highcharts.Chart({
       credits: { enabled: false },
       chart: {
            renderTo: 'container_ff_and_resources_pie_2b',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            spacingTop:    4,
            spacingLeft:   4,
            spacingRight:  4,
            spacingBottom: 7,
            plotShadow: false
        },
        title: {
            style: {
	      font: 'normal 10px "Trebuchet MS", Verdana, sans-serif'
	    },
            text:   'Reserves 2050',
            align:  'center',
            verticalAlign: 'middle',
            y: 33
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
          pointFormat: '{point.percentage:.1f}%',
          style: {
      	    fontSize: '10px',
      	    padding: '8px'
      	  }
        },
        plotOptions: {
            pie: {
               colors : ['#f46d43', '#41b6c4'],
               dataLabels: {
                 enabled: false,
                 distance: -0,
                 style: {
                   fontWeight: 'bold',
                   color: 'white',
                   textShadow: '0px 1px 2px black'
                 }
               },
               startAngle: -90,
               endAngle:    90,
               size: 125,
               center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Reserve estimate',
            innerSize: 50,
            data: [
                ['consumed reserves',   50.0],
                ['available reserves',  50.0]
            ]
        }]
    });

    chart_ff_and_resources_pie_3b = new Highcharts.Chart({
       credits: { enabled: false },
       chart: {
            renderTo: 'container_ff_and_resources_pie_3b',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            spacingTop:    4,
            spacingLeft:   4,
            spacingRight:  4,
            spacingBottom: 7,
            plotShadow: false
        },
        title: {
            style: {
	      font: 'normal 10px "Trebuchet MS", Verdana, sans-serif'
	    },
            text:   'Reserves 2050',
            align:  'center',
            verticalAlign: 'middle',
            y: 33
        },
        legend: { enabled: false },
        exporting: { enabled: false },
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
          pointFormat: '{point.percentage:.1f}%',
          style: {
      	    fontSize: '10px',
      	    padding: '8px'
      	  }
        },
        plotOptions: {
            pie: {
               colors : ['#f46d43', '#41b6c4'],
               dataLabels: {
                 enabled: false,
                 distance: -0,
                 style: {
                   fontWeight: 'bold',
                   color: 'white',
                   textShadow: '0px 1px 2px black'
                 }
               },
               startAngle: -90,
               endAngle:    90,
               size: 125,
               center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Reserve estimate',
            innerSize: 50,
            data: [
                ['consumed reserves',   50.0],
                ['available reserves',  50.0]
            ]
        }]
    });
*/


} // end initFossilFuelsCharts ()


// ***********************************************************
//                                                           *
// Land                                                      *
//                                                           *
// ***********************************************************


    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // lifestyle / Homes / Appliances section: number of appliances per household
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------

function initLandYieldCharts(footballPitchUnit) {

  var unit = "kg";
  if (footballPitchUnit == 1) unit = translate("kg");
  else                        unit = translate("kcal");

  var maxX = 4000000;
  var tick =  500000;
  if (footballPitchUnit == 1) {
    maxX = 5000;
    tick =  500;
  }


  chart_land_yields_football_pitch = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_land_yields_football_pitch',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Yields from one football pitch during one year')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { 
      categories: [translate('Beef (pasture fed)'), translate('Beef (grains') + '<br>' + translate('& resid. fed)'), translate('Sheep & goat meat') + '<br>' + translate('(pasture fed)'), 
                   translate('Sheep & goat meat') + '<br>' + translate('(grains & resid. fed)'), translate('Poultry'), translate('Pork'), translate('Eggs'), translate('Milk products'), 
                   translate('Cereals & grains'), translate('Sugars'), translate('Fruit & vegetable'), translate('Pulses'), translate('Vegetable oil')],
      labels: {
        rotation: -35,
        style: {
          fontSize:'10px'
        }
      }
    },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,


      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: unit,
        margin: 5
      },
      min: 0,
      max: maxX, 
      tickInterval: tick
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      // valueSuffix: ' EJ',
      useHTML: true,
      headerFormat: '{point.key}' + ' (' + translate(unit) + ')' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: '2011',
      color: '#8dd3c7',
      data: [null, null, null, null, null, null, null, null, null, null, null, null, null]
    }, {
      name: '2050',
      color: '#ffffb3',
      data: [null, null, null, null, null, null, null, null, null, null, null, null, null]
    }
    ]
  });
}

function initLandGrainFedCharts() {

  chart_land_yields_grain_fed = new Highcharts.Chart({

    credits: {  enabled: false },
    chart: {
      renderTo: 'container_land_yields_grain_fed',
      marginLeftt:5,
      type: 'column'
    },
    title: {
      style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
      text: translate('Livestock fed with cereals & residues')
    },
    legend: { enabled: false },
    exporting: { enabled: false },
    xAxis: { categories: [translate('Beef'), translate('Sheeps & goats'), translate('Pigs'), translate('Poultry')] },
    yAxis: {
      minPadding: 0.2,
      maxPadding: 0.2,
      title: { 
        style: {
          fontSize: '9px',
	  fontWeight: 'normal'
        },
        text: '%',
        margin: 5
      },
      min: 0,
      max: 100, 
      tickInterval: 10
    },
    tooltip: {
      shared: true,
      style: {
        fontSize: '9px',
        padding: '8px'
      },
      positioner: function () {
        return { x: 5, y: 30 };
      },
      // valueSuffix: ' EJ',
      useHTML: true,
      headerFormat: '{point.key}' + ' (' + translate('%') + ')' + '<table>',
      pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
                   '<td style="text-align: right">{point.y}</td></tr>',
      footerFormat: '</table>'
    },
    series: [
    {
      name: '2011',
      color: '#8dd3c7',
      data: [null, null, null, null]
    }, {
      name: '2050',
      color: '#ffffb3',
      data: [null, null, null, null]
    }
    ]
  });
}

function dodo (txt) {
//  alert ("testIt()");
  return txt + " (xxx)";
}


function initLandCharts () {

  // alert ("hi");
  // var titleX =  dodo('Land use');

    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    //
    // land: overview chart
    //
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------------

    chart_land_overview = new Highcharts.Chart({
        credits: { enabled: false },
        chart: {

            renderTo: 'container_land_overview',
            marginRight:20,
            type: 'area',
            events: {
                 load: function () {
                 }
            }
        },
        title: {
            style: { font: 'normal 11px "Trebuchet MS", Verdana, sans-serif' },
	    text: translate('Land use')
	    // text: dodo('Land use')
        },
        legend: { enabled: false },
        exporting: { enabled: false },

        plotOptions: {
          area: {
            stacking: 'normal',
            lineWidth: 0,
            marker: { enabled: false }
          }
        },
        xAxis: {
          min: 1990,
          max: 2050,
          tickInterval: 5,

          labels: {
            formatter: function() {
               if (this.value == '1990') return this.value;
               if (this.value == '2000') return this.value;
               if (this.value == '2010') return this.value;
               if (this.value == '2020') return this.value;
               if (this.value == '2030') return this.value;
               if (this.value == '2040') return this.value;
               if (this.value == '2050') return this.value;
               return '';
             }
          }
        },

        yAxis: {
          minPadding: 0.2,
          maxPadding: 0.2,
          title: {
            style: {
              fontSize: '9px',
	      fontWeight: 'normal'
            },
            text: translate('M ha'),
            // text: dodo('M ha'),
            margin: 5
          },
          min: 0,
          max: 14000,
          tickInterval: 1000
        },
        tooltip: {
          shared: true,
          style: {
      	    fontSize: '9px',
      	    padding: '8px'
      	  },
          positioner: function () {
            return { x: 15, y: 30 };
          },
          useHTML: true,
          headerFormat: '{point.key}' + ' (' + translate('M ha') + ')' + '<table>',
          pointFormat: '<tr><td style="color: {series.color}">{series.name}: </td>' +
          '<td style="text-align: right">{point.y}</td></tr>',
          footerFormat: '</table>'
        },
        series: [
         {
	  name: translate('Desert, ice etc'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#ffffcc',
          marker: { radius: 2 }
         }, {
	  name: translate('Settlements and infrastructure'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#bdbdbd',
          marker: { radius: 2 }
         }, {
	  name: translate('Natural grassland'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#a6cee3',
          marker: { radius: 2 }
         }, {
	  name: translate('Land for energy crops'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#1f78b4',
          marker: { radius: 2 }
         }, {
	  name: translate('Commercial forest'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#b2df8a',
          marker: { radius: 2 }
         }, {
	  name: translate('Forest'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#33a02c',
          marker: { radius: 2 }
         }, {
	  name: translate('Land for non-food crops'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#ff7f00',
          marker: { radius: 2 }
         }, {
	  name: translate('Land for food crops'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#fb9a99',
          marker: { radius: 2 }
         }, {
	  name: translate('Land for animals (pasture)'),
          data: [ [1990,111], [1995,111], [2000,111], [2005,111], [2010,111], [2011, 111], [2015, 111], [2020, 111], [2025, 111], [2030, 111], [2035, 111], [2040, 111], [2045, 111], [2050, 111] ],
          color: '#e31a1c',
          marker: { radius: 2 }
         }

        ]

    }, function(chart) {
        
       // ------------------------------------------------------------------------
       // add vertical separator line between observed and projected time series
       // ------------------------------------------------------------------------
       var x = chart.xAxis[0].toPixels(2010);
       var y  = chart.yAxis[0].toPixels(14000);

       var y1  = chart.yAxis[0].toPixels(0);
       var x1 = chart.xAxis[0].toPixels(1990);
       var x2 = chart.xAxis[0].toPixels(2100);

       chart.renderer.path(['M', x1, y1, 'L', x2, y1])
         .attr({'stroke-width': 1, stroke: 'black' }).add();

       chart.renderer.path(['M', x, y, 'L', x, 280])
         .attr({'stroke-width': 1, stroke: 'silver', dashstyle: 'dash' }).add();


       chart.renderer.text(translate('observed'), chart.xAxis[0].toPixels(1995), 45)
         .css({ color: '#C0C0C0', fontSize: '9px'}).add();

       chart.renderer.text(translate('projected'), chart.xAxis[0].toPixels(2015), 45)
         .css({ color: '#C0C0C0', fontSize: '9px' }).add();

/*
       chart.renderer.text(translate('observed'), x-45, 45)
         .css({ color: '#C0C0C0', fontSize: '9px'}).add();

       chart.renderer.text(translate('projected'), x+12, 45)
         .css({ color: '#C0C0C0', fontSize: '9px' }).add();
*/
    });



} // end initLandCharts ()



