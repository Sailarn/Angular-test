import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ElasticsearchService } from "../elasticsearch.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { Store } from "@ngrx/store";
import { AppState } from "../store/app.state";

@Component({
  selector: "elastic",
  templateUrl: "./elastic.component.html",
  styleUrls: ["./elastic.component.sass"]
})
export class ElasticComponent implements OnInit {
  l_state: any;
  Form: FormGroup;
  editForm: FormGroup;
  formArr: any;
  editArr: any;
  isEmpty: boolean = true;
  showData: boolean = false;
  isEdit: boolean = false;
  currentEdit: any;
  currentId: number;
  isConnected = false;
  status: string;
  toggleText: string = "Show Data";
  minDate = new Date(1950, 0, 1);
  maxDate = new Date();

  constructor(
    private store: Store<AppState>,
    private es: ElasticsearchService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {
    this.isConnected = false;
  }
  ngOnInit() {
    const xhr = this.es
      .isAvailable()
      .then(() => {
        console.log(xhr)
        this.status = "OK";
        this.isConnected = true;
        this.es.retrive();
        this.store.select("appData").subscribe(data => {
          this.l_state = data.users;
        });
      })
      .catch(error => {
        this.status = "ERROR";
        this.isConnected = false;
        console.error("Server is down", error);
      });
    this.initForm();
  }
  initForm() {
    this.Form = this.fb.group({
      firstName: [null, [Validators.required, Validators.pattern(/[A-z]/)]],
      lastName: [null, [Validators.required, Validators.pattern(/[A-z]/)]],
      birth: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });
  }
  initEdit(item) {
    this.editForm = this.fb.group({
      firstName: [
        item.info.first_name,
        [Validators.required, Validators.pattern(/[A-z]/)]
      ],
      lastName: [
        item.info.last_name,
        [Validators.required, Validators.pattern(/[A-z]/)]
      ],
      birth: [item.info.birth, [Validators.required]],
      mobile: [item.info.mobile, [Validators.required]],
      email: [item.info.email, [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    const controls = this.Form.controls;
    Object.keys(controls).forEach(
      () =>
        (this.formArr = {
          id: this.l_state.length + 1,
          info: {
            first_name: controls["firstName"].value,
            last_name: controls["lastName"].value,
            birth: new Date(controls["birth"].value).toLocaleDateString(),
            mobile: controls["mobile"].value,
            email: controls["email"].value,
            created: new Date().toLocaleString()
          }
        })
    );
    this.l_state.push(this.formArr);
    this.es.update(this.l_state);
    this.Form.reset();
  }
  onEdit() {
    const controls = this.editForm.controls;
    Object.keys(controls).forEach(
      () =>
        (this.editArr = {
          id: this.currentId,
          info: {
            first_name: controls["firstName"].value,
            last_name: controls["lastName"].value,
            birth: new Date(controls["birth"].value).toLocaleDateString(),
            mobile: controls["mobile"].value,
            email: controls["email"].value,
            created: new Date().toLocaleString()
          }
        })
    );
    this.l_state = this.l_state.filter(item => item.id !== this.editArr.id);
    this.l_state.push(this.editArr);
    this.es.update(this.l_state);
    this.editForm.reset();
    this.isEdit = false;
  }
  deleteBtn: any = id => {
    this.l_state = this.l_state.filter(item => item.id !== id);
    this.es.update(this.l_state);
  };
  toggleData: any = () => {
    if (this.showData === false) {
      this.showData = true;
      this.toggleText = "Hide Data";
    } else {
      this.showData = false;
      this.toggleText = "Show Data";
    }
  };
  ngAfterViewChecked() {
    if (this.showData === true) {
      if (this.l_state.length > 0) {
        this.isEmpty = false;
      } else {
        this.isEmpty = true;
      }
    }
    this.cdRef.detectChanges();
  }
  editBtn: any = id => {
    this.currentId = id;
    this.isEdit = true;
    for (let item of this.l_state) {
      if (id == item.id) {
        this.currentEdit = item;
        this.initEdit(item);
      }
    }
  };
  cancelEditing: any = () => {
    this.isEdit = false;
  };
}
