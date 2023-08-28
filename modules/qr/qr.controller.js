const QRCode = require("qrcode");

const createQR = async (url) => {
  return await QRCode.toDataURL(url);
};

module.exports = { createQR };
