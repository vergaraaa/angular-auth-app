import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  public loginForm: FormGroup = this.fb.group({
    email: ['vergara@gmail.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: () => console.log('all good'),
      error: (error) => Swal.fire('Error', error, 'error'),
    });
  }
}
