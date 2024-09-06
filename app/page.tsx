"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import React, { useState } from 'react';
import Layout from '@/app/layout';

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

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const projects = [
    {
      id: '1',
      title: 'Working on a new project!',
      description: 'Scheduled to be written after project completion',
      imageUrl: '',
    },
    {
      id: '2',
      title: 'LLMETA : A.I. based metadata extraction',
      description: 'Metadata extraction via llama2-7b, RelTR and etc..',
      imageUrl: '/cv-page/projects/home2.png',
    },
    {
      id: '3',
      title: 'Paper Tree',
      description: 'Paper classification and recommendation by BERT',
      imageUrl: '/cv-page/projects/home.png',
    },
    {
      id: '4',
      title: 'Object height estimation via webcam',
      description: 'Height measurment, 3D reconstruction by linear laser and webcam.',
      imageUrl: '/cv-page/projects/pointc.png',
    },
  ];

  return (
    <div className={`flex flex-col min-h-[100dvh] ${isMenuOpen ? 'pb-20' : ''}`}>
      <header className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground py-4 px-4 md:px-6 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="space-y-2">
            <Link href="/#about" className="hover:underline" prefetch={false}>
              <h1 className="text-3xl font-bold">ByungHyun Kim</h1>
            </Link>
            {/* <p className="text-lg">Undergraduate Student</p> */}
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="#about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#experience" className="hover:underline" prefetch={false}>
              Experience
            </Link>
            <Link href="#projects" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#skills" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#papers" className="hover:underline" prefetch={false}>
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
            <Link href="#about" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#experience" className="hover:underline" prefetch={false}>
              Experience
            </Link>
            <Link href="#projects" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#skills" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#papers" className="hover:underline" prefetch={false}>
              Papers
            </Link>
          </nav>
        )}
      </header>
      <main className={`flex-1 mt-[60px] ${isMenuOpen ? 'mt-20' : ''}`}>
        <section id="about" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground">
                  I am an Undergraduate Student majored in Computer Science and Engineering who interested in artificial intelligence and am diligently researching such as NLP and CV, and hope to study more in the future.
                </p>
                <p className="text-muted-foreground">
                My Research interests are Medical A.I. , Alzheimer&apos;s, Diffusion, LMM.
                </p>
              <Link href="/kbh" className="hover:underline" prefetch={false}>
                  <b>[Something more personal..]</b>
                </Link>
                <div className="mt-8">
                  {/* <h3 className="text-xl font-bold mb-4">Education</h3> */}
                  <div>
                    <h4 className="text-lg font-bold">Bachelor of Science in Computer Science and Engineering</h4>
                    <p className="text-muted-foreground">Kyunpook National Univ. | 2021 - Current</p>
                    <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                      <li>4.1/4.5 GPA</li>
                      <li>Participated in the Computer Science Club and hackathons</li>
                      {/* <li>Completed coursework in linear algebra, probability and statistics, and artificial intelligence</li> */}
                      <li>Python programming curriculum mentorship and tutoring</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
              <Image src="/cv-page/kbh_sa.jpg" width={300} height={300} alt="kbh" className="rounded-full md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96" />
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="py-12 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">Undergraduate Research Student</h3>
                <p className="text-muted-foreground">Kyungpook National Univ. | 2024.03 - 2024.08</p>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                  <li>Develop and build a framework for translation and recommendation in various languages in medical domain</li>
                  <li>Collaborated with cross-functional teams to deploy to the server, fine-tuning language models and research about readability</li>
                  <li>Participated in code reviews and pair programming sessions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">A.I. Research Intern</h3>
                <p className="text-muted-foreground">Beamworks. | 2023.12 - 2024.02</p>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                  <li>LLM research available in the medical domain for Question Answering</li>
                  <li>Research on language model performance improvement through question rewriting and medical data and terminology research</li>
                  <li>Research on Enhancing medical anomaly detection and segmentation efficiency utilizing SAM and FastSAM</li>
                  <li>Participated in weekly team meetings and presentations (i.e., review) about research papers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">A.I. Research Intern</h3>
                <p className="text-muted-foreground">Korea Institute of Science and Technology. | 2023.06 - 2023.08</p>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                  <li>Research of scene graph generation and segment anything base models</li>
                  <li>Review and presentation of papers at top-tier conferences such as CVPR</li>
                  <li>Develop models reflecting the latest research results, code reviews and participate in seminars</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link key={project.id} href={`/project/${project.id}`} className="group" prefetch={true}>
                  <Card className="h-full">
                    <CardHeader>
                      <Image src={project.imageUrl} alt={project.title} width={100} height={24} />
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                    <CardFooter className="pt-4">
                      <Button variant="link" className="group-hover:underline">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Badge variant="secondary" imageSrc="/cv-page/pytorch.png" altText="Icon">PyTorch</Badge>
              <Badge variant="secondary" imageSrc="/cv-page/tensorflow.jpg" altText="Icon">TensorFlow</Badge>
              <Badge variant="secondary" imageSrc="/cv-page/langchain.png" altText="Icon">LangChain</Badge>
              <Badge variant="secondary" imageSrc="/cv-page/scipy.png" altText="Icon">Scipy</Badge>
              <Badge variant="secondary" imageSrc="/cv-page/scikit-learn.jpg" altText="Icon">Scikit-Learn</Badge>
              <Badge variant="secondary" imageSrc="/cv-page/git.png" altText="Icon">Git</Badge>
              <Badge variant="secondary" imageSrc="/cv-page/flask.jpg" altText="Icon">Flask</Badge>
              <Badge variant="secondary" imageSrc="/cv-page/next.png" altText="Icon">Next.js</Badge>
              <Badge variant="secondary" imageSrc="/cv-page/docker.png" altText="Icon">Docker</Badge>
            </div>
          </div>
        </section>
        <section id="papers" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Papers</h2>
            <div className="space-y-8">
              <div>
              <h3 className="text-xl font-bold">
               <Link href="/paper.pdf" target="_blank" className="hover:underline">
                    A Study of Method for Metadata Extraction via LLM and Scene Graph Generation
               </Link>
              </h3>                
              <p className="text-muted-foreground">[Honored to receive the Best Paper Award at KICS 2024 Summer]</p>
              </div>
              {/* <div>
                <h3 className="text-xl font-bold">Paper Title 2</h3>
                <p className="text-muted-foreground">Description of Paper 2</p>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 ByungHyun Kim</p>
          <div className="flex items-center space-x-4">
            <Link href="https://www.linkedin.com/in/byunghyun-kim-a05452319" className="hover:underline" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="https://github.com/KBH00" className="hover:underline" prefetch={false}>
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
