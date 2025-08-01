import Redis from 'ioredis';

const redisClient = new Redis({
  username: 'default',
  host: process.env.REDIS_HOST ?? 'localhost',
  port: 15649,
  password: process.env.REDIS_PASSWORD,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

redisClient.on('connecting', () => {
  console.info('connecting to redis.....');
});

redisClient.on('connect', () => {
  console.log('redis connected');
});

redisClient.on('error', (err) => {
  console.error('redis error:', err);
});

redisClient.on('end', () => {
  console.log('connection closed....');
});

export default redisClient;
