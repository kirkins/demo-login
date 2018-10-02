var config = {};

config.mysql = {};
config.jwt = {};

config.mysql.host = "localhost";
config.mysql.user = "philip";
config.mysql.password = "password";
config.mysql.database = "eosbet";

config.jwt.secret = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjIzZWNjNzdlLWU1NTUtNGYxYS05NGYzLTUxYjNhMGMxYWQwYSIsImlhdCI6MTUzODUwNTY0OSwiZXhwIjoxNTM4NTA5MjQ5fQ.twrpiuKN74PS_ZhzIXePDauV7RtjbfaEhoDIVzpud84";

module.exports = config;
