import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: object[] = [
    {name: 'Mars soil sample'},
    {name: 'Plant growth in habitat'},
    {name: 'Human bone density'},

  ]
  constructor() { }

  ngOnInit() {
  }

  testBeingEdited: object = null;

  remove(test: object) {
    let index = this.experiments.indexOf(test);
    this.experiments.splice(index, 1);
  }

  add(testName: string) {
    this.experiments.push({name: testName});
  }

  edit(test: object) {
    this.testBeingEdited = test;
  }

  save(name: string, test: object) {
    test['name'] = name;
    this.testBeingEdited = null;
  } 
}
