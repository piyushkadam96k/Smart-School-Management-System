# 🏫 ShalaConnect — Smart School Management System

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-blue?style=for-the-badge&logo=python" />
  <img src="https://img.shields.io/badge/Flask-3.0-green?style=for-the-badge&logo=flask" />
  <img src="https://img.shields.io/badge/SQLite-Database-orange?style=for-the-badge&logo=sqlite" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3-purple?style=for-the-badge&logo=bootstrap" />
  <img src="https://img.shields.io/badge/License-MIT-red?style=for-the-badge" />
</p>

<p align="center">
  <b>Complete school management system built for Indian schools.</b><br>
  No internet needed • One-time payment • Works on school's local network
</p>

---
## ✨ Features

### 💰 Smart Fees Management
- Class-wise fee structure with custom categories (Tuition, Lab, Sports, etc.)
- Real-time fees dashboard — Total Expected, Collected, Pending, Defaulters
- Student-wise fee breakdown with individual adjustments
- One-click PDF fee receipt download per student
- Bulk ZIP download — all student receipts for entire class
- Export fees data as CSV
- Auto WhatsApp reminders to parents for pending fees

### 📊 Exam & Results Management
- Multiple exam types — Written, Practical, Unit Test, Mid-Term, Final
- Subject-wise marks entry with max marks configuration
- Automatic grade calculation (A+, A, B+, B, C, D, Fail)
- Class results ranked by percentage
- Export results as CSV

### 📄 PDF Report Cards
- Professional printable report cards with school branding
- Individual student report card download
- **Bulk ZIP download** — entire class report cards in one click
- Includes: Student name, roll no, class, exam name, all subjects, marks, grade, percentage, result
- Disclaimer: *"Check all amounts carefully. This is a computer generated receipt."*

### 🏫 Class & Student Management
- Add/Edit/Delete classes and sections (10-A, 10-B, etc.)
- Student profiles with roll number, photo, parent details
- Subject management per class
- **One-click student promotion** to next class
- Search students by name or roll number

### 📅 Attendance (Coming Soon)
- Daily attendance marking by class teacher
- Present/Absent/Late tracking
- Monthly attendance summary
- Auto WhatsApp to parents if student is absent

### 📱 WhatsApp Integration
- Auto notify parents about:
  - Fee payment reminders
  - Exam results
  - Attendance alerts
  - School events and notices
- Built on WhatsApp Web automation

### 🔒 Security Features
- CSRF Protection on all forms (Flask-WTF)
- Account lockout after 5 failed login attempts (15 min lockout)
- Input sanitization — XSS prevention on all endpoints
- Role-based access (Admin / Teacher)
- Password hashing with Werkzeug

### 🌗 UI/UX
- Modern dark/light mode toggle
- Responsive design — works on mobile, tablet, desktop
- Fast search across students and rolls
- Clean sidebar navigation
- Real-time dashboard stats

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Python 3.10+ | Core backend |
| Flask 3.0 | Web framework |
| SQLite | Local database |
| Bootstrap 5.3 | Frontend UI |
| Jinja2 | HTML templating |
| ReportLab | PDF generation |
| Flask-WTF | CSRF protection |
| Werkzeug | Password hashing |

---

## 🚀 Installation

### Requirements
- Windows 10/11
- Python 3.10 or higher
- Any modern browser (Chrome, Edge, Firefox)

### Step 1 — Clone Repository
```bash
git clone https://github.com/piyushkadam96k/school-management-system.git
cd school-management-system
```

### Step 2 — Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 3 — Run Application
```bash
python app.py
```

### Step 4 — Open in Browser
```
http://localhost:5000
```

### Default Login
```
Username: admin
Password: admin123
```

> ⚠️ Change password immediately after first login!

---

## 🌐 Network Setup for School

To allow teachers and other devices to access the system on school WiFi:

```bash
python app.py --host=0.0.0.0 --port=5000
```

Teachers can then access via:
```
http://[your-computer-ip]:5000
```

---

## 📁 Project Structure

