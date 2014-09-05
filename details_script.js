$(document).ready(function() {
	//alert('i like javascript');
	$('#details-container').highcharts({

		chart: {
			type: 'column',
			width:800
		},

		title: {
			style: {
				display:'none'
			}
		},

		xAxis:  {
			categories: ['2008', '2009', '2010', '2011', '2012'],
			labels: {
				enabled:true
			},

			min:0, 
			max:4,
			tickLength: 0
		}, 	

	 	scrollbar: {
      enabled: true
	   },

		/*rangeSelector: {
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
		  	data: [[86.3], [44.4], [89.4],[86.3], [54.4]]
		  },

		  {
		  	type: 'column',
		  	name: '2 or more races',
		  	data: [[86.3], [54.4], [79.4],[76.3], [54.4]]
		  },

		  {
		  	type: 'column',
		  	name: 'Asian only',
		  	data: [[86.3], [74.4], [29.4],[86.3], [94.4]]
		  },

		  {
		  	type: 'column',
		  	name: 'Black or African American only, not Hispanic or Latino',
		  	data: [[96.3], [54.4], [79.4],[86.3], [58.4]]
		  },

		  {
		  	type: 'column',
		  	name: 'Hispanic or Latino',
		  	data: [[56.3], [64.4], [69.4],[86.3], [74.4]]
		  },

		  {
		  	type: 'column',
		  	name: 'American Indian or Alaska Native Only',
		  	data: [[36.3], [54.4], [83.4],[86.3], [44.4]]
		  }
		]
	});

	$('#toggler').click(function(){
		var buttonText = $('#footnotes-text').is(':visible') ? 'Show Footnotes' : 'Hide Footnotes';
		$('#toggler').text(buttonText);
		$('#footnotes-text').slideToggle(300);
	});

});