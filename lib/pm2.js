var server = require('./server');
server.start(function(){
  console.log('->', server.info.uri);
});
