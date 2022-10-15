import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,} from '@angular/forms';
import {  Router } from '@angular/router';
import { Encuesta } from 'src/app/clases/formulario';
import { SaladejuegoservicioService } from 'src/app/servicios/saladejuegoservicio.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  encuesta:Encuesta= new Encuesta();


  altaForm = this.fb.group({
    'nombreCompleto': ['', Validators.required],
    'apellido': ['', Validators.required],
    'edadEncuestado': ['',[Validators.required, Validators.min(18), Validators.max(100)]],
    'telefono':['',Validators.required],
    'pregunta1': ['', Validators.required],
    'pregunta2': ['', Validators.required],
    'comentarios': ['', Validators.required],
  })
  constructor(private fb: FormBuilder,private _servicio: SaladejuegoservicioService,private _router: Router ) { }
 

  ngOnInit(): void {
  }

  aceptar() {
        // TODO: Use EventEmitter with form value
        console.log(this.altaForm.value.pregunta1);
        this.encuesta.nombreCompleto = this.altaForm.value.nombreCompleto?.toString();
        this.encuesta.apellido = this.altaForm.value.apellido?.toString();
        this.encuesta.edadEncuestado = this.altaForm.value.edadEncuestado?.toString();
        this.encuesta.telefono = this.altaForm.value.telefono?.toString();
        this.encuesta.pregunta1 = this.altaForm.value.pregunta1?.toString();
        this.encuesta.pregunta2 = this.altaForm.value.pregunta2?.toString();
        this.encuesta.comentarios = this.altaForm.value.comentarios?.toString();
        this.encuesta.fecha=  new Date(Date.now()).toLocaleString();
        console.log(this.encuesta)
    
        this._servicio.agregarEncuesta(this.encuesta).then(() => {
          this._router.navigate(['home']);
    
        });
  }
}
