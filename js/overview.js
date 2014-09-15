$(document).ready(function() {

	var myData = 
	[
		{
			type: 'columnrange',
		  name: 'Summary measures of health disparities by Educational attainment &#8212; 2012',
		  zIndex:0,
		  pointPlacement:-0.009,
		  data:
		  [
   			{ 
   				x:2008, 
   				low: 56.9, 
   				high: 95.5, 
   				color:'#aaaaaa',
   				spotlight: 0,
   				summaryText: '<b>Summary measures of health disparities by Educational attainment &#8212; 2008</b><ul><li>The best group rate for this objective, 95.5&#37;, was attained by persons aged 25 years and over with an educational attainment level of Advanced degree.</li><li>The worst group rate for this objective, 56.9&#37;, was attained by persons aged 25 years and over with an educational attainment level of < High school.</li><li>The absolute (or range) difference between the best and worst group rates was 38.6.</li><li>The best group rate was 1.679 times the worst group rate.</li><li>The best group rate was 1.202 times the average rate for all worse-off groups, 79.5&#37;.</li></ul>'
   			}, 

   			{ 
   				x:2009, 
   				low: 55.9, 
   				high: 95.1, 
   				color:'orange',
   				spotlight: 1,
   				summaryText: '<img style="float:left; margin-bottom:2px; z-index:-999;" src="img/spotlight_icon_small.png"><div style="width:465px; float:left; margin-top:4px; margin-bottom:8px; padding-left:5px; display:inline-block;"><span style="color:orange; font-weight:bold;">Spotlight on Disparities</span></div><br><p><b>Summary measures of health disparities by Educational attainment &#8212; 2009</b><ul><li>The best group rate for this objective, 95.1&#37;, was attained by persons aged 25 years and over with an educational attainment level of Advanced degree.</li><li>The worst group rate for this objective, 55.9&#37;, was attained by persons aged 25 years and over with an educational attainment level of < High school.</li><li>The absolute (or range) difference between the best and worst group rates was 39.3.</li><li>The best group rate was 1.703 times the worst group rate.</li><li>The best group rate was 1.225 times the average rate for all worse-off groups, 77.6&#37;.</li></ul>'
   			}, 

   			{ 
   				x:2010, 
   				low: 54.4, 	 
   				high: 95.3, 
   				color:'#aaaaaa',
   				spotlight: 0,
   				summaryText: '<b>Summary measures of health disparities by Educational attainment &#8212; 2010</b><ul><li>The best group rate for this objective, 95.3&#37;, was attained by persons aged 25 years and over with an educational attainment level of Advanced degree.</li><li>The worst group rate for this objective, 54.4&#37;, was attained by persons aged 25 years and over with an educational attainment level of < High school.</li><li>The absolute (or range) difference between the best and worst group rates was 40.9.</li><li>The best group rate was 1.751 times the worst group rate.</li><li>The best group rate was 1.244 times the average rate for all worse-off groups, 76.6&#37;.</li></ul>'
   			},

   			{ 
   				x:2011, 
   				low: 57.5, 
   				high: 95.2, 
   				color:'#aaaaaa',
   				spotlight:0,
   				summaryText: '<b>Summary measures of health disparities by Educational attainment &#8212; 2011</b><ul><li>The best group rate for this objective, 95.2&#37;, was attained by persons aged 25 years and over with an educational attainment level of Advanced degree.</li><li>The worst group rate for this objective, 57.5&#37;, was attained by persons aged 25 years and over with an educational attainment level of < High school.</li><li>The absolute (or range) difference between the best and worst group rates was 37.7.</li><li>The best group rate was 1.655 times the worst group rate.</li><li>The best group rate was 1.236 times the average rate for all worse-off groups, 77&#37;.</li></ul>'
   			},

   			{ 
   				x:2012, 
   				low: 56.3, 
   				high: 95.0,
   				color:'#aaaaaa', 
   				spotlight:0,
   				summaryText: '<b>Summary measures of health disparities by Educational attainment &#8212; 2012</b><ul><li>The best group rate for this objective, 95&#37;, was attained by persons aged 25 years and over with an educational attainment level of Advanced degree.</li><li>The worst group rate for this objective, 56.3&#37;, was attained by persons aged 25 years and over with an educational attainment level of < High school.</li><li>The absolute (or range) difference between the best and worst group rates was 38.7.</li><li>The best group rate was 1.687 times the worst group rate.</li><li>The best group rate was 1.234 times the average rate for all worse-off groups, 77&#37;.</li></ul>'
   			}, 
		  ]
		},
    
		{
			type:'spline',
			enableMouseTracking: false,
		  name: 'Best',
		   marker: {
		  	fillColor:'#0980AF'
		  }, 
		  data: 
		  [
		   	{
		      y: 95.5,
		      x: '2008',
		      population:'Advanced degree'
		    },

		    {
		      y: 95.1,
		      x: '2009',
		      population: 'Advanced degree'
		    },

		    {
		      y: 95.3,
		    	x: '2010',
		      population: 'Advanced degree'
		    },

		    {
		      y: 95.2,
		      x: '2011',
		      population: 'Advanced degree'
		    },

		    {
		      y: 95.0,
		      x: '2012',
		    	population: 'Advanced degree'
		    }
		   ]
		}, 

		{
			type: 'spline',
			enableMouseTracking: false,
		  name: 'Worst',
		  marker: {
		  	fillColor: "#000000"
		  },

		  //set enable mouse tracking to false here 

		  data: 
		  [
		    {
		    	y: 56.9,
		      x: '2008',
		      population:'< High school'
		    },

		    {
		    	y: 55.9,
		      x: '2009',
		      population:'< High school'
		    },

		    {
		    	y: 54.4,
		      x: '2010',
		      population:'< High school'
		    },

		    {
		    	y: 57.5,
		      x: '2011',
		      population:'< High school'
		    },

		    {
		    	y: 56.3,
		      x: '2012',
		      population:'< High school'
		    }
		  ]
		}
	];

	var chart = new Highcharts.Chart
	(
		{

			title: {
				text: 'Disparities overview by Educational Attainment',
				align: 'left',
				style: {
					display: 'none'
				}
			},

			credits: {
        enabled: false
       },

			subtitle: {
				text: 'Persons aged 25 years and over',
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
      	enabled: true,
      	barBackgroundColor: 'gray',
        barBorderRadius: 7,
        barBorderWidth: 0,
        buttonBackgroundColor: 'gray',
        buttonBorderWidth: 0,
        buttonArrowColor: 'yellow',
        buttonBorderRadius: 7,
        rifleColor: 'yellow',
        trackBackgroundColor: 'white',
        trackBorderWidth: 1,
        trackBorderColor: 'silver',
        trackBorderRadius: 7
	    },

	    legend: {
	    	enabled: false
	    },

	    tooltip: {
	    	backgroundColor:'rgba(255,255,255,1)',
	    	useHTML: true,
	   
	    	formatter: function(){
	    		var myText = this.point.summaryText; //ADD CONDITIONAL SPOTLIGHT LOGIC HERE AND SPOTLIGHT 1 to DATA OBJECTS
	    		var myLabel ='<div style="width:600px; padding:5px; overflow:auto; white-space:normal;">' + myText + '</div>';

	    		console.log(this);
	    		return myLabel;
        }
	    	
	    },

			navigation: {
      	buttonOptions: {
        	enabled: false
      	}
    	},

	    xAxis: {
	    	//categories: ['2008', '2009', '2010', '2011', '2012'], 
	    	labels: {
	    		useHTML: true,
	    		formatter: function() {
	    			//console.log(this.value); //ADD STYLING and SPOTLIGHT CONDITIONALLY HERE

	    			if (this.value !== 2009) {
	    					var link = '<a href="page_details_' + this.value + '.html">' + this.value + '</a>';
	    			} else {
	    					var link = '<span ><a style="color:orange;" href="page_details_' + this.value + '.html">' + this.value + '</a></span><br><div style="margin-top:5px; text-align:center"><img src="img/spotlight_icon_small.png"</div>';
	    			}
            return link;
	    		}
	    	}

	    		/*
												formatter: function(){
							if (this.series.name == 'Best') {
								var label = '<div style="z-index: 1;" class="popLabel best">' + '<span style="font-weight: bold;">' + this.y + '</span><br>'+ this.point.population + '</div>';
								return label;
							}

							else if (this.series.name == 'Worst') {
								var label = '<div class="popLabel worst">' + '<span style="font-weight: bold; z-index:-9999;">' + this.y + '</span><br>'+ this.point.population + '</div>';
								return label;
	    		*/

	    	//min:1, 
	    	//max:3,
	    },

	    yAxis: {
					min: 0,
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
				}, 

				spline: {
					dataLabels: {
						zIndex: 0,
						useHTML: true,
						style: {
							textAlign: 'center',
							//width: '80px',
							fontSize: '9px'
						},

						enabled: true,
						formatter: function(){
							if (this.series.name == 'Best') {
								var label = '<div style="z-index: 1;" class="popLabel best">' + '<span style="font-weight: bold;">' + this.y + '</span><br>'+ this.point.population + '</div>';
								return label;
							}

							else if (this.series.name == 'Worst') {
								var label = '<div class="popLabel worst">' + '<span style="font-weight: bold; z-index:-9999;">' + this.y + '</span><br>'+ this.point.population + '</div>';
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
































