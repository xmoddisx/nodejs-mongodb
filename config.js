module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB || "mongodb://localhost:27017/shop",
  dbopts: process.env.DBOPTS || { useNewUrlParser: true },
  secret_token: "mysecretokenencrypt"
};
