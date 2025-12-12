import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, className, centered = false }: SectionTitleProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#0d1f2d] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
