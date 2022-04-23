import React from 'react';
import { githubIcon, gmailIcon, linkedInIcon, twitterIcon } from 'utils/svg';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
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
    </>
  );
};

export default Footer;
