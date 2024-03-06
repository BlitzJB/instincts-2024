'use client'

import { useState } from "react"
import Head from "next/head"
import Image from "next/image"


const scheduleDetails = [
    '/schedule/1.png',
    '/schedule/2.png',
    '/schedule/3.png',
]


export default function ScheduleMain() {
    const [selectedDay, setSelectedDay] = useState(0)
    return <>
        <Head>
            {
                scheduleDetails.map((day, index) => {
                    return <link key={index} rel="preload" href={day} as="image" />
                })
            }
        </Head>
        <div className="px-4 md:px-6 py-12 flex flex-col">
            <div className="flex justify-center mb-4">
                <div onClick={e => setSelectedDay(0)} className={`border-4 border-blue-700 px-5 py-4 rounded-full hover:bg-blue-700 hover:text-neutral-200 transition-all cursor-pointer font-bold w-fit ${selectedDay == 0 ? "bg-blue-700 text-neutral-200" : ""} text-lg sm:text-2xl mr-2 sm:mr-7`}>Day 1</div>
                <div onClick={e => setSelectedDay(1)} className={`border-4 border-blue-700 px-5 py-4 rounded-full hover:bg-blue-700 hover:text-neutral-200 transition-all cursor-pointer font-bold w-fit ${selectedDay == 1 ? "bg-blue-700 text-neutral-200" : ""} text-lg sm:text-2xl mr-2 sm:mr-7`}>Day 2</div>
                <div onClick={e => setSelectedDay(2)} className={`border-4 border-blue-700 px-5 py-4 rounded-full hover:bg-blue-700 hover:text-neutral-200 transition-all cursor-pointer font-bold w-fit ${selectedDay == 2 ? "bg-blue-700 text-neutral-200" : ""} text-lg sm:text-2xl`}>Day 3</div>
            </div>
            <Image height={1080} width={1080} className="w-full max-w-7xl mx-auto rounded-lg" src={scheduleDetails[selectedDay]} alt="schedule" />
        </div>
    </>
}