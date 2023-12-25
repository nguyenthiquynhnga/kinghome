import styles from "./page.module.css"
import React from "react"

export default async function BlogPage(
//     {
//     params,
// }: {
//     params: { slug: string, slug_product: string }
// }
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
