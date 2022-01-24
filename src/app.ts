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
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";

class App {
  private readonly page: Component & Composible;
  constructor(appRoot: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attatchTo(appRoot);

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.onclick = () => {
      imageBtn.addEventListener("click", () => {
        const dialog = new InputDialog();
        const inputSection = new MediaSectionInput();
        dialog.addChild(inputSection);
        dialog.attatchTo(dialogRoot);

        dialog.setOnCloseListener(() => {
          dialog.removeFrom(dialogRoot);
        });
        dialog.setOnSubmitListener(() => {
          const images = new ImageComponent(
            inputSection.title,
            inputSection.url
          );
          this.page.addChild(images);
          // images.attatchTo(appRoot, "beforeend");
          dialog.removeFrom(dialogRoot);
        });
      });
    };

    const videoBtn = document.querySelector("#new-video")! as HTMLButtonElement;
    videoBtn.onclick = () => {
      videoBtn.addEventListener("click", () => {
        const dialog = new InputDialog();
        const inputSection = new MediaSectionInput();
        dialog.addChild(inputSection);
        dialog.attatchTo(dialogRoot);

        dialog.setOnCloseListener(() => {
          dialog.removeFrom(dialogRoot);
        });
        dialog.setOnSubmitListener(() => {
          const video = new VideoCompoenent(
            inputSection.title,
            inputSection.url
          );
          this.page.addChild(video);
          // images.attatchTo(appRoot, "beforeend");
          dialog.removeFrom(dialogRoot);
        });
      });
    };

    const noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;
    noteBtn.onclick = () => {
      noteBtn.addEventListener("click", () => {
        const dialog = new InputDialog();
        const inputSection = new TextSectionInput();
        dialog.addChild(inputSection);
        dialog.attatchTo(dialogRoot);

        dialog.setOnCloseListener(() => {
          dialog.removeFrom(dialogRoot);
        });
        dialog.setOnSubmitListener(() => {
          const note = new NoteComponent(inputSection.title, inputSection.body);
          this.page.addChild(note);
          // images.attatchTo(appRoot, "beforeend");
          dialog.removeFrom(dialogRoot);
        });
      });
    };

    const todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;
    todoBtn.onclick = () => {
      todoBtn.addEventListener("click", () => {
        const dialog = new InputDialog();
        const inputSection = new TextSectionInput();
        dialog.addChild(inputSection);
        dialog.attatchTo(dialogRoot);

        dialog.setOnCloseListener(() => {
          dialog.removeFrom(dialogRoot);
        });
        dialog.setOnSubmitListener(() => {
          const todo = new TodoComponent(inputSection.title);
          this.page.addChild(todo);
          // images.attatchTo(appRoot, "beforeend");
          dialog.removeFrom(dialogRoot);
        });
      });
    };
  }
}

// index.html 에서 document 클래스가 있다고 확신할 수 있기 때문에 Type Assertion 사용 가능!
new App(document.querySelector(".document")! as HTMLElement, document.body);
