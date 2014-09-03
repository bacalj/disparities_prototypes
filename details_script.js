$(document).ready(function() {
	//alert('i like javascript');
	$('#details-container').highcharts({

		chart: {
			type: 'column'
		},

		xAxis:  {
			//categories: ['Foo', 'Noo', 'Zoo', 'Shoe']
		}, 

    rangeSelector: {
      allButtonsEnabled: true,
      inputEnabled: $('#selector-container').width() > 480,
      selected: 2
            },		

		series: 
		[
		  {
		  	type: 'column',
		  	name: 'group1',
		  	data: [4]
		  },

		  {
		  	type: 'column',
		  	name: 'group2',
		  	data: [7]
		  },
		]
	});
});