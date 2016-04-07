var React = require('react');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        <p>Hello there!</p>
        {this.props.children}
      </div>
    )
  }
});

module.exports = HelloWorld;
