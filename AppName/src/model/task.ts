export interface Task {
  id: string;
  title: string;
  address: string;
  completed: boolean;
  type: string;
}

export interface TasksSlice {
  status: string;
  entities: Record<string, Task>;
}
