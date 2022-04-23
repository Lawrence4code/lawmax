import cn from 'classnames';
import useDelayedRender from 'use-delayed-render';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import styles from 'styles/mobile-menu.module.css';
import { useTheme } from 'next-themes';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    const cleanup = () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleMenuClick = (path) => {
    toggleMenu();
    router.push(path);
  };

  const MenuIcon = (props) => {
    return (
      <svg
        className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={props.theme === 'dark' ? '#eeeeee' : '#222222'}
        {...props}
      >
        <path
          fill={props.theme === 'dark' ? '#eeeeee' : '#222222'}
          d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"
        ></path>
      </svg>
    );
  };

  const CrossIcon = (props) => {
    return (
      <svg
        className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={props.theme === 'dark' ? '#ffffff' : '#222222'}
        shapeRendering="geometricPrecision"
        {...props}
      >
        <path d="M18 6L6 18" />
        <path d="M6 6l12 12" />
      </svg>
    );
  };

  return (
    <div className="sm:hidden">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsMenuOpen(false);
        }}
      >
        <button
          className={cn(styles.hamburger, 'visible sm:hidden')}
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} theme={resolvedTheme} />
          <CrossIcon data-hide={!isMenuOpen} />
        </button>
        {isMenuMounted && (
          <ul
            className={cn(
              styles.menu,
              'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
              isMenuRendered && styles.menuRendered
            )}
          >
            <li
              className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: '150ms' }}
            >
              <span
                onClick={() => handleMenuClick('/')}
                className="flex w-auto pb-4"
              >
                Home
              </span>
            </li>
            <li
              className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: '175ms' }}
            >
              <span
                onClick={() => handleMenuClick('/projects')}
                className="flex w-auto pb-4"
              >
                Projects
              </span>
            </li>
            <li
              className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: '200ms' }}
            >
              <span
                onClick={() => handleMenuClick('/blog')}
                className="flex w-auto pb-4"
              >
                Blog
              </span>
            </li>
            <li
              className="border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold"
              style={{ transitionDelay: '250ms' }}
            >
              <span
                onClick={() => handleMenuClick('/resources')}
                className="flex w-auto pb-4"
              >
                Resources
              </span>
            </li>
          </ul>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default MobileMenu;
