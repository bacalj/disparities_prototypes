$(function () {

    $('#chart_container').highcharts({

        chart: {
            type: 'columnrange',
            inverted: false
        },

        title: {
            text: 'Disparities Overview by Race/Ethnicity'
        },

        subtitle: {
            text: 'Persons with medical insurance (percent, <65 years)'
        },

        xAxis: {
            categories: ['2008', '2009', '2010', '2011', '2012']
        },

        yAxis: {
            title: {
                text: '% (percent)'
            }
        },

        tooltip: {
            valueSuffix: '%'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        //return this.y //append label perhaps;
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Series Name',
            data: [
                [66.7, 87.5],
                [67.1, 87.0],
                [65.0, 86.3],
                [65.8, 87.1],
                [69.6, 87.9]
            ]
        }]

    });

});