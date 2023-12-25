import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import "./page.scss"
import styles from "./page.module.css"
import { ICategoryDetail } from "@/types/Category"
import React from "react"
import CategoryDetail from "@/components/category-detail/categoryDetail"
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
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
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
async function getData({ params }: Props): Promise<ICategoryDetail> {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: "GET"
  // })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
  if (params.slug === '2') return data;
  return data2;

  // return res.json()
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string }}) {
  // sử dụng cơ chế fetch data trêm server component:
  // không sử dụng useEffect, sẽ bị chậm
  // https://youtu.be/EnzPVKoz4nc?t=2275

  const dataFetch = await getData({ params });

  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <div className="category-detail-root">
          <div className='category-detail__banner'>
            {dataFetch.banner?.url ? <Image src={dataFetch.banner.url} alt="banner" fill /> : ''}
          </div>
          <div className="category-detail__title">
            <span>{dataFetch.categoryList.name}</span>
          </div>
          <div className="category-detail__content">
              <CategoryDetail data={dataFetch}/>
          </div>
        </div>
      </div>
    </main>
  )
}


const data = {
  banner: {
    url: 'https://bizweb.dktcdn.net/100/438/408/files/quan-au-nu-1b081911-63de-4a73-8838-4e466f1660d0.jpg?v=1676861572286'
  },
  post: `
  <h1 class="collectiontitle d-none">Quần nam</h1>
  <p><em><strong>YODY xin giới thiệu đến bạn 7 kiểu quần nam, quần <a href="https://yody.vn/nam"><span style="color:#3498db;">thời trang nam</span></a> phổ biến nhất 2023. Đây là những kiểu quần nam ăn khách, không bao giờ lỗi mốt&nbsp;và là kiểu quần nhất định bạn có phải trong tủ đồ.&nbsp; Hãy cùng tham khảo để bổ sung ngay cho tủ quần áo của mình những chiếc quần từ cửa hàng của YODY nhé!</strong></em></p>
  <h2>1. Các mẫu quần dài nam nhất định phải sở hữu</h2>
  <h3>1.1 Quần jeans nam</h3>
  <p>Đứng đầu danh sách các mẫu quần nam nên sở hữu thì không thể thiếu được quần jeans. Đây là mẫu quần đã phổ biến từ lâu và cho tới hiện tại vẫn không ngừng độ HOT lại. Quần jeans được chia thành nhiều kiểu dáng khác nhau như dáng suông, dáng skinny, dáng slim,... Dựa vào đây bạn có thể chọn cho mình mẫu quần phù hợp nhất với vóc dáng.</p>
  <p style="text-align: center;"><img alt="Quần jeans nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-4.jpg?v=1673334522183"></p>
  <p>Chất liệu quần jeans được làm từ vải denim, đây là chất vải rất đanh chắc, bền theo thời gian. Phong cách của quần jeans dài hướng tới sự đơn giản, bụi bặm hoặc phá cách nhiều hơn. Những kiểu jeans rách hoặc jeans mài sẽ cho bạn vẻ ngoài chất ngầu hơn so với kiểu quần trơn không rách.</p>
  <p style="text-align: center;"><img alt="Quần jeans nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-5.jpg?v=1673334523083"></p>
  <p>Đặc biệt đây cũng là kiểu quần rất tôn dáng, có thể tạo cảm giác kéo dài chân cho người mặc. Nếu bạn là người có chiều cao khiêm tốn thì nhất định phải mua ngay mẫu quần này để hack dáng dễ dàng hơn. Quần jeans có màu classic là xanh da trời, dễ dàng phối với rất nhiều màu sắc khác. Nếu bạn muốn chiếc quần mặc với màu gì cũng được thì hãy chọn màu đen.</p>
  <h3>1.2 Quần tây nam</h3>
  <p>Nói về sự thanh lịch và sang trọng thì quần tây nam là kiểu quần nam đứng đầu hiện nay. Mẫu quần này có thiết kế đa số là kiểu vải trơn, không bị xù và rất bền, giữ form dáng được lâu. Phần ống quần có dáng đứng, giúp cho chân của người mặc được thẳng và nổi bật đôi chân lên. Quần tây&nbsp;hay được dân văn phòng, công sở hoặc được phái nam diện vào những dịp quan trọng.</p>
  <p style="text-align: center;"><img alt="Quần tây nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-2.jpg?v=1673334556595"></p>
  <p>Quần tây có nhiều kiểu dáng như ống suông, ống skinny, ống slim,... bạn có thể lựa chọn dựa trên kích thước hông và chân của mình. Mẫu quần tây có thể phối được nhiều kiểu nhưng thịnh hành nhất đó là phối với áo sơ mi. Đây là combo bất di bất dịch để tôn sự thanh lịch và sang trọng lên cho người mặc. Bạn có thể phối giày tây hoặc giày thể thao, tùy vào phần áo bạn mặc.</p>
  <p style="text-align: center;"><img alt="Quần tây nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-3.jpg?v=1673334557071"></p>
  <p>Quần tây không chỉ dành cho dân văn phòng, công sở mà học sinh, sinh viên cũng có thể mặc được. Có thể phối áo phông với giày thể thao mặc cùng quần tây vẫn đẹp. Tùy vào chật rộng của hông mà bạn có thể đeo thêm thắt lưng, thông thường sẽ không cần trừ khi quần bị lỏng quá.</p>
  <h3>1.3 Quần dài&nbsp;thể thao nam</h3>
  <p>Quẩn&nbsp;dài thể thao cũng là kiểu quần nam không thể thiếu trong tủ đồ được. Lý do là bởi vì không thể nào chỉ mặc mỗi quần jeans hoặc quần tây quanh năm suốt tháng. Nếu mặc như vậy thì vào mùa hè sẽ rất nóng và khó chịu, gây bí bách cho phần thân dưới. Đã đến lúc đổi gió một chút cùng&nbsp;kiểu quần dài thể thao nam với phong cách khác hoàn toàn.</p>
  <p style="text-align: center;"><img alt="Quần dài&nbsp;thể thao nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-10.jpg?v=1673334572600"></p>
  <p>Quần dài thể thao nam được làm từ những chất liệu như vải đũi, vải polyester, vải nỉ,... tạo cảm giác co giãn rất tốt cho người mặc. Như vậy khi thực hiện các động tác tập phức tạp cũng không hề bị cản trở, sinh hoạt hàng ngày rất thoải mái, không bị bí nóng. Thiết kế của quần thể thao cũng đa kiểu dáng, như dáng suông, dáng slim,...</p>
  <p style="text-align: center;"><img alt="Quần dài&nbsp;thể thao nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-11.jpg?v=1673334573461"></p>
  <p>Để phối quần dài thể thao nam thì hãy tận dụng những đôi giày thể thao mình đang có. Phần thân trên chỉ cần mặc đơn giản áo phông ngắn tay hoặc áo khoác gió thể thao là có một bộ đồ thể thao rồi. Những set đồ thể thao như vậy bạn có thể mặc 4 mùa mà không bị nhàm chán, là một item không thể thiếu cho nam giới.</p>
  <h3>1.4 Quần kaki nam</h3>
  <p>Quần kaki là kiểu quần nam dùng chất liệu cotton, có bề mặt thô khá giống với quần jeans nhưng mang cả phong cách của quần tây. Nếu bạn vẫn đang phân vân chọn mặc gì không quá lịch lãm cũng không quá bụi bặm thì quần kaki là lựa chọn số một. Quần kaki nam cho bạn dáng vẻ trẻ trung, tôn dáng mà vẫn rất gọn gàng, dễ nhìn.</p>
  <p style="text-align: center;"><img alt="Quần kaki nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-6.jpg?v=1673334592917"></p>
  <p>Vì ở giữa phong cách của quần jeans và quần tây nên bạn có thể phối rất nhiều phong cách với loại quần nam kaki. Nếu bạn muốn trẻ trung, năng động thì phối với giày thể thao và áo phông. Nếu bạn muốn thanh lịch, đơn giản thì phối cùng giày tây và áo sơ mi. Tương tự như những kiểu quần trên, quần kaki có đa dạng thiết kế để phù hợp với phong cách cá nhân của bạn.</p>
  <p style="text-align: center;"><img alt="Quần kaki nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-7.jpg?v=1673334593834"></p>
  <p>Quần kaki trước đây không được phổ biến, chủ yếu được tin dùng bởi những khách hàng có độ tuổi trung niên. Nhưng tới hiện tại đây lại là item không thể thiếu trong tủ đồ dù là học sinh, thanh niên hay trung niên. Để đa dạng cho bản thân cách phối quần áo hơn thì hãy sắm ngay cho mình mẫu quần kaki nam.</p>
  <h2>2. Những mẫu quần short nam thịnh hành 2023</h2>
  <h3>2.1 Quần short jeans nam</h3>
  <p>Ngoài quần jeans dáng dài ra thì bạn cũng nên một lần thử mặc mẫu quần short jeans vì đây có thể là cứu tinh của bạn. Nếu bạn là một người yêu&nbsp;quần jeans nhưng không thể chịu được sự bí bách của quần vào những ngày hè thì short jeans là đáp án. Cũng mang lại những thiết kế giống như quần jeans dáng dài, chỉ đơn giản là ống quần chỉ đến đầu gối giúp cho người mặc mát hơn.</p>
  <p style="text-align: center;"><img alt="Quần short jeans nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-12.jpg?v=1673334608425"></p>
  <p>Quần short jeans vẫn mang lại dáng vẻ bụi bặm và trẻ trung cho người mặc như mẫu quần dài tiền nhiệm. Vào những ngày hè bạn có thiện bộ short jeans cùng với áo phông hoặc áo polo, đi kèm với đó là đôi giày thể thao sẽ rất ăn ý.</p>
  <p style="text-align: center;"><img alt="Quần short jeans nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-13.jpg?v=1673334609308"></p>
  <p>Với mẫu quần nam short jeans thì bạn vẫn có thể phá cách hơn với kiểu mài bạc hoặc sờn rách tương tự như quần dài. Mặc dù là quần short nhưng phong cách mà mẫu quần này đem lại không thua kém gì những mẫu quần dài mà lại còn mát mẻ hơn.</p>
  <h3>2.2 Quần short thể thao nam</h3>
  <p>Không thể bàn cãi nữa về độ thịnh hành của mẫu quần short thể thao quốc dân này. Những mẫu quần short thể thao chủ yếu được làm từ chất liệu polyester, linen, nỉ,... tạo cảm giác thông thoáng tối đa cho người mặc. Hơn nữa chất liệu cũng không quá dày giúp tăng thêm sự thoải mái khi di chuyển, chơi thể thao hoặc sinh hoạt.</p>
  <p style="text-align: center;"><img alt="Quần short thể thao nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-1.jpg?v=1673334624335"></p>
  <p>Đây cũng là mẫu quần short nam rất dễ để phối, không cần cầu kì như quần jeans, bạn còn có thể mặc mọi lúc mọi nơi. Để phối quần short thể thao thì bạn chỉ cần phối với áo phông cổ tròn hoặc áo phông có cổ đều được. Kết hợp thêm với một đôi giày thể thao để bộ đồ trở nên năng động hơn nhé!</p>
  <p style="text-align: center;"><img alt="Quần short thể thao nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-14.jpg?v=1673334624996"></p>
  <p>Một ưu điểm rất dễ thấy của quần short thể thao nam đó là có tốc độ khô cực kỳ nhanh. Sau một buổi tập thấm đẫm mồ hôi, bạn chỉ cần giặt sạch và phơi một buổi nắng nhẹ thôi là có thể sẵn sàng mặc tiếp được rồi. Quần short thể thao còn thoải mái tới mức bạn mặc đi ngủ cũng được, không hề gây khó chịu hay nóng nực chút nào.</p>
  <h3>2.3 Quần short kaki nam</h3>
  <p>Quần short kaki nam sẽ là mẫu quần cứu cánh nếu bạn vẫn muốn mặc theo phong cách đơn giản, không quá cầu kì. Chỉ cần phối mẫu quần nam này với áo phông ngắn tay cổ tròn hoặc áo polo đều phù hợp. Bạn còn có thể thoải mái phối giày thể thao hoặc giày tây lười khi mặc mẫu quần short kaki.</p>
  <p style="text-align: center;"><img alt="Quần short kaki nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-8.jpg?v=1673334650428"></p>
  <p>Chất vải kaki được dệt từ sợi bông cotton nên bạn cũng đừng lo lắng về việc bị bí nóng hay khó chịu khi vào hè. Kiểu quần này vẫn có độ thông thoáng tốt, phù hợp cho những buổi đi biển, đi dạo hoặc đi&nbsp;cafe cùng bạn bè.</p>
  <p style="text-align: center;"><img alt="Quần short kaki nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-nam-9.jpg?v=1673334651280"></p>
  <p>Nếu bạn muốn phong cách thanh lịch, văn phòng mà vẫn mát mẻ thì có thể mặc áo sơ mi ngắn tay với kiểu quần nam này. Để hoàn thiện set đồ này thì hãy phối cùng kiểu giày tây lười hoặc giày tây bình thường vẫn ổn. Nếu cảm thấy nóng và khó chịu quá thì có thể thay thế bằng giày thể thao dáng basic một chút.</p>
  <h2>3. Mua quần cho nam ở đâu?</h2>
  <p><strong><a href="https://yody.vn"><span style="color:#3498db;">YODY</span></a></strong> đã đề cập đến 7 mẫu <strong><a href="https://yody.vn/quan-nam"><span style="color:#3498db;">quần nam</span></a></strong> không thể thiếu trong tủ đồ của phái mạnh. Băn khoăn duy nhất còn tồn đọng có lẽ là nơi mua được những mẫu quần này mà mẫu mã phải chất lượng. YODY tự tin là thương hiệu thời trang lâu đời với những sản phẩm tự sản xuất, tự thiết kế có chất lượng rất tốt. Những mẫu quần nam tại YODY chắc chắn sẽ giải quyết được những nhu cầu của bạn.</p>
  <p>Để có thể sở hữu 7 mẫu quần trên, bạn hãy&nbsp;ra thử trực tiếp tại&nbsp;<strong><a href="https://yody.vn/he-thong-cua-hang"><span style="color:#3498db;">cửa hàng của YODY</span></a></strong>, các nhân viên tư vấn sẽ giúp bạn chọn mẫu quần ưng ý nhất. Trong trường hợp bạn không thể ra được cửa hàng thì có thể đặt hàng online, YODY sẽ nhận tư vấn online nếu bạn cần. Ngoài ra khi bạn đặt hàng online có thể sẽ nhận được rất nhiều ưu đãi khác như giảm giá, miễn phí vận chuyển,... YODY chắc chắn&nbsp;sẽ rất vui khi nhận được sự tin tưởng, tin dùng sản phẩm của bạn.</p>
  `,
  category: {
    id: 2,
    level: 2,
    name: 'Thiết kế nhà vườn',
    type: 'category', //loại danh mục: category, model, blog, homepage
  },
  categoryList: {
    id: 1,
    name: 'Kiến trúc nhà ở',
    level: 1,
    type: 'category',
    children: [
      {
        id: 2,
        name: 'Thiết kế nhà vườn',
        level: 2,
        type: 'category',
        children: [
          {
            id: 3,
            name: 'Nhà vườn cấp 4',
            level: 3,
            type: 'category'
          },
          {
            id: 4,
            name: 'Nhà ở 2 tầng',
            level: 3,
            type: 'category'
          },
          {
            id: 5,
            name: 'Nhà ở nhiều tầng',
            level: 3,
            type: 'category'
          }
        ]
      },
      {
        id: 6,
        name: 'Thiết kế chung cư',
        level: 2,
        type: 'category'
      },
      {
        id: 7,
        name: 'Thiết kế nhà phố',
        level: 2,
        type: 'category'
      }
    ]
  },
}

