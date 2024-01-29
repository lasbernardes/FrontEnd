import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AbstractControl, Validators, FormGroup, FormControl } from '@angular/forms'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '1_form_ex1';
  onSubmit(formulario:NgForm){
   
      let { login, senha} = formulario.value;
      console.log(login,senha);
       // Acesso às propriedades e métodos do formulário
    console.log('Formulário válido:', formulario.valid);
    console.log('Valores do formulário:', formulario.value);
   
    console.log("Formulario: ", formulario);
  }

  exemploForm: FormGroup;

  constructor(){
    this.exemploForm = new FormGroup({
      'estacaoClimatica': new FormControl(null, this.ecValidator.bind(this)),
      'email': new FormControl(null, [Validators.required,
                                      Validators.email])
    });

  }
  ecValidator(control:AbstractControl):
    {[key: string]: boolean}|null {
    
      const value = control.value;
      if(value == "luciano"){
        return{'ecVazio':true}
      }
      return null;
  }
  onsubmeter(){
    console.log(this.exemploForm);
    console.log("qualquer coisa");
  }
}
