import { NextResponse } from 'next/server';

export async function GET() {
  const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhammad Muzammil Tahir - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: #fff;
            font-size: 14px;
        }
        
        .container {
            max-width: 210mm;
            margin: 0 auto;
            padding: 20px;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            color: white;
            padding: 30px;
            text-align: center;
            margin: -20px -20px 30px -20px;
        }
        
        .header h1 {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 8px;
            letter-spacing: 1px;
        }
        
        .header .subtitle {
            font-size: 18px;
            font-weight: 300;
            opacity: 0.9;
        }
        
        .contact-bar {
            background: #f8fafc;
            padding: 15px;
            margin: 20px -20px;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            border-left: 4px solid #3b82f6;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            margin: 5px;
            font-size: 13px;
        }
        
        .contact-item strong {
            color: #3b82f6;
            margin-right: 8px;
        }
        
        .section {
            margin-bottom: 30px;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 3px solid #3b82f6;
            display: inline-block;
        }
        
        .profile-text {
            font-size: 14px;
            line-height: 1.7;
            color: #475569;
            text-align: justify;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 15px;
        }
        
        .skill-category {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        
        .skill-category h4 {
            color: #1e293b;
            font-size: 14px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        
        .skill-tag {
            background: #3b82f6;
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 500;
        }
        
        .experience-item {
            margin-bottom: 25px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        
        .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 10px;
            flex-wrap: wrap;
        }
        
        .job-title {
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
            flex: 1;
        }
        
        .job-period {
            background: #3b82f6;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            margin-left: 15px;
        }
        
        .job-description {
            margin-top: 10px;
        }
        
        .job-description ul {
            list-style: none;
            padding-left: 0;
        }
        
        .job-description li {
            padding: 4px 0;
            padding-left: 20px;
            position: relative;
            color: #475569;
            font-size: 13px;
        }
        
        .job-description li:before {
            content: "▸";
            color: #3b82f6;
            position: absolute;
            left: 0;
            font-weight: bold;
        }
        
        .education-item {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
            margin-bottom: 15px;
        }
        
        .education-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 8px;
        }
        
        .degree {
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
        }
        
        .university {
            color: #3b82f6;
            font-weight: 500;
            margin-bottom: 5px;
        }
        
        .gpa {
            background: #10b981;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 15px;
        }
        
        .project-item {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #3b82f6;
        }
        
        .project-title {
            font-size: 14px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 8px;
        }
        
        .project-tech {
            color: #3b82f6;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 8px;
        }
        
        .project-description {
            font-size: 12px;
            color: #475569;
            line-height: 1.5;
        }
        
        .achievements {
            background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
            padding: 20px;
            border-radius: 8px;
            border-left: 4px solid #0ea5e9;
            margin-top: 15px;
        }
        
        .achievements h4 {
            color: #0c4a6e;
            margin-bottom: 10px;
            font-size: 14px;
        }
        
        .achievements ul {
            list-style: none;
            columns: 2;
            column-gap: 30px;
        }
        
        .achievements li {
            padding: 3px 0;
            padding-left: 15px;
            position: relative;
            color: #0c4a6e;
            font-size: 12px;
            break-inside: avoid;
        }
        
        .achievements li:before {
            content: "★";
            color: #0ea5e9;
            position: absolute;
            left: 0;
        }
        
        @media print {
            body { margin: 0; }
            .container { 
                box-shadow: none; 
                max-width: none;
                margin: 0;
                padding: 15px;
            }
            .section { margin-bottom: 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <h1>MUHAMMAD MUZAMMIL TAHIR</h1>
            <div class="subtitle">Full-Stack Developer & Computer Science Student</div>
        </div>
        
        <!-- Contact Information -->
        <div class="contact-bar">
            <div class="contact-item">
                <strong>📧</strong> mztahir1234@gmail.com
            </div>
            <div class="contact-item">
                <strong>📱</strong> +92 311 4811914
            </div>
            <div class="contact-item">
                <strong>🌐</strong> github.com/mzrox
            </div>
            <div class="contact-item">
                <strong>📍</strong> City, Country
            </div>
        </div>
        
        <!-- Profile Section -->
        <div class="section">
            <h2 class="section-title">PROFILE</h2>
            <p class="profile-text">
                Final-year Computer Science student with <strong>CGPA 3.94</strong>, passionate about creating innovative solutions with expertise in <strong>React, Python, AI</strong>, and modern web technologies. Strong full-stack development skills with a proven track record in UI/UX design, and experience across multiple programming languages including React, Next.js, Python, C++, C#, Java, PostgreSQL, MongoDB, Firebase, SQL, AI model development, Flask, and Flutter. Skilled in both front-end and back-end development with additional expertise in automation, SEO, and e-commerce workflows.
            </p>
        </div>
        
        <!-- Technical Skills -->
        <div class="section">
            <h2 class="section-title">TECHNICAL SKILLS</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h4>Programming Languages</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">C++</span>
                        <span class="skill-tag">C#</span>
                        <span class="skill-tag">Java</span>
                        <span class="skill-tag">Dart</span>
                        <span class="skill-tag">Solidity</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h4>Frontend Technologies</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">React</span>
                        <span class="skill-tag">Next.js</span>
                        <span class="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">Tailwind</span>
                        <span class="skill-tag">UI/UX</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h4>Backend & Databases</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">Node.js</span>
                        <span class="skill-tag">Express.js</span>
                        <span class="skill-tag">Flask</span>
                        <span class="skill-tag">PostgreSQL</span>
                        <span class="skill-tag">MongoDB</span>
                        <span class="skill-tag">Firebase</span>
                        <span class="skill-tag">Supabase</span>
                    </div>
                </div>
                <div class="skill-category">
                    <h4>Other Technologies</h4>
                    <div class="skill-tags">
                        <span class="skill-tag">Flutter</span>
                        <span class="skill-tag">AI/ML</span>
                        <span class="skill-tag">Blockchain</span>
                        <span class="skill-tag">SEO</span>
                        <span class="skill-tag">Shopify</span>
                        <span class="skill-tag">3D Animation</span>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Work Experience -->
        <div class="section">
            <h2 class="section-title">WORK EXPERIENCE</h2>
            
            <div class="experience-item">
                <div class="experience-header">
                    <div class="job-title">Osintleak - Project Lead & Python Developer</div>
                    <div class="job-period">2025 - Present</div>
                </div>
                <div class="job-description">
                    <ul>
                        <li>Leading project development and creating bots, tools, and dashboards for easier management</li>
                        <li>Developing automation solutions and overseeing technical implementations</li>
                        <li>Managing cross-functional teams and project deliverables</li>
                        <li>Implementing advanced Python solutions for data processing and automation</li>
                    </ul>
                </div>
            </div>
            
            <div class="experience-item">
                <div class="experience-header">
                    <div class="job-title">Freelance - Google Apps Script Developer</div>
                    <div class="job-period">2021 - 2024</div>
                </div>
                <div class="job-description">
                    <ul>
                        <li>Developed automation scripts for Google Workspace to streamline repetitive tasks</li>
                        <li>Built tools for data handling, reporting, and form processing</li>
                        <li>Delivered tailored solutions based on client requirements</li>
                        <li>Created custom APIs and integrations for business workflows</li>
                    </ul>
                </div>
            </div>
            
            <div class="experience-item">
                <div class="experience-header">
                    <div class="job-title">University Teaching Assistant - Coding & Development</div>
                    <div class="job-period">2022 - 2025</div>
                </div>
                <div class="job-description">
                    <ul>
                        <li>Assisted in teaching Python, Java, and C++ to junior students</li>
                        <li>Supported debugging, project development, and coding best practices</li>
                        <li>Mentored students in software development methodologies</li>
                    </ul>
                </div>
            </div>
            
            <div class="experience-item">
                <div class="experience-header">
                    <div class="job-title">Freelance Graphic Designer</div>
                    <div class="job-period">2017 - 2024</div>
                </div>
                <div class="job-description">
                    <ul>
                        <li>Designed branding, logos, and marketing materials for diverse clients</li>
                        <li>Created UI layouts and visual designs for web and mobile platforms</li>
                        <li>Specialized in video editing, 2D/3D animation, and 3D model creation</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <!-- Education -->
        <div class="section">
            <h2 class="section-title">EDUCATION</h2>
            <div class="education-item">
                <div class="education-header">
                    <div>
                        <div class="degree">Bachelor of Science in Computer Science</div>
                        <div class="university">Riphah International University</div>
                        <div style="color: #64748b; font-size: 13px;">2022 - 2026</div>
                    </div>
                    <div class="gpa">CGPA: 3.94 / 4.00</div>
                </div>
            </div>
        </div>
        
        <!-- Featured Projects -->
        <div class="section">
            <h2 class="section-title">FEATURED PROJECTS</h2>
            <div class="projects-grid">
                <div class="project-item">
                    <div class="project-title">QPOLL - Voting Application</div>
                    <div class="project-tech">Flutter • Firebase • Supabase</div>
                    <div class="project-description">
                        Mobile voting application with real-time results, candidate registration, and smooth animations. Features both public and private voting systems.
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-title">Bank Management System</div>
                    <div class="project-tech">C++ • CLI-based</div>
                    <div class="project-description">
                        Comprehensive banking system with account management, transaction processing, and secure authentication.
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-title">Criminal Management System</div>
                    <div class="project-tech">Java • Database</div>
                    <div class="project-description">
                        Database-driven system for criminal record management with search capabilities and detailed reporting.
                    </div>
                </div>
                <div class="project-item">
                    <div class="project-title">Operating System Simulator</div>
                    <div class="project-tech">Java • Educational</div>
                    <div class="project-description">
                        Visual representation of OS processes and memory management with interactive demonstrations.
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Key Achievements -->
        <div class="achievements">
            <h4>🏆 KEY ACHIEVEMENTS & HIGHLIGHTS</h4>
            <ul>
                <li>Maintained CGPA 3.94 throughout Computer Science program</li>
                <li>7+ years of programming and development experience</li>
                <li>Led successful projects at Osintleak with team management</li>
                <li>Delivered 50+ automation solutions for clients</li>
                <li>Expertise in both technical development and creative design</li>
                <li>Strong background in AI model development and blockchain</li>
                <li>Proven track record in UI/UX design and 3D animation</li>
                <li>Active contributor to open-source projects on GitHub</li>
            </ul>
        </div>
    </div>
</body>
</html>`;

  return new NextResponse(resumeHTML, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
