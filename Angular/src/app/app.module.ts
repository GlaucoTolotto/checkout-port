import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    RouterOutlet,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ComponentsModule,
    RouterOutlet,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
