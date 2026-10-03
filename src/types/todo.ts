export interface CreateTodoRequest {
  task: string;
}

export interface UpdateTodoRequest {
  task?: string;
  is_completed?: boolean;
}

export interface TodoResponse {
  id: number;
  todo: string;
  completed: boolean;
}

export interface TodoRow {
  id: number;
  user_id: number;
  task: string;
  is_completed: boolean;
  created_at?: string;
}

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  createdAt: string;
};