$(document).ready(function() {
	//alert('i like javascript');
	$('#details-container').highcharts({

		chart: {
			type: 'column',
			width:800
		},

		xAxis:  {
			//categories: ['Foo', 'Bar']
			labels: {enabled:false},
			tickLength: 0
		}, 	

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
		  	data: [84.2]
		  },

		  {
		  	type: 'column',
		  	name: 'Asian only',
		  	data: [82.9]
		  },

		  {
		  	type: 'column',
		  	name: 'Black or African American only, not Hispanic or Latino',
		  	data: [79.4]
		  },

		  {
		  	type: 'column',
		  	name: 'Hispanic or Latino',
		  	data: [68.0]
		  },

		  {
		  	type: 'column',
		  	name: 'American Indian or Alaska Native Only',
		  	data: [56.0]
		  }


		]
	});

	$('#toggler').click(function(){
		var buttonText = $('#footnotes-text').is(':visible') ? 'Show Footnotes' : 'Hide Footnotes';
		$('#toggler').text(buttonText);
		$('#footnotes-text').slideToggle(300);
	});
	
});