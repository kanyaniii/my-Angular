import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.scss']
})
export class TotalAmountComponent implements OnInit {

  priceAmount: number = 0; // จำนวนเงินที่กรอก
  vatAmount: number = 0; // VAT ที่คำนวณได้
  surchargeAmount: number = 0; // ค่า Surcharge
  penaltyAmount: number = 200; // ค่า Penalty (ค่าคงที่)
  totalAmount: number = 0; // ผลรวมทั้งหมด (VAT + Surcharge + Penalty)
  totalVAT: number = 0; // ค่า VAT ที่คำนวณได้
  editableTaxAmount: number = 0; // ค่า Tax ที่แก้ไขได้
  maxDeviation: number = 20; // ขอบเขตการเบี่ยงเบนที่อนุญาต

  constructor() {}

  ngOnInit(): void {
    this.editableTaxAmount = this.vatAmount; // ตั้งค่า Tax เริ่มต้น
  }

  // ฟังก์ชันลบเครื่องหมายคอมมา
  removeComma(): void {
    this.editableTaxAmount = parseFloat(
      this.editableTaxAmount.toString().replace(/,/g, '')
    );
  }

  // คำนวณ VAT
  calculateVatAndFormat(): void {
    if (!isNaN(this.priceAmount)) {
      this.vatAmount = parseFloat((this.priceAmount * 0.07).toFixed(3)); // คำนวณ VAT (7% ของราคา)
      this.editableTaxAmount = this.vatAmount; // ตั้งค่า Tax เริ่มต้น
      this.calculateSurcharge();
    }
  }

  // คำนวณ Surcharge
  calculateSurcharge(): void {
    this.surchargeAmount = parseFloat((this.vatAmount * 0.1).toFixed(3)); // Surcharge = VAT * 0.1
    this.calculateTotal();
  }

  // คำนวณค่า Penalty
  calculatePenalty(): void {
    this.penaltyAmount = 200.0; // Penalty เป็นค่าคงที่
    this.calculateTotal();
  }

  // คำนวณผลรวมทั้งหมด (VAT + Surcharge + Penalty)
  calculateTotal(): void {
    this.totalAmount = parseFloat(
      (this.vatAmount + this.surchargeAmount + this.penaltyAmount).toFixed(2)
    );
  }

  // ฟังก์ชันตรวจสอบและฟอร์แมตค่า Tax
  validateAndFormatTax(): void {
    const deviation = Math.abs(this.editableTaxAmount - this.vatAmount);
    if (deviation > this.maxDeviation) {
      alert('Invalid Tax'); // แจ้งเตือนเมื่อค่าเบี่ยงเบนเกิน
      this.editableTaxAmount = this.vatAmount; // คืนค่า Tax เป็นค่าเริ่มต้น
    }
    this.calculateTotal();
  }

}
