
export default function H2({children}) {
  return (
    <div className="flex items-center">
    <div className="bg-sec h-10 w-1.5 inline-block"></div>
    <h2 className="text-white inline-block font-base text-base ml-3">{children}</h2>
  </div>
  )
}
