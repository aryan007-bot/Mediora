interface HealthcareLogoProps {
  className?: string;
}

export default function HealthcareLogo({ className = "w-6 h-6" }: HealthcareLogoProps) {
  // The image lives in the `public/` folder. Encode the filename since it contains spaces.
  const src = encodeURI('/Screenshot 2025-10-09 223551.png');

  return (
    <img src={src} alt="HealthAI logo" className={className} />
  );
}