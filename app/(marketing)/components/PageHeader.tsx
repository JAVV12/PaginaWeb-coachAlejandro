import { Container, Title, Text } from '@mantine/core';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={`bg-gradient-to-r from-[#0d1f2d] to-[#0f2330] py-16 ${className}`}>
      <Container size="xl">
        <Title
          order={1}
          className="text-4xl md:text-5xl font-sans font-bold text-white mb-4"
        >
          {title}
        </Title>
        {subtitle && (
          <Text size="xl" c="gray.3" className="max-w-3xl">
            {subtitle}
          </Text>
        )}
      </Container>
    </div>
  );
}
