"use client"
import Image from "next/image";
import Header from './Header'
import Services from './Services'
import Doctors from './Doctors'
import Footer from './Footer'
export default function Home() {
  return (
    <div className="">
      <div style={{
        backgroundImage: "url('/medicine.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        <div className="w-[1200px] mx-auto pt-[30px]" >
          <nav className="flex justify-between">
            <Image
              src="/logo.png"
              alt="logo"
              height={100}
              width={70}
              priority
            />
            <ul className="flex mt-[20px] gap-[30px]">
              <li>About us</li>
              <li>Services</li>
              <li>Doctors</li>
              <li>Booking appointment</li>
              <li>
                <select>
                  <option value="">uz</option>
                  <option value="">ru</option>
                </select>
              </li>
            </ul>
          </nav>
          <Header />
        </div>

      </div>
      <Services />
      <Doctors />
      <Footer />
    </div>
  );
}

