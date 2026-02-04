const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: __dirname + "/dist/portfolio/browser",
  remoteRoot: "/", // oder "/public_html/" je nach Hosting
  include: ["*", "**/*"],
  exclude: [],
  deleteRemote: false,
  forcePasv: true,
  sftp: false,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("Deployment abgeschlossen:", res))
  .catch((err) => console.error("Deployment fehlgeschlagen:", err));
