export class PageComponent {
  private element: HTMLUListElement;
  constructor() {
    this.element = document.createElement("ul");
    this.element.setAttribute("class", "page");
    this.element.textContent = "This is PageComponent";
  }

  /* 이 컴포넌트 클래스가 해야 할 일들을 생각해서 메서드 만들기 */

  attatchTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
