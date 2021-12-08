import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ContactComponent } from "./components/contact/contact.component";
import { MainComponent } from "./components/main/main.component";

@NgModule({
    imports: [SharedModule],
    declarations: [MainComponent, ContactComponent],
    exports: [
    ],
})
export class CoreModule{

}