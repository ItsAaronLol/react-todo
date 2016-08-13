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

    return $.isArray(todos) ? todos : [];


  },
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
      //return items that have a todo completed status of false
      //but if showcompleted is checked, we'll return every single item
    });
    //Filter by searchText
    //.indexOf: checks whether something is inside of it. will return the index
    //else returns -1
  //  'something here'.indexOf('here');

    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    filteredTodos.sort((a, b)=>{
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
