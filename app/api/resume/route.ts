import { NextResponse } from "next/server"

export async function GET() {
  const resumeContent = `
SUDHANSHU SINGH
Email: ss7900585@gmail.com | LinkedIn: https://www.linkedin.com/in/sudhanshu-singh-4200b922a/
GitHub: https://github.com/iamsinghsudhanshu | Mobile: 7562081734

EDUCATION
Lovely Professional University, Punjab, India
Master of Computer Application (Pursuing) | July 2025 - August 2027

Tilak College of Science and Commerce, Mumbai, India
Bachelor of Science (IT) | CGPA: 8.52 | July 2022 - August 2025

SKILLS SUMMARY
Languages: C, C++, Java, Python, JavaScript, HTML, CSS
Frameworks & Libraries: React.js, Node.js, Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn
Databases & Tools: MySQL, MongoDB, Power BI, MS Excel, PowerPoint
Platforms & Environments: Jupyter Notebook, Visual Studio Code, Git/GitHub, Netlify
Soft Skills: Problem-Solving, Collaboration & Teamwork, Effective Communication

EXPERIENCE / PRACTICAL LEARNING
• Built academic and self-learning projects in Web Development (MERN Stack) and AI/ML applications.
• Applied programming knowledge (C, C++, Java, Python, JavaScript) to solve real-world problems.
• Strengthened data analysis, model-building, and visualization skills using Pandas, NumPy, Matplotlib, Seaborn.
• Practiced project deployment using GitHub, Netlify, and cloud tools.
• Improved collaboration and problem-solving skills through team-based college projects and personal initiatives.

PROJECTS
Service-Based Website | Hamara-service-apke-ghar-tak.netlify.app | December 2023 - February 2024
• Developed a responsive web platform for showcasing local services (electrician, plumber, barber).
• Implemented frontend using React.js, HTML, CSS, and JavaScript for an interactive user experience.
• Integrated Firebase as the backend for authentication, real-time database, and data storage.
• Enhanced client engagement through structured service listings and feedback features.

CERTIFICATES
Data Analysis with Python (IBM) | September 2025
• Gained hands-on experience in data wrangling, cleaning, visualization, and exploratory data analysis (EDA).
• Applied libraries such as Pandas, NumPy, Matplotlib, and Seaborn to analyze real-world datasets.

Deloitte Australia Data Analytics Job Simulation on Forage | October 2025
• Completed a Deloitte job simulation involving data analysis and forensic technology.
• Created a data dashboard using Tableau.
• Used Excel to classify data and draw business conclusions.

HackManthan 2025 - Hackathon Participation | Lovely Professional University | 2025
• Successfully participated in a 24-hour hackathon organized by EventEye.
• Contributed to building innovative solutions during the event.
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
