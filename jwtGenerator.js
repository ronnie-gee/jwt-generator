const JWT = require("jsonwebtoken");
const { join } = require("path");

const key = "KEY";

const signOptions = {
  issuer: "issuer",
  subject: "subject",
  expiresIn: 900,
  algorithm: "RS256",
  allowInsecureKeySizes: true,
};

const payload = {};

const token = JWT.sign(payload, key, signOptions);
