$(document).ready(function() {

	$('#details-container').highcharts({

		chart: {
			type: 'column',
			width:800,
			height:350,
			panning: true
		},

	colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE', 
   '#92A8CD' , '#A47D7C', '#B5CA92'],

		tooltip: {
			formatter: function(){
				var i = (this.point.series.index) -1;
				var lo = this.series.chart.options.series[0].data[i][0];
				var hi = this.series.chart.options.series[0].data[i][1];
				var ppl = this.point.series.name;
				var pct = this.y;
				
				var label = 'Year: 2009<br>' + ppl + ':' + '<b>' + ' ' + pct + '%</b><br>' + '('+lo+', '+hi+')';
				return label;
			}
		},

		credits: {
      enabled: false
    },

		title: {
			style: {
				display:'none'
			}
		},

		legend: {
			enabled: true
		},

		navigation: {
      buttonOptions: {
        enabled: false
      }
    },

		yAxis: {
			min:0, 
			max:100,
			title: {
				text: '% (percent)', 
			}
		},

		xAxis:  {
			labels: {
				enabled:false, 
				style: {
					fontSize:'9px'
				}
			},
			tickLength: 0
		}, 	

		plotOptions: {
			column: {
				events: {
					legendItemClick:false
				},
				colorByPoint: false, 
				grouping: false
			}
		},

		series: 
		[

			{
				name: 'errorSeries',
				type: 'errorbar',
				zIndex: 4,
				data: 
				[
					[94.4, 95.9],
					[90.9, 92.4],
					[82.7, 85.4],
					[79.8, 81.9],
					[74.7, 76.8],
					[54.1, 57.7]
				]
			},

			{
				type: 'column',
				name: 'Advanced degree',
				data: [95.1],
				pointPlacement: 0
			},

			{
				type: 'column',
				name: '4-year college degree',
				data: [91.6],
				pointPlacement: 1
			},

			{
				type: 'column',
				name: 'Associates degree',
				data: [84.1],
				pointPlacement: 2
			},

			{
				type: 'column',
				name: 'Some college',
				data: [80.9],
				pointPlacement: 3
			},

			{
				type: 'column',
				name: 'High school',
				data: [75.7],
				pointPlacement: 4
			}, 

			{
				type: 'column',
				name: '< High school',
				data: [55.9],
				pointPlacement: 5
			}, 
		]		 
	});

	$('#toggler').click(function(){
		var buttonText = $('#footnotes-text').is(':visible') ? 'Show Footnotes' : 'Hide Footnotes';
		$('#toggler').text(buttonText);
		$('#footnotes-text').slideToggle(300);
	});

});