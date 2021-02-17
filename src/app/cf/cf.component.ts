import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cf',
  templateUrl: './cf.component.html',
  styleUrls: ['./cf.component.css'],
})
export class CFComponent implements OnInit {
  userAddressValidations: FormGroup;
  numberOfFunds: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userAddressValidations = this.formBuilder.group({
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^[6-9]d{9}$')],
      ],
    });
  }

  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}

export class SelectValueBindingExample {
  selected = 'option2';
}

export class CustomerForm {
  name: string;
  position: number;
  phone : number;
  place: string;
  funds:number;
}
