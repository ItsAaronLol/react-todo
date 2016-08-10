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


  },
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

    //Filter by showCompleted
    /*filter is a built in array method that lets you take in
    an existing array and filter it based on certain things.
    it takes in a callback function that gets called one time
    for every one item in the array

    get an array back with all values that return true
    */
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
      // if(text.indexOf(searchText) !== -1){
      //   return true;
      // } else {
      //   return false;
      // }
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    //Sort todos with non-completed first
    /*
    sort does not return a new array. It modifies the existing
    one. It takes one argument, which is a funciton. That function
    gets passed two items. a and b. a and b will both be todos.
    we want to compare them and tell it whether or not a should
    come first, a should come last after b, or of a and b
    are equal, in which case we don't want to make any changes.
    if you return -1, you're telling the sort method that a
    should come before b
    if you return 1, you're telling the sort method that b
    should come before a.
    return 0: no change
    */
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
