import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Bill, BillDetail, CashType, PaymentDetails } from '../models/Finance';


const httpOptions1 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
}

@Injectable({
  providedIn: 'root'
})

export class FinanceService {

  private apiUrl = 'http://localhost:5000/Finance';

  constructor(private http: HttpClient) { }

  async getBills(): Promise<Bill[]>{
    const url = `${this.apiUrl}/GetBills`;
    return await this.http.get<Bill[]>(url).toPromise();
  }

  async getBillDetails(billNo: number): Promise<BillDetail[]>{
    const url = `${this.apiUrl}/GetBillDetailsByBillNo`;
    return await this.http.get<BillDetail[]>(url).toPromise();
  }

  async getCashTypes(): Promise<CashType[]>{
    const url = `${this.apiUrl}/GetCashTypes`;
    return await this.http.get<CashType[]>(url).toPromise();
  }

  async payBill(paymentDetials: PaymentDetails): Promise<boolean[]>{
    const url = `${this.apiUrl}/GetCashTypes`;
    return await this.http.get<boolean>(url, paymentDetials).toPromise();
  }
}
