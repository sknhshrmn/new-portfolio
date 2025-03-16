import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div
      className="relative border-2 border-transparent rounded-[10px] pt-8 flex flex-col gap-4 sm:gap-6 items-center w-full h-auto px-4 sm:px-8 py-10
      bg-muted dark:bg-background text-card-foreground overflow-hidden shadow-xl z-10
      bg-opacity-90 dark:bg-opacity-90"
    >
      {children}
    </div>
  );
};

export default Card;
