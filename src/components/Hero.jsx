import BtnMain from "./Btn-main.jsx";
export default function Hero() {
  return (
    <div className="text-sm basis-1/2 sm:pr-12 my-auto pb-6">
      <div className="lg:hidden absolute font-black text-9xl opacity-5 -mt-8 -ml-2 left-0 w-full">
        <p>Let's</p>
        <p className="indent-20 overflow-hidden sm:indent-60 md:indent-72 mt-6">Build</p>
      </div>

      <p className="text-sm text-sec font-semibold mb-4">Hi, My name is </p>
      <h1 className="text-3xl md:text-5xl text-white font-bold">David Paul Afodi</h1>
      <p className="text-base mb-7">Web Developer | Technical writer</p>
      <p className="leading-7 mb-7">
        I’m a skilled full stack web developer in Nigeria, with over 3 years of
        experience in the field. From the beginning of my career, I have been
        passionate about creating stunning websites that not only look great but
        also provide an exceptional user experience.
      </p>
      <div className="flex max-w-sm sm:w-1/3 lg:w-2/5 justify-between mb-7">
        <img className="inline-block" src="instagram.svg" alt="" />
        <img className="inline-block" src="github.svg" alt="" />
        <img className="inline-block" src="twitter.svg" alt="" />
        <img className="inline-block" src="linkedIn.svg" alt="" />
      </div>
      <div className="flex justify-between w-full max-w-sm sm:w-fit">
        <a
          href="#contact"
          className="flex justify-center grow sm:inline-block max-w-prose bg-sec py-4 sm:py-2 lg:py-3 px-8 border-[3px] rounded-lg border-sec text-white font-semibold hover:bg-bgSec active:bg-bgSec focus:bg-bgSec focus:text-sec hover:text-sec active:text-sec hover:shadow-md hover:shadow-neutral-900"
        >
          Contact Me
        </a>
        <div className="flex justify-end grow sm:inline-block lg:hidden sm:ml-4">
          <BtnMain>Resume</BtnMain>
        </div>
      </div>
    </div>
  );
}
