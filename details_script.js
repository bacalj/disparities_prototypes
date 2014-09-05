$(document).ready(function() {
	//alert('i like javascript');
	$('#details-container').highcharts({

		chart: {
			type: 'column',
			width:800,
			panning: true
		},

		title: {
			style: {
				display:'none'
			}
		},

		xAxis:  {
			//categories: ['White only, not Hispanic or Latino', 'Bob'],
			labels: {
				enabled:false
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
				data: [10, 30, 50, 70, 90]
			}, 

			{
				name: 'errory',
				type: 'errorbar',
				data: [[5,13], [26,37], [43,56], [64,73],[82,92]]
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
	
	console.log(chart.series[0]);
	$('#toggler').click(function(){
		var buttonText = $('#footnotes-text').is(':visible') ? 'Show Footnotes' : 'Hide Footnotes';
		$('#toggler').text(buttonText);
		$('#footnotes-text').slideToggle(300);
	});

});