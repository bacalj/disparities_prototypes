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
			categories: [
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
			],

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
				colorByPoint: true
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
				name: 'Disparities details',
				type: 'column',
				data: [86.3, 84.8, 84.2, 82.9, 82.4, 79.4, 79.3, 75.6, 68.0, 56.0]
			}, 

			{
				name: 'errory',
				type: 'errorbar',
				data: 
				[
					[85.7,86.9], 
					[84.2,85.4], 
					[82.0,86.5], 
					[81.3, 84.5],
					[81.8, 83.0],
					[78.3, 80.4],
					[78.2, 80.4],
					[62.4, 88.8],
					[66.7, 69.2],
					[39.6, 72.3]
				]
			}
		]

	/*[
		  //below works, but using above for error bar convenience 
		  {
		  	type: 'column',
		  	name: 'White only, not Hispanic or Latino',
		  	data: [86.3]
		  },

		  {
		  	type: 'column',
		  	name: '2 or more races',
		  	data: [86.3]
		  },

		  {
		  	type: 'column',
		  	name: 'Asian only',
		  	data: [86.3]
		  },

		  {
		  	type: 'column',
		  	name: 'Black or African American only, not Hispanic or Latino',
		  	data: [86.3]
		  },

		  {
		  	type: 'column',
		  	name: 'Hispanic or Latino',
		  	data: [86.3]
		  },

		  {
		  	type: 'column',
		  	name: 'American Indian or Alaska Native Only',
		  	data: [86.3]
		  }
		  //commented out above is a working version where each bar is a serie object
		]*/
	});

	$('#toggler').click(function(){
		var buttonText = $('#footnotes-text').is(':visible') ? 'Show Footnotes' : 'Hide Footnotes';
		$('#toggler').text(buttonText);
		$('#footnotes-text').slideToggle(300);
	});

});