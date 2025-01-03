import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent implements OnInit {

  @Input() selectedYear: string = '';
  @Output() yearChange = new EventEmitter<string>();

  years: string[] = [];

  ngOnInit() {
    this.generateYearRange();
  }

  generateYearRange() {
    const currentYear = new Date().getFullYear();
    const startYear = 2020;
    this.years = Array.from(
      { length: currentYear - startYear + 1 },
      (_, index) => (startYear + index).toString()
    );
  }

  onYearChange(value: string) {
    this.yearChange.emit(value);
  }

}
