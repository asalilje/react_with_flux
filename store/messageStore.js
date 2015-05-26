var Store = require("./store");
var Constants = require("../constants/messageConstants");
module.exports = new Store("../messages.json", Constants);

