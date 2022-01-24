import { ImageComponent } from "./components/page/item/image.js";
import { VideoCompoenent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attatchTo(appRoot);
        const imageBtn = document.querySelector("#new-image");
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
                    const images = new ImageComponent(inputSection.title, inputSection.url);
                    this.page.addChild(images);
                    dialog.removeFrom(dialogRoot);
                });
            });
        };
        const videoBtn = document.querySelector("#new-video");
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
                    const video = new VideoCompoenent(inputSection.title, inputSection.url);
                    this.page.addChild(video);
                    dialog.removeFrom(dialogRoot);
                });
            });
        };
        const noteBtn = document.querySelector("#new-note");
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
                    dialog.removeFrom(dialogRoot);
                });
            });
        };
        const todoBtn = document.querySelector("#new-todo");
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
                    dialog.removeFrom(dialogRoot);
                });
            });
        };
    }
}
new App(document.querySelector(".document"), document.body);
