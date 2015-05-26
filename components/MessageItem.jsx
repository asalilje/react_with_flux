var React = require("react");

module.exports = React.createClass({

    render: function() {
        return (
            <div className="message">
                <div>{this.props.data.author}</div>
                <div>{this.props.data.message}</div>
            </div>
        );
    }
});
