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
    `
    inline-flex items-center justify-center
    h-[43px] px-6
    rounded-[8px]
    text-[16px] font-medium
    transition-all duration-200 ease-out
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[var(--color-brand-brown)]
    focus-visible:ring-offset-2
    active:scale-[0.97]
    `;

  const variants = {
    primary: `
      bg-[var(--color-brand-brown)]
      text-white
      hover:bg-[color-mix(in_srgb,var(--color-brand-brown),black_10%)]
      hover:-translate-y-[1px]
      active:translate-y-0
    `,
    secondary: `
      border border-[var(--color-brand-brown)]
      text-[var(--color-brand-brown)]
      bg-transparent
      hover:bg-[var(--color-brand-brown)]/10
      hover:-translate-y-[1px]
      active:translate-y-0
    `,
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