```
school-management-system/
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── school.db              # SQLite database (auto-created)
├── templates/             # Jinja2 HTML templates
│   ├── base.html
│   ├── auth/
│   │   └── login.html
│   ├── dashboard/
│   │   └── index.html
│   ├── classes/
│   │   ├── list.html
│   │   └── detail.html
│   ├── fees/
│   │   ├── dashboard.html
│   │   ├── class_fees.html
│   │   └── student_fees.html
│   ├── exams/
│   │   ├── list.html
│   │   ├── marks.html
│   │   └── results.html
│   └── settings/
│       └── index.html
├── static/
│   ├── css/
│   └── js/
└── README.md
```

---

## 📋 How It Works

```
1. Admin logs in → sees full dashboard
2. Add classes → Add students to each class
3. Set fee structure per class
4. Record fee payments → auto PDF receipt
5. Create exams → Enter marks
6. Generate report cards → Download ZIP
7. WhatsApp parents automatically
```

---

## 🔐 User Roles

| Role | Access |
|------|--------|
| **Admin** | Full access — all classes, fees, results, settings |
| **Teacher** | Own class only — attendance, marks, students |
| **Parent/Student** | View only — results, fees, attendance *(Coming Soon)* |

---

## 📊 Database Schema

```
users              → Admin and teacher accounts
classes            → School classes (10-A, 10-B)
students           → Student profiles
subjects           → Subjects per class
fee_structures     → Fee categories and amounts
fee_payments       → Payment records
student_fee_adjustments → Custom fee amounts per student
exams              → Exam definitions
marks              → Student marks per exam
attendance         → Daily attendance records (Coming Soon)
```

---

## 🆕 Recent Updates

### v2.0 (March 2026)
- ✅ Complete UI redesign — Dark/Light mode
- ✅ Fees dashboard with real-time defaulter tracking
- ✅ Class-wise fee structure with custom categories
- ✅ Individual + Bulk ZIP PDF report cards
- ✅ CSRF protection on all forms
- ✅ Account lockout security
- ✅ XSS input sanitization
- ✅ N+1 query optimization — 10x faster fees page
- ✅ Migrated to Jinja2 templates
- ✅ Student fee adjustments (scholarships)
- ✅ Export CSV for fees and results
- ✅ Fee receipt PDF with disclaimer
- ✅ Bug fixes — ValueError, None checks, promotion errors

### v1.0
- Basic student management
- Simple fees tracking
- Exam marks entry

---

## 🗺️ Roadmap

- [ ] Attendance module with WhatsApp alerts
- [ ] Teacher portal (separate login)
- [ ] Parent/Student portal (view only)
- [ ] NFC card attendance system
- [ ] Telegram cloud backup (auto daily)
- [ ] Question paper and answer sheet upload
- [ ] License key system for distribution
- [ ] PyInstaller .exe packaging
- [ ] Mobile app (Android)

---

## 💰 Commercial Use

This software is available for schools at a **one-time payment**.

### Why ShalaConnect?

| Feature | Other Software | ShalaConnect |
|---------|---------------|-------------|
| Internet Required | Yes | ❌ No |
| Monthly Fees | ₹3,000-8,000/month | ❌ Zero |
| Complex Setup | Yes | ❌ No |
| WhatsApp Alerts | No | ✅ Yes |
| Local Data Storage | No | ✅ Yes |
| Bulk PDF Download | No | ✅ Yes |

**Contact for pricing:**
- 📱 WhatsApp: [+91 7829396954](https://wa.me/917829396954)
- 📧 Email: info@shalaconnect.com
- 🌐 Website: [amitkadam.netlify.app](https://amitkadam.netlify.app)

---

## 🤝 Contributing

This is a private commercial project. For bug reports or feature requests, contact via WhatsApp or email.

---

## 👨‍💻 Author

**Piyush Kadam (Amit Kadam)**

- GitHub: [@piyushkadam96k](https://github.com/piyushkadam96k)
- Portfolio: [amitkadam.netlify.app](https://amitkadam.netlify.app)
- Location: Bhalki, Karnataka, India 🇮🇳

---

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ for Indian Schools 🇮🇳<br>
  <b>ShalaConnect — Empowering Indian Schools with Technology</b>
</p>
