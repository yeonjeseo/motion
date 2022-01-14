export class ImageComponent {
  private element: HTMLElement;

  constructor(title: string, url: string) {
    const template = document.createElement("template");
    /* 
      template literal에 사용자 입력을 직접 넣는 것은 보안에 굉장히 취약함.
      속성에 직접 접근해서 사용자 입력을 넣어야 함
    */
    template.innerHTML = `<section class="image">
    <div class="image__holder">
      <img class="image__thumbnail" />
      <p class="image__title"></p>
    </div>
  </section>`;
    this.element = template.content.firstElementChild! as HTMLElement;
    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }

  attatchTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
