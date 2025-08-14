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
  ChevronRight,
  User,
  Home as HomeIcon,
  FolderOpen,
  Palette
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 200);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close mobile nav when navigating
      setIsMobileNavOpen(false);
    }
  };

  const downloadResume = () => {
    // Open the resume API route in a new window
    window.open('/api/resume', '_blank');
  };

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
      
      {/* Mobile Navigation Toggle Button */}
      <button
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        className={`fixed top-4 left-4 z-50 sm:hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-5 h-5 flex flex-col justify-center space-y-1">
          <div className={`h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isMobileNavOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
          <div className={`h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isMobileNavOpen ? 'opacity-0' : ''}`}></div>
          <div className={`h-0.5 bg-slate-600 dark:bg-slate-300 transition-all duration-300 ${isMobileNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
        </div>
      </button>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity duration-300 ${
        isMobileNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMobileNavOpen(false)}></div>

      {/* Animated Navbar */}
      <nav className={`fixed top-0 left-0 h-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-r border-slate-200 dark:border-slate-700 z-50 transition-all duration-500 
        ${/* Desktop behavior - hidden by default, show when scrolled */ ''}
        ${isScrolled ? 'sm:translate-x-0 sm:opacity-100 sm:block' : 'sm:-translate-x-full sm:opacity-0 sm:hidden'} sm:w-48
        ${/* Mobile behavior - hidden by default, show when toggled */ ''}
        ${isMobileNavOpen ? 'translate-x-0 opacity-100 block w-64' : '-translate-x-full opacity-0 hidden'}
      `}>
        <div className="flex flex-col items-center h-full py-4 sm:py-8 w-full">
          <div className="mb-6 sm:mb-8">
            <Image
              src="/pfp.jpg"
              alt="Muhammad Muzammil Tahir"
              width={40}
              height={40}
              className="rounded-full ring-2 ring-blue-500 object-cover w-12 h-12 sm:w-12 sm:h-12"
            />
          </div>
          
          <div className="flex flex-col gap-3 sm:gap-4 w-full px-4">
            <Button
              variant="ghost"
              size="sm"
              className="w-full h-12 flex items-center justify-start p-2"
              onClick={() => scrollToSection('hero')}
              title="Home"
            >
              <HomeIcon className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3">Home</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full h-12 flex items-center justify-start p-2"
              onClick={() => scrollToSection('about')}
              title="About"
            >
              <User className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3">About</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full h-12 flex items-center justify-start p-2"
              onClick={() => scrollToSection('skills')}
              title="Skills"
            >
              <Code className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3">Skills</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full h-12 flex items-center justify-start p-2"
              onClick={() => scrollToSection('experience')}
              title="Experience"
            >
              <Briefcase className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3">Experience</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full h-12 flex items-center justify-start p-2"
              onClick={() => scrollToSection('education')}
              title="Education"
            >
              <GraduationCap className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3">Education</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full h-12 flex items-center justify-start p-2"
              onClick={() => scrollToSection('projects')}
              title="Projects"
            >
              <FolderOpen className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3">Projects</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full h-12 flex items-center justify-start p-2"
              onClick={() => scrollToSection('contact')}
              title="Contact"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="ml-3">Contact</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-72 sm:h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-96 sm:h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-r from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Profile Picture with Enhanced Animation */}
            <div className={`mb-8 sm:mb-12 transition-all duration-700 ease-out ${
              isScrolled ? 'opacity-0 scale-75 -translate-y-8' : 'opacity-100 scale-100 translate-y-0'
            }`}>
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse"></div>
                <Image
                  src="/pfp.jpg"
                  alt="Muhammad Muzammil Tahir"
                  width={150}
                  height={150}
                  className="relative rounded-full mx-auto ring-2 sm:ring-4 ring-white/50 shadow-2xl object-cover w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/30 via-transparent to-transparent"></div>
                
                {/* Floating icons around profile - Hidden on mobile for cleaner look */}
                <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-500">
                  <div className="w-full h-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="hidden sm:block absolute -bottom-4 -left-4 w-8 h-8 bg-indigo-500 rounded-full animate-bounce delay-1000">
                  <div className="w-full h-full flex items-center justify-center">
                    <Database className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -left-8 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-700">
                  <div className="w-full h-full flex items-center justify-center">
                    <Globe className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-8 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300">
                  <div className="w-full h-full flex items-center justify-center">
                    <Palette className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Name and Title */}
            <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
              <div className="relative">
                <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2 sm:mb-4 tracking-tight leading-tight">
                  Muhammad Muzammil Tahir
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
                  Muhammad Muzammil Tahir
                </div>
              </div>
              
              <div className="relative inline-block">
                <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-4 sm:mb-6 relative z-10 px-2">
                  Full-Stack Developer
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-lg rounded-lg"></div>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                Final-year CS student with <span className="font-bold text-blue-600">CGPA 3.94</span>, passionate about creating innovative solutions 
                with expertise in <span className="font-semibold text-indigo-600">React, Python, AI</span>, and modern web technologies.
              </p>
            </div>

            {/* Enhanced Contact Info */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
              <div className="group">
                <Badge variant="secondary" className="text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 hover:border-blue-300 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg w-full sm:w-auto justify-center">
                  <MapPin className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-blue-600" />
                  Lahore, Pakistan
                </Badge>
              </div>
              <div className="group">
                <Badge variant="secondary" className="text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 hover:border-green-300 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg w-full sm:w-auto justify-center">
                  <Mail className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-green-600" />
                  <span className="truncate">mztahir1234@gmail.com</span>
                </Badge>
              </div>
              <div className="group">
                <Badge variant="secondary" className="text-xs sm:text-sm py-2 sm:py-3 px-4 sm:px-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 hover:border-purple-300 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg w-full sm:w-auto justify-center">
                  <Phone className="w-3 sm:w-4 h-3 sm:h-4 mr-2 text-purple-600" />
                  +92 311 4811914
                </Badge>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <Button 
                size="lg" 
                onClick={downloadResume}
                className="hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              >
                <Download className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-2 border-slate-300 hover:border-blue-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm bg-white/50 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
              >
                <a href="https://github.com/mzrox/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View GitHub
                </a>
              </Button>
            </div>
            
            {/* Scroll Indicator - Bottom Right Position */}
            <div className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 transition-opacity duration-500 ${
              isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100 animate-bounce'
            }`}>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-400 rounded-full flex justify-center bg-white/80 backdrop-blur-sm shadow-lg">
                <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-slate-400 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="about" className="py-12 sm:py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-5 right-5 sm:top-10 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-5 left-5 sm:bottom-10 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 group">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:scale-105 transition-transform duration-300">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
            </div>
            
            <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group">
              <CardContent className="p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                  Final-year Computer Science student (<span className="font-bold text-blue-600 group-hover:text-blue-700 transition-colors">CGPA 3.94</span>) with strong full-stack development skills, 
                  a proven track record in UI/UX design, and experience across multiple programming languages 
                  including <span className="font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">React, Next.js, Python, C++, C#, Java</span>, PostgreSQL, MongoDB, Firebase, SQL, 
                  AI model development, Flask, and Flutter. Skilled in both front-end and back-end development 
                  with additional expertise in <span className="font-semibold text-purple-600 group-hover:text-purple-700 transition-colors">automation, SEO, and e-commerce workflows</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 group">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:scale-105 transition-transform duration-300">
                Technical Skills
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:scale-105 hover:-translate-y-2">
                <CardHeader className="relative overflow-hidden pb-3 sm:pb-6">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardTitle className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 transition-colors duration-300 text-base sm:text-lg">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 cursor-default text-xs sm:text-sm"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:scale-105 hover:-translate-y-2">
                <CardHeader className="relative overflow-hidden pb-3 sm:pb-6">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardTitle className="flex items-center text-green-600 dark:text-green-400 group-hover:text-green-700 transition-colors duration-300 text-base sm:text-lg">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.frameworks.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300 hover:scale-110 cursor-default text-xs sm:text-sm"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:scale-105 hover:-translate-y-2">
                <CardHeader className="relative overflow-hidden pb-3 sm:pb-6">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardTitle className="flex items-center text-purple-600 dark:text-purple-400 group-hover:text-purple-700 transition-colors duration-300 text-base sm:text-lg">
                    <Database className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.databases.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300 hover:scale-110 cursor-default text-xs sm:text-sm"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:scale-105 hover:-translate-y-2">
                <CardHeader className="relative overflow-hidden pb-3 sm:pb-6">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardTitle className="flex items-center text-orange-600 dark:text-orange-400 group-hover:text-orange-700 transition-colors duration-300 text-base sm:text-lg">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Web Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.webTech.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 hover:bg-orange-200 dark:hover:bg-orange-800 transition-all duration-300 hover:scale-110 cursor-default text-xs sm:text-sm"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="sm:col-span-2 lg:col-span-2 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:scale-105 hover:-translate-y-2">
                <CardHeader className="relative overflow-hidden pb-3 sm:pb-6">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <CardTitle className="flex items-center text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 transition-colors duration-300 text-base sm:text-lg">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Other Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {skills.other.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-all duration-300 hover:scale-110 cursor-default text-xs sm:text-sm"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
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
      <section id="experience" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-16 w-36 h-36 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute bottom-16 left-16 w-28 h-28 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1200"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:scale-105 transition-transform duration-300">
                Work Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:scale-[1.02] hover:-translate-y-1 ${exp.current ? 'ring-2 ring-blue-500/50 shadow-blue-100' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${exp.current ? 'from-green-500 to-blue-500' : 'from-slate-400 to-slate-500'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <CardTitle className="text-xl text-slate-800 dark:text-slate-200 flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          <Briefcase className="w-5 h-5 mr-2 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
                          {exp.role}
                          {exp.current && (
                            <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 animate-pulse">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="group-hover:translate-x-2 transition-transform duration-300">
                    <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
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
      <section id="education" className="py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-12 left-12 w-44 h-44 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute bottom-12 right-12 w-32 h-32 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-200"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:scale-105 transition-transform duration-300">
                Education
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-green-600 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:scale-[1.02] hover:-translate-y-1 ${edu.current ? 'ring-2 ring-green-500/50 shadow-green-100' : ''}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${edu.current ? 'from-green-500 to-yellow-500' : 'from-slate-400 to-slate-500'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <CardTitle className="text-xl text-slate-800 dark:text-slate-200 flex items-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                          <GraduationCap className="w-5 h-5 mr-2 text-green-600 group-hover:rotate-12 transition-transform duration-300" />
                          {edu.degree}
                          {edu.current && (
                            <Badge className="ml-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 animate-pulse">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="text-green-600 dark:text-green-400 font-medium group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col items-end mt-2 sm:mt-0 space-y-1">
                        <Badge variant="outline" className="hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300">
                          {edu.period}
                        </Badge>
                        {edu.gpa && (
                          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors duration-300">
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
      <section id="projects" className="py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-400"></div>
          <div className="absolute bottom-20 right-1/4 w-36 h-36 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-900"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4 group-hover:scale-105 transition-transform duration-300">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                    <CardTitle className="text-xl text-slate-800 dark:text-slate-200 flex items-center justify-between group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{project.name}</span>
                      <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 hover:rotate-12 transition-transform" />
                        </a>
                      </Button>
                    </CardTitle>
                    <CardDescription className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                      {project.tech}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="group-hover:translate-x-1 transition-transform duration-300">
                    <p className="text-slate-600 dark:text-slate-300 mb-4 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 leading-relaxed">
                      {project.description}
                    </p>
                    <Button variant="outline" size="sm" asChild className="hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 group/btn">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300 group hover:scale-105">
                <a href="https://github.com/mzrox/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View All Projects
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-16 right-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-600"></div>
          <div className="absolute bottom-16 left-1/3 w-40 h-40 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 group">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200 group-hover:scale-105 transition-transform duration-300">
                Let's Work Together
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full group-hover:w-32 transition-all duration-300"></div>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              I'm always open to new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group" 
                asChild
              >
                <a href="mailto:mztahir1234@gmail.com">
                  <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Send Email
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-2 border-slate-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/50 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 group"
              >
                <a href="https://github.com/mzrox/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-1/4 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-4 right-1/4 w-20 h-20 bg-indigo-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2">Muhammad Muzammil Tahir</h3>
              <p className="text-slate-600 dark:text-slate-400">Full-Stack Developer & Computer Science Student</p>
            </div>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="mailto:mztahir1234@gmail.com" 
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/mzrox/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-6"></div>
            
            <p className="text-slate-500 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300">
              © 2025 Muhammad Muzammil Tahir. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}