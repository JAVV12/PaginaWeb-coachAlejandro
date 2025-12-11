import Link from 'next/link';
import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends Omit<MantineButtonProps, 'variant'> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ variant = 'primary', href, children, className, ...props }: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-[#dcc97f] text-[#0d1f2d] hover:bg-[#c4b06a] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#0d1f2d] text-white hover:bg-[#0f2330]',
    outline: 'border-2 border-[#dcc97f] text-[#dcc97f] hover:bg-[#dcc97f] hover:text-[#0d1f2d]',
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    // Check if it's an external link
    if (href.startsWith('http://') || href.startsWith('https://')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <MantineButton
      className={classes}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
