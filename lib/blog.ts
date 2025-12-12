import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt?: string;
    author?: string;
  };
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: {
          title: data.title || 'Untitled',
          date: data.date || '',
          excerpt: data.excerpt || '',
          author: data.author || 'Alejandro Valencia',
        },
        content,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: {
        title: data.title || 'Untitled',
        date: data.date || '',
        excerpt: data.excerpt || '',
        author: data.author || 'Alejandro Valencia',
      },
      content,
    };
  } catch (error) {
    return null;
  }
}
