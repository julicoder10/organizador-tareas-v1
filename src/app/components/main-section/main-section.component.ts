import { Component, OnInit } from '@angular/core';



interface tarea{
  nombre:string,
  texto:string,
  nivelImportancia:number,
  subTareas?:{
    nombre:string,
    texto:string,
    nivelImportancia:number,
  }
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  listaTareas:tarea[] = [];

  tarea ={
    nombre: '',
    texto:'',
    nivelImportancia:0,
  };
  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){

    const tareaX = {
      nombre: this.tarea.nombre,
      texto: this.tarea.texto,
      nivelImportancia : this.tarea.nivelImportancia,
  }

  this.listaTareas.push(tareaX);
  this.tarea.nombre = '';
  this.tarea.texto = '';
  this.tarea.nivelImportancia = 0;
}
  eliminarTarea(index:number){
    this.listaTareas.splice(index, 1)
  }
}
