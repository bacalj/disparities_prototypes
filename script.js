$(document).ready(function() {

		$('#chart_container').highcharts(
		{

				chart: 
				{
					type: 'columnrange',
					inverted: false
				},

				title: 
				{
					text: 'Disparities Overview by Race/Ethnicity'
				},

				subtitle: 
				{
					text: 'Persons with medical insurance (percent, <65 years)'
				},

				xAxis: 
				{
					categories: ['2008', '2009', '2010', '2011', '2012']
				},

				yAxis: 
				{
					min: 50,
					max: 100,
					title: 
					{
						text: '% (percent)'
					}
				},

				tooltip: 
				{
					valueSuffix: '%'
				},

				plotOptions: 
				{

					series: 
					{
						color:'black',
						pointWidth: 2
					}, 

					columnrange: 
					{
						dataLabels: 
						{
							enabled: true,
							align:'center',
							formatter: function () 
							{
								return this.y;
							}
						},
					}
				},

				legend: 
				{
					enabled: false
				},

				series: [
				{
					name: 'Disparities',
					data: [
						[66.7, 87.5],
						[67.1, 87.0],
						[65.0, 86.3],
						[65.8, 87.1],
						[69.6, 87.9]
					]
				}]
		});
		console.log(this);
});
