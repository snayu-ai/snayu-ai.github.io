import React from "react";
import { Metadata } from "next";
import { blogs as allBlogs } from "#site/content";
import { cn, formatDate } from "@/lib/utils";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Mdx } from "@/components/mdx-component";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

type BlogPageItem = { slug: string[] };
type BlogPageItemProps = Promise<BlogPageItem>;

async function getBlogFromParams(params: BlogPageItem) {
  const slug = (await params)?.slug.join("/");
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blog) {
    return null;
  }

  return blog;
}

export async function generateMetadata(props: {
  params: BlogPageItemProps;
}): Promise<Metadata> {
  const blog = await getBlogFromParams(await props.params);

  if (!blog) {
    return {};
  }

  return {
    title: blog.title,
    description: blog.description,
    authors: {
      name: blog.author,
    },
  };
}

export async function generateStaticParams(): Promise<BlogPageItem[]> {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams.split("/"),
  }));
}

export default async function BlogPageItem(props: {
  params: BlogPageItemProps;
}) {
  const params = await props.params;
  const blog = await getBlogFromParams(params);

  if (!blog) {
    return {};
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <ScrollProgress className="fixed top-[79px] z-[100]" />
      <div>
        <h1 className="mt-2 inline-block text-4xl font-title font-medium tracking-tight capitalize text-center text-primary lg:text-5xl w-full">
          {blog.title}
        </h1>
        <div className="flex justify-center items-center gap-2 mt-4">
          {blog.date && (
            <time
              dateTime={blog.date}
              className="block text-md text-foreground"
            >
              {formatDate(blog.date)}
            </time>
          )}

          <div className="size-1 bg-muted-foreground rounded-full" />

          {blog.author && (
            <div className="flex space-x-2">
              <Image
                src={siteConfig.authorImage}
                alt={blog.author}
                width={24}
                height={24}
                className="rounded-full bg-white"
              />
              <div className="flex-1 text-left leading-tight">
                <p className="text-md">{blog.author}</p>
              </div>
            </div>
          )}
        </div>

        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={720}
            height={405}
            priority
            className="my-8 border bg-muted transition-colors rounded-2xl w-full"
          />
        )}
        <Mdx code={blog.body} />
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <ChevronLeft className="mr-2 size-4" />
            See all blogs
          </Link>
        </div>
      </div>
    </article>
  );
}
