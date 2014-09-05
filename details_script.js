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
			//categories: ['2012'],
			labels: {
				enabled:false
			},

			//min:1, 
			//max:1,
			tickLength: 0
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
		  	data: [96.3]
		  },

		  {
		  	type: 'column',
		  	name: 'Hispanic or Latino',
		  	data: [56.3]
		  },

		  {
		  	type: 'column',
		  	name: 'American Indian or Alaska Native Only',
		  	data: [36.3]
		  }
		]
	});

	$('#toggler').click(function(){
		var buttonText = $('#footnotes-text').is(':visible') ? 'Show Footnotes' : 'Hide Footnotes';
		$('#toggler').text(buttonText);
		$('#footnotes-text').slideToggle(300);
	});

});