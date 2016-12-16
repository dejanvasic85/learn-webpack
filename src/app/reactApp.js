var React = require('react');
var ReactDom = require('react-dom');

var ReactApp = React.createClass({
    render: function() {
        return (<div>
            <h3>React on this bitch</h3>
        </div>);
    }
});

ReactDom.render(<ReactApp />, document.getElementById('app'));