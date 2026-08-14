import { NextResponse } from "next/server"

export async function GET() {
  const resumeContent = `
SUDHANSHU SINGH
Mumbai, Maharashtra
Email: ss7900585@gmail.com | Phone: +91 7562081734
LinkedIn: linkedin.com/in/sudhanshu-singh
GitHub: github.com/iamsinghsudhanshu

EDUCATION
MCA — Artificial Intelligence and Machine Learning
Lovely Professional University | 2025 – 2027 | CGPA: 7.56 | Phagwara, Punjab

BCA — Bachelor of Computer Applications
Tilak College of Science and Commerce | 2022 – 2025 | CGPA: 8.52 | Mumbai, Maharashtra

Intermediate
Central Public School | 2020 – 2022 | Percentage: 73.01% | Mumbai, Maharashtra

Matriculation
Rnp Public School | 2019 – 2020 | Percentage: 74.02% | Chhapra, Bihar

SKILLS
Languages: C++, Java, Python
Frontend: HTML5, CSS3, Tailwind CSS, React.js
Backend: Spring Boot, Firebase
Databases: MySQL, MongoDB
Data Science & ML: Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, IBM Cognos Analytics
Tools: Git, GitHub, Jupyter Notebook
Core Skills: Data Structures & Algorithms, OOPs

EXPERIENCE
Data Analyst Intern — Bold Analytics | Feb 2026 – Apr 2026
• Analyzed real-world business datasets to identify trends and generate actionable insights, contributing to an estimated 30% improvement in reporting efficiency.
• Performed end-to-end data cleaning, transformation, and preprocessing on large-scale datasets using Python and Excel to ensure data quality for analysis.
• Optimized SQL queries to extract, filter, and aggregate data from relational databases, reducing manual reporting effort and improving reporting efficiency.

PROJECTS
Disaster Response System | Jan 2026 – Jun 2026
• Configured role-based Admin and Student portals with JWT authentication and session management using Java/Spring Boot.
• Designed a responsive React.js frontend with reusable components and dynamic routing for emergency guides, quizzes, and dashboards.
• Modeled a MySQL database schema for user profiles, training records, emergency contacts, and alert logs with optimized queries.
GitHub: https://github.com/iamsinghsudhanshu/disaster-response-system.git

AI Loan Default Prediction System | Oct 2025 – May 2026
• Engineered a full-stack loan risk prediction platform using React.js and Spring Boot.
• Integrated a Python-based Random Forest Classifier achieving approximately 85% accuracy and 0.89 ROC-AUC for loan default risk prediction.
• Architected secure REST APIs with JWT authentication and role-based access control (Admin/User) using layered Spring Boot architecture: Controller-Service-Repository.
• Implemented an admin analytics dashboard with Chart.js visualizations.
• Implemented a user dashboard supporting loan applications, prediction history, and PDF report generation/export.
GitHub: https://github.com/iamsinghsudhanshu/ai-loan-prediction.git

IPL Data Analysis (2008–2024) | Sep 2025 – Oct 2025
• Conducted exploratory data analysis across 16 IPL seasons and 900+ matches.
• Analyzed trends in team performance, toss impact, and player statistics.
• Visualized cricket performance data using multiple charts.
• Highlighted match outcomes, leading performers, and venue-wise statistics.
• Cleaned and standardized inconsistent raw datasets using missing-value imputation and format normalization.
GitHub: https://github.com/iamsinghsudhanshu/IPL-Data-Analysis-2008-2024.git

CERTIFICATION
Data Analysis with Python | September 2025
`

  // Create a simple text-based response that can be downloaded as PDF
  const pdfBuffer = Buffer.from(resumeContent, "utf-8")

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Sudhanshu_Singh_Resume.pdf"',
    },
  })
}
