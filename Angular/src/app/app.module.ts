import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterOutlet,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [ComponentsModule, ReactiveFormsModule, FormsModule],
})
export class AppModule {}
