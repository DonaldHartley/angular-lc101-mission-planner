import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  cargo: object[] = [
    {name: 'Habitat Dome'},
    {name: 'Drones'},
    {name: 'Food containers'},
    {name: 'Oxygen tanks'}
  ];

  constructor() { }

  ngOnInit() {
  }

  stuffBeingEdited: object = null;

  remove(stuff: object) {
    let index = this.cargo.indexOf(stuff);
    this.cargo.splice(index, 1);
  }

  add(cargoName: string) {
    this.cargo.push({name: cargoName});
  }

  edit(stuff: object) {
    this.stuffBeingEdited = stuff;
  }

  save(name: string, stuff: object) {
    stuff['name'] = name;
    this.stuffBeingEdited = null;
  }

}
