import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
//import { ProfileEditorComponent } from './profile-editor/////profile-editor.component';

@NgModule({
  declarations: [AppComponent, NameEditorComponent, ProfileEditorComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // other imports ...
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
