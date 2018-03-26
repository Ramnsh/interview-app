import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {Resource } from '../resource';
import { ResourceService} from '../resource.service';
import {Router } from '@angular/router';
import { resource } from 'selenium-webdriver/http';

@Component({
    selector: 'app-addres',
    templateUrl: './add.resource.component.html'
})

export class AddResourceComponent implements OnInit {
    nextId: number;
    newId: number;
    resourceDtl: Resource[];
    resForm: FormGroup;
    id: FormControl;
    surName: FormControl;
    name: FormControl;
    birthDate: FormControl;
    phone: FormControl;
    street: FormControl;
    number: FormControl;

    constructor(private _res: ResourceService, private _router: Router) {}

    ngOnInit() {
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

    AddResourceDtl () {
        console.log(this.resForm.value);
        this._res.GetResourceData().subscribe(r => { this.resourceDtl = <Resource[]>r;
            this.nextId = Math.max.apply(null, this.resourceDtl.map(r => r.id));
        });
             if (this.nextId >= 1) {
                  this.newId = this.nextId + 1;
             } else {

              this.newId = 1;
             }
             this._res.AddResourceData(this.resForm.value, this.newId);
             this._router.navigate(['/resource']);
    }


}
 
