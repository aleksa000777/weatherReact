var React = require('react');
var Detail = require('../components/Detail');

var DetailContainer = React.createClass({
  render: function(){
    console.log(this.props.location.state.weather);
    return (
      <div>
        <Detail/>
      </div>
    )
  }
})

module.exports = DetailContainer;
