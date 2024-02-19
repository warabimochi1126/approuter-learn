import Link from "next/link"
import type { Database } from "@/database.types"

type Note = Database["public"]["Tables"]["notes"]["Row"]

async function fetchBlogs() {
  const res = await fetch(`${process.env.url}/rest/v1/notes?select=*`, {
      headers: new Headers({
          apikey: process.env.apikey as string
      }),
      cache: "no-store"
  });

  if (!res.ok) {
      throw new Error("Failed to fetch data in server");
  }
  const notes: Note[] = await res.json();
  return notes;
}

export default async function BlogListStatic() {
  const blogs = await fetchBlogs();

  return (
    <div className="p-4">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul>
        { blogs.map((blog) => (
          <li key={blog.id} className="my-1 text-base">
            <Link href={`/blogs/${blog.id}`} prefetch={false}>{ blog.title }</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}