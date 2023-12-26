// "use client"
import { IProductItem } from "@/types/Product";
import React from "react";
import "./page.scss"
import Image from "next/image";
import LocationSelector from "@/components/locationSelector/locationSelector";
import numeral from "numeral";
import { Metadata } from "next";
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
      openGraph: {
          title: "KINGHOME - Thiết kế và xây dựng nội thất",
          description: "Tiện lợi mua sắm hàng triệu mặt hàng, dịch vụ. Vô vàn ưu đãi freeship, mã giảm giá. Hoàn tiền 15% tối đa 600k/tháng với thẻ tín dụng TikiCARD.",

      },
  }
}
const Checkout: React.FC<Props> = ({ params }) => {
  // useEffect(() => {
  //   // Ẩn thanh header khi component được mount
  //   const header = document.querySelector('.root-container');
  //   const banner = document.querySelector('.modalbanner')
  //   const footer = document.querySelector('.footer')
  //   if (header) {
  //     header.classList.add('hidden-header');
  //   }
  //   if (banner) {
  //     banner.classList.add('hidden-header');
  //   }
  //   if (footer) {
  //     footer.classList.add('hidden-header');
  //   }

  //   // Loại bỏ lớp khi component bị unmount
  //   return () => {
  //     if (header) {
  //       header.classList.remove('hidden-header');
  //     }
  //     if (banner) {
  //       banner.classList.remove('hidden-header');
  //     }
  //     if (footer) {
  //       footer.classList.remove('hidden-header');
  //     }
  //   };
  // }, []); // Chỉ chạy một lần khi component được mount

  return (
    <div className="checkout-root">
      <div className="checkout-wrapper">
        <div className="checkout-left">
          <div className="kinghome-logo">
            <a href="/">

              <Image src="https://res.cloudinary.com/drfpegr63/image/upload/v1702563889/logo3_ofplti.png" alt="logo" width={100} height={100} />
            </a>
          </div>
          <div className="shipment-detail">
            <div className="shipment-detail__left">
              <div className="shipment-detail__title">Thông tin giao hàng</div>
              <div className="shipment-detail__item">
                <input type="text" className="shipment-detail__item--input" placeholder="Họ và tên" />
              </div>
              <div className="shipment-detail__item">
                <input type="text" className="shipment-detail__item--input" placeholder="Số điện thoại" />
              </div>
              <div className="shipment-detail__item">
                <input type="text" className="shipment-detail__item--input" placeholder="Địa chỉ cụ thể" />
              </div>
              <LocationSelector />
              <div className="shipment-detail__item">
                <textarea className="shipment-detail__item--note" placeholder="Ghi chú (tùy chọn)"></textarea>
              </div>
            </div>
            <div className="shipment-detail__right">
              <div className="shipment-detail__title">Thanh toán</div>
              <div className="shipment-detail__payment-method">
                <div className="shipment-detail__payment-method--item">
                  <input type="radio" id="method-1" name="pyment-method" value="HTML" />
                  <label htmlFor="method-1">
                    <span>

                      Thanh toán một phần qua VnPay (30%)
                    </span>
                    <i className="payment-icon--16"></i>
                  </label>
                </div>
                <div className="shipment-detail__payment-method--item">
                  <input type="radio" id="method-2" name="pyment-method" value="CSS" />
                  <label htmlFor="method-2">
                    <span>
                      Thanh toán toàn bộ qua VnPay
                    </span>
                    <i className="payment-icon--16"></i>
                  </label>
                </div>
                <div className="shipment-detail__payment-method--item">
                  <input type="radio" id="method-3" name="pyment-method" value="JavaScript" />
                  <label htmlFor="method-3">
                    <span>
                      Thanh toán khi hoàn tất
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="kinghome-note">
            <p>Sau khi hoàn tất đơn hàng khoảng 60-90 phút (trong giờ hành chính), KINGHOME sẽ nhanh chóng gọi điện xác nhận lại thời gian giao hàng với bạn. KINGHOME xin cảm ơn!</p>
          </div>
        </div>
        <div className="checkout-right">
          <div className="checkout-right__title">Đơn hàng (1 sản phẩm)</div>
          <div className="checkout-right__product">
              <div className="checkout-product__image"><Image src={product.images[0].url} alt="image" width={60} height={60}/></div>
              <div className="checkout-product__name">{product.name}</div>
          </div>
          <div className="checkout-price">
            <span>Tổng cộng</span>
            <span>{numeral(product.price).format('0,0')}đ</span>
          </div>
          <div className="checkout-button">
          <button className="checkout-button__button">ĐẶT HÀNG</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;

const product: IProductItem = {
  id: 1,
  name: 'Thiết Kế Biệt Thự Ninh Bình - Phong Cách Indochine1',
  price: 318000000,
  priceOld: 380000000,
  categoryId: 1,
  images: [
    {
      url: 'https://noithatlacgia.vn/wp-content/uploads/2022/03/slide-noithatlacgia-6.jpg',
    }
  ],
  created_at: 178098989908,
  updated_at: 178098989908,
  tag1: 'sdf',
  value1: 'sdfsd'//nội dung của đầu đề 1
}