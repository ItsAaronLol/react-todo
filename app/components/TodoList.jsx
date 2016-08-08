/*

  when you're iterating over an array and you're generating multiple
  instances of a component, you have to give them a unique key prop
  this key prop is used internally by react to keep track of the
  individual components

*/

/*

the spread operator ({...}): lets you spread out all the properties on an object
it lets us spread out all of those into individual props

*/

var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todo) => { //todo.map takes a function and calls that function for every element in the array
        //whatever you return gets replaced
        return(
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;