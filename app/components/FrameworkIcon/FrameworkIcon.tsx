type FrameworkIconProps = {
  icon: string;
  className?: string;
};

export default function FrameworkIcon({
  icon,
  className = ""
}: FrameworkIconProps) {
  return (
    <img
      src={`/icons/${icon}.svg`}
      alt={icon}
      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 ${className}`}
    />
  );
}
