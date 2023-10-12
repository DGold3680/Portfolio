import BtnMain from "./Btn-main.jsx";
export default function Hero() {
  return (
    <div className="text-sm">
      <p className="text-sm text-sec font-semibold mb-4">Hi, My name is </p>
      <h1 className="text-5xl text-white font-bold">David Paul Afodi</h1>
      <p className="text-base mb-7">Web Developer | Technical writer</p>
      <p className="leading-7 mb-7">
        I’m a skilled full stack web developer in Nigeria, with over 3 years of
        experience in the field. From the beginning of my career, I have been
        passionate about creating stunning websites that not only look great but
        also provide an exceptional user experience.
      </p>
      <div className="flex w-1/2 sm:w-1/3 lg:w-2/5 justify-between mb-7">
        <img className="inline-block" src="instagram.svg" alt="" />
        <img className="inline-block" src="github.svg" alt="" />
        <img className="inline-block" src="twitter.svg" alt="" />
        <img className="inline-block" src="linkedIn.svg" alt="" />
      </div>
      <div className="flex sm:w-fit">
      <a
        href="#contact"
        class="sm:inline-block max-w-prose bg-sec py-2 lg:py-3 px-8 border-[3px] rounded-lg border-sec text-white font-semibold"
      >
        Contact Me
      </a>
      <div class=" sm:inline-block lg:hidden ml-4">
        <BtnMain>Resume</BtnMain>
      </div>
      </div>
     
    </div>
  );
}
