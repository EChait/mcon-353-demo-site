const TodoActions = {
  ADD: "ADD",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD: {
      return { todos: [...state.todos, action.todo] };
    }
  }
};

const addAction = {
  type: TododActions.ADD,
  todo: { title: "Whatever", isComplete: false },
};
