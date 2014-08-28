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

    tooltip: {
        formatter: function () {
            return 'special nice:  <br>' + this.point.foo + '<br>' + this.point.blug;
        }
    },

    series: [{
        name: 'Ya',
        data: [{
            y: 3,
            foo: 'gorf gorf',
            blug:'snah'
        }, {
            y: 7,
            foo: 'fligiity',
            blug: 'gork'
        }, {
            y: 1,
            foo: 'shib',
            blug: 'kroop'
        }]
    }]
	});
});
