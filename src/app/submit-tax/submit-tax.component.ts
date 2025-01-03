import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-tax',
  templateUrl: './submit-tax.component.html',
  styleUrls: ['./submit-tax.component.scss']
})
export class SubmitTaxComponent {
  view: string = 'filingType'; // ควบคุมหน้า ('filingType' หรือ 'review')
  

  isReview: boolean = false; // ค่าเริ่มต้นคือ false (Input Detail)

  taxData = {
    filingType: '', // ค่าจาก 2.1
    month: '', // ค่าจาก 2.2.1
    year: '', // ค่าจาก 2.2.2
    saleAmount: 0, // ค่าจาก 2.3.1
    taxAmount: 0, // ค่าจาก 2.3.2
    surcharge: 0, // ค่าจาก 2.3.3
    penalty: 200.0, // ค่าคงที่จาก 2.3.4
    totalAmount: 0 // ค่าจาก 2.3.5
  };

  goToInputDetail(): void {
    this.isReview = false; // เมื่อกด Back ให้กลับไปหน้า Input Detail
  }

  // ฟังก์ชันดึงค่าจาก Month Component
  onMonthChange(month: string): void {
    this.taxData.month = month;
  }

  // ฟังก์ชันดึงค่าจาก Year Component
  onYearChange(year: string): void {
    this.taxData.year = year;
  }

  // ฟังก์ชันเปลี่ยนไปหน้า Review
  goToReview(): void {
    console.log('Tax Data:', this.taxData);

    // if (!this.taxData.filingType || !this.taxData.month || !this.taxData.year || this.taxData.saleAmount === 0) {
    //   alert('Invalid Data'); // ข้อมูลไม่ครบถ้วน
    //   return;
    // }
  
    // คำนวณ Tax Amount, Surcharge, และ Total Amount
    this.taxData.taxAmount = parseFloat((this.taxData.saleAmount * 0.07).toFixed(2));
    this.taxData.surcharge = parseFloat((this.taxData.taxAmount * 0.1).toFixed(2));
    this.taxData.totalAmount = this.taxData.taxAmount + this.taxData.surcharge + this.taxData.penalty;
  
    this.view = 'review'; // เปลี่ยนไปหน้า Review
    this.isReview = true; // เมื่อกด Next ให้ไปหน้า Review
  }
  

  // ฟังก์ชันกลับไปหน้า Filing Type
  goToFilingType(): void {
    this.view = 'filingType'; // กลับไปหน้า Filing Type
  }

  // การยืนยันและส่งข้อมูล
  confirmAndSubmit(): void {
    console.log('ส่งข้อมูล:', this.taxData);
    alert('ส่งข้อมูลสำเร็จแล้ว!');
  }
}
