// import redisClient from '../../config/redis/redis.config';

// export const getCachedOrDbData = async (key: string, fallbackFn: () => Promise<any>) => {
//   const cached = await redisClient.get(key);
//   if (cached) {
//     return JSON.parse(cached);
//   }

//   const data = await fallbackFn();
//   await redisClient.set(key, JSON.stringify(data), 'EX', 60); // Cache for 60 seconds
//   return data;
// };
