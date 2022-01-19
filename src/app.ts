import { ImageComponent } from "./components/page/item/image.js";
import { VideoCompoenent } from "./components/page/item/video.js";
import {
  Composible,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";

class App {
  private readonly page: Component & Composible;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attatchTo(appRoot);

    const images = new ImageComponent(
      "image title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(images);
    // images.attatchTo(appRoot, "beforeend");

    const video = new VideoCompoenent(
      "Video Title",
      "https://www.youtube.com/watch?v=aDS2U713XYw"
    );
    this.page.addChild(video);

    const note = new NoteComponent(
      "Note Title!!",
      "Lorem ipsum dolor sit amet."
    );
    this.page.addChild(note);

    const todo = new TodoComponent("Todo!!!");
    this.page.addChild(todo);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.onclick = () => {
      imageBtn.addEventListener("click", () => {
        const dialog = new InputDialog();

        dialog.setOnCloseListener(() => {
          dialog.removeFrom(document.body);
        });

        dialog.setOnSubmitListener(() => {
          dialog.removeFrom(document.body);
        });

        dialog.attatchTo(document.body);
      });
    };
  }
}

// index.html 에서 document 클래스가 있다고 확신할 수 있기 때문에 Type Assertion 사용 가능!
new App(document.querySelector(".document")! as HTMLElement);
