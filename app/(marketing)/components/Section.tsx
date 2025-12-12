import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'white' | 'blue' | 'light';
  className?: string;
}

export function Section({ children, variant = 'white', className }: SectionProps) {
  const variantClasses = {
    white: 'bg-white',
    blue: 'bg-[#0d1f2d] text-white',
    light: 'bg-gray-50',
  };

  return (
    <section className={cn('py-16 md:py-24', variantClasses[variant], className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
