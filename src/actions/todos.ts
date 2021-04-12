import axios from "axios";
import { Dispatch } from "redux";
import { idText } from "typescript";
import { ActionTypes } from "./types";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface ClearTodosAction {
  type: ActionTypes.clearTodos;
  payload: number;
}

const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data,
    });
  };
};

export const clearTodos = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch<ClearTodosAction>({
      type: ActionTypes.clearTodos,
      payload: id,
    });
  };
};
