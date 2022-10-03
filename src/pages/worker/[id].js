import React, { useState } from 'react'
import Image from 'next/image'
import { BiMap } from 'react-icons/bi'
import { FiMail, FiInstagram, FiGithub, FiGitlab } from 'react-icons/fi'
import Footer from '../../components/footer'
import Layouts from '../../components/layouts'
import Navbar3 from '../../components/navbar3'
import styles from '../../styles/Detail.module.css'

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex text-center">
              <a
                className={
                  "text-xl font-bold px-5 py-3 mx-3 border-b-4 border-purple-600 rounded block leading-normal " +
                  (openTab === 1
                    ? "text-black bg-white"
                    : "bg-purple-600 text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Portfolio
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex text-center">
              <a
                className={
                  "text-xl font-bold px-5 py-3 mx-3 border-b-4 border-purple-600 rounded block leading-normal " +
                  (openTab === 2
                    ? "text-black bg-white"
                    : "bg-purple-600 text-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Pengalaman Kerja
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5 mx-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div class="grid grid-cols-3 gap-3 lg:gap-8">
                    <div class="p-4 rounded-md items-center justify-center">
                      <Image src='/images/Rectangle637.jpg' width={219} height={148} />
                      <h1 className='text-center'>Remainder app</h1>
                    </div>
                    <div class="p-4 rounded-md items-center justify-center">
                      <Image src='/images/Rectangle638.jpg' width={219} height={148} />
                      <h1 className='text-center'>Social media app</h1>
                    </div>
                    <div class="p-4 rounded-md items-center justify-center">
                      <Image src='/images/Rectangle639.jpg' width={219} height={148} />
                      <h1 className='text-center'>Project management web</h1>
                    </div>
                    <div class="p-4 rounded-md items-center justify-center">
                      <Image src='/images/Rectangle640.jpg' width={219} height={148} />
                      <h1 className='text-center'>Remainder app</h1>
                    </div>
                    <div class="p-4 rounded-md items-center justify-center">
                      <Image src='/images/Rectangle641.jpg' width={219} height={148} />
                      <h1 className='text-center'>Social media app</h1>
                    </div>
                    <div class="p-4 rounded-md items-center justify-center">
                      <Image src='/images/Rectangle642.jpg' width={219} height={148} />
                      <h1 className='text-center'>Social media app</h1></div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex items-center">
                    <Image src='/images/Rectangle673.jpg' width={150} height={150} />
                    <div className='m-4'>
                      <p className='text-xl'><b>Engineer</b></p>
                      <p className='text-xl'>Tokopedia</p>
                      <p className='text-xl text-gray-500 mb-3'>July 2019 - January 2020 6 Months</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image src='/images/Rectangle673.jpg' width={150} height={150} />
                    <div className='m-4'>
                      <p className='text-xl'><b>Web Developer</b></p>
                      <p className='text-xl'>Tokopedia</p>
                      <p className='text-xl text-gray-500 mb-3'>July 2019 - January 2020 6 Months</p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function detail() {
  return (
    <>
      <Layouts title='HireJob | Worker Detail'>
        <Navbar3 />
        <div className='bg-split-purple-gray h-full'>
          <div className='mx-40 py-5'>
            <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-2">
              <div className={styles.box1}>
                <div className='text-center py-3'>
                  <Image className="rounded-full" src="/images/fcfe23fc063cb75adc8bbb296a90f88a.webp" width={210} height={210} alt="" />
                </div>
                <div className="p-5">
                  <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Louis Tomlinson</h2>
                  <p className="mb-3 font-normal text-black">Web Developer</p>
                  <div className='flex'>
                    <BiMap size={30} color='#9EA0A5' className='mr-2'/>
                    <p className="mb-3 font-normal text-gray-400">Purwokerto, Jawa Tengah</p>
                  </div>
                  <p className="mb-3 font-normal text-gray-400">Freelancer</p>
                  <p className="mb-3 font-normal text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                  {/*<button className="btn my-5 w-11/12 bg-purple-800">Hire</button>*/}
                  <button className="btn my-5 w-11/12 bg-purple-800">Edit Profile</button>
                  <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Skill</h2>
                  <div className="flex my-1">
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>Python</h4>
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>Laravel</h4>
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>Golang</h4>
                  </div>
                  <div className="flex my-1">
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>Javascript</h4>
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>PHP</h4>
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>HTML</h4>
                  </div>
                  <div className="flex my-1">
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>C++</h4>
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>Kotlin</h4>
                    <h4 className='bg-yellow-400 text-white rounded p-3 mr-2'>Swift</h4>
                  </div>
                  <div className='flex mb-3 mt-10'>
                    <FiMail size={30} color='#9EA0A5' className='mr-5' />
                    <p className="font-normal text-gray-400">Louistommo@gmail.com</p>
                  </div>
                  <div className='flex my-3'>
                    <FiInstagram size={30} color='#9EA0A5' className='mr-5' />
                    <p className="font-normal text-gray-400">@Louist91</p>
                  </div>
                  <div className='flex my-3'>
                    <FiGithub size={30} color='#9EA0A5' className='mr-5' />
                    <p className="font-normal text-gray-400">@Louistommo</p>
                  </div>
                  <div className='flex my-3'>
                    <FiGitlab size={30} color='#9EA0A5' className='mr-5' />
                    <p className="font-normal text-gray-400">@Louistommo91</p>
                  </div>
                </div>
              </div>
              <div className={styles.box2}>
                <Tabs />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layouts>
    </>
  )
}
