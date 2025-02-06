# Angular

Angular เป็นเฟรมเวิร์กที่มีประสิทธิภาพสำหรับการสร้างแอปพลิเคชันเว็บที่ทันสมัย ด้วยความสามารถในการจัดการส่วนประกอบต่างๆ เช่น คอมโพเนนต์, เซอร์วิส, โมดูล, และการใช้ Angular CLI เพื่อช่วยในการพัฒนาและจัดการโปรเจค Angular ได้ง่ายขึ้น การใช้งาน Angular ช่วยให้สามารถสร้างแอปพลิเคชันที่สามารถขยายขนาดได้และรักษาความเป็นระเบียบในการพัฒนาแอป version 11.2.19.

# การเริ่มต้นใช้งาน

## 1.ติดตั้ง Angular CLI Version 11.2.19
ก่อนอื่นต้องติดตั้ง Node.js และ npm ให้พร้อมใช้งาน จากนั้นติดตั้ง Angular CLI โดยการรันคำสั่งนี้:

Run `npm install -g @angular/cli@11.2.19`

## 2.ตรวจสอบเวอร์ชันที่ติดตั้ง
หลังจากติดตั้งเสร็จแล้ว คุณสามารถตรวจสอบว่า Angular CLI ติดตั้งเวอร์ชัน 11.2.19 หรือไม่ โดยการรันคำสั่งนี้ในคอมมานด์ไลน์:
Run `ng version`

## 3.สร้างโปรเจค Angular ใหม่
หลังจากติดตั้ง Angular CLI แล้ว ให้สร้างโปรเจค Angular ใหม่ด้วยคำสั่ง:

Run `ng new my-angular-app`

## 4.รันแอปพลิเคชัน
หลังจากสร้างโปรเจคเสร็จแล้ว ให้เข้าไปในไดเรกทอรีของโปรเจคและเริ่มเซิร์ฟเวอร์การพัฒนา:

Run `cd my-angular-app`
Run `ng serve`

แอปพลิเคชันจะพร้อมใช้งานที่ http://localhost:4200/

## 5. สร้างคอมโพเนนต์, เซอร์วิส, ฯลฯ
สามารถสร้างคอมโพเนนต์ใหม่, เซอร์วิส, หรือโมดูลด้วยคำสั่ง ng generate เช่น:

Run `ng generate component my-component`
Run `ng generate service my-service`

## 6. สร้างคอมโพเนนต์, เซอร์วิส, ฯลฯ
เมื่อแอปพลิเคชันพร้อมใช้งานในโปรดักชันแล้ว ให้สร้างแอปเพื่อใช้งานในสภาพแวดล้อมการผลิต:
Run `ng build --prod`

# คำสั่งทั่วไปของ Angular

## สร้างโปรเจคใหม่

Run `ng new <project-name>` 

## รันแอปพลิเคชัน

Run `ng serve` 

## สร้างคอมโพเนนต์ใหม่

Run `ng generate component <component-name>` 

## สร้างโปรเจคสำหรับการผลิต

Run `ng build --prod` 

## รันการทดสอบหน่วย (unit test)

Run `ng test` 

## รันการทดสอบแบบ end-to-end (e2e test)

Run `ng e2e` 
