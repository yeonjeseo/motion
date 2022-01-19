import { ImageComponent } from "./components/page/item/image.js";
import { VideoCompoenent } from "./components/page/item/video.js";
import { PageComponent, PageItemComponent, } from "./components/page/page.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { InputDialog } from "./components/dialog/dialog.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attatchTo(appRoot);
        const images = new ImageComponent("image title", "https://picsum.photos/600/300");
        this.page.addChild(images);
        const video = new VideoCompoenent("Video Title", "https://www.youtube.com/watch?v=aDS2U713XYw");
        this.page.addChild(video);
        const note = new NoteComponent("Note Title!!", "Lorem ipsum dolor sit amet.");
        this.page.addChild(note);
        const todo = new TodoComponent("Todo!!!");
        this.page.addChild(todo);
        const imageBtn = document.querySelector("#new-image");
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
new App(document.querySelector(".document"));
