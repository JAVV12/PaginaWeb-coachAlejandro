import { Card as MantineCard, CardProps } from '@mantine/core';
import { cn } from '@/lib/utils';

interface CustomCardProps extends CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CustomCardProps) {
  return (
    <MantineCard
      className={cn('bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow', className)}
      {...props}
    >
      {children}
    </MantineCard>
  );
}
