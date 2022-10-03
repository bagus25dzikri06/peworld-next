import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Image from 'next/image'
import { BiMap } from 'react-icons/bi'
import { MdEdit } from 'react-icons/md'
import Footer from '../../../components/footer'
import Layouts from '../../../components/layouts'
import Navbar3 from '../../../components/navbar3'
import styles from '../../../styles/EditWorkerDetail.module.css'

const DataDiri = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div
            className="mb-4 list-none text-start flex-wrap pt-3 pb-4 flex-row bg-white rounded"
          >
            <div className="mx-4">
              <h1 className='text-3xl'><b>Data Diri</b></h1>
            </div>
            <hr className='my-2' />  
            <form className="mx-4">
              <div className="mb-6">
                <label for="fullname" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Nama lengkap</label>
                <input type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nama lengkap" required="" />
              </div>
              <div className="mb-6">
                <label for="job_desk" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Job desk</label>
                <input type="text" id="job_desk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan job desk" required="" />
              </div>
              <div className="mb-6">
                <label for="domicile" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Domisili</label>
                <input type="text" id="domicile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan domisili" required="" />
              </div>
              <div className="mb-6">
                <label for="workplace" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Tempat kerja</label>
                <input type="text" id="workplace" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan tempat kerja" required="" />
              </div>
              <div className="mb-6">
                <label for="short_desc" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Deskripsi singkat</label>
                <textarea rows="6" id="short_desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan deskripsi singkat" required="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const Skill = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div
            className="mb-4 list-none text-start flex-wrap pt-3 pb-4 flex-row bg-white rounded"
          >
            <div className="mx-4">
              <h1 className='text-3xl'><b>Skill</b></h1>
            </div>
            <hr className='my-2' />
            <form className='my-4'>
              <label for="chat" class="sr-only">Your message</label>
              <div class="flex items-center py-2 px-3 rounded-lg">
                <textarea id="chat" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your skills"></textarea>
                <button type="submit" className="btn bg-yellow-300 border-yellow-300 hover:bg-white hover:last:text-yellow-300">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const WorkExperience = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div
            className="mb-4 list-none text-start flex-wrap pt-3 pb-4 flex-row bg-white rounded"
          >
            <div className="mx-4">
              <h1 className='text-3xl'><b>Pengalaman Kerja</b></h1>
            </div>
            <hr className='my-2' />
            <form className="mx-4">
              <div className="mb-6">
                <label for="job_position" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Posisi</label>
                <input type="text" id="job_position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan posisi" required="" />
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="mb-6">
                  <label for="company_name" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Nama perusahaan</label>
                  <input type="text" id="company_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan nama perusahaan" required="" />
                </div>
                <div className="mb-6">
                  <label for="month_year" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Bulan/Tahun</label>
                  <div className='grid md:grid-cols-2 md:gap-6'>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      className="border-2 rounded my-2"
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      className="border-2 rounded my-2"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label for="short_desc" className="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-300">Deskripsi singkat</label>
                <textarea rows="6" id="short_desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan deskripsi singkat" required="" />
              </div>
              <hr className='mb-6' />
              <div className="mb-6 text-center">
                <button className="btn my-5 w-11/12 text-center bg-purple-800">Simpan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const Portfolio = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div
            className="mb-4 list-none text-start flex-wrap pt-3 pb-4 flex-row bg-white rounded"
          >
            <div className="mx-4">
              <h1 className='text-3xl'><b>Portfolio</b></h1>
            </div>
            <hr className='my-2' />
          </div>
        </div>
      </div>
    </>
  );
}

export default function editWorker() {
  return (
    <>
      <Layouts title='HireJob | Worker Detail'>
        <Navbar3 />
        <div className='bg-split-purple-gray h-full'>
          <div className='mx-40 py-5'>
            <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-2">
              <div className={styles.box1}>
                <div className='bg-white rounded'>
                  <div className='text-center py-3'>
                    <Image className="rounded-full" src="/images/fcfe23fc063cb75adc8bbb296a90f88a.webp" width={210} height={210} alt="" />
                    <div className='flex items-center justify-center'>
                      <MdEdit /><h1 className="text-gray-500 text-2xl">Edit</h1>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Louis Tomlinson</h2>
                    <p className="mb-3 font-normal text-black">Web Developer</p>
                    <div className='flex'>
                      <BiMap size={30} color='#9EA0A5' className='mr-2'/>
                      <p className="mb-3 font-normal text-gray-400">Purwokerto, Jawa Tengah</p>
                    </div>
                    <p className="mb-3 font-normal text-gray-400">Freelancer</p>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn my-5 w-11/12 bg-purple-800">Simpan</button>
                  <button className="btn my-5 w-11/12 bg-transparent border-purple-800 text-purple-600 hover:bg-purple-800 hover:last:text-white">Batal</button>
                </div>
              </div>
              <div className={styles.box2}>
                <DataDiri />
                <Skill />
                <WorkExperience />
                <Portfolio />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layouts>
    </>
  )
}
