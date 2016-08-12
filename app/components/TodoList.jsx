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
var {connect} = require('react-redux');

/*
provider component:
provides access to the store for all of its children,
but children need to specify which data they'd like
connect gets called after your component has been created
*/
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');
/*
  Using a function from react redux, we can specify the pieces
  of state we would like for this component to have
*/
export var TodoList = React.createClass({
  render: function(){
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if(todos.length === 0){
        return(
          <p className="container__message">Nothing To Do</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => { //todo.map takes a function and calls that function for every element in the array
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

// module.exports =
  export default connect(
  (state) => { //state is the complete state (searchText, etc.)
    //return {
      //todos: state.todos
      /*causes todos to be set on the props for our component (TodoList)
      TodoList component is gonna have access to whatever the state.todo
      property is*/

      //The property todos is going to get set for the props on the TodoList Component


    //};
    //get access to every single item on the state tree
    return state;
  }
)(TodoList); //connect todolist component to the provider, so that it can access its store

/*TodoList: component that we'd like to connect to the provider
do a connection and we want it to connect to TodoList, which means
the todolist component can now request data it would like in order
to render itself

connect arg1: which pieces of state our component wants

*/
