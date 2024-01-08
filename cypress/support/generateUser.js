const faker = require('faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const userName = faker.internet.userName() + '_' + random;
  const password = '12345Qwert!';

  return {
    userName,
    password
  };
}

module.exports = { generateUser };
