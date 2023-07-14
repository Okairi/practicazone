import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';

const DEFAULT_DROPZONE_CONFIG: any = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 1,
  acceptedFiles: 'image/*',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxDropzoneModule],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
