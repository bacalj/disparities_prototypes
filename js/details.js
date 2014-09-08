$(document).ready(function() {
	//alert('i like javascript');
	$('#details-container').highcharts({

		chart: {
			type: 'column',
			width:800,
			height:350,
			panning: true
		},

		tooltip: {
			enabled: true,
			pointFormat: '{point.y}%'
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
			label: {
				text: '% (percent)'
			}
		},

		xAxis:  {
			/*categories: [
				'White only, not Hispanic or Latino	', 
				'Not Hispanic or Latino', 
				'2 or more races', 
				'Asian only', 
				'White only',
				'Black or African-American only',
				'Black or African-American only, not Hispanic or Latino',
				'Native Hawaiian or Other Pacific Islander only',
				'Hispanic or Latino',
				'American Indian or Alaska Native only'
			],*/

			labels: {
				enabled:false, 
				style: {
					fontSize:'9px'
				}
			},

			//min:1, 
			//max:1,
			tickLength: 0
		}, 	

		plotOptions: {
			column: {
				colorByPoint: false, 
				grouping: false
			}
		},
	 	/*scrollbar: {
      enabled: true
	   },

		rangeSelector: {
			enabled:true, 
			buttons: 
			[
				{
					type: 'year',
					count: 1, 
					text: 'zoon to one year'
				},

				{
					type: 'all',
					text: 'see all years'
				},

			]
		}, */

		series: 
		[

			{
				name: 'errory',
				type: 'errorbar',
				zIndex: 4,
				data: 
				[
					[54.1,57.7], 
					[74.7, 76.8], 
					[79.8, 81.9], 
					[82.7, 85.4],
					[90.9, 92.4],
					[94.4, 95.9]
				]
			},

			{
				type: 'column',
				name: '< High school',
				data: [55.9],
				pointPlacement: 0
			}, 

			{
				type: 'column',
				name: 'High school',
				data: [75.7],
				pointPlacement: 1
			}, 

			{
				type: 'column',
				name: 'Some college',
				data: [80.9],
				pointPlacement: 2
			},

			{
				type: 'column',
				name: 'Associates degree',
				data: [84.1],
				pointPlacement: 3
			},

			{
				type: 'column',
				name: '4-year college degree',
				data: [91.6],
				pointPlacement: 4
			},

			{
				type: 'column',
				name: 'Advanced degree',
				data: [95.1],
				pointPlacement: 5
			}

			/*going back to object style for now
			{
				name: 'Disparities details',
				type: 'column',
				data: [86.3, 84.8, 84.2, 82.9, 82.4, 79.4, 79.3, 75.6, 68.0, 56.0]
			}, 
			*/
		]
		 
	});

	$('#toggler').click(function(){
		var buttonText = $('#footnotes-text').is(':visible') ? 'Show Footnotes' : 'Hide Footnotes';
		$('#toggler').text(buttonText);
		$('#footnotes-text').slideToggle(300);
	});

});