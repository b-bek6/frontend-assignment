'use client'
import Image from "next/image"
import Chair from "../assets/homechair.png"
import Bulb from "../assets/bulb.png"

export default function Home(){
    return(
    <>
        <div className="bg-[#f3ecec] p-7 flex flex-col md:flex-row ">
                <div className="">
                    <Image src={Bulb} />
                </div>
                <div className="align-middle justify-center flex flex-col gap-3 p-3">
                    <p className="text-secondary">Best Furniture For Your Castle...</p>
                    <h1 className="text-3xl font-extrabold">New Furniture Collection Trends in 2020</h1>
                    <p className="text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur fficia. Est distinctio eum velit tenetur optio tempora beatae non, corrupti cum?</p>
                    <button className="bg-secondary text-white p-2 w-[100px]">Shop Now</button>

                </div>
                <div className="hidden md:flex">
                    <Image src={Chair} />
                </div>
            </div>
            
        </>
    )
}