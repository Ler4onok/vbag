import { ReactNode } from "react";

interface SectionProps {  
    children: ReactNode;
}

const Section = ({children}: SectionProps) => {
  return <div className="flex flex-col items-center justify-center p-12 gap-12">{children}</div>;
};

export default Section;
