import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'


import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from "./components/sidebar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ],
    declarations: [SidebarComponent],
    exports: [
        AppRoutingModule,
        SidebarComponent,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ],
})
export class SharedModule{

}