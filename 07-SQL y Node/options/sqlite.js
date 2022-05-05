
const options = {
  client: 'sqlite3',
  connection: { filename: './DB_Denisse' },
  useNullAsDefault: true,
};
console.log('options', options);

module.exports = {
  options,
};
