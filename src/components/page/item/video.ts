import { BaseComponent } from "../../baseComponent.js";

export class VideoCompoenent extends BaseComponent<HTMLElement> {
  constructor(url: string) {
    super(
      `<section class="video">
      <div class="video__embed">
        <iframe class="video__frame" width="420" height="315" src="" frameborder="0"></iframe>
      </div>
    </section>`
    );
    const videoElement = this.element.querySelector(
      ".video__frame"
    )! as HTMLIFrameElement;
    videoElement.src = url;
  }
}
