import { BaseComponent } from "../../component.js";
import { MediaData } from "../dialog.js";

export class MediaSectionInput
  extends BaseComponent<HTMLElement>
  implements MediaData
{
  constructor() {
    super(`
    <div>
    <div class="form__container">
      <label for="title">Title</label>
      <input type="text" id="title" />
    </div>
    <div class="form__container">
      <label for="url">URL</label>
      <input type="text" id="url" />
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
  get url(): string {
    const element = this.element.querySelector("#url")! as HTMLInputElement;
    return element.value;
  }
}
