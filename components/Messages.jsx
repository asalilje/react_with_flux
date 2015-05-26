var React = require("react");
var dispatcher = require("../dispatcher");
var emitter = require("../emitter");
var constants = require("../constants/messageConstants");
var _ = require("underscore");

var MessageItem = require("./MessageItem");

function init(domNode) {
    var Messages = React.createClass({
        getInitialState: function() {
            return {
                messages: []
            }
        },
        componentWillMount: function() {
            emitter.on(constants.changed, function(messages) {
                this.setState({ messages: messages });
            }.bind(this));
        },
        componentDidMount: function() {
            dispatcher.dispatch({ type: constants.all });
        },
        componentWillUnmount: function() {
            emitter.off(constants.changed);
        },
        renderMessages: function() {
            return _.map(this.state.messages, function(message) {
                return (
                    <MessageItem data={message} />
                );
            });
        },
        render: function () {
            return (
                <div>
                    <h1>Messages</h1>
                    {this.renderMessages()}
                </div>
            );
        }
    });

    React.render(
        <Messages />, domNode);
};

module.exports = {
    init: init
};