import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Text } from '@mantine/core';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  image?: string;
}

export function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <Card className="p-8 h-full">
      <div className="flex items-start gap-4 mb-6">
        {image && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-bold text-[#0d1f2d]">{author}</h4>
          <Text size="sm" c="dimmed">
            {role}
            {company && ` en ${company}`}
          </Text>
        </div>
      </div>
      <Text size="lg" className="leading-relaxed italic text-gray-700">
        "{quote}"
      </Text>
    </Card>
  );
}
