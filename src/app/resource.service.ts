 import { Injectable } from '@angular/core';
 import { Resource } from './resource';
import { HttpClient } from '@angular/common/http';


 @Injectable()
 export class ResourceService {
    userData: Resource;
    // emp = EMP;

    constructor(private _http: HttpClient) {}

    GetResourceData() {
        return this._http.get('http://localhost:3000/users');
    }

    AddResourceData(userData, newId: number) {
         console.log(userData);
         userData.id = newId;
         this._http.post('http://localhost:3000/users', userData).subscribe((data: any) => {
             console.log(data);
         });
        }
    UpdateResourceData(userData) {
         console.log('http://localhost:3000/users/' + userData.id);
         this._http.put('http://localhost:3000/users/' + userData.id, userData).subscribe((data: any) => {
             console.log(data);
         });
        }

    DeleteResourceData(userData) {
         console.log(userData);
         this._http.delete('http://localhost:3000/users/' + userData.id, userData).subscribe((data: any) => {
             console.log(data);
         });
        }
 }
