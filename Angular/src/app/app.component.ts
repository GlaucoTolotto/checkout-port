import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppModule } from './app.module';
import {
  NgxMaskDirective,
  NgxMaskPipe,
  NgxMaskService,
  provideNgxMask,
} from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [provideNgxMask()],
})
export class AppComponent {
  title = 'Angular';
  nome_cartao = 'Jane Appleseed';
  numeroCartao = '0000 0000 0000 0000';
  cvc = '000';
  mes_vencimento = '00';
  ano_vencimento = '00';
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
    this.nome_cartao = event.target.value;
  }
  onKeypressEventMesVencimento(event: any) {
    this.cvc = event.target.value;
  }
  onKeypressEventAnoVencimento(event: any) {
    this.nome_cartao = event.target.value;
  }
  onKeypressEventCVC(event: any) {
    this.cvc = event.target.value;
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
