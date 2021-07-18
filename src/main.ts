import { TodoListModel } from "./model/TodoListModel";
import "./style.css";
import { render } from "./util/htmlHelper";
import { TodoListView } from "./view/TodoListView";

class App {
  private view: TodoListView;
  private model: TodoListModel;

  constructor() {
    this.view = new TodoListView();
    this.model = new TodoListModel();
  }

  mount() {
    const formEl = document.querySelector<HTMLFormElement>("#js-form")!;
    const inputEl = document.querySelector<HTMLInputElement>("#js-form-input")!;
    const containerElement =
      document.querySelector<HTMLDivElement>("#js-todo-list")!;
    const counter = document.querySelector<HTMLSpanElement>("#js-todo-count")!;

    this.model.setRender(() => {
      const updatedList = this.view.createListView(this.model.todoList, (id) =>
        this.model.deleteItem(id)
      );
      render(updatedList, containerElement);
      counter.innerText = `count: ${this.model.todoList.length}`;
    });

    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      this.model.addItem(inputEl.value);
      inputEl.value = "";
    });
  }
}

const app = new App();
app.mount();
