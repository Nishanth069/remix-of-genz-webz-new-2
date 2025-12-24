import blogData from '../../content/blogs.json';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  published: boolean;
  image: string;
}

export function getAllPosts(): BlogPost[] {
  return (blogData.posts as BlogPost[]).filter(post => post.published);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return (blogData.posts as BlogPost[]).find(post => post.slug === slug && post.published);
}
