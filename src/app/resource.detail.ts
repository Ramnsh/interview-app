import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Resource} from './resource';
import {FormGroup, FormControl} from '@angular/forms';
import {ResourceService} from './resource.service';



@Component({
    // tslint:disable-next-line:component-selector
    selector: 'resource-detail',
    templateUrl: 'resource.detail.html'
})

// tslint:disable-next-line:component-class-suffix
export class ResourceDetailComponent implements OnInit {

  @Input()
  resourceDtl: Resource;
  selectRes: Resource[];
  currentID: number;
  @Output() updateResource =  new EventEmitter();

  resForm: FormGroup;
  id: FormControl;
  surName: FormControl;
  name: FormControl;
  birthDate: FormControl;
  phone: FormControl;
  street: FormControl;
  number: FormControl;
    constructor (private _res: ResourceService) {}

    ngOnInit () {
        this.resForm = new FormGroup ({
            id: new FormControl(),
            surname: new FormControl(),
            name: new FormControl(),
            birthDate: new FormControl(),
            phone: new FormControl(),
            city: new FormControl(),
            street: new FormControl(),
            number: new FormControl()
        });

    }

    selectedRes(newId: number) {
        this.currentID = newId;
        this.resForm.setValue({
            id: this.resourceDtl[this.currentID].id,
            surname: this.resourceDtl[this.currentID].surname,
            name: this.resourceDtl[this.currentID].name,
            birthDate: this.resourceDtl[this.currentID].birthDate,
            phone: this.resourceDtl[this.currentID].phone,
            city: this.resourceDtl[this.currentID].city,
            street: this.resourceDtl[this.currentID].street,
            number: this.resourceDtl[this.currentID].number
        });
        console.log(this.resForm.value);
    }
    updateResourceDtl () {
        console.log(this.resForm.value);
        this._res.UpdateResourceData(this.resForm.value);
        this.updateResource.emit(this.resForm);
    }
    deleteResourceDtl () {
        console.log(this.resForm.value);
        this._res.DeleteResourceData(this.resForm.value);
    }


}

