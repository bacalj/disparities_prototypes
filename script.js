//each year
	//data like this
	// | YEAR | OBJECTIVE | POPULATION | PERCENT |
	//for each year, find the population with the highest number and plot it where y = %
	//for each year, find the population with the lowest number and plot it where y =
	//plot a line from lo to hi

$(document).ready(function() {

	var chart = new Highcharts.Chart({

    chart: {
        renderTo: 'chart_container'
    },

    series: 
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
    ]
	});
});
