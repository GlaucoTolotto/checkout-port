import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [RouterOutlet, CommonModule, ComponentsModule],
  exports: [ComponentsModule],
})
export class AppModule {}
