var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

/*//We don't have a way to import the default using require since this is an es 6 feature,
// so We need to use the import statement
//import does support export default

/*
eg.
importing an export var function: var {Todo} = require('Todo');
importing an export default: import TodoList from 'TodoList';

*/
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var Test = require('Test');

var TodoApp = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
