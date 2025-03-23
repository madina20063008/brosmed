
// export default function Header() {
//   return (
//     <div className="grid justify-end mt-[39px]">
//       <h1 className="text-6xl font-bold flex justify-center text-blue-900 font-[Cinzel]">Bros <p className="text-green-600">med</p></h1>
//       <span className="grid justify-center mt-[20px]">MEDICAL CLINIC</span>
//       <p className="text-lg text-muted-foreground text-center w-[450px] mt-4">“BROSMED” - Qarshi shahrida joylashgan keng qamrovli klinika, 2020-yil yanvar oyida o‘z faoliyatini boshlagan umumiy klinika. Shu vaqt ichida klinika 2000 dan ortiq bemorga yordam ko‘rsatgan, ulardan 600 nafari statsionar rejimda davolangan. 300 dan ortiq umumiy, onkologik, endoskopik (HD videokamera bilan) va CO2 lazerli jarrohlik operatsiyalari amalga oshirildi.</p>
//       <p className="text-lg text-muted-foreground ml-[60px] mb-[30px] text-center w-[350px] mt-4 grid justify-center">
//       ⭐⭐⭐⭐★
//         Klinika toifasi: Xususiy
//         Joylashuvi: Nasaf ko'chasi, 31 uyi, Qarshi
//         Klinika mo'ljal: "3 Palma" restorani yaqinida
//         Klinika ish vaqti: Dushanba-shanba 08:00-17:00
//       </p>
//     </div>
//   );
// }
"use client"
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    setStartTyping(true); // Start typing animation when the component loads
  }, []);

  return (
    <div className="grid justify-end mt-[30px]">
        <h1 className="text-6xl font-bold flex justify-center font-[Cinzel]">
        {startTyping && (
          <>
            <span className="text-blue-900">
              <Typewriter words={["Bros"]} typeSpeed={100} cursor={false} />
            </span>
            <span className="text-green-600">
              <Typewriter words={["med"]} typeSpeed={100} delaySpeed={500} cursor={false} />
            </span>
          </>
        )}
      </h1>
      <span className="grid justify-center mt-[20px]">MEDICAL CLINIC</span>

      {startTyping && (
        <p className="text-lg text-muted-foreground text-center w-[450px] mt-4">
          <Typewriter
            words={[
              "“BROSMED” - Qarshi shahrida joylashgan keng qamrovli klinika, 2020-yil yanvar oyida o‘z faoliyatini boshlagan umumiy klinika. Shu vaqt ichida klinika 2000 dan ortiq bemorga yordam ko‘rsatgan, ulardan 600 nafari statsionar rejimda davolangan. 300 dan ortiq umumiy, onkologik, endoskopik (HD videokamera bilan) va CO2 lazerli jarrohlik operatsiyalari amalga oshirildi.",
            ]}
            typeSpeed={30}
            cursor={false} // Remove blinking cursor after completion
          />
        </p>
      )}

      {startTyping && (
        <p className="text-lg text-muted-foreground ml-[60px] mb-[39px] text-center w-[350px] mt-4 grid justify-center">
          <Typewriter
            words={[
              "⭐⭐⭐⭐★ Klinika toifasi: Xususiy Joylashuvi: Nasaf ko'chasi, 31 uyi, Qarshi Klinika mo'ljal: '3 Palma' restorani yaqinida Klinika ish vaqti: Dushanba-shanba 08:00-17:00",
            ]}
            typeSpeed={30}
            cursor={false} // Remove blinking cursor after completion
          />
        </p>
      )}
    </div>
  );
}
