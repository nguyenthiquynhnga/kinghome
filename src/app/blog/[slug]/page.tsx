import { IBlog } from "@/types/Blog"
import styles from "./page.module.css"
import React from "react"
import { Metadata } from "next"

type Props = {
    params: { slug: string }
}
export async function generateStaticParams() {
    // get danh sách slug từ api
    // return posts.map((post: { slug: any; }) => ({
    //   slug: post.slug,
    // }))
    return [
        { slug: '1' },
        { slug: '2' },
        { slug: '3' },
        { slug: '4' },
        { slug: '5' },
        { slug: '6' },
        { slug: '7' },
        { slug: '8' },
        { slug: '9' },
        { slug: '10' },
        { slug: '11' },
        { slug: '12' },
        { slug: '13' },
        { slug: '14' },
        { slug: '15' },
        { slug: '16' },
        { slug: '17' },
        { slug: '18' },
        { slug: '19' },
        { slug: '20' },
        { slug: '21' },
        { slug: '22' },
        { slug: '23' },
        { slug: '24' },
        { slug: '25' },
        { slug: '26' },
        { slug: '27' },
        { slug: '28' },
        { slug: '29' },
        { slug: '30' },
        { slug: '31' },
        { slug: '32' },
        { slug: '33' },
        { slug: '34' },
        { slug: '35' },
        { slug: '36' },
        { slug: '37' },
        { slug: '38' },
        { slug: '39' },
        { slug: '40' },
        { slug: '41' },
        { slug: '42' },
        { slug: '43' },
        { slug: '44' },
        { slug: '45' },
        { slug: '46' },
        { slug: '47' },
        { slug: '48' },
        { slug: '49' },
        { slug: '50' },
        { slug: '51' },
        { slug: '52' },
        { slug: '53' },
        { slug: '54' },
        { slug: '55' },
        { slug: '56' },
        { slug: '57' },
        { slug: '58' },
        { slug: '59' },
        { slug: '60' },
        { slug: '61' },
        { slug: '62' },
        { slug: '63' },
        { slug: '64' },
        { slug: '65' },
    ]
}
export async function generateMetadata(
    { params }: Props): Promise<Metadata> {
    // gọi api lấy các meta ở đây
    // đang để mặc định title là slug (khi code backend nên thêm một trường metatag title cho mỗi danh mục sản phẩm)
    return {
        title: params.slug,
        referrer: "no-referrer-when-downgrade",
        description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",
        // openGraph: {
        //     title: "KINGHOME - Thiết kế và xây dựng nội thất",
        //     description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",

        // },
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
