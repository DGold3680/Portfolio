export default function H2({ children }) {
  return (
    <div>
      <div className="hidden md:flex items-center">
        <div className="bg-sec h-10 w-1.5 inline-block"></div>
        <h2 className="text-white inline-block font-base text-base ml-3">
          {children}
        </h2>
      </div>
      <div>
        <h2 className="md:hidden text-4xl font-extrabold text-white opacity-20 ">{children}</h2>
      </div>
    </div>
  );
}
