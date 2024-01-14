import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../components/Header.jsx'
import FindDoctorSection from '../../components/FindDoctorSection.jsx'
import AppDetail from '../../components/AppDetail.jsx'
import Testimonials from '../../components/Testimonials.jsx'
import ArticleSection from '../../components/ArticleSection.jsx'
import Footer from '../../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Header/>
      <FindDoctorSection/>
      <AppDetail/>
      <Testimonials/>
      <ArticleSection/>
      <Footer/>
    </>
  )
}
