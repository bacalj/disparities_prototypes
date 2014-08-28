//each year
	//data like this
	// | YEAR | OBJECTIVE | POPULATION | PERCENT |
	//for each year, find the population with the highest number and plot it where y = %
	//for each year, find the population with the lowest number and plot it where y = 
	//plot a line from lo to hi

$(document).ready(function() {

	var i = 0;

	var myData = 
	[
		{
			x:2008, low:70, high:80, pops:"Bears"
		},

		{
			x:2009, low:60, high:87, pops:"Geese"
		},

		{
			x:2010, low:70, high:77, pops:"Snakes"
		},

		{
			x:2011, low:72, high:87, pops:"Trolls"
		},

		{
			x:2012, low:60, high:67, pops:"Fish"
		}
	];

	$('#chart_container').highcharts({
		chart: {
			type: 'columnrange',
			inverted: false
		},

		title: {
			text: 'Summary Measures of Health Disparities'
		},

		subtitle: {
			text: 'by Race/Ethnicity'
		},

		yAxis: {
			min: 50,
			max: 100,
			title: {
				text: '% (percent)'
			}
		},

		tooltip: {
			valueSuffix: '%'
		},

		plotOptions: {

			series: {
				color:'black',
				pointWidth: 2
			}, 

			columnrange: {
				dataLabels: {
					enabled: true,
					align:'center',
					formatter: function () {
						var label = this.point.pops + ' ' + this.y;
						console.log(this);
						return label;
					}
					/*formatter: function() {
    				var lowPoint = getLow(this.point.low);
    				var highPoint = getHigh(this.point.high);
    				return this.y;
					}*/
				},
			}
		},

		legend: {
			enabled: false
		},

		series: 
		[
			{
				name: 'Disparities',
				data: myData
			}
		]
	});
});
