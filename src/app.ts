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
import {
  InputDialog,
  MediaData,
  TextData,
} from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  // 생성자가 만드는 것은 T 타입
  new (): T;
};

class App {
  private readonly page: Component & Composible;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attatchTo(appRoot);

    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoCompoenent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );

    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );
  }
  /* 
    코드 반복을 함수로 만들기
    특정 요소에 dialog를 연결해주고, dialog 클릭 이벤트를 생성
    클릭 이벤트 발생 시 해당 컴포넌트를 동적으로 생성
    element와 dialog의 연결
  */
  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    // image 버튼이 아니라 일반적인 버튼으로 네이밍
    const elementBtn = document.querySelector(selector)! as HTMLButtonElement;
    elementBtn.onclick = () => {
      elementBtn.addEventListener("click", () => {
        const dialog = new InputDialog();
        //입력에 따라 컴포넌트 타입이 바뀜
        const input = new InputComponent();
        dialog.addChild(input);
        dialog.attatchTo(this.dialogRoot);

        dialog.setOnCloseListener(() => {
          dialog.removeFrom(this.dialogRoot);
        });
        dialog.setOnSubmitListener(() => {
          const image = makeSection(input);
          this.page.addChild(image);
          dialog.removeFrom(this.dialogRoot);
        });
      });
    };
  }
}

// index.html 에서 document 클래스가 있다고 확신할 수 있기 때문에 Type Assertion 사용 가능!
new App(document.querySelector(".document")! as HTMLElement, document.body);
