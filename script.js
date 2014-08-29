$(document).ready(function() {

	var myData = 
	[

		{
		  name: 'Best',
		  data: 
		  [
		   	{
		      y: 87.5,
		      x: '2008',
		      population:'White only, not Hispanic or Latino'
		    },

		    {
		      y: 86.8,
		      x: '2009',
		      population: 'White only, not Hispanic or Latino'
		    },

		    {
		      y: 86.3,
		    	x: '2010',
		      population: 'White only, not Hispanic or Latino'
		    },

		    {
		      y: 87.1,
		      x: '2011',
		      population: 'White only, not Hispanic or Latino'
		    },

		    {
		      y: 87.9,
		      x: '2012',
		    	population: 'Native Hawaiian or Other Pacific Islander'
		    }
		   ]
		}, 

		{
		  name: 'Worst',
		  data:
		  [
		    {
		    	y: 66.7,
		      x: '2008',
		      population:'Hispanic or Latino'
		    },

		    {
		    	y: 67.1,
		      x: '2009',
		      population:'Hispanic or Latino'
		    },

		    {
		    	y: 56.0,
		      x: '2010',
		      population:'American Indian or Alaska Native'
		    },

		    {
		    	y: 65.8,
		      x: '2011',
		      population:'American Indian or Alaska Native'
		    },

		    {
		    	y: 69.6,
		      x: '2012',
		      population:'Hispanic or Latino'
		    }
		  ]
		}
	];


	var chart = new Highcharts.Chart
	(
		{

	    chart:{
	      renderTo: 'chart_container'
	    },

	    plotOptions: {
				series:{
					lineWidth:0
				}
			}, 

	    series: myData
	    
		}/*,
		function(chart){
			chart.renderer.path(['M', 200, 30, 'L', 100, 100]).attr({'stroke-width': 2, stroke: 'blue'}).add();
		}*/
	);

	//for to inspect the objects
	console.log(myData);

	var dataSetBest = chart.options.series[0].data;
	var dataSetWorst = chart.options.series[1].data;
	
	console.log('drilling down, see?');
	console.log(dataSetBest);
	console.log(dataSetBest[0]);
	console.log(dataSetBest[0].x);

});
