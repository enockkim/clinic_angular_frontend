export interface Bill {
  billNo?: number;
  appointmentId: number;
  status: number;
}

export interface BillDetail {
  entryNo?: number;
  billNo: number;
  cost: number;
  details: string;
  facility: number;
  status: number;
}

export interface CashType {
  cashTypeId: number; 
  cashType: string;
}

export interface PaymentDetails{
  amountPaid: number;
  cashType: number;
  billDetailEntryNo: number;
  reference: string;
}       



