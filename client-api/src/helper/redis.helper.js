import redis from "redis";

const client = redis.createClient(process.env.REDIS_URL);

const setJWT = async (key, value) => {
  try {
    await client.connect();

    const res = await client.set(key, value);
    return res;
  } catch (err) {
    throw err;
  } finally {
    await client.disconnect();
  }
};

const getJWT = async (key) => {
  try {
    await client.connect();

    const res = await client.get(key);
    return res;
  } catch (err) {
    throw err;
  } finally {
    await client.disconnect();
  }
};

export { setJWT, getJWT };
