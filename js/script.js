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

setTimeout(function() {
	chart.load({
	    url: 'app/getCSV.php?table=temperatura',
	    mimeType: 'csv'
	});
}, 700);

setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=condutividade',
    	mimeType: 'csv'
	});
}, 1400);

setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=vazao',
    	mimeType: 'csv'
	});
}, 2800);
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=energia',
    	mimeType: 'csv'
	});
}, 3500);
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=iluminacao',
    	mimeType: 'csv'
	});
}, 4200);
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=ph',
    	mimeType: 'csv'
	});
}, 4900);
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=ph',
    	mimeType: 'csv'
	});
}, 4900);

//load current value grip

setTimeout(function() {
	alert(body);
	
}, 5500);

