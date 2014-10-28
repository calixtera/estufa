var chart = c3.generate({
	bindto: '#temperatura',
    data: {
	    x: 'data',
	    xFormat: '%Y-%m-%d %H:%M:%S',
        url: 'app/getCSVTemperatura.php',
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