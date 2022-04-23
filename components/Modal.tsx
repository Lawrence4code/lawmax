import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import sitePerf from 'public/site-performance.png';

const Modal = ({ setModalOn }) => {
  return (
    <div className="bg-grey-900 w-5/6 mx-auto  fixed inset-0 z-50">
      <div className="flex h-screen justify-center items-center ">
        <OutsideClickHandler
          onOutsideClick={() => {
            console.log('onOutsideClick ttttt');
            setModalOn(false);
          }}
        >
          <div className="flex-col justify-center  bg-white py-4 px-12 border-2 border-sky-500">
            <div className="flex flex-col text-center text-lg  text-zinc-600 mb-10 relative">
              <span
                className="absolute top-4 right-4"
                onClick={() => setModalOn(false)}
              >
                &#10005;
              </span>
              <h1 className="text-grey-600 text-3xl mb-8">
                Site Performance and Report
              </h1>
              <p>
                This website made from plain HTML CSS and Javascript, no library
                is used on this site. Webpack is used code splitting and lazy
                loading and conditional rendering. Contains all the best
                practices of HTML5, CSS and ES6 of JS. The site scores 98% on
                performance, 97% on accessibility (*3% may down because of
                light/dark mode), 100% on best practices and 100% on SEO in
                Google’s Lighthouse on applied 3g and 4X slow CPU and scores
                100% on all the four section on normal site audit. Because of
                focus on optimization of this site, the page load in .5 seconds
                and got A grade in GT metrics and and scores A's in all the
                section of testing in Webpagetest.org. Here's screenshot of site
                perf Google Lighthouse. This site follow mobile-first approach
                and is fully responsive on all devices including wide screens
                and it is passed all cross browser testing. <br /> (***Old site
                text, need to be replaced****)
              </p>
              <span className="w-3/4 mx-auto my-4">
                <Image alt="Lawrence Dass" quality={100} src={sitePerf} />
              </span>

              <p>
                * The site performance stats is from Incognito window of the
                browser since its does not store any cache. * Stats may vary
                slightly based on the browser settings, location, network etc.
              </p>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Modal;
