import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.scss']
})
export class SaleAmountComponent implements OnInit {

  priceAmount: string = ''; // เก็บค่าที่ผู้ใช้งานกรอก
  vatPercentage: number = 0.07; // อัตราภาษี 7%
  vatAmount: number = 0; // ค่า VAT ที่คำนวณได้
  

  constructor() { }

  ngOnInit(): void {
  }
  // ฟังก์ชันลบเครื่องหมายคอมมา
  removeComma(): void {
    this.priceAmount = this.priceAmount.replace(/,/g, ''); // ลบเครื่องหมายคอมมาออก
  }

  // ฟังก์ชันคำนวณ VAT และฟอร์แมตรูปแบบ
  calculateVatAndFormat(): void {
    const value = parseFloat(this.priceAmount); // แปลงค่าเป็นตัวเลข
    if (!isNaN(value)) {
      this.vatAmount = parseFloat((value * this.vatPercentage).toFixed(3)); // คำนวณ VAT และปัดเศษที่หลักที่ 3
      this.priceAmount = this.formatCurrency(value); // ฟอร์แมตรูปแบบจำนวนเงินในฟิลด์
    }
  }

  // ฟังก์ชันฟอร์แมตรูปแบบจำนวนเงิน
  formatCurrency(value: number): string {
    return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
