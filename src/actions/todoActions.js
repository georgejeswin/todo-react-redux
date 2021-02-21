export const addTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_TODO", payload: todo });
  } catch (error) {
    console.log(error);
  }
};
export const toggleTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_TODO", payload: id });
  } catch (error) {
    console.log(error);
  }
};
