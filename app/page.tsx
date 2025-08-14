"use client";

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  Github, 
  MapPin, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Python', 'C++', 'C#', 'Java', 'JavaScript', 'Dart', 'Solidity'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Flutter'],
    databases: ['SQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Supabase'],
    webTech: ['Shopify Liquid', 'EJS', 'SEO Optimization', 'Responsive Design', 'API Integration'],
    other: ['AI Model Development', 'Blockchain', 'Google Apps Script', 'UI/UX Design', '3D Animation']
  };

  const experience = [
    {
      company: 'Osintleak',
      role: 'Project Lead & Python Developer',
      period: '2025 - Present',
      description: 'Leading project development and creating bots, tools, and dashboards for easier management. Developing automation solutions and overseeing technical implementations.',
      current: true
    },
    {
      company: 'Hired Support',
      role: 'Humantic Call Reviewer',
      period: '2022 - 2023',
      description: 'Reviewed customer interaction recordings for quality assurance and compliance. Identified process gaps and recommended workflow improvements.',
      current: false
    },
    {
      company: 'Freelance',
      role: 'Google Apps Script Developer',
      period: '2021 - 2024',
      description: 'Developed automation scripts for Google Workspace, built data handling tools, and delivered tailored solutions based on client requirements.',
      current: false
    },
    {
      company: 'University',
      role: 'Teaching Assistant',
      period: '2022 - 2025',
      description: 'Assisted in teaching Python, Java, and C++ to junior students. Supported debugging, project development, and coding best practices.',
      current: true
    },
    {
      company: 'Freelance',
      role: 'Graphic Designer',
      period: '2017 - 2024',
      description: 'Designed branding, logos, and marketing materials. Created UI layouts, video editing, 2D/3D animation, and 3D model creation.',
      current: false
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Riphah International University',
      period: '2022 - 2026',
      gpa: '3.94 / 4.00',
      current: true
    },
    {
      degree: 'ICS',
      institution: 'UNIQUE COLLEGE',
      period: '2017 - 2019',
      current: false
    },
    {
      degree: 'Matric',
      institution: 'The Punjab School',
      period: '2015 - 2017',
      current: false
    }
  ];

  const projects = [
    {
      name: 'QPOLL – Voting App',
      tech: 'Flutter, Firebase, Supabase',
      description: 'Mobile voting application with support for public and private voting, candidate registration, and smooth animations. Features CRUD operations and image storage.',
      github: 'https://github.com/mzrox/'
    },
    {
      name: 'Bank Management System',
      tech: 'C++',
      description: 'CLI-based banking system with comprehensive account management, transaction processing, and data persistence.',
      github: 'https://github.com/mzrox/'
    },
    {
      name: 'Criminal Management System',
      tech: 'Java',
      description: 'Complete criminal record management system with search functionality, case tracking, and report generation.',
      github: 'https://github.com/mzrox/'
    },
    {
      name: 'Operating System Representation',
      tech: 'Java',
      description: 'Visual representation of how operating systems work, demonstrating process scheduling, memory management, and file systems.',
      github: 'https://github.com/mzrox/'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Muhammad Muzammil Tahir
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
                Full-Stack Developer & Computer Science Student
              </p>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
                Final-year CS student with CGPA 3.94, passionate about creating innovative solutions 
                with expertise in React, Python, AI, and modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <MapPin className="w-4 h-4 mr-2" />
                City, Country
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Mail className="w-4 h-4 mr-2" />
                mztahir1234@gmail.com
              </Badge>
              <Badge variant="secondary" className="text-sm py-2 px-4">
                <Phone className="w-4 h-4 mr-2" />
                +92 311 4811914
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/mzrox/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
              Profile
            </h2>
            <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Final-year Computer Science student (CGPA 3.94) with strong full-stack development skills, 
                  a proven track record in UI/UX design, and experience across multiple programming languages 
                  including React, Next.js, Python, C++, C#, Java, PostgreSQL, MongoDB, Firebase, SQL, 
                  AI model development, Flask, and Flutter. Skilled in both front-end and back-end development 
                  with additional expertise in automation, SEO, and e-commerce workflows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
              Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                    <Code className="w-6 h-6 mr-2" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                    <Globe className="w-6 h-6 mr-2" />
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600 dark:text-purple-400">
                    <Database className="w-6 h-6 mr-2" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600 dark:text-orange-400">
                    <Globe className="w-6 h-6 mr-2" />
                    Web Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.webTech.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 lg:col-span-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-indigo-600 dark:text-indigo-400">
                    <Award className="w-6 h-6 mr-2" />
                    Other Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.other.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
              Work Experience
            </h2>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm ${exp.current ? 'ring-2 ring-blue-500/50' : ''}`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-xl text-slate-800 dark:text-slate-200 flex items-center">
                          <Briefcase className="w-5 h-5 mr-2 text-blue-600" />
                          {exp.role}
                          {exp.current && (
                            <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300">
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
              Education
            </h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm ${edu.current ? 'ring-2 ring-blue-500/50' : ''}`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-xl text-slate-800 dark:text-slate-200 flex items-center">
                          <GraduationCap className="w-5 h-5 mr-2 text-green-600" />
                          {edu.degree}
                          {edu.current && (
                            <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-green-600 dark:text-green-400 font-medium">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end mt-2 sm:mt-0">
                        <Badge variant="outline">
                          {edu.period}
                        </Badge>
                        {edu.gpa && (
                          <Badge className="mt-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            CGPA: {edu.gpa}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800 dark:text-slate-200 flex items-center justify-between">
                      {project.name}
                      <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardTitle>
                    <CardDescription className="text-blue-600 dark:text-blue-400 font-medium">
                      {project.tech}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {project.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/mzrox/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              I'm always open to new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
                <a href="mailto:mztahir1234@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/mzrox/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center text-slate-600 dark:text-slate-400">
            <p>© 2025 Muhammad Muzammil Tahir. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}