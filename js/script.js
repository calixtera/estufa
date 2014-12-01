

(function($){

$.ajax({
    url: "app/DAO/allDAO.php"
  });
  
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
}, 600);

setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=condutividade',
    	mimeType: 'csv'
	});
}, 600);

setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=vazao',
    	mimeType: 'csv'
	});
}, 1200);
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=energia',
    	mimeType: 'csv'
	});
}, 1200);
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=iluminacao',
    	mimeType: 'csv'
	});
}, 1800);
setTimeout(function() {
	chart.load({
    	url: 'app/getCSV.php?table=ph',
    	mimeType: 'csv'
	});
}, 1800);

//load current value grip

setTimeout(function() {
	getLast('temperatura');
	startMonitoring('temperatura');
}, 2400);

setTimeout(function() {
	getLast('condutividade');
	startMonitoring('condutividade');
}, 2400);

setTimeout(function() {
	getLast('vazao');
	startMonitoring('vazao');
}, 3000);

setTimeout(function() {
  getLast('energia');
  startMonitoring('energia');
}, 3000);

setTimeout(function() {
	getLast('iluminacao');
	startMonitoring('iluminacao');
}, 3600);

setTimeout(function() {
  getLast('ph');
  startMonitoring('ph')
}, 3600);

setTimeout(function() {
  startMonitoring('umidade')
  getLast('umidade');
}, 3600);



getLast = function(table) {
  $('.dashboard.panel.'+table+' .value').html('carregando');
  $('.dashboard.panel.'+table+' .date').html('-');
  $.ajax({
    url: "app/getLast.php?table="+table
  }).done(function(data) {
    date = data.split(",")[0];
    value = data.split(",")[1];
    $('.dashboard.panel.'+table+' .value').html(value);
    $('.dashboard.panel.'+table+' .date').html(date);
  });
}

startMonitoring = function(table) {
  setInterval(function() {
    getLast(table);
  }, 5000) 
}


})(jQuery);
