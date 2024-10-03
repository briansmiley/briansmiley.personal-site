type FrameworkIconProps = {
  icon: string;
  className?: string;
};

export default function FrameworkIcon({
  icon,
  className = ""
}: FrameworkIconProps) {
  const fileName = icon.toLowerCase();
  return (
    <img
      src={`/icons/${fileName}.svg`}
      alt={icon}
      title={icon}
      className={`aspect-square h-5 sm:h-6 md:h-7 lg:h-8 ${className}`}
      style={{ objectFit: "contain" }}
    />
  );
}
