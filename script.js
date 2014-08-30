$(document).ready(function() {

	var myData = //could be called "mySeriesesArray"!!!
	[
		{
			type: 'columnrange',
		  name: 'Disparities',
		  zIndex:0,
		  pointPlacement: -.01,
		  data:
		  [
   			{ x:2008, low: 66.7, high: 87.5}, //this is temporary - hard coded in for testing alignment
   			{ x:2009, low: 67.1, high: 86.8 }, //working on a function below to pull necessary data from object
   			{ x:2010, low: 56, high: 86.3 },
   			{ x:2011, low: 65.8, high: 87.1 },
   			{ x:2012, low: 69.6, high: 87.9 }
		  ]
		},
      //at the moment type and name attributes being set in data, but 
      //later you should make a function that sets myData[0].type to 'columnrange' etc.
		{
			type:'spline',
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
			type: 'spline',
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

	function disparityData(arr){ //the unfinished function
		var someData = arr;
		console.log("FUnction talking here:")
		console.log(someData[0].name);
	}

	disparityData(myData);

	var chart = new Highcharts.Chart
	(
		{

			title: {
				text: 'Disparities'
			},

	    chart:{
	      renderTo: 'chart_container',
	    },

	    plotOptions: {
				series:{
					lineWidth: 0,
					marker: {
						radius:6, 
						symbol: 'circle'
					}
				},

				columnrange: {
					pointWidth: 1,
				}	
			}, 

	    series: myData
	    
		}/*,
		function(chart){
			chart.renderer.path(
				['M', 200, 30, 'L', 100, 100]
			).attr(
				{'stroke-width': 2, stroke: 'blue'}
			).add();
		}*/
	);


	console.log(chart); 
	console.log(chart.series[2]); 
	console.log(chart.series[2].data); 
	console.log(chart.series[2].data[0]); 
	console.log(chart.series[2].data[0].population); //White only, not Hispanic or Latino

	//example of how you can set attributes of series objects...so you can start w 'raw' data...
	console.log(myData[0].type);
	myData[0].type = 'woofity woofity';
	console.log(myData[0].type);
	}
);


//(the array of series-arrays is the value of the series property!!!

































