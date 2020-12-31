import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: `
    <div *ngIf="'create' | able: 'Post'">
        <a (click)="createPost()">Add Post</a>
    </div>
    <button [disabled]="!('create' | able: 'Post')">Add Post</button>
    <div *ngIf="'create' | ablePure: 'Todo'">...</div>
    <div *ngIf="'create' | ablePure: 'Todo' | async">...</div>
  `
})
export class TestComponent {
 createPost(){
     console.log("added");
 }
}