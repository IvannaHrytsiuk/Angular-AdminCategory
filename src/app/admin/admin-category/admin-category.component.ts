import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {
  arrCategory:Array<any> = [];
  modalRef: BsModalRef;
  categoryName:string;
  editName:string;
  editIndex:number;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }
  addCategory():void{
    this.arrCategory.push({
        name: this.categoryName
    })
    this.categoryName = '';
  }
  saveEdit(index:number):void{
    this.modalRef.hide();
    this.arrCategory[index].name = this.editName;
  }
  delCategory(index:number):void{
    this.arrCategory.splice(index,1);
    this.modalRef.hide();
  }
  openModal(template: TemplateRef<any>,index:number) {
    this.modalRef = this.modalService.show(template);
    this.editName = this.arrCategory[index].name;
  }
  
}