const data2 = {
  banner: {
    url: 'https://bizweb.dktcdn.net/100/438/408/files/quan-short-nam-d0f10788-e775-4d1a-9fdb-c71f1285b950.jpg?v=1676618629042'
  },
  post: `
  <h1 class="collectiontitle d-none">Quần short nam</h1>
  <p><em><strong>Hè vừa sang là những mẫu quần short nam lại được dịp lên ngôi. Item có thể diện đi chơi, đi du lịch, tập thể thao,...nên rất được lòng cánh mày râu. Vậy, quần short nam là gì? Mua quần short nam ở đâu? Cùng YODY giải đáp ngay những vấn đề nan giải sau đây nhé!</strong></em></p>
  <p><meta charset="utf-8"></p>
  <h2 dir="ltr">1. Quần short nam là quần&nbsp;gì?</h2>
  <p dir="ltr"><strong><a href="https://yody.vn/quan-short-nam"><span style="color:#3498db;">Quần short nam</span></a></strong> - Trang phục không thể thiếu của phái mạnh trong ngày thường hay những buổi tập cũng như đi chơi. Quần ngắn&nbsp;nam&nbsp;đem lại cho bạn vẻ ngoài năng động, thể thao nhưng cũng không làm mất đi sự thoáng mát, <a href="https://yody.vn/nam"><span style="color:#3498db;"><strong>tính thời trang nam</strong></span></a>.</p>
  <p dir="ltr" style="text-align: center;"><img alt="quần short nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-4.jpg?v=1672806242210"></p>
  <p dir="ltr" style="text-align: center;"><em>Quần short nam là quần&nbsp;gì?</em></p>
  <p dir="ltr">Đặc điểm nhận dạng rất đơn giản với phần cắt ngắn từ gối lên chiếc quần này khi nhìn qua cũng dễ dàng nhận biết với những chiếc quần thông thường khác. Sử dụng đa dạng những chất liệu khác nhau nên chiếc quần này này được nam giới cực kì ưa chuộng.</p>
  <p dir="ltr">Được mệnh danh là chiếc quần được sinh ra để giảm bớt cái nắng mùa hè oi bức giúp phái mạnh tự tin hơn trong việc cử động hàng ngày. Đây chính là món đồ không thể thiếu trong tủ đồ của nam giới.</p>
  <h2 dir="ltr" id="1-quan-short-nam-co-de-phoi-do-khong" role="presentation">2. Các dáng&nbsp;quần short nam phổ biến</h2>
  <p>Dưới đây là một số mẫu quần short nam đẹp,&nbsp;phổ biến nhất hiện nay:</p>
  <ul>
  <li>Quần short jean: là một trong những mẫu được ưa chuộng nhất, có nhiều kiểu dáng và màu sắc khác nhau.</li></ul>
  <p style="text-align: center;"><em><img alt="quần short jean nam" data-thumb="original" original-height="999" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-jean.jpg?v=1677638933123"></em></p>
  <p style="text-align: center;"><em>Mẫu quần short jean nam đẹp</em></p>
  <ul>
  <li>Quần short thể thao: thường được làm bằng chất liệu co giãn, thoáng mát và thấm hút mồ hôi tốt, phù hợp cho hoạt động thể thao.</li></ul>
  <p style="text-align: center;"><em><img alt="quần short nam" data-thumb="original" original-height="999" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-the-thao.jpg?v=1677639017757"></em></p>
  <p style="text-align: center;"><em>Quần short nam thể thao</em></p>
  <ul>
  <li>Quần ngắn&nbsp;nam kaki: được làm từ chất liệu vải kaki bền đẹp và khá đa dạng về kiểu dáng, từ đơn giản đến sang trọng. Quần short nam kaki được rất nhiều người ưa chuộng.</li></ul>
  <p style="text-align: center;"><em><img alt="quần short nam kaki" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-kaki.jpg?v=1677638850193"></em></p>
  <p style="text-align: center;"><em>Mẫu quần short nam kaki đẹp</em></p>
  <ul>
  <li>Quần short chạy bộ: thiết kế đơn giản, nhẹ nhàng và linh hoạt cho người sử dụng dễ dàng vận động.</li>
  <li>Quần short lửng: thường được làm từ chất liệu thoáng mát, phù hợp cho những ngày hè nóng bức.</li>
  <li>Quần short ngắn: đây là mẫu quần có chiều dài ngắn hơn so với các mẫu khác, phù hợp cho những người yêu thích phong cách năng động, cá tính.</li></ul>
  <h2>3. Các mẫu quần short jean&nbsp;nam đẹp nhất hiện nay</h2>
  <p><meta charset="utf-8"></p>
  <h3 dir="ltr">3.1&nbsp;Mẫu quần short jean nam basic</h3>
  <p dir="ltr">Các mẫu quần Short Jean phong cách basic sẽ góp phần tạo nên hình ảnh trẻ trung, tự nhiên cho các chàng. Thiết kế đơn giản, không nhiều chi tiết và kiểu cách giúp chàng thêm tự tin hơn. Đặc biệt, thiết kế mẫu <strong><a href="https://yody.vn/quan-short-nam"><span style="color:#3498db;">quần short&nbsp;nam</span></a></strong> kiểu này dễ mặc và dễ kết hợp với nhiều kiểu áo khác nhau.&nbsp;</p>
  <p dir="ltr" style="text-align: center;"><img alt="Mẫu quần short jean nam" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/mau-quan-short-jean-nam-yody-vn6.jpg?v=1672282267134"></p>
  <p dir="ltr" style="text-align: center;"><em>Mẫu quần Short Jean nam thời trang YODY</em></p>
  <p dir="ltr">Quần ngắn&nbsp;nam dạng lửng, chất liệu Jean mềm cũng tạo cảm giác dễ chịu, thoải mái khi chuyển động. Tuy nhiên, vẫn nên chọn các mẫu quần short jean nam co giãn tốt giúp người thường xuyên vận động không bị cảm giác bí bách hay cộm, bó khi mặc.&nbsp;</p>
  <h3 dir="ltr">3.2&nbsp;Mẫu quần short jean nam rách</h3>
  <p dir="ltr">Phong cách quần short jean nam rách chính là đại diện cho những chàng theo đuổi kiểu mẫu phóng khoáng. Thiết kế kiểu dáng underground, đường phố, trẻ trung và có phần bụi bặm.&nbsp;</p>
  <p dir="ltr" style="text-align: center;"><em><img alt="quần short jean nam rách" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/short-jean.png?v=1657851531947"></em></p>
  <p dir="ltr" style="text-align: center;"><em>Quần short jean nam rách</em></p>
  <p dir="ltr">Kiểu quần rách dáng lửng tương đối khó để kết hợp trang phục. Lựa chọn hoàn hảo nhất cho những kiểu mẫu quần bò rách cho nam như này là: áo thun rộng in hình. Đây là set đồ tiêu chuẩn cho dân hiphop. Tuy nhiên, một số mẫu quần ngắn&nbsp;nam rách thông thường cũng có thể kết hợp với polo hay áo T-shirt tạo nên hình ảnh riêng, rất đặc biệt.</p>
  <h3 dir="ltr">3.3&nbsp;Quần short jean nam ống rộng</h3>
  <p dir="ltr">Quần Short jean nam ống rộng mới gần đây trở thành một xu hướng thời trang nổi bật. Phong cách quần ống rộng được ứng dụng từ thời trang nam, nữ đến trẻ em. Kết hợp trong các mẫu quần short&nbsp;nam chất liệu Jean tạo nên một hình ảnh độc đáo.&nbsp;</p>
  <p dir="ltr" style="text-align: center;"><em><img alt="Quần short jean nam ống rộng" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/mau-quan-short-jean-nam-yody-vn5.jpg?v=1672282266366"></em></p>
  <p dir="ltr" style="text-align: center;"><em>Mẫu quần short jean nam&nbsp;ống đứng</em></p>
  <p dir="ltr">Quần short&nbsp;nam ống rộng thường thiết kế dạng ống đứng, tương đối dễ mặc. Kiểu thiết kế này được rất nhiều anh em ưa chuộng nhờ sự thoải mái và thoáng mát khi mặc.</p>
  <h3 dir="ltr">3.4&nbsp;Quần short jean nam xước</h3>
  <p dir="ltr">Mẫu quần short jean nam xước nhanh chóng trở thành lựa chọn không thể thiếu trong tủ đồ của các anh em. Khác với phong cách phóng khoáng, khác biệt như các mẫu quần rách, quần short&nbsp;nam xước thiết kế tinh tế và kiểu cách hơn.&nbsp;</p>
  <p dir="ltr">Mặc quần Short nam xước đi hẹn hò hay đi gặp bạn bè đều rất lịch sự và thời trang.</p>
  <p dir="ltr" style="text-align: center;"><em><img alt="Quần short jean nam xước" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/mau-quan-short-jean-nam-yody-vn1.jpg?v=1672282262483"></em></p>
  <p dir="ltr" style="text-align: center;"><em>Quần Short jeans nam xước</em></p>
  <h3 dir="ltr">3.5&nbsp;Kiểu&nbsp;quần short jean nam lưng thun</h3>
  <p dir="ltr">Kiểu quần short jeans nam lưng thun thiết kế thời trang, dễ mặc. Đặc biệt là các mẫu quần lưng thun tiện lợi trong hoạt động, không bị chật, tức khi mặc.&nbsp;</p>
  <p dir="ltr">Tuy nhiên, điểm yếu của các mẫu quần jean nam lưng thun là form dáng chưa được chuẩn. Do đó, các mẫu quần lưng thun thường là quần vải sẽ dễ mặc hơn.&nbsp;</p>
  <p dir="ltr" style="text-align: center;"><em><img alt="quần short jean nam lưng thun" data-thumb="original" original-height="750" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-jean-ngan-min.jpg?v=1672284276785"></em></p>
  <p style="text-align: center;"><em>Quần short jean nam lưng thun</em></p>
  <p dir="ltr">Đây là một số lựa chọn quần Short jeans nam mà các chàng có thể tự tin chọn xuống phố. Đi chơi hay đi hẹn hò, đi cafe với bạn bè, quần short&nbsp;nam Jean đều có thể đồng hành. Để lên đồ chuẩn nhất, hãy thêm vài cách phối dưới đây nhé.</p>
  <h3 dir="ltr">3.6&nbsp;Mẫu&nbsp;quần short jean nam co giãn</h3>
  <p dir="ltr">Thêm một mẫu quần short jeans nam đẹp nữa đến từ YODY đó chính là siêu phẩm quần short jean co giãn. Không chỉ với&nbsp;ưu&nbsp;điểm co giãn 4 chiều, chiếc quần ngắn này còn&nbsp;có độ cứng cáp nhất định, giúp tôn dáng người mặc.</p>
  <p dir="ltr" style="text-align: center;"><em><img alt="quần short jean nam co giãn" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/mau-quan-short-jean-nam-yody-vn3.jpg?v=1672282264649"></em></p>
  <p dir="ltr" style="text-align: center;"><em>Quần short jean nam co giãn</em></p>
  <p dir="ltr">Thiết kế xắn gấu quần vô cùng năng động, trẻ trung, toát vẻ nam tính và lịch lãm.</p>
  <h3 dir="ltr">3.7&nbsp;Mẫu quần short&nbsp;bò&nbsp;nam túi hộp</h3>
  <p dir="ltr">Mẫu quần short jean nam túi hộp này có thiết kế trẻ trung với sự kết hợp hài hòa giữa phần&nbsp;túi hộp, xắn chân gấu và điểm thêm xước nhẹ phần đùi. Khi diện mẫu quần ngắn này, bạn hoàn toàn&nbsp;không phải lo bị sờn rách, nhăn sau thời gian sử dụng. Hơn nữa, mẫu quần jeans ngắn này còn có&nbsp;khả năng thấm hút mồ hôi tốt, vải điều hòa, thoải mái vận động.</p>
  <p dir="ltr" style="text-align: center;"><em><img alt="Quần short jean nam túi hộp" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/mau-quan-short-jean-nam-yody-vn4.jpg?v=1672282265607"></em></p>
  <p dir="ltr" style="text-align: center;"><em>Mẫu quần short&nbsp;bò&nbsp;nam túi hộp</em></p>
  <h2 dir="ltr" role="presentation">4. Quần short nam có dễ phối đồ không?</h2>
  <p dir="ltr">Để mà nói thì quần sooc nam là một trong những món đồ khó phối nhất và cũng dễ phối nhất, điều này tùy thuộc vào phong cách của từng người. Nhiều người cho rằng việc mặc quần short&nbsp;không được lịch sự và chỉn chu khi đi ra ngoài.&nbsp;Nhưng ngoài những điều đó ra thì bạn sẽ được gì khi chọn phong cách quần short?</p>
  <p>- Quần short&nbsp;chỉ dài đến gần đầu gối hoặc đến đầu gối tùy vào các kiểu dáng, điều này chính là ưu điểm rõ rệt nhất của quần short, đó chính là mát và thoáng hơn.</p>
  <p>- Quần short&nbsp;tạo sự thoải mái hơn khi hoạt động, phù hợp cho các buổi đi chơi hoặc những cuộc gặp gỡ cafe đơn giản.</p>
  <p dir="ltr">Và tất nhiên khi dự những sự kiện trang trọng hay làm việc tại môi trường văn phòng nghiêm túc thì quần short&nbsp;chắc chắn&nbsp;là một lựa chọn tồi. Vì vậy dễ phối hay không sẽ phụ thuộc vào mục đích mặc của bạn.</p>
  <h2 dir="ltr" id="2-cach-phoi-quan-short-nam">5. Cách phối quần short nam</h2>
  <h3 dir="ltr" id="phoi-quan-short-nam-voi-ao-hoodie">5.1 Phối quần short&nbsp;nam với áo hoodie</h3>
  <p dir="ltr">Trên đông dưới hè là phong cách mặc đồ không còn lạ lẫm gì nữa rồi, trong những thời tiết gió mùa thì một chiếc áo hoodie đi kèm với chiếc quần short&nbsp;nam thoải mái là một lựa chọn không tồi.&nbsp;</p>
  <p dir="ltr" style="text-align: center;"><img alt="quần short nam phối hoodie" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-6.jpg?v=1672806255433"></p>
  <p dir="ltr" style="text-align: center;"><em>Phối quần short nam với áo hoodie</em></p>
  <p dir="ltr">Đối với nam thì không nên chọn những chiếc áo hoodie oversize, vì cơ bản dáng quần short&nbsp;đã ngắn sẵn rồi, việc mặc áo oversize qua mông sẽ làm bạn thấp hơn rất nhiều. Do đó chỉ nên chọn những chiếc áo hoodie đến thắt lưng là ổn.</p>
  <h3 dir="ltr" id="phoi-quan-short-nam-voi-ao-so-mi-ngan-tay">5.2 Phối quần short&nbsp;nam với áo sơ mi ngắn tay</h3>
  <p dir="ltr">Với mục tiêu là đem lại sự thoải mái cộng với một chút nổi bật thì bạn có thể phối quần short&nbsp;nam với các kiểu áo sơ mi ngắn tay đi biển. Các kiểu áo sơ mi đi biển đa số có chất liệu rất nhẹ và thoáng mát, không có lý do gì mà 2 món đồ này lại không thể kết hợp lại được với nhau.</p>
  <p dir="ltr" style="text-align: center;"><img alt="quần short nam phối sơ mi ngắn tay" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-12.jpg?v=1672807317133"></p>
  <p dir="ltr" style="text-align: center;"><em>Phong cách đi biển dù bạn không đi biển cũng ... không sao</em></p>
  <p dir="ltr">Đối với các loại sơ mi còn lại như sơ mi công sở, sơ mi đi làm thì không phù hợp để phối cùng quần short nam. Mục tiêu khi phối đồ cùng những kiểu quần như thế này là đem lại tối đa sự thoải mái chứ không phối để mặc nhìn nghiêm túc và văn phòng.</p>
  <h3 dir="ltr" id="phoi-quan-short-voi-ao-phong">5.3 Phối quần short nam&nbsp;với áo phông</h3>
  <p dir="ltr">Phối quần sooc nam với áo phông có lẽ là combo phổ thông nhất hiện nay vì kiểu phối này đem lại tối đa sự thoải mái khi di chuyển và có thể tùy ý phối&nbsp;được nhiều kiểu áo và quần với nhau.&nbsp;Quần short&nbsp;nam kết hợp <a href="https://yody.vn/ao-thun-ao-phong-nam">áo T-Shirt</a>, thời trang xuống phố hay ở nhà đều có thể “cân” được. Một chiếc T-shirt màu trơn cùng quần sooc nam&nbsp;sẽ là lựa chọn tối ưu cho ngày hè hay những ngày chuyển mùa.&nbsp;</p>
  <p dir="ltr" style="text-align: center;"><img alt="quần short nam phối áo phông" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-9.jpg?v=1672806660988"></p>
  <p dir="ltr" style="text-align: center;"><em>Đa dạng kiểu phối cùng với áo phông kết hợp quần short nam</em></p>
  <p dir="ltr">Ưu điểm khi kết hợp quần short nam với áo phông đó là bạn không cần phải cân nhắc nhiều, đa số các kiểu dáng áo đều phù hợp. Thứ duy nhất mà bạn cần quan tâm đó chính là màu sắc của quần và áo thôi.&nbsp;Thiết kế đơn giản, dễ mặc. Tuy nhiên, nên chọn những mẫu áo T-shirt nam có chất liệu tốt, quần short&nbsp;nam co giãn tốt, để không gặp cảm giác bí bách khó chịu khi mặc.&nbsp;</p>
  <h3 dir="ltr" id="phoi-quan-short-voi-ao-ni">5.4 Phối quần short nam với áo nỉ</h3>
  <p dir="ltr">Áo nỉ hay còn gọi là sweatshirt&nbsp;cũng khá tương đồng với hoodie, chỉ khác biệt là sweatshirt&nbsp;không có mũ. Tương tự như vậy bạn cũng không muốn phối những chiếc áo nỉ quá oversize đối với chiếc quần.</p>
  <p dir="ltr" style="text-align: center;"><img alt="quần short nam phối áo nỉ" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-11.jpg?v=1672808591379"></p>
  <p dir="ltr" style="text-align: center;"><em>Ấm áp hơn vào ngày đông với áo nỉ mix quần short nam</em></p>
  <h3 dir="ltr">5.5 Phối quần sooc nam với áo tank top</h3>
  <p dir="ltr">Chọn&nbsp;outfit quần short nam phù hợp với những người năng động hoặc mặc đi tập, tank top là một chiếc áo không thể chê được. Tất nhiên cũng lưu ý, để mặc được những chiếc áo tanktop thì bạn nên sở hữu một thân hình cân đối trước. Như vậy khi phối đồ trông sẽ đẹp hơn so với những thân hình con cò, để lộ ra nhiều khuyết điểm khi mặc bộ đồ này.</p>
  <p dir="ltr" style="text-align: center;"><img alt="quần short nam phối tank top" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-1.jpg?v=1672806290615"></p>
  <p dir="ltr" style="text-align: center;"><em>Tràn đầy năng lượng cho buổi tập với tank top và quần short nam</em></p>
  <p dir="ltr">Phối với tank top thì bạn nên chọn những chiếc quần short có chất liệu thoải mái để đi tập không bị khó chịu, tránh các chất liệu&nbsp;như jean hoặc kaki.</p>
  <h3 dir="ltr">5.6&nbsp;Phối quần short nam với áo polo</h3>
  <p dir="ltr">Phối áo polo cùng quần sooc nam cũng là một phong cách mới nổi gần đây. Những chiếc polo thanh lịch, gọn gàng vẫn rất phù hợp để phối cùng những chiếc quần năng động như quần short. Bạn hoàn toàn có thể phối đa dạng kiểu&nbsp;quần short nam chất liệu kaki, jeans, polyester,... với áo polo mà vẫn phù hợp.</p>
  <h3 dir="ltr" style="text-align: center;"><img alt="quần short nam phối polo" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-8.jpg?v=1672806300424"></h3>
  <p dir="ltr" style="text-align: center;"><em>Thanh lịch tôn dáng cùng polo khi mặc cvới&nbsp;quần short nam</em></p>
  <p dir="ltr">Đây cũng là một set đồ rất tôn dáng cho những bạn nam có thân hình cân đối. Vào mùa hè thì phối quần short nam với polo sẽ hợp nhất vào những buổi đi chơi, cafe cùng bạn bè.</p>
  <h3 dir="ltr">5.7 Phối quần short nam với áo thun thể thao</h3>
  <p dir="ltr">Trong phòng tập gym hay đi chạy bộ thì đây là outfit không thể chê vào đâu được. Kết hợp kiểu áo thun thể thao cùng với quần short Polyester sẽ giúp buổi tập của bạn đạt hiệu quả tối đa. Chất liệu mát mẻ của cả 2 sản phẩm dễ dàng giải nhiệt cho bạn ngay cả khi thực hiện những bài tập nặng nhất.</p>
  <h3 dir="ltr" style="text-align: center;"><img alt="quần short nam phối áo thun thể thao" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-7.jpg?v=1672806311643"></h3>
  <p dir="ltr" style="text-align: center;"><em>Set đồ quốc dân trong phòng tập gồm áo phông thể thao và quần sooc nam</em></p>
  <p dir="ltr">Ưu điểm cực lớn của set đồ này ngoài khả năng giải nhiệt thì còn khô rất nhanh, chỉ cần giặt và&nbsp;phơi trong 1 buổi là bạn có thể mặc tiếp được rồi.</p>
  <h2 dir="ltr" id="3-nhung-luu-y-khi-phoi-quan-short-nam" role="presentation">6. Những lưu ý khi phối quần sooc nam</h2>
  <p>- Key quan trọng nhất khi phối quần short nam đó chính là đôi giày. Dù trong bất kì bộ đồ nào khác cũng vậy, một đôi giày tử tế sẽ khác biệt hẳn so với những đôi dép tổ ong. Đối với quần short nên ưu tiên chọn những kiểu giày dáng thể thao hoặc giày thấp cổ.</p>
  <p>- Kết hợp quần short sẽ làm cho cơ thể khá trống trải, có thể&nbsp;đi kèm&nbsp;những đôi tất cổ cao thời trang vào với đôi giày của bạn.</p>
  <p>- Nếu bạn muốn kết hợp quần short với các kiểu sơ mi&nbsp;ngắn tay văn phòng thì có thể chọn chất liệu vải kate hoặc kaki rồi đi kèm&nbsp;với những đôi giày âu đơn giản hoặc giày âu lười.</p>
  <h2 dir="ltr">7. Mua quần short nam uy tín ở đâu?</h2>
  <p dir="ltr">Mua quần short nam ở đâu? Một trong những câu hỏi được đấng mày râu quan tâm. Ắt hẳn, các chàng trai sẽ quan tâm đến chất lượng phần chất lượng của những chiếc quần short nam. Để chọn được chiếc quần ưng ý cho mình, việc lựa chọn thương hiệu là yếu tố cần và đủ để giúp chàng “chọn mặt gửi vàng”.</p>
  <p dir="ltr" style="text-align: center;"><img alt="Mua quần short nam uy tín ở đâu" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-3.jpg?v=1672806340859"></p>
  <p dir="ltr" style="text-align: center;"><em>Mua quần short nam ở đâu?</em></p>
  <p dir="ltr">YODY - Thương hiệu thời trang hàng đầu Việt Nam với phần chất liệu, trải nghiệm của người dùng được đặt lên hàng đầu. YODY ngày càng được tin tưởng, yêu thích và khẳng định được vị thế của mình. Điều này được thể hiện trong những phần chất lượng sản phẩm được thương hiệu này gửi gắm đến tận tay khách hàng.</p>
  <p dir="ltr">Sở hữu hàng loạt ưu điểm nổi trội với phần thiết kế khỏe khoắn, nam tính. Đây chính là điểm cộng đầu tiên khiến chúng chiếm trọn được lòng tin của khách hàng. Không dừng lại ở đó việc sử dụng các chất liệu cao cấp đem lại mềm mại, nhẹ, và đặc biệt là vô cùng thoáng khí trong mùa hè. Hơn thế nữa những chiếc quần short nam YODY có phần thiết kế túi nên chàng cũng đừng lo việc ví tiền, chìa khóa nên cất đâu nhé!</p>
  <p dir="ltr">Vậy nếu còn đang phân vân về việc mua quần short nam chất lượng ở đâu thì đừng ngần ngại đến ngay cơ sở YODY gần nhất để được trải nghiệm những sản phẩm chất lượng hàng đầu.</p>
  <h2 dir="ltr">8. Thương hiệu quần sooc nam thời trang YODY được khách hàng tin tưởng</h2>
  <p dir="ltr">Với YODY, để làm ra một sản phẩm không chỉ đơn giản là thiết kế, may và bán, mà còn xuất phát từ câu chuyện về chất liệu. Mang trong mình sứ mệnh đưa những sản phẩm tốt, dịch vụ đến tận tay khách hàng từng vùng miền, YODY không ngừng sáng tạo và tìm tòi ra dòng sản phẩm làm mát cơ thể, mềm mại, thông thoáng để những khách hàng thân yêu của mình không phải trải qua những cảm giác bí bách, khó chịu.</p>
  <p dir="ltr" style="text-align: center;"><img alt="quần short nam yody" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-10.jpg?v=1672806782269"></p>
  <p dir="ltr" style="text-align: center;"><em>Thời trang YODY với nhiều ưu điểm nổi trội</em></p>
  <p dir="ltr">Mỗi sản phẩm được bán ra, mỗi bộ sưu tập được cho ra mắt đều là tâm huyết, tấm lòng của sự đam mê phục vụ khách hàng độ ngũ YODY.</p>
  <p dir="ltr">Những sản phẩm mà thương hiệu này đem lại đều dễ dàng chạm đến tay các thượng đế một cách dễ dàng. Không “ngủ quên trên chiến thắng” thương hiệu này luôn luôn nỗ lực cải tiến để cho ra đời những sản phẩm chất lượng nhất đến tay khách hàng.</p>
  <h2 dir="ltr">9. Khách hàng nói gì về những sản phẩm quần sooc nam YODY</h2>
  <p dir="ltr">Mỗi sản phẩm mà YODY bán ra đều được khách hàng tin tưởng và sử dụng trong thời gian dài. Với dòng sản phẩm quần short nam cũng vậy, tuy không khiến người sử dụng quá trầm trồ về sản phẩm khi nhìn nhưng dễ dàng để khách hàng “trầm trồ” mỗi khi chạm vào sản phẩm. Mỗi khách hàng khi mua quần short nam ở đây không chỉ chấm 10/10 về thái độ phục vụ còn không quên tặng thêm những lời có cánh dành cho phần chất liệu sản phẩm.</p>
  <p dir="ltr" style="text-align: center;"><img alt="quần short nam yody" data-thumb="original" original-height="1000" original-width="750" src="//bizweb.dktcdn.net/100/438/408/files/quan-short-nam-2.jpg?v=1672806350328"></p>
  <p dir="ltr" style="text-align: center;"><em>Chất liệu sản phẩm được đánh giá cao</em></p>
  <p dir="ltr">Hiện nay những chiếc <strong><a href="https://yody.vn/quan-short"><span style="color:#3498db;">quần short</span></a></strong> nam thương hiệu YODY không những đem lại sự thoải mái, năng động khi sử dụng còn phù hợp với tất cả dáng người. Thiết kế trẻ trung, năng động nên rất thích hợp cho các hoạt động khi đi cafe, hẹn hò thậm chí là mặc ở nhà. Quần short nam YODY luôn được khách hàng tin tưởng và sử dụng. Đây chính là dòng sản phẩm không thể thiếu trong tủ độ và là outfit phù hợp với những anh chàng yêu thích sự đơn giản, năng động.</p>
  <p dir="ltr">Hy vọng với bài viết mà <strong><a href="https://yody.vn/"><span style="color:#3498db;">YODY</span></a></strong> vừa chia sẻ, các chàng đã có thể trả lời được ngay câu hỏi “mua quần short nam ở đâu” rồi đúng không nào? Nếu bạn đang băn khoăn về việc chọn quần short hợp với gu thời trang cũng như các công việc thường ngày của bạn thì bạn có thể đến&nbsp;<strong><a href="https://yody.vn/he-thong-cua-hang">cửa hàng YODY</a></strong>&nbsp;gần nhất để nhận tư vấn và mặc thử.</p>
  <p dir="ltr">Tốt nhất trước khi đến và thử những chiếc&nbsp;<strong><a href="https://yody.vn/quan-short-nam">quần short</a></strong>&nbsp;tại cửa hàng thì bạn sẽ muốn đi&nbsp;một đôi giày ưu thích của mình để dễ chọn đồ nhất.</p>
  <a href="javascript:;" class="view-more"><span>Thu gọn <img src="//bizweb.dktcdn.net/100/438/408/themes/931909/assets/more_filter.svg?1702693459815" alt="more"></span></a>`,
  category: {
    id: 26,
    name: 'Tủ Lavabo',
    level: 2,
    type: 'category',
  },
  categoryList: {
    id: 25,
    name: 'WC',
    type: 'category',
    level: 1,
    children: [
      {
        id: 26,
        name: 'Tủ Lavabo',
        level: 2,
        type: 'category',
      },
      {
        id: 27,
        name: 'Tủ gương',
        level: 2,
        type: 'category'
      }
    ],
    // images: [{
    //   url: 'https://gooccho.vn/wp-content/uploads/2013/11/thiet-ke-noi-that-phong-bep-dep-2020-2.jpg',
    //   width: 275,
    //   height: 183
    // }, {
    //   url: 'https://noithatlacgia.vn/wp-content/uploads/2022/03/slide-noithatlacgia-6.jpg',
    //   width: 275,
    //   height: 183
    // }]

  }
}