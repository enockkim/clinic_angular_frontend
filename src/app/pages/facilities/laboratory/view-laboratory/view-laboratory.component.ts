import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment, AppointmentData } from 'app/models/Appointment';
import { LaboratoryRequest } from 'app/models/Laboratory';
import { LaboratoryService } from '../../../../services/facilities/laboratory.service';
import { AppointmentService } from '../../../../services/appointment.service';

@Component({
  selector: 'app-view-laboratory',
  templateUrl: './view-laboratory.component.html',
  styleUrls: ['./view-laboratory.component.scss']
})
export class ViewLaboratoryComponent implements OnInit {

  constructor(    
    private LaboratoryService: LaboratoryService,
    private AppointmentService: AppointmentService
  ) { }

  form: FormGroup;
  // patientData = {} as PatientData;
  tableTitle: string = "Laboratory"
  title: string = "Laboratory Result";
  patientName: string = "Enock Sang";
  button: string = "Transfer";
  response: Boolean;

  billTotal: string = "10";
  cashType;
  Data: AppointmentData[];
  DataSource: MatTableDataSource<AppointmentData>;
  DetailData: LaboratoryRequest[];
  DetailDataSource: MatTableDataSource<LaboratoryRequest>;

  DataColumnsToDisplay: string[] = ['appointmentId', 'patientName'];
  DetailsColumnsToDisplay: string[] = ['labId', 'falabTypeIdcility', 'labResults', 'labTechRemarks'];  
  columnsToDisplayWithExpand = [...this.DetailsColumnsToDisplay, 'expand'];

  expandedElement: AppointmentData | null;
  billNo: number;

  async ngOnInit() {
    this.Data = await this.AppointmentService.getAppointments(1,15);
    this.DataSource = new MatTableDataSource(this.Data);

    this.DetailData = await this.LaboratoryService.getLaboratoryRequestsByAppointmentId(156);
    this.DetailDataSource = new MatTableDataSource(this.DetailData);

    this.expandedElement = this.Data[0];
  }

  async onSubmit(){

 
  }

  async toggleRow(){
    //expand  row
    this.DetailData = await this.LaboratoryService.getLaboratoryRequestsByAppointmentId(1);
    this.DetailDataSource = new MatTableDataSource(this.DetailData);
  }
  toggleDetailRow(): void{
    //fill form
  }

}
