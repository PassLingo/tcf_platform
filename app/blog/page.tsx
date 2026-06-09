import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog/posts";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Blog | MonTCF",
  description:
    "Conseils, guides et témoignages pour réussir votre TCF Canada et immigrer au Québec.",
};

export default function BlogPage() {
  return (
    <>
      <main>
        <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-12">
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
                Blog
              </p>
              <h1
                className="text-3xl lg:text-5xl font-bold text-text mb-4"
                style={{ fontFamily: "var(--font-syne, 'Syne', sans-serif)" }}
              >
                Nos derniers articles
              </h1>
              <p className="text-muted text-lg max-w-2xl">
                Conseils pratiques, guides détaillés et témoignages pour vous aider à préparer
                votre TCF Canada et réussir votre immigration.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
