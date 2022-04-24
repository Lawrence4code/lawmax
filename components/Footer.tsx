import React, { useState } from 'react';
import Image from 'next/image';

import Modal from './Modal';
import { githubIcon, gmailIcon, linkedInIcon, twitterIcon } from 'utils/svg';
import profilePicture from 'public/lawrence_dass_profile_picture.jpg';

const Footer = () => {
  const [modalOn, setModalOn] = useState(false);
  const year = new Date().getFullYear();
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-7xl sm:mx-auto px-4">
        <div className="w-32 sm:w-40 rounded-full mb-4">
          <Image
            alt="Lawrence Dass"
            quality={100}
            src={profilePicture}
            className="rounded-full"
          />
        </div>
        <p className="text-center">
          I am a Bangalore-based self-taught web developer, specializing in MERN
          stack (MongoDB- ExpressJS-React-NodeJS) with overall 3+ years of
          experience in web development. I have worked with one of the leading
          edTech FIITJEE (myPat) and Ecommerce company Codilar technologies and
          other freelance projects. I love working with React and Javascript. I
          like challenges and learning new technologies, specifically related
          JavaScript ecosystem. My primary areas of interest are performance
          optimization, scalability, and accessibility of the web
          <span className="hidden sm:inline-block">
            , and since I am obsessed with optimization, please click
            {` `}
            <span
              onClick={() => setModalOn(true)}
              className="text-blue-600 cursor-pointer"
            >
              here
            </span>{' '}
            to view the perf report of this site
          </span>
          .
        </p>
      </div>
      <div className="flex justify-center items-start max-w-7xl mx-auto w-full gap-8">
        <a
          href="mailto:lawrence4code@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pl-3 cursor-pointer">
            {gmailIcon('#c5221f', 16, 16)}
          </span>
        </a>
        <a
          href="https://twitter.com/Lawrence4CODE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pl-3 cursor-pointer">
            {twitterIcon('#1da1f1', 16, 16)}
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/lawrence-dass-319653127"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pl-3 cursor-pointer">
            {linkedInIcon('#0177b5', 16, 16)}
          </span>
        </a>
        <a
          href="https://github.com/Lawrence4code"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="pl-3 cursor-pointer">
            {githubIcon('#3aafca', 16, 16)}
          </span>
        </a>
      </div>

      <div className="flex justify-center items-start max-w-7xl mx-auto w-full">
        <p className="pt-4 pb-2">
          Copyright © {year} Lawrence. All rights reserved.
        </p>
      </div>
      {modalOn && <Modal setModalOn={setModalOn} />}
    </>
  );
};

export default Footer;
