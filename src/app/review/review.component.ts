import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() taxData: any; // รับข้อมูลจาก Parent Component


  constructor(private router: Router) {}

  ngOnInit(): void {
    // ดึงข้อมูลจาก sessionStorage
    const data = sessionStorage.getItem('taxData');
    if (data) {
      this.taxData = JSON.parse(data);
    } else {
      this.router.navigate(['/']); // กลับไปหน้าหลักหากไม่มีข้อมูล
    }
  }

  // ฟังก์ชันยืนยันและส่งข้อมูล
  confirmAndSubmit(): void {
    alert('Data Submitted: ' + JSON.stringify(this.taxData, null, 2)); // แสดงข้อมูลในรูปแบบ JSON
  }
}
