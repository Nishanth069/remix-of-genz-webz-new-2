import { getAllPosts } from '@/lib/blog';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import SmoothTransitionsProvider from '@/components/animations/smooth-transitions';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blogs & Insights | ZYXEN',
  description: 'Explore the latest insights on digital transformation, AI, and modern web engineering from the ZYXEN team.',
};

export default function BlogListingPage() {
  const posts = getAllPosts();
  const featuredPost = posts.find(p => p.featured) || posts[0];
  const regularPosts = posts.filter(p => p.id !== featuredPost?.id);

  return (
    <SmoothTransitionsProvider>
      <div className="min-h-screen bg-black text-white antialiased selection:bg-purple-500/30">
        <Header />
        
        <main className="pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <header className="mb-20">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Insights <span className="text-purple-500">&</span> Perspectives
              </h1>
              <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
                Deep dives into the intersection of design, engineering, and artificial intelligence.
              </p>
            </header>

            {featuredPost && (
              <section className="mb-24 group">
                <Link href={`/blogs/${featuredPost.slug}`} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="relative aspect-[16/10] lg:aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-purple-500/20">
                      Featured
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-purple-400 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 line-clamp-3 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-8">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                      Read Article <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </section>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {regularPosts.map((post) => (
                <article key={post.id} className="group flex flex-col h-full border border-slate-800 rounded-3xl p-4 transition-all hover:bg-slate-900/30 hover:border-slate-700">
                  <Link href={`/blogs/${post.slug}`} className="block flex-1">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-slate-900/50">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="px-2">
                      <div className="flex items-center gap-4 text-xs text-purple-400 font-semibold uppercase tracking-widest mb-4">
                        {post.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 line-clamp-2 group-hover:text-purple-400 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                  
                  <div className="mt-auto px-2 pt-6 border-t border-slate-800/50 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothTransitionsProvider>
  );
}
