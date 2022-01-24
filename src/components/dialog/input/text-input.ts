import { BaseComponent } from "../../component.js";

export class TextSectionInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`
    <div>
    <div class="form__container">
      <label for="title">Title</label>
      <input type="text" id="title" />
    </div>
    <div class="form__container">
      <label for="body">BODY</label>
      <textarea type="text" row="3" id="body"></textarea>
    </div>
    </div>
  `);
  }

  /*
    getter를 호출하는 시점에 DOM 객체에서 url을 읽어 옴 
   */
  get title(): string {
    const element = this.element.querySelector("#title")! as HTMLInputElement;
    return element.value;
  }
  get body(): string {
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    return element.value;
  }
}
