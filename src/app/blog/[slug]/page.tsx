import styles from "./page.module.css"
import React from "react"

export async function generateStaticParams() {
  // Fetch the list of blog posts or slugs from your API or any other source
  // For example, assuming you have an API function fetchBlogPosts()
//   const blogPosts = await fetchBlogPosts();

//   // Return an array of objects with the necessary params
//   return blogPosts.map((post) => ({
//     params: {
//       slug: post.slug,
//     },
//   }));

return {
    slug:'1',
    slug_product:'2'
}
}

export default async function BlogPage({
    params,
}: {
    params: { slug: string, slug_product: string }
}
) {
    // sử dụng cơ chế fetch data trêm server component:
    // không sử dụng useEffect, sẽ bị chậm
    // https://youtu.be/EnzPVKoz4nc?t=2275


    return (
        <main className={styles.main}>
            <div className={styles.content_container}>
                blog detail
            </div>
        </main>
    )
}
