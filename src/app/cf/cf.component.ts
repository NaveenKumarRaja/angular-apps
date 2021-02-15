import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cf',
  templateUrl: './cf.component.html',
  styleUrls: ['./cf.component.css']
})
export class CFComponent {
  userAddressValidations: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.userAddressValidations = this.formBuilder.group({
      mobileNumber: ['', [Validators.required, Validators.pattern('^[6-9]\d{9}$')]]
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
