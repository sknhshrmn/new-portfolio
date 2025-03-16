import React, { CSSProperties } from "react";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "p" | "pHover" | "small" | "quote" | "stack";
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "text-secondary w-full font-poppins"; // Default
  const styles = {
    h1: "text-xl sm:text-3xl font-bold text-primary",
    h2: "text-lg sm:text-2xl font-semibold text-primary",
    h3: "text-sm sm:text-lg font-medium text-primary",
    p: "text-xs sm:text-sm text-muted-foreground",
    pHover:
      "text-xs sm:text-sm text-white hover:text-accent transition-colors duration-300", // Hover accent color
    small: "text-[0.75rem] sm:text-xs text-primary",
    stack: "text-[0.75rem] sm:text-xs text-muted-foreground dark:text-muted",
    quote:
      "text-xs sm:text-base italic border-l-4 border-primary pl-4 text-accent",
  };

  const Component: keyof JSX.IntrinsicElements =
    variant === "quote"
      ? "blockquote"
      : variant === "p" ||
        variant === "pHover" ||
        variant === "small" ||
        variant === "stack"
      ? "div"
      : variant;

  return (
    <Component
      className={`${baseStyles} ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
