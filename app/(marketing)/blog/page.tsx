import { PageHeader } from '../components/PageHeader';
import { Section } from '../components/Section';
import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { Container, Card, Title, Text, Stack } from '@mantine/core';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Artículos, frameworks y casos sobre liderazgo adaptativo y coaching ejecutivo"
      />

      <Section variant="white">
        <Container size="xl">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <Text size="xl" c="dimmed">
                No hay artículos publicados todavía. Próximamente compartiré contenido
                sobre liderazgo adaptativo y coaching ejecutivo.
              </Text>
            </div>
          ) : (
            <Stack gap="xl">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <Title order={3} className="text-2xl font-sans font-bold text-[#0d1f2d] mb-3">
                      {post.frontmatter.title}
                    </Title>
                    {post.frontmatter.excerpt && (
                      <Text c="dimmed" size="lg" className="mb-4">
                        {post.frontmatter.excerpt}
                      </Text>
                    )}
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <Text size="sm">{post.frontmatter.date}</Text>
                      {post.frontmatter.author && (
                        <>
                          <span>•</span>
                          <Text size="sm">{post.frontmatter.author}</Text>
                        </>
                      )}
                    </div>
                  </Card>
                </Link>
              ))}
            </Stack>
          )}
        </Container>
      </Section>
    </>
  );
}
