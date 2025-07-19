const redis = require("redis");

const client = redis.createClient();

client.connect()
  .then(() => console.log("✅ Redis connected"))
  .catch((err) => console.error("❌ Redis error:", err));

module.exports = client;
