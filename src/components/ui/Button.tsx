import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center h-[43px] px-6 rounded-[8px] text-[16px] font-medium transition-colors";

  const variants = {
    primary: "bg-[var(--color-brand-brown)] text-white font-medium",
    secondary:
      "border border-[var(--color-brand-brown)] text-[var(--color-brand-brown)] font-medium",
  };

  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
