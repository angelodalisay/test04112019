import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  closeModal() {
    this.activeModal.close('Task Form Closed');
  }
  ngOnInit() {
  }

}
