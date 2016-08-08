var React = require('react');

var Todo = React.createClass({
  render: function(){
    var {text, id} = this.props; //the name matters, order doesn't matter
    //{text}: get the text
    //{id}: get the id
    return (
      <div>
        {id}. {text}
      </div>
    );
  }
});

module.exports = Todo;
