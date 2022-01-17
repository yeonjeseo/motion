import { BaseComponent } from "../../baseComponent.js";

const youtube_parser = (url: string): string | boolean | undefined => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7]?.length == 11 ? match[7] : false;
};

export class VideoCompoenent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(
      `
      <section class="video">
        <div class="video__player">
          <iframe src="" class="video__iframe"></iframe>
        </div>
        <h3 class="video__title"></h3>
      </section>
      `
    );

    const iframe = this.element.querySelector(
      ".video__iframe"
    )! as HTMLIFrameElement;

    const videoId = youtube_parser(url);
    iframe.src = `https://www.youtube.com/embed/${videoId}`;

    const titleElement = this.element.querySelector(
      ".video__title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}

/* 
<iframe width="1238" height="696" src="https://www.youtube.com/embed/XqCqnWOt8Uk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/
