module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    console.log("req.body :>> ", req.body);
    if (req.body.username === "shen" && req.body.password === "123456") {
      return res.status(200).json({
        user: {
          token: 123, // JWT
        },
      });
    } else {
      return res.status(400).json({
        message: "用户名或密码错误",
      });
    }
  }
  next();
};
