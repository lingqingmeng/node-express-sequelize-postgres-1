module.exports = {
  HOST: "localhost",
  USER: "<redacted>",
  PASSWORD: "<redacted>",
  DB: "webhook",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
