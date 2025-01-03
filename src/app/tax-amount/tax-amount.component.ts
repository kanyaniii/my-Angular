import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.scss']
})
export class TaxAmountComponent implements OnInit {

  @Input() totalVAT: number = 0; // รับค่าจาก TotalAmount
  editableTaxAmount: number = 0; // ค่า Tax ที่ผู้ใช้สามารถแก้ไขได้
  maxDeviation: number = 20; // ช่วงเบี่ยงเบนที่อนุญาตให้แก้ไข

  constructor() {}

  ngOnInit(): void {
    this.editableTaxAmount = this.totalVAT; // กำหนดค่าเริ่มต้น
  }

  // ฟังก์ชันลบเครื่องหมายคอมมา
  removeComma(): void {
    this.editableTaxAmount = parseFloat(
      this.editableTaxAmount.toString().replace(/,/g, '')
    );
  }

  // ฟังก์ชันตรวจสอบและฟอร์แมตค่า Tax
  validateAndFormatTax(): void {
    const deviation = Math.abs(this.editableTaxAmount - this.totalVAT);
    if (deviation > this.maxDeviation) {
      alert('Invalid Tax'); // แสดงข้อความเตือน
      this.editableTaxAmount = this.totalVAT; // คืนค่าเริ่มต้นหากเบี่ยงเบนเกิน
    } else {
      this.editableTaxAmount = parseFloat(this.editableTaxAmount.toFixed(2)); // ปัดเศษทศนิยม 2 ตำแหน่ง
    }
  }

  // ฟังก์ชันฟอร์แมตรูปแบบจำนวนเงิน
  formatCurrency(value: number): string {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2 });
  }
}
