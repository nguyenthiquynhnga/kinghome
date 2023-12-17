import type { Metadata, ResolvingMetadata } from 'next'
import './globals.css'
import Header from "@/layoutCpns/userLayout/Header"
import Footer from '@/layoutCpns/userLayout/Footer'
export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  // gọi api lấy các meta ở đây
  return {
    title: "KINGHOME - Thiết kế và xây dựng nội thất",
    referrer: "no-referrer-when-downgrade",
    description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",
    openGraph: {
      title: "KINGHOME - Thiết kế và xây dựng nội thất",
      description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",

    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="root">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
