import styles from "./page.module.css"
import React from "react"
import "./page.scss"
import { IBlog } from "@/types/Blog";
import moment from "moment"
import Image from "next/image";
import Link from "next/link";
async function getData(): Promise<IBlog[]> {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: "GET"
  // })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
  // if (params.slug === '2')
  return blogList;
  // return data2;

  // return res.json()
}
export default async function BlogPage({
  children,
}: {
  children: React.ReactNode
}) {
  // sử dụng cơ chế fetch data trêm server component:
  // không sử dụng useEffect, sẽ bị chậm
  // https://youtu.be/EnzPVKoz4nc?t=2275

  const dataFetch = await getData();
  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <div className="blog-wrapper">
          <h2 className="blog-header">TIN TỨC TỔNG HỢP</h2>
          <div className="blog-list">
            {
              dataFetch.map((blog) => (
                <div className="blog-item">
                  <div className="blog-item__image"><Image src={blog.image.url} width={480} height={300} layout="responsive" alt="image" /></div>
                  <div className="blog-item__detail">
                    <div className="blog-item__title"><Link href={`/blog/${blog.id}`}>{blog.title}</Link></div>
                    <div className="blog-item__description">{blog.description}</div>
                    <div className="blog-item__created-at">{moment(blog.created_at).format('hh:mm DD-MM-YYYY')}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}


const blogList = [
  {
    id: 1,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 2,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 3,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 4,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 5,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jhgh shgyf shgs jshgd jshfg iweygr sytf wuyt8yetd 8iut8 oe8uyt o',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 6,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 7,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 8,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 9,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 10,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 11,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  },
  {
    id: 12,
    title: 'YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy nỗ lực',
    image: {
      url: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/438/408/articles/yody-250-cua-hang-yodyvn.jpg?v=1701831393830',
    },
    description: 'Chiến lược kinh doanh đưa YODY vượt qua mốc 250 cửa hàng, đặt chân mình vào vị trí hàng đầu trong làng thời trang Việt Nam. YODY Ghi Dấu 250 Cửa Hàng - Một chặng đường đầy sự nỗ lực và may mắn jh sdfksdjh skj sdkj hfskjh skjd hfsjkh jkh ',
    created_at: 1702909989800,
    content: ''
  }
]