import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { marked } from 'marked';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | ZYXEN',
    };
  }

  return {
    title: `${post.title} | ZYXEN Blogs`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: `https://zyxen.in/blogs/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await marked.parse(post.content);

  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased">
        <Header />
        <main className="pt-32 pb-24">
          <article className="max-w-4xl mx-auto px-6">
            <Link 
              href="/blogs"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 mb-12 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Insights
            </Link>

            <header className="mb-12">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-purple-400 mb-6">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm border-y border-slate-800 py-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-slate-800">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div 
              className="prose prose-invert prose-purple max-w-none prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </article>
        </main>
        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
