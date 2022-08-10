'use strict';
const redis = require('ioredis');
const {ReplyError} = require('redis-errors');

module.exports = require('spawnpoint').registerPlugin({
	dir: __dirname,
	name: "Redis",
	namespace: "redis",
	errors: {
		'redis.reply_error': ReplyError,
	},
	exports: function(app){
		app.redis = new redis(app.config.redis);
		app.redis.on('error', function(err){
			app.error('Redis error occurred').debug(err);
		});
		app.redis.once('ready', function(){
			app.info('Connected to Redis server.');
		});
		app.redis.on('reconnecting', function(){
			app.warn('Attempting to reconnect to Redis server.');
		});
	},
});