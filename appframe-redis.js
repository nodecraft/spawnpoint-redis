'use strict';
var redis = require('ioredis');

module.exports = require('appframe')().registerPlugin({
	dir: __dirname,
	name: "Redis",
	namespace: "redis",
	errors: {
		'redis.reply_error': require('ioredis/lib/reply_error.js')
	},
	exports: function(app, callback){
		app.redis = new redis(app.config.redis);
		app.redis.on('error', function(err){
			app.error('Redis error occured').debug(err);
		});
		app.redis.once('ready', function(){
			app.info('Connected to redis server.');
		});
		app.redis.on('reconnecting', function(){
			app.warn('Attempting to reconnect to redis server.');
		});
	}
});