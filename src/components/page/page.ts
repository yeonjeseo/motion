import { BaseComponent, Component } from "../baseComponent.js";

export interface Composible {
  addChild(child: Component): void;
}

class PageItemComponenet
  extends BaseComponent<HTMLElement>
  implements Composible
{
  constructor() {
    super(`
    <li class="page-item">
      <section class="page-item__body">
        <div class="page-item__controls">
          <button class="close">&times;</button>
        </div>
      </section>
    </li>
    `);
  }
  addChild(child: Component) {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attatchTo(container);
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composible
{
  constructor() {
    super('<ul class="page"></ul>');
  }

  addChild(section: Component) {
    const item = new PageItemComponenet();
    item.addChild(section);
    item.attatchTo(this.element, "beforeend");
  }
}
