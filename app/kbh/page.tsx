"use client"

import Link from "next/link"
import Image from 'next/image';

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import React, { useState } from 'react';

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}
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

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}


function VideoIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
      <rect x="2" y="6" width="14" height="12" rx="2" />
    </svg>
  )
}

function GroupIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function MilestoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
      <path d="M12 13v8" />
      <path d="M12 3v3" />
    </svg>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function Music2Icon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  )
}

function BeerIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
      <path d="M9 12v6" />
      <path d="M13 12v6" />
      <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" />
      <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
    </svg>
  )
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headingStyle = {
    marginBottom: '5px',
  };

  const paragraphStyle = {
    marginTop: '0px',
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/cv-page/kbh_hood.jpg" />
                <AvatarFallback>JP</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h1 className="text-3xl font-bold">Byungyun Kim</h1>
                <p className="text-muted-foreground">kbstring00@gmail.com</p>
              </div>
            </div>
            <div className="space-y-4">
              <p>
                Hi there! I&apos;m Byunghyun Kim from seoul.
              </p>
              <p>I am interested in artificial intelligence and am diligently researching such as NLP and CV, and hope to study more in the future.
              I developed my research skills by participating in various projects and research. Also improved my leadership skills by participating as a team leader in most projects.</p>
              <p>
               My Research interests are Medical A.I. , Alzheimer's, Diffusion, LMM.
              </p>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">My pros and cons</h2>
              
              <h5 style={headingStyle}><b>Pros.</b></h5>
              <p style={paragraphStyle}>
                1. By experiencing many papers, internship, seminars and conferences i can quickly and accurately research the latest technologies and papers i need.</p>
              <p>
                2. I have a lot of experience construct datasets, developing models, and designing, and am familiar with related frameworks.
              </p>
              <p>
                3. As a team leader on bunch of projects, I gained leadership and teamwork skills through my experience leading projects.</p>
              <h5 style={headingStyle}><b>Cons.</b></h5>
              <p style={paragraphStyle}>
                1. Lack of deep understanding of a specific field, instead interested in various field.
              </p>
              <p>
              2. Difficult to develop innovative and creative technology
              </p>
            </div>
            <div className="flex justify-center">
              <Image src="/cv-page/kbh_laptop.jpg" width={300} height={300} alt="kbh" className="rounded-full md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-112 2xl:h-112 " />
              </div>
            </div>
            

        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">My Hobbies</h2>
              <p>
                In my free time, I enjoy a variety of hobbies that keep me engaged and fulfilled. I&apos;m an avid reader,
                constantly exploring new genres and diving into thought-provoking books. But I especially like mystery novels and the history of science.
                I also have a keen interest in
                films. I highly recommend the movies “Hereditary,” “I Am Legend,” and “28 Weeks Later.” Someday, i&apos;ll make a page for film review.
              </p>
              <p>
                Additionally, I enjoy indulging in alcoholic beverages as a means to unwind and alleviate stress, with a particular fondness for whiskey, beer, and red wine.
                Outdoor activities, such as hiking and camping, also hold a special place in my heart, as they allow me to
                connect with nature and recharge.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <BookIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-medium">Reading</h3>
                </div>
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <VideoIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-medium">Apreciation of the film</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <BeerIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-medium">Drinking</h3>
                </div>
                <div className="rounded-lg bg-background p-4 shadow-sm">
                  <MountainIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-medium">Outdoor Activities</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
         <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">My Future Plans</h2> 
              <p>
              As I look towards the future, I&apos;m excited about the possibilities that lie ahead in
               artificial intelligence, particularly in fields like Natural Language Processing 
               (NLP) and Computer Vision (CV). My journey so far has been marked by a dedication
                to honing my research and leadership skills through various projects.
              </p>
              <p>
              Moving forward, my goal is to delve deeper into AI, continuing to advance as a 
              software engineer. I aim to stay at the forefront of technological advancements, 
              ensuring I am adept at leveraging the latest tools and methodologies in NLP and CV. 
              This will enable me to contribute meaningfully to groundbreaking projects that 
              push the boundaries of innovation.
              </p>
              <p>
              I aspire to work on challenging endeavors that not only showcase my technical 
              prowess but also allow me to collaborate with diverse teams of experts. Whether
               it&apos;s developing new applications, contributing to open-source initiatives, or 
               leading projects as a team leader, I am eager to make a significant impact in 
               the tech industry.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg bg-background p-4 shadow-sm">
                <RocketIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Innovative Projects</h3>
              </div>
              <div className="rounded-lg bg-background p-4 shadow-sm">
                <MilestoneIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Mentoring</h3>
              </div>
              <div className="rounded-lg bg-background p-4 shadow-sm">
                <GroupIcon className="h-8 w-8 text-primary" />
                <h3 className="mt-2 text-lg font-medium">Community Involvement</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Byunghyun Kim</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}