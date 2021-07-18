import { TodoItemModel } from "../model/TodoItem";
import { htmlStringToElement } from "../util/htmlHelper";

export class TodoListView {
  createListView(
    todos: TodoItemModel[],
    onRequestDelete: (id: number) => void
  ) {
    const listEl = document.createElement("ul");
    todos.forEach((todo) => {
      const liEl = htmlStringToElement(
        `<li>${todo.title}<button class="delete">x</button></li>`
      );
      const buttonEl = liEl.querySelector(".delete")!;
      buttonEl.addEventListener("click", () => {
        onRequestDelete(todo.id);
      });
      listEl.appendChild(liEl);
    });
    return listEl;
  }
}
