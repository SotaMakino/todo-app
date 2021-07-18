let todoIdx = 0;

export class TodoItemModel {
  id: number;
  title: string;
  completed: boolean;

  constructor(title: TodoItemModel["title"]) {
    this.id = todoIdx++;
    this.title = title;
    this.completed = false;
  }
}
