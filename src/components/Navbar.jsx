import Logo from "./Logo.jsx";

const Navbar = () => {
  const navLinks = ["About", "Project", "Blog", "Contact"];
  return (
    <div className="navbar px-6 md:px-12 py-6 flex w-full items-baseline justify-between">
      <Logo />
      <div className="hidden sm:flex nav-box text-sm w-3/6 lg:w-2/5 justify-end">
        <ul className="flex justify-between items-center">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink}>
                <a
                  href={`/#${navLink}`}
                  className="nav-link sm:mx-3 mx-6 hover:text-white active:text-white focus:text-white"
                >
                  {navLink}
                </a>
              </li>
            );
          })}
          <li>
            <button className="ml-10 py-2 px-6 border-[3px] rounded-lg shadow-md shadow-neutral-900 border-sec text-sec font-semibold hover:border-white active:border-white focus:border-white hover:text-white active:text-white focus:text-white">
              Resume
            </button>
          </li>
        </ul>
      </div>
      <div className="sm:hidden">
        <a href="/navigation">
          <svg
            width="27"
            height="18"
            viewBox="0 0 27 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.51163H26.8333" stroke="white" strokeWidth="1.24806" />
            <path d="M0 9H17" stroke="white" strokeWidth="1.24806" />
            <path d="M0 16.4884H26.8333" stroke="white" strokeWidth="1.24806" />
          </svg>
        </a>
      </div>
    </div>
  );
};


 export default Navbar
