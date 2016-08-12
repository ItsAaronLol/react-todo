var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


/*//We don't have a way to import the default using require since this is an es 6 feature,
// so We need to use the import statement
//import does support export default

/*
eg.
importing an export var function: var {Todo} = require('Todo');
importing an export default: import TodoList from 'TodoList';

*/
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';


//ConnectedTodoList: the one that's been pased through connect function
/*
ConnectedTodoList is the return result of passing our TodoList
component through the redux connect function. I refer
to this as a "connected" component.
*/



describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];

    var store = configure({
      //todos: todos
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    )
      var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    //scryRenderedComponentsWithType: lets us check how many of a given component
    //are rendered undered a seperate component
      var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
      //gets back an array

      expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
});
