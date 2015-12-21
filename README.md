# appframe-redis
[Redis](http://rethinkdb.com/) Plugin for [Appframe](https://github.com/nodecraft/appframe.js) on NPM. This currently does not support SSL.

## API
This api is mounted at `app.r` as a [ioredis](https://github.com/luin/ioredis) object. Please check the project documentation for more details for usage.

### Config `redis.json5`
Config is mirrored to match the expected config for [ioredis](https://github.com/luin/ioredis/blob/master/API.md#new-redisport-host-options).