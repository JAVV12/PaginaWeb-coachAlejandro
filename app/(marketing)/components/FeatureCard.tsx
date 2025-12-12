import { Card } from '@/components/ui/Card';
import { Text } from '@mantine/core';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card className={`p-8 h-full ${className}`}>
      {icon && (
        <div className="text-4xl text-[#dcc97f] mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-sans font-bold text-[#0d1f2d] mb-4">
        {title}
      </h3>
      <Text c="dimmed" size="lg" className="leading-relaxed">
        {description}
      </Text>
    </Card>
  );
}
