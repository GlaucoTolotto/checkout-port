import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AppModule } from './app.module';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideNgxMask()],
})
export class AppComponent {
  title = 'Angular';
  nomeCartao = 'Jane Appleseed';
  numeroCartao = '0000 0000 0000 0000';
  cvc = '000';
  mesVencimento = '00';
  anoVencimento = '00';
  form!: FormGroup;
  submeteu = false;

  constructor(private formBuilder: NonNullableFormBuilder) {
    this.form = this.criaForm();
  }

  confirmar() {
    if (!this.validaControls()) {
      return;
    }
    this.submeteu = true;
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

  validaPreenchimento(controlName: string) {
    if (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].touched ||
        this.form.controls[controlName].dirty)
    ) {
      return true;
    }
    return false;
  }

  onKeypressEventNumeroCartao(event: any) {
    this.numeroCartao = event.target.value;
  }

  onKeypressEventNomeCartao(event: any) {
    this.nomeCartao = event.target.value;
  }
  onKeypressEventMesVencimento(event: any) {
    this.mesVencimento = event.target.value;
  }
  onKeypressEventAnoVencimento(event: any) {
    this.anoVencimento = event.target.value;
  }
  onKeypressEventCVC(event: any) {
    this.cvc = event.target.value;
  }

  continuar() {
    this.submeteu = !this.submeteu;
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
