import { BaseComponent, Component } from "../component.js";
import { Composible } from "../page/page.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

/* 
  타입에 따라 다양한 컨텐츠를 추가할 수 있음.
  Composible 인터페이스 구현
*/
export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composible
{
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;

  constructor() {
    super(`
    <section class="dialog">
      <button class="close">&times;</button>
      <div id="dialog__body"></div>
      <button class="dialog__submit">ADD</button>
    </section>
    `);

    const closeBtn = this.element.querySelector(".close")! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };

    const submitBtn = this.element.querySelector(
      ".dialog__submit"
    )! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }
  addChild(child: Component): void {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attatchTo(body);
  }
}
