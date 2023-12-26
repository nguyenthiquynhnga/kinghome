import Image from 'next/image'
import styles from './page.module.css'
import SlideHome from '@/components/slideshow/slideHome'
import 'bootstrap/dist/css/bootstrap.css';
import BannerHome from '@/components/banner/bannerhome';
import SectionList from '@/components/sectionlist/sectionlist';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import numeral from 'numeral';
import Preview from '@/components/preview/preview';
export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.content_container}>
        <SlideHome />
        <BannerHome />
        <SectionList />
        <Preview />
      </div>
    </main>
  )
}
