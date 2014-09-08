$(document).ready(function() {

	var myData = 
	[
		{
			type: 'columnrange',
		  name: 'Summary measures of health disparities by Race/Ethnicity',
		  zIndex:0,
		  pointPlacement:-0.009,
		  data:
		  [
   			{ 
   				x:2008, 
   				low: 66.7, 
   				high: 87.5, 
   				color:'#aaaaaa',
   				summaryText: '<b>Summary measures of health disparities by Race/Ethnicity</b><ul><li>The best group rate for this objective, 87.5&#37;, was attained by the White only, not Hispanic or Latino population.</li><li>The worst group rate for this objective, 66.7&#37;, was attained by the Hispanic or Latino population.</li><li>The absolute (or range) difference between the best and worst group rates was 20.8.</li><li>The best group rate was 1.311 times the worst group rate.</li><li>The best group rate was 1.122 times the average rate for all worse-off groups, 78&#37;.</li></ul>'
   			}, 

   			{ 
   				x:2009, 
   				low: 67.1, 
   				high: 86.8, 
   				color:'#aaaaaa',
   				summaryText: '<b>Summary measures of health disparities by Race/Ethnicity</b><ul><li>The best group rate for this objective, 86.8&#37;, was attained by the White only, not Hispanic or Latino population.</li><li>The worst group rate for this objective, 67.1&#37;, was attained by the Hispanic or Latino population.</li><li>The absolute (or range) difference between the best and worst group rates was 19.7.</li><li>The best group rate was 1.293 times the worst group rate.</li><li>The best group rate was 1.146 times the average rate for all worse-off groups, 75.8&#37;.</li></ul>'
   			}, 

   			{ 
   				x:2010, 
   				low: 56, 	 
   				high: 86.3, 
   				color:'orange',
   				summaryText: '<b>Summary measures of health disparities by Race/Ethnicity</b><ul><li>The best group rate for this objective, 86.3&#37;, was attained by the White only, not Hispanic or Latino population.</li><li>The worst group rate for this objective, 56&#37;, was attained by the American Indian or Alaska Native only population.</li><li>The absolute (or range) difference between the best and worst group rates was 30.3.</li><li>The best group rate was 1.542 times the worst group rate.</li><li>The best group rate was 1.161 times the average rate for all worse-off groups, 74.3&#37;.</li></ul>'
   			},

   			{ 
   				x:2011, 
   				low: 65.8, 
   				high: 87.1, 
   				color:'#aaaaaa',
   				summaryText: '<b>Summary measures of health disparities by Race/Ethnicity/b><ul><li>The best group rate for this objective, 87.1&#37;, was attained by the White only, not Hispanic or Latino population.</li><li>The worst group rate for this objective, 65.8&#37;, was attained by the American Indian or Alaska Native only population.</li><li>The absolute (or range) difference between the best and worst group rates was 21.3.</li><li>The best group rate was 1.324 times the worst group rate.</li><li>The best group rate was 1.134 times the average rate for all worse-off groups, 76.8&#37;.</li></ul>'
   			},

   			{ 
   				x:2012, 
   				low: 69.6, 
   				high: 87.9,
   				color:'#aaaaaa', 
   				summaryText: '<b>Summary measures of health disparities by Race/Ethnicity</b><ul><li>The best group rate for this objective, 87.9&#37;, was attained by the Native Hawaiian or Other Pacific Islander only population.</li><li>The worst group rate for this objective, 69.6&#37;, was attained by the Hispanic or Latino population.</li><li>The absolute (or range) difference between the best and worst group rates was 18.4.</li><li>The best group rate was 1.264 times the worst group rate.</li><li>The best group rate was 1.097 times the average rate for all worse-off groups, 80.1&#37;.</li></ul>'
   			}, 
		  ]
		},
    
		{
			type:'spline',
		  name: 'Best',
		   marker: {
		  	fillColor:'#0980AF'
		  }, 
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
		  marker: {
		  	fillColor: "#000000"
		  },
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

			title: {
				text: 'Disparities overview by Race/Ethnicity',
				align: 'left',
				style: {
					display: 'none'
				}
			},

			credits: {
        enabled: false
       },

			subtitle: {
				text: 'Persons with medical insurance (percent, <65 years)',
				align: 'left',
				style: {
					display: 'none'
					}
				},

	    chart:{
	      renderTo: 'overview-container',
	      width: 800
	    },

	    scrollbar: {
      	enabled: true
	    },

	    legend: {
	    	enabled: false
	    },

	    tooltip: {
	    	useHTML: true,
	    	//style: {
	    	//	fontSize: '10px',
	    	//	backgroundColor: 'red'
	    	//}
	    },

	    xAxis: {
	    	//categories: ['2008', '2009', '2010', '2011', '2012'], 
	    	labels: {
	    		useHTML: true,
	    		formatter: function() {
	    			console.log(this.value);
	    			var link = '<a href="page_details_' + this.value + '.html">' + this.value + '</a>';
	    			console.log(link);
            return link;
	    		}
	    	}

	    	//min:1, 
	    	//max:3,
	    },

	    yAxis: {
					min: 50,
					max: 100,
					title: {
						text: '% (percent)', 
						style: {
							color: '#0980AF'
						}
					}
			},

	    plotOptions: {
				series:{
					lineWidth: 0,
					marker: {
						radius:0, 
						symbol: 'circle'
					}
				},

				columnrange: {
					colorByPoint: true,
					pointWidth: 50, 
					color: '#9b9b9b',
					tooltip: {
						pointFormat: '<span>{point.summaryText}<br</span>'
					}
				}, 

				spline: {
					dataLabels: {
						useHTML: true,
						style: {
							textAlign: 'center',
							//width: '80px',
							fontSize: '9px'
						},
						enabled: true,
						formatter: function(){
							if (this.series.name == 'Best') {
								var label = '<div class="popLabel best">' + '<span style="font-weight: bold;">' + this.y + '</span><br>'+ this.point.population + '</div>';
								return label;
							}

							else if (this.series.name == 'Worst') {
								var label = '<div class="popLabel worst">' + '<span style="font-weight: bold;">' + this.y + '</span><br>'+ this.point.population + '</div>';
								return label;
							}
						}
					}
				}	
			}, 
	    series: myData,
		},

		function (chart) {
			//chart.renderer.text('some text', 10, 70)
      //.add();
    }
	);
	$('#toggler').click(function(){
		var buttonText = $('#footnotes-text').is(':visible') ? 'Show Footnotes' : 'Hide Footnotes';
		$('#toggler').text(buttonText);
		$('#footnotes-text').slideToggle(300);
	});

});
































