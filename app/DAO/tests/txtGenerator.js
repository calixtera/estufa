var fs = require('fs');

writeTxt = function() {
  readers = ['condutividade', 'vazao', 'umidade', 'ph', 'energia', 'iluminacao', 'temperatura', 'condutividade'];
  
  readers.map(function(item) {
    var random = Math.floor(Math.random() * (20 - 1) + 1);
    fs.writeFile("../"+item+".txt", random, function(err) {
      if(err) {
          console.log(err);
      } else {
          //console.log("The file was saved!");
      }
    });    
  })

}

setInterval(writeTxt, 5000);