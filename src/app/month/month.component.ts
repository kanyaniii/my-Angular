import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {

  @Input() selectedMonth: string = ''; // ค่าเริ่มต้น
  @Output() monthChange = new EventEmitter<string>();

  months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' }
  ];

  ngOnInit() {
    this.filterMonths();
  }

  filterMonths() {
    const currentMonth = new Date().getMonth() + 1; // เดือนปัจจุบัน (1-12)
    this.months = this.months.filter(
      (month) => parseInt(month.value, 10) <= currentMonth
    );
  }

  onMonthChange(selectedMonth: string): void {
    this.monthChange.emit(selectedMonth);
  }
}
