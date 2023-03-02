export interface DiagnosticImagingRequest {
  imagingRequestId: number;
  appointmentId?: number;
  datetimeOfRequest?: number;
  doctorRemarks?: number;
  imagingSubType?: number;
  result?: number;
  status: number;
  technicianRemarks?: number;
}