import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.scss']
})
export class FilingTypeComponent implements OnInit {

  @Input() taxData: any; // รับข้อมูลจาก Parent Component
  
  filingType: string = '0'; // ค่าเริ่มต้นของ radio (Ordinary Filing)

  constructor() { }

  ngOnInit(): void {
  }

}
