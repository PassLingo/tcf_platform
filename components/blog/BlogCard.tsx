import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
  slug: string;
  title: string;
  logo: string;
  excerpt: string;
  publishedAt: string;
  category: string;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-surface border border-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div
        className="relative w-full aspect-video flex items-center justify-center"
        style={{ backgroundColor: "var(--color-primary-light)" }}
      >
        <Image className="object-cover" src={post.logo} alt={post.title} fill />
        <span className="text-4xl opacity-30 select-none">📖</span>
      </div>

      <div className="p-6">
        <h2 className="font-semibold text-text mb-2 leading-snug group-hover:text-primary transition-colors text-base">
          {post.title}
        </h2>

        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <time dateTime={post.publishedAt} className="text-xs text-muted">
          {new Date(post.publishedAt).toLocaleDateString("fr-CA", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
