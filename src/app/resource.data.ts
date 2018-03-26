import { Component , OnInit, NgModule, Input } from '@angular/core';
import 'Rxjs/rx';

import { Resource } from './resource';
import {ResourceService} from './resource.service';


@Component({
    templateUrl: 'resource.component.html'
})

export class ResourceDataComponent implements OnInit {
    resourceDtl: Resource[];
    user: Resource[];
    id: string;
    userId: number;

    // Boolean Flags
    searchSpinner?: boolean;
    getRecord: boolean;
    srchErrorMsg: boolean;
    isDisable: boolean;
    counter = 0;

    constructor(private _resDtl: ResourceService) {}

    ngOnInit() {

        this.searchSpinner = false;
        // this.getRecord = false;
        this.srchErrorMsg = false;
        this.isDisable = false;
        if (isNaN(parseInt(this.id, 10))) {
            this.srchErrorMsg = true;
        }
    }

    ValidateInput() {
        if (this.srchErrorMsg) {
            if (!isNaN(+this.id)) {
                this.srchErrorMsg = false;
                this.isDisable = true;
            }
        } else {
            if (isNaN(+this.id) || this.id.length === 0) {
                this.srchErrorMsg = true;
            }
        }

        if (this.id.length === 0) {
            this.isDisable = false;
        }
    }


    ResourceDtl() {
        this.searchSpinner = true;
        console.log(parseInt(this.id, 10));
         this._resDtl.GetResourceData().subscribe(data => {
             this.user = <Resource[]>data;
             console.log(this.user);
             if (isNaN(+this.id) || this.id.length === 0 ) {
                this.resourceDtl = this.user;
             } else {
                this.resourceDtl = this.user.filter(user => user.id === (+this.id));
                this.id = '';
             }

         }, err => console.log('error occured'), () => console.log('done'));
        setTimeout(function(){
        console.log(this.resourceDtl);
           this.searchSpinner = false;
           this.getRecord = true;
        }.bind(this), 1000);


    }

    SetBorder() {
        if (this.srchErrorMsg) {
            return {'border-left-color': '#ab1a0f', 'border-left-width': '.25em'};
        } else {
            return {'border-left-color': '#0683c9', 'border-left-width': '.25em'};
        }
    }

    updateResource (res: Resource) {

        console.log(res);
    }
}
