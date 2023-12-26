import { IBlog } from "@/types/Blog"
import styles from "./page.module.css"
import React from "react"
import { Metadata } from "next"

type Props = {
    params: { slug: string }
  }
  // export async function generateStaticParams() {
  //get danh sách slug từ api
  // return posts.map((post: { slug: any; }) => ({
  //   slug: post.slug,
  // }))
  // }
  export async function generateMetadata(
    { params }: Props  ): Promise<Metadata> {
    // gọi api lấy các meta ở đây
    // đang để mặc định title là slug (khi code backend nên thêm một trường metatag title cho mỗi danh mục sản phẩm)
    return {
      title: params.slug,
      referrer: "no-referrer-when-downgrade",
      description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",
      openGraph: {
        title: "KINGHOME - Thiết kế và xây dựng nội thất",
        description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",
  
      },
    }
  }
//   async function getData({ params }: Props): Promise<IBlog> {
//     // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     //   method: "GET"
//     // })
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
  
//     // if (!res.ok) {
//     //   // This will activate the closest `error.js` Error Boundary
//     //   throw new Error('Failed to fetch data')
// //   }
//     return data;
  
//     // return res.json()
//   }
  

export default async function BlogPage({
    params,
}: {
    params: { slug: string }
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
