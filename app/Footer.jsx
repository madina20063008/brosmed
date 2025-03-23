import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTelegram, FaClock } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-300 text-black py-10">
            <div className="w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-xl font-bold">BROSMED Medical Clinic</h2>
                    <p className="mt-4 text-[18px]">
                        Nasaf ko'chasi, 31 uyi, Qarshi <br />
                        Mo'ljal: "3 Palma" restorani yaqinida
                    </p>
                    <p className="mt-4 text-[18px] flex items-center gap-2">
                        <FaPhoneAlt /> +998752234747
                    </p>
                    <p className="mt-4 text-[18px] flex items-center gap-2">
                        <FaClock /> Dushanba - Shanba: 08:00 - 17:00
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Foydali Havolalar</h2>
                    <ul className="mt-4 text-[18px] space-y-2 text-sm">
                        <li><Link href="/" className="hover:underline">Bosh sahifa</Link></li>
                        <li><Link href="/services" className="hover:underline">Xizmatlar</Link></li>
                        <li><Link href="/doctors" className="hover:underline">Shifokorlar</Link></li>
                        <li><Link href="/contact" className="hover:underline">Kontaktlar</Link></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-bold">Biz bilan bog'laning</h2>
                    <div className="flex gap-4 mt-4 text-2xl">
                        <Link href="https://facebook.com" ><FaFacebook /></Link>
                        <Link href="https://www.instagram.com/brosmed_qarshi/"><FaInstagram /></Link>
                        <Link href="https://t.me/BROSMED" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="text-blue-500 text-2xl" />
                        </Link>

                    </div>
                </div>
            </div>

            <div className="text-center text-[18px] mt-10 border-t border-gray-600 pt-4">
                &copy; {new Date().getFullYear()} BROSMED. Barcha huquqlar himoyalangan.
            </div>
        </footer>
    );
}
