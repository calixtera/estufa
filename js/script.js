

(function($){
setInterval(function(){
  $.ajax({
    url: "app/DAO/allDAO.php"
  });	
}, 10000)

  
var chart = c3.generate({
    bindto: '#grafico',
    data: {
	    x: 'data',
	    xFormat: '%Y-%m-%d %H:%M:%S',
        url: 'app/getCSV.php?table=umidade',
        mimeType: 'csv',
        type: 'spline'
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
  chart.load({
    url: 'app/getCSV.php?table='+table,
    mimeType: 'csv'
  });
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
