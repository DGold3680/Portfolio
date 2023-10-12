
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
    <div className="flex w-4/6  lg:w-2/5 justify-between mb-7">
      <img className="inline-block" src="instagram.svg" alt="" />
      <img className="inline-block" src="github.svg" alt="" />
      <img className="inline-block" src="twitter.svg" alt="" />
      <img className="inline-block" src="linkedIn.svg" alt="" />
    </div>
    <a
      href="#contact"
      class="inline-block  bg-sec py-3 px-8 border-[3px] rounded-lg border-sec text-white font-semibold"
      >Contact Me</a
    >
  </div>
  )
}
