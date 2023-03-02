import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef  } from '@angular/material/dialog';
import { Appointment, AppointmentData } from 'app/models/Appointment';
import { CashType, PaymentDetails } from 'app/models/finance';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FinanceService } from '../../../services/finance.service';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss'],
  template: 'passed in {{ data.billTotal, data.billNo }}',
})
export class PayBillComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      billTotal: number, 
      billNo: number,
    }, 
    private fb: FormBuilder, 
    private FinanceService: FinanceService, 
    dialog: MatDialog,
    public dialogRef: MatDialogRef<PayBillComponent>
    ) { }

  form: FormGroup;
  title: string = "Pay Bill";
  description: string = "Complete the form to pay pending bill.";
  button: string = "Save";
  response: Boolean;

  cashType: CashType[];
  paymentDetails: PaymentDetails;

  async ngOnInit() {
    this.cashType = await this.FinanceService.getCashTypes();

    this.form = this.fb.group({
      cashType: ['', Validators.required],
      reference: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.paymentDetails.cashType = Number(formData.cashType);
      this.paymentDetails.billDetailEntryNo = this.data.billNo;
      this.paymentDetails.amountPaid = this.data.billTotal;
      this.paymentDetails.reference = formData.reference;

      const res = await this.FinanceService.payBill(this.paymentDetails);
      
      if(res){
        this.dialogRef.close(this.data.billNo);
      }else{  

      }
      
    }
  }

}
