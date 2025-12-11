import { PageHeader } from '../../components/PageHeader';
import { Section } from '../../components/Section';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container, Text, Stack } from '@mantine/core';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={post.frontmatter.title}
        subtitle={post.frontmatter.excerpt || ''}
      />

      <Section variant="white">
        <Container size="xl" className="max-w-4xl">
          <Stack gap="md" mb="xl">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <Text size="sm">{post.frontmatter.date}</Text>
              {post.frontmatter.author && (
                <>
                  <span>•</span>
                  <Text size="sm">{post.frontmatter.author}</Text>
                </>
              )}
            </div>
          </Stack>

          <article className="prose prose-lg max-w-none">
            <div className="markdown-content">
              <MDXRemote source={post.content} />
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="text-[#dcc97f] hover:text-[#c4b06a] font-medium"
            >
              ← Volver al Blog
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
