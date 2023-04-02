// ----------------------------------------------
// ip.middleware.js
// ----------------------------------------------
// IP Middleware.
// Where we can block other IPs and just open out app for specefic IP.

const ip = (req, res, next) => {
  // ----------------------------------------------
  // ip()
  // ----------------------------------------------
  // Here we find comming ip.
  // Then check that ip is white or not by finding in it whitelist.

  const headers = req.headers;
  const whitelist = [];

  const coming = headers["x-forwarded-for"];

  if (!whitelist.includes(coming)) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  next();
};

export default ip;
