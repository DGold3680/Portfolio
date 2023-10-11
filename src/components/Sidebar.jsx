import Logo from "./Logo.jsx";

const navLinks = ["About", "My Projects", "My Blog", "Contact Me"];
export default function Sidebar() {
  return (
    <div className="py-6 h-screen text-sm text-white text-opacity-50" >
      <a href="/" className="float-right inline-block justify-end mb-4 ">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
            fill="white"
          />
        </svg>
      </a>
      <div className="text-center my-5">
        <Logo className="mb-3" />
        <p>Web Developer | Technical writer</p>
      </div>

      <ul className="flex flex-col justify-evenly items-center h-3/6 text-2xl">
      {navLinks.map((navLink) => {
            return (
              <li key={navLink}>
                <a
                  href="#about"
                  className="nav-link mx-6 hover:text-sec active:text-sec focus:text-sec"
                >
                  {navLink}
                </a>
              </li>
            );
          })}
      </ul>
      <div className="text-center my-5">
        <p className="text-5xl opacity-10 mb-3">Say Hello</p>
        <p>Hello@gold.dev</p>
      </div>
      <div className="flex justify-around mt-20 mb-4 ">
        <img src="instagram.svg" alt=""  />
        <img src="github.svg" alt=""  />
        <img src="twitter.svg" alt=""  />
        <img src="linkedIn.svg" alt=""  />
      </div>
    </div>
  );
}
