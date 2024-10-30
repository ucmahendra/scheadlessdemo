import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Default = (): JSX.Element => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex flex-col gap-8 lg:items-center lg:gap-16 lg:flex-row">
            <div className="lg:max-w-xl xl:shrink-0">
              <div>
                <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  Making earth cooler for people, nature, climate
                </h2>
                <p className="mt-5 text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl sm:text-xl">
                  Protecting the planet and its natural resources for future generations by reducing
                  pollution, promoting sustainability, and conserving energy and resources.
                </p>
              </div>
              <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                <a
                  href="#"
                  title=""
                  className="sm:w-[182px] px-5 py-3 w-full  text-base font-medium text-center text-white bg-primary-700 rounded-lg shrink-0 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Donate now
                </a>
                <a
                  href="#"
                  title=""
                  className="sm:w-[182px] inline-flex w-full justify-center items-center px-5 py-3 text-base font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg shrink-0 focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  role="button"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 -ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  Learn more
                </a>
              </div>
              <div className="mt-4 sm:border-t sm:border-gray-100 sm:mt-8 sm:pt-8 dark:border-gray-700">
                <p className="hidden text-base font-medium text-gray-500 sm:block">
                  Partners and backers:
                </p>
                <div className="flex items-center mt-3 max-w-md">
                  <img
                    className="w-auto h-8 md:h-12 mr-4"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/greenpeace.svg"
                    alt=""
                  />
                  <img
                    className="w-auto h-8 md:h-12 mr-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/united-nations.svg"
                    alt=""
                  />
                  <img
                    className="w-auto h-8 md:h-12 mr-8 dark:invert"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/wwf.svg"
                    alt=""
                  />
                  <img
                    className="w-auto h-8 md:h-12"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/oxfam.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
              <Slider {...settings}>
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-1.jpg"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-2.jpg"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-3.jpg"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-4.jpg"
                    alt="..."
                  />
                </div>
                <div>
                  <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/ngo-carousel/image-5.jpg"
                    alt="..."
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
