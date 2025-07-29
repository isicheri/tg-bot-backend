import Redis from 'ioredis';

const redisClient = new Redis({
  host: 'localhost',
  port: 6379,
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
