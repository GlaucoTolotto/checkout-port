import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular';

  form!: FormGroup;
  
    constructor(private formBuilder: NonNullableFormBuilder) {
      this.form = this.criaForm();
    }
  
    confirmar() {
      if (!this.validaControls()) {
        return;
      }
    }
  
    validaControls() {
      if (
        this.form.controls['cardholderName'].invalid ||
        this.form.controls['cardNumber'].invalid ||
        this.form.controls['mm'].invalid ||
        this.form.controls['yy'].invalid ||
        this.form.controls['cvc'].invalid
      ) {
        return false;
      }
      return true;
    }
  
    validaPreenchimento(controlName: string){
      if(this.form.controls[controlName].invalid &&
        (this.form.controls[controlName].touched ||
        this.form.controls[controlName].dirty)){
          return true;
        }
        return false;
    }
  
    private criaForm(): FormGroup {
      return this.formBuilder.group({
        cardholderName: this.formBuilder.control('', {
          validators: [Validators.required],
        }),
        cardNumber: this.formBuilder.control('', {
          validators: [Validators.required, Validators.minLength(16)],
        }),
        mm: this.formBuilder.control('', {
          validators: [Validators.required, Validators.minLength(2)],
        }),
        yy: this.formBuilder.control('', {
          validators: [Validators.required, Validators.minLength(2)],
        }),
        cvc: this.formBuilder.control('', {
          validators: [Validators.required, Validators.minLength(3)],
        }),
      });
    }
}
