
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { ArrayComponent } from './Arrays/array.component';
// import { StudentListComponent } from './BrowserDB/student/list/student-list.component';
// import { StudentAddComponent } from './BrowserDB/student/add/student-add.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MultiselectComponent } from './DropDown/multiselect.component';
import { MaterialModule } from './material-module.ts';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    MultiselectComponent
  //  ArrayComponent,StudentListComponent, StudentAddComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
