let crypto = require("crypto");   
const moment = require("moment")
const querystring = require('qs');

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}

exports.hashSecretKey = (req, res) => {
  let tmnCode = "HQAZN7P8";
  let secretKey = "V7HC5WASA1L4VO10UNPYYOZADVUPA1T9";
  let date = new Date();
  let createDate = moment(date).format("YYYYMMDDHHmmss");
  let vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
  let returnUrl = "http://localhost:3000/user/order";
  let orderId = moment(date).format("DDHHmmss");
  let amount = req.body.newTotal || 0;
  let bankCode = "NCB";

  let locale = "vn";
  if (locale === null || locale === "") {
    locale = "vn";
  }

  let ipAddr = req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
  let currCode = "VND";
  let vnp_Params = {};
  vnp_Params["vnp_Version"] = "2.1.0";
  vnp_Params["vnp_Command"] = "pay";
  vnp_Params['vnp_TmnCode'] = tmnCode;
  vnp_Params["vnp_Locale"] = locale;
  vnp_Params["vnp_CurrCode"] = currCode;
  vnp_Params["vnp_TxnRef"] = orderId;
  vnp_Params["vnp_OrderInfo"] = "ThanhtoanchomaGD:" + orderId;
  vnp_Params["vnp_OrderType"] = "billpayment";
  vnp_Params["vnp_Amount"] = amount * 100;
  vnp_Params["vnp_ReturnUrl"] = returnUrl;
  vnp_Params['vnp_IpAddr'] = ipAddr;
  vnp_Params["vnp_CreateDate"] = createDate;
  if (bankCode !== null && bankCode !== "") {
    vnp_Params["vnp_BankCode"] = bankCode;
  }
  vnp_Params = sortObject(vnp_Params);

  try {
    let signData = querystring.stringify(vnp_Params, { encode: false });
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex"); 
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
    return res.status(200).json({ vnpUrl });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};