import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
// import type { RootState } from "../../app/store";

interface Todo {
  id: string;
  task: string;
  completed: boolean;
}

interface TodosState {
  taskList: Todo[];
}

const initialState: TodosState = {
  taskList: [{ id: nanoid(), task: "Buy milk.", completed: true }],
};

// [
//     { id: nanoid(), task: "Buy milk.", completed: false },
//   ] as Todo[],

export const todoslice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      const newTask: Todo = {
        id: nanoid(),
        task: action.payload,
        completed: false,
      };
      state.taskList.push(newTask);
    },
  },
});

export const { addTask } = todoslice.actions;

export default todoslice.reducer;
