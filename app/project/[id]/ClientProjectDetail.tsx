"use client";

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

const ClientProjectDetail: React.FC = () => {
  const params = useParams();
  const { id } = params;

  // Static data for demonstration
  const projects = [
    {
      id: '1',
      title: '',
      description: '2024.06 ~ Current',
      detail: '',

      goals1: '1.',
      goals2: '2.',
      goals3: '3.',

      tech1: '',
      tech2: '',
      tech3: '',

      Team: '',
      github: '',

      imageUrl1: '',
      imageUrl2: '',
      imageUrl3: '',
      imageUrl4: '',
      imageUrl5: '',
    },
    {
      id: '2',
      title: 'LLMETA : A.I. based metadata extraction',
      description: '2024.03 ~ 2024.06',
      detail: 'The significance of metadata in information retrieval and data management is rapidly increasing,\
                 To enhance usability of metadata extraction of research papers and images, we propose\
                  an advanced method that surpasses existing techniques 2x accuracy by leveraging\
                   Large Language Model (LLM) and deeper classifiable Scene Graph Generation (SGG).',

      goals1: '1. Extract paper metadata by applying prompt engineering and RAG to llama2-7b',
      goals2: '2. Generate image metadata by Relation Transformer integrated with DeepFace, ViT',
      goals3: '3. Develop vision models to classify more classes even breeds',

      tech1: 'FrontEnd - Next.js, tailwindCSS, Figma',
      tech2: 'BackEnd - Spring, SpringBoot3, SpringSecurity, MySQL, RDS, NginX, AWS EC2',
      tech3: 'A.I. - PyTorch, Langchain, transformers, Flask',

      Team: '[A.I.] ByungHyun Kim, [BE] DaYoung Kim, HyeWon Seok, [FE] SeokHee Kim',
      github: 'https://github.com/sw24-11',
      paper: '/#papers',

      imageUrl1: '/cv-page/projects/home2.png',
      imageUrl2: '/cv-page/projects/iamge1.png',
      imageUrl3: '/cv-page/projects/paper1.png',
      imageUrl4: '/cv-page/projects/overall.png',
      imageUrl5: '/cv-page/projects/unnamed.jpg',
    },
    {
      id: '3',
      title: 'Paper Tree',
      description: '2023.06 ~ 2023.08',
      detail: 'When we study some papers, reference papers play a very important role. To analyze this more efficiently, we use LLM to classify reference papers and recommend papers.',
      goals1: '1. Paper data set composition and pre-processing development',
      goals2: '2. Text (i.e., paper) classification by fine tuning BERT',
      goals3: '3. Recommendation and analysis of recent search-based papers',
      tech1: 'FrontEnd - React, Figma',
      tech2: 'BackEnd - Spring, SpringBoot3, SQL',
      tech3: 'A.I. - PyTorch, Scikit-Learn, transformers',
      Team: '[A.I.] ByungHyun Kim, [BE] JooEun Oh, SeonJu Kim, [FE] HeeJeong Ahn',
      github: 'https://github.com/sw-0101',
      imageUrl1: '/cv-page/projects/home.png',
      imageUrl2: '/cv-page/projects/login.png',
      imageUrl3: '/cv-page/projects/payment.png',
      imageUrl4: '/cv-page/projects/main.png',
      imageUrl5: '/cv-page/projects/analysis.png',
    },
    {
      id: '4',
      title: 'Object height estimation via webcam',
      description: '2023.03 ~ 2023.06',
      detail: 'After covid-19, the supply of webcams has increased, contributing to 3D reconstruction\
       of objects or anormally detection by measuring object size through webcams and linear lasers.',
      goals1: '1. Correct distortion through camera calibration.',
      goals2: '2. Height differences are measured using a linear laser.',
      goals3: '3. Achieving 3D reconstruction with pointcloud.',
      additional: '+ Additional research - Construction of data set and CNN model for feature point detection',
      tech1: 'Using C++ OpenCv for camera calibration. ',
      tech2: 'Applying optical triangulation method, calculate object height using pixel difference of laser.',
      tech3: 'Based on the measured height of the object, 3D reconstruction through point cloud.',
      Team: 'ByungHyun Kim, GyuRi Park, JiHyun Park collaborted by github',
      imageUrl1: '/cv-page/projects/pointc.png',
      imageUrl2: '/cv-page/projects/laser1.jpg',
      imageUrl3: '/cv-page/projects/laser2.png',
      imageUrl4: '/cv-page/projects/triangle.png',
      imageUrl5: '/cv-page/projects/calibration.jpg',
    },
  ];

  const project = projects.find((p) => p.id === id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projectIndex = projects.findIndex((p) => p.id === id);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handlePrevProject = () => {
    if (projectIndex > 0) {
      const prevProjectId = projects[projectIndex - 1].id;
      router.push(`/project/${prevProjectId}`);
    }
  };

  const handleNextProject = () => {
    if (projectIndex < projects.length - 1) {
      const nextProjectId = projects[projectIndex + 1].id;
      router.push(`/project/${nextProjectId}`);
    }
  };
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat">
      <header className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground py-4 px-4 md:px-6 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="space-y-2">
            <Link href="/#about" className="hover:underline" prefetch={false}>
              <h1 className="text-3xl font-bold">ByungHyun Kim</h1>
            </Link>
            {/* <p className="text-lg">Undergraduate Student</p> */}
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/#about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="/#experience" className="hover:underline" prefetch={false}>
              Experience
            </Link>
            <Link href="/#projects" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="/#skills" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="/#papers" className="hover:underline" prefetch={false}>
              Papers
            </Link>
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            aria-label="Toggle navigation menu"
            onClick={toggleMenu}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-2 bg-primary text-primary-foreground px-4 py-2">
            <Link href="/#about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="/#experience" className="hover:underline" prefetch={false}>
              Experience
            </Link>
            <Link href="/#projects" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="/#skills" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="/#papers" className="hover:underline" prefetch={false}>
              Papers
            </Link>
          </nav>
        )}
      </header>
      <div className="absolute inset-0 bg-black/50 z-10" />
        <img src={project.imageUrl1} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl">{project.description}</p>
        </div>
        {projectIndex > 0 && (
          <div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer p-2 bg-black/50 rounded-full"
            onClick={handlePrevProject}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </div>
        )}
        {projectIndex < projects.length - 1 && (
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer p-2 bg-black/50 rounded-full"
            onClick={handleNextProject}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </div>
        )}
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Project Details</h2>
              <p className="text-muted-foreground mb-6">{project.detail}</p>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <h3 className="text-xl font-semibold mb-1">Goals</h3>
                  <p>{project.goals1}</p>
                  <p>{project.goals2}</p>
                  <p>{project.goals3}</p>
                  <p>{project.additional}</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold mb-1">Technologies</h3>
                  <p>{project.tech1}</p>
                  <p>{project.tech2}</p>
                  <p>{project.tech3}</p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold mb-1">Team</h3>
                  <p>{project.Team}</p>
                </li>
                {project.github && (
                    <Link href={project.github} className="hover:underline" prefetch={true}>
                      <b>[Github Organization]</b>
                    </Link>
                )}
                <b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</b>
                    {project.paper && (
                    <Link href={project.paper} className="hover:underline" prefetch={true}>
                      <b>[Paper]</b>
                    </Link>
                )}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <img src={project.imageUrl2} alt="Project Image 1" className="rounded-md object-cover" />
              <img src={project.imageUrl3} alt="Project Image 2" className="rounded-md object-cover" />
              <img src={project.imageUrl4} alt="Project Image 3" className="rounded-md object-cover" />
              <img src={project.imageUrl5} alt="Project Image 4" className="rounded-md object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientProjectDetail;
