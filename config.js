const config = {
  host: process.env.HOST || "http://localhost:",
  port: process.env.PORT || 8080,
  public_route: process.env.PUBLIC_ROUTE || "students",
  files_route: process.env.FILES_ROUTE || "files",
};

module.exports = config;
