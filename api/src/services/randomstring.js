const generateRandomString = (length = 100) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const len = chars.length;
  let random = "";

  for (let i = 0; i < length; i++) {
    const posn = Math.floor(Math.random() * len - 1);
    random = random + chars[posn];
  }
  return random;
};

const randomNumber = Math.ceil(Math.random() * 999);

module.exports = { generateRandomString, randomNumber };
