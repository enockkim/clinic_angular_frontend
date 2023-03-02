export interface OperationRequest {
  operationRequestId: number;
  operationSubType?: number;
  appointmentId?: number;
  datetimeOfRequest?: Date;
  doctorRemarks?: string;
  status?: number;
  operatorRemarks?: string;
}