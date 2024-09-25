// Renders p5.js projects header with spinning logo
export const P5Header = () => {
  return (
    <h1 className="flex items-center font-bold text-2xl min-[300px]:text-2xl basis-1/6 transition-all duration-300">
      <div className="flex items-center">
        <a
          href="https://p5js.org/"
          className=" text-red-600 underline flex items-center"
        >
          <span>p5</span>
          <P5Logo className="self-end h-3 w-3 " />
          <span>js </span>
        </a>
        <span className="text-black ml-1">Sketches</span>
      </div>
    </h1>
  );
};
const P5Logo = ({ className }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`animate-spin [animation-duration:5s] ${className}`}
    >
      <path
        d="M16.909,10.259l8.533-2.576l1.676,5.156l-8.498,2.899l5.275,7.48 l-4.447,3.225l-5.553-7.348L8.487,26.25l-4.318-3.289l5.275-7.223L0.88,12.647l1.678-5.16l8.598,2.771V1.364h5.754V10.259z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
