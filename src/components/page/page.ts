import { BaseComponent } from "../baseComponent.js";

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page">This is page component</ul>');
  }
}
