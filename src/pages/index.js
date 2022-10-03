import Image from 'next/image'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Navbar2 from '../components/navbar2'
import Footer from '../components/footer'
import Layouts from '../components/layouts'

export default function Home() {
  return (
    <>
      <Layouts title='HireJob'>
        <Navbar />
        <div className="p-8 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="p-4 my-24 rounded-md items-center justify-center">
              <b className='text-6xl'>Talenta terbaik negeri untuk perubahan revolusi 4.0</b>
              <p className={styles.subText1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              <button className={styles.mulaiDariSekarang1}>Mulai Dari Sekarang</button>
            </div>
            <div className="p-4 rounded-md flex items-center justify-center">
              <Image src='/images/Group1195.svg' width={617.17} height={617.17} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="p-4 rounded-md flex items-center justify-center">
              <Image src='/images/Group1194.svg' width={617.17} height={617.17} />
            </div>
            <div className="p-4 my-24 rounded-md items-center justify-center">
              <b className='text-5xl'>Kenapa harus mencari talent di Peworld?</b>
              <ul style={{
                listStyleType: 'none'
              }} className={styles.subText1}>
                <li className='flex my-8'><BsFillCheckCircleFill color='#5E50A1' className='mx-1' />Lorem ipsum dolor sit amet.</li>
                <li className='flex my-8'><BsFillCheckCircleFill color='#5E50A1' className='mx-1' />Lorem ipsum dolor sit amet.</li>
                <li className='flex my-8'><BsFillCheckCircleFill color='#5E50A1' className='mx-1' />Lorem ipsum dolor sit amet.</li>
                <li className='flex my-8'><BsFillCheckCircleFill color='#5E50A1' className='mx-1' />Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
            <div className="p-4 my-24 rounded-md items-center justify-center">
              <b className='text-5xl'>Skill Talent</b>
              <p className={styles.subText1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
              <div className='flex'>
                <ul style={{
                  listStyleType: 'none'
                }} className={styles.subText2}>
                  <li className='flex my-8'><BsFillCheckCircleFill color='#FBB017' className='mx-1' />Java</li>
                  <li className='flex my-8'><BsFillCheckCircleFill color='#FBB017' className='mx-1' />Kotlin</li>
                  <li className='flex my-8'><BsFillCheckCircleFill color='#FBB017' className='mx-1' />PHP</li>
                  <li className='flex my-8'><BsFillCheckCircleFill color='#FBB017' className='mx-1' />JavaScript</li>
                </ul>
                <ul style={{
                  listStyleType: 'none'
                }} className={styles.subText2}>
                  <li className='flex my-8'><BsFillCheckCircleFill color='#FBB017' className='mx-1' />Golang</li>
                  <li className='flex my-8'><BsFillCheckCircleFill color='#FBB017' className='mx-1' />C++</li>
                  <li className='flex my-8'><BsFillCheckCircleFill color='#FBB017' className='mx-1' />Ruby</li>
                  <li className='flex my-8'><BsFillCheckCircleFill color='#FBB017' className='mx-1' />10+ Bahasa lainnya</li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 rounded-md">
              <Image src='/images/Group1196.svg' width={617.17} height={617.17} />
            </div>
          </div>
        </div>
        <div className='my-8 bg-gray-200'>
            <div className='text-center pt-14'>
              <h1 className='text-5xl'><b>Their opinion about Peworld</b></h1>
            </div>
            <Swiper slidesPerView={3}
            spaceBetween={180}
            pagination={{
              clickable: true,
            }} className='text-center my-16'>
              <SwiperSlide>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <Image className="rounded-full" src="/images/Harry-Edward-Styles-PNG-File-Download-Free.png" width={240} height={240} alt="" />
                    <div className="p-5">
                        <a href="#">
                            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Harry Styles</h2>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">Web Developer</p>
                        <p className="mb-3 mx-2 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <Image className="rounded-full" src="/images/3c0a8ce70bfeb7549c864b33df68a6f8.jpg" width={240} height={240} alt="" />
                    <div className="p-5">
                        <a href="#">
                            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Niall Horan</h2>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">Web Developer</p>
                        <p className="mb-3 mx-2 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image className="rounded-full" src="/images/fcfe23fc063cb75adc8bbb296a90f88a.webp" width={240} height={240} alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Louis Tomlinson</h2>
                        </a>
                        <p className="mb-3 font-normal text-gray-400">Web Developer</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur.</p>
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
        <div className="p-10 bg-white">
          <div className='text-start justify-items-center'>
            <div className="bg-purple-700 rounded-br-3xl rounded-tl-3xl" width={1140} height={227}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
                <div class="p-4 my-24 rounded-md items-center justify-center">
                  <b className='text-5xl text-white'>Lorem ipsum dolor sit amet</b>
                </div>
                <div className="p-4 rounded-md flex items-center justify-center text-end">
                  <button className={styles.mulaiDariSekarang2}>Mulai Dari Sekarang</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layouts>
    </>
  )
}
