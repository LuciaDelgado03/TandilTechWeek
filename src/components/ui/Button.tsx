import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-ink font-semibold hover:bg-brand-400 hover:shadow-glow",
  outline:
    "border border-brand-500/40 text-brand-300 hover:border-brand-400 hover:bg-brand-500/10",
  ghost: "text-zinc-300 hover:text-white hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  onClick,
  type = "button",
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
