///<reference path='node/node.d.ts' />
///<reference path='node/express.d.ts' />

import http = require("http")
import path = require("path")
import express = require("express")
import index = require("./routes/index")

var app = express();
var assetsDir = path.join(__dirname, 'assets');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon(path.join(assetsDir, 'favicon.ico')));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(assetsDir));
  app.locals.pretty = true;
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', index.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

