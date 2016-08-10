var $ = require('jquery');

module.exports = {

  setTodos: function(todos){
    if($.isArray(todos)){
      //JSON.stringify takes array and converts it into a string
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
    //if nothing is returned, undefined is returned by default
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    //if we don't have valid data inside of string todos,
    //we'll return the empty array
    //convert string in string todos into an actual array
    try{
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }
    //if the condition passes, the code right after the '?' gets executed
    //if the condition fails, the code goes after the ':'
    return $.isArray(todos) ? todos : [];

    // if($.isArray(todos)) {
    //   return todos;
    // } else {
    //   return [];
    // }
  }
  
};
