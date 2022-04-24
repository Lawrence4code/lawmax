import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import sitePerf from 'public/site-performance.png';
import Link from 'next/link';

const Modal = ({ setModalOn }) => {
  return (
    <div className="bg-grey-900 w-5/6 mx-auto   fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center ">
        <OutsideClickHandler
          onOutsideClick={() => {
            console.log('onOutsideClick ttttt');
            setModalOn(false);
          }}
        >
          <div className="flex-col justify-center  bg-white py-4 px-12 border-2 border-sky-900">
            <div className="flex flex-col text-center text-lg  text-zinc-600 mb-10 relative">
              <span
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setModalOn(false)}
              >
                &#10005;
              </span>
              <h1 className="text-grey-600 text-3xl mt-4 mb-8">
                Site Performance and Report
              </h1>
              <p>
                This site is made from NextJS (React on the server-side) with
                all the recommended best practices. The site scores 100% in the
                overall audit, in all the aspects of the application i.e.
                Performance, Accessibility, Best Practices, and SEO. The site
                scores A grade in{' '}
                <span className="text-blue-500">
                  <a
                    target="_blank"
                    href="https://gtmetrix.com/reports/lawmax.vercel.app/APvJz3OO/"
                  >
                    GT matrix
                  </a>
                </span>{' '}
                and fully loads up in just 589ms and LCP (Largest Contentful
                Paint) in 389ms and as per{' '}
                <span className="text-blue-500">
                  <a
                    target="_blank"
                    href="https://www.webpagetest.org/result/220424_AiDcXT_38W/"
                  >
                    Webpagetest.org
                  </a>
                </span>{' '}
                the site show’s all Green with full load at 1.674s. This site
                follows a mobile-first approach and is fully responsive on all
                devices including wide screens and it is passed all
                cross-browser testing.
              </p>
              <span className="w-3/4 mx-auto my-4">
                <Image alt="Lawrence Dass" quality={100} src={sitePerf} />
              </span>

              <p>
                * The site performance stats is from Incognito window of the
                browser since its does not store any cache. <br />* Stats may
                vary slightly based on the browser settings, location, network
                etc.
              </p>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Modal;
