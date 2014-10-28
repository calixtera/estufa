var chart = c3.generate({
	bindto: '#grafico',
    data: {
	    x: 'data',
	    xFormat: '%Y-%m-%d %H:%M:%S',
        url: 'app/getCSV.php?table=umidade',
        mimeType: 'csv'
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:%M:%S'
            }
        }
    }
});
/*
chart.load({
    url: 'app/getCSV.php?table=temperatura',
    mimeType: 'csv'
});
*/
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=condutividade',
    	mimeType: 'csv'
	});
}, 700);
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=vazao',
    	mimeType: 'csv'
	});
}, 1400);

