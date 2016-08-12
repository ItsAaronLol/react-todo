export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    //searchText: searchText
    searchText
  };
};

// toggleShowCompleted action generator
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    //text: text
    text
  };
};

//toggleTodo(id)

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
