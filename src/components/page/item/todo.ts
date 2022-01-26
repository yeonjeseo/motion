import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(todo: string, body: string) {
    super(`<section class="todo">
    <input class="todo__checkbox" type="checkbox" id="" name="" value="" />
    <label class="todo__label" for=""> I have a bike</label><br />
  </section>`);

    const labelElement = this.element.querySelector(
      ".todo__label"
    )! as HTMLLabelElement;
    labelElement.textContent = body;
    const inputElement = this.element.querySelector(
      ".todo__checkbox"
    )! as HTMLInputElement;
    inputElement.name = todo;
  }
}
