import { TodoItemModel } from "./TodoItem";

export class TodoListModel {
  todoList: TodoItemModel[];
  render: Function;

  constructor() {
    this.todoList = [];
    this.render = () => {};
  }

  setRender(f: Function) {
    this.render = f;
  }

  addItem(title: string): void {
    const newItem = new TodoItemModel(title);
    this.todoList.push(newItem);
    this.render();
  }

  deleteItem(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id != id);
    this.render();
  }
}
