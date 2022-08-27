
export default function Reducer(
    todos,
    action
  ) {
    switch (action.type) {
      case 'add': {
        return [{
          id: action.id,
          text: action.text,
          completed: false
        }, ...todos,];
      }
      case 'complete': {
        return todos.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        })
      }
      case 'delete': {
        return todos.filter(t => t.id !== action.id);
      }
      default: {
        throw Error('action is not spacified: ' + action.type);
      }
    }
  }