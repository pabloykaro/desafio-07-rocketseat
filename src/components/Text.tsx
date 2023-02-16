import { HTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

type TextProps = {
  size?: 'xs' | 'sm' | 'md' | 'xl' | '2xl';
  children: ReactNode;
  asChild?: boolean;
  className?: string
};

export function Text({ size, children, asChild, className }: TextProps) {
  const CompText = asChild ? Slot : "span";

  return(
    <CompText 
    className={clsx('font-sans',{
      'text-sm': size === 'xs',
      'text-base': size === 'sm',
      'text-xl': size === 'md',
      'text-[2rem] leading-snug': size === 'xl',
      'text-5xl': size === '2xl',
    },
    className
    )}
    >
      {children}
    </CompText>
  );
}


