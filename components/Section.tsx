import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  name: string;
}

const Section = ({ children, name }: SectionProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 gap-12">
      <h3 className="text-2xl">{name}</h3>
      {children}
    </div>
  );
};

export default Section;
