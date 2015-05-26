var React = require("react");
require("./store/messageStore");

var Messages = require("./components/Messages");

Messages.init($("#content")[0]);
