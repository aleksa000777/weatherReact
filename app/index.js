var React = require('react');
var ReactDom = require('react-dom');

var Hello = React.createClass({
  render: function(){
    return (
      <p>Hello  {this.props.name}</p>
    )
  }
});

ReactDom.render(<Hello name="Aleksa"/>, document.getElementById('app'));
// module.exports = Hello;
