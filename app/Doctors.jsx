
// import { Card, CardContent } from "@/components/ui/card";
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// const doctors = [
//     {
//         name: "ХАМРАЕВ БЕКЗОД ЖЎРАМУРОДОВИЧ",
//         image: "/doctor1.png",
//         description: "\"BROSMED\" кўп тармоқли клиникаси бош шиокори.",
//         specialties: "✅ Маммолог ✅ Онко-гинеколог",
//         details: "кўп йиллик иш тажрибасига эга малакали маммолог, онко-гинеколог. Аёллар кўкрак касалликлари, Гинекология ва Онкология сохасидаги турли хил муаммоларга ечим топишда ёрдам берадилар."
//     },
//     {
//         name: "РАҲИМОВ ШОҲРУХ ШУХРАТОВИЧ",
//         image: "/doctor2.png",
//         description: "Гинекологик ва Онкологик касалликлар мутахассиси.",
//         specialties: "✅ Гинеколог ✅ Онколог",
//         details: "кўп йиллик иш тажрибасига эга малакали онко-гинеколог. Гинекология ва Онкология сохасидаги турли хил муаммоларга ечим топишда ёрдам берадилар. мутахассисимиз энди BROSMED клиникасида."
//     },
//     {
//         name: "ФАРМОНОВ НУРБЕК УЛУҐБЕКОВИЧ",
//         image: "/doctor3.png",
//         specialties: "✅ Эндоуролог ✅ Психоневролог",
//         details: "Укув ва Мехнат фаолияти - 2020 йил Самарканд давлат тиббиёт университетида бакалавр даражаси. Dr.BOBOEV HEALTH CENTER, AKFA MEDLINE ва Самaрканд давлат университетларида Урология-Эндоурология мутаххасислиги буйича укиб хам ишлаб тажриба орттирган."
//     },
//     {
//         name: "БАГИРОВА САНОБАР БАТИРОВНА",
//         image: "/doctor4.png",
//         description: "Айоллар билан шугулланувчи айоллар мутахассиси.",
//         specialties: "✅ Онкогинеколог",
//         details: "Багирова Санобар Батировна кўп йиллик иш тажрибасига эга Олий тоифали малакали гинеколог. Гинекология сохасига тегишли хар қандай муаммога ечим топишда сизга ёрдам берадилар." 
//     },
//     {
//         name: "ХАМРАЕВ САРДОР ЖЎРАМУРОДОВИЧ",
//         image: "/doctor5.png",
//         specialties: "✅ Юз-жаг жаррохи ✅ Имплантолог ✅ Пластик жаррох",
//         details: "Чет давлатлар тажрибаси асосида сиздаги муаммоларга оператив йўл билан ечим топишда сизга ўз ёрдамини беришга тайёр.Айниқса ИМПЛАНТОЛОГИЯ сохасида сезиларли ютуқларга эришган мутахассисимиз энди BROSMED клиникасида."
//     },
// ];

// export default function Doctors() {
//     return (
//         <div className="w-[1200px] mx-auto mb-[30px]">
//             <h2 className="font-bold text-[38px] text-center">Doctors</h2>
//             <div className="flex justify-center mt-[30px]">
//                 <Carousel className="w-full">
//                     <CarouselContent className="-ml-1">
//                         {doctors.map((doctor, index) => (
//                             <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//                                 <Card>
//                                     <CardContent className="aspect-square items-center justify-center p-4">
//                                         <Image
//                                             src={doctor.image}
//                                             alt={doctor.name}
//                                             layout="responsive"
//                                             width={50}
//                                             height={50}
//                                             priority
//                                         />
//                                         <span className="text-[18px] text-center grid justify-center font-semibold mt-[10px]">
//                                             {doctor.name}
//                                         </span>
//                                         <p>{doctor.description}</p>
//                                         <p className="font-semibold">{doctor.specialties}</p>
//                                         <p className="text-blue-600 font-bold">{doctor.name}</p>
//                                         <p>{doctor.details}</p>
//                                     </CardContent>
//                                 </Card>
//                             </CarouselItem>
//                         ))}
//                     </CarouselContent>
//                     <CarouselPrevious />
//                     <CarouselNext />
//                 </Carousel>
//             </div>
//         </div>
//     );
// }


import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const doctors = [
    {
        name: "ХАМРАЕВ БЕКЗОД ЖЎРАМУРОДОВИЧ",
        image: "/doctor1.png",
        description: "\"BROSMED\" кўп тармоқли клиникаси бош шиокори.",
        specialties: "✅ Маммолог ✅ Онко-гинеколог",
        details: "кўп йиллик иш тажрибасига эга малакали маммолог, онко-гинеколог. Аёллар кўкрак касалликлари, Гинекология ва Онкология сохасидаги турли хил муаммоларга ечим топишда ёрдам берадилар."
    },
    {
        name: "РАҲИМОВ ШОҲРУХ ШУХРАТОВИЧ",
        image: "/doctor2.png",
        description: "Гинекологик ва Онкологик касалликлар мутахассиси.",
        specialties: "✅ Гинеколог ✅ Онколог",
        details: "кўп йиллик иш тажрибасига эга малакали онко-гинеколог. Гинекология ва Онкология сохасидаги турли хил муаммоларга ечим топишда ёрдам берадилар. мутахассисимиз энди BROSMED клиникасида."
    },
    {
        name: "ФАРМОНОВ НУРБЕК УЛУҐБЕКОВИЧ",
        image: "/doctor3.png",
        specialties: "✅ Эндоуролог ✅ Психоневролог",
        details: "Укув ва Мехнат фаолияти - 2020 йил Самарканд давлат тиббиёт университетида бакалавр даражаси. Dr.BOBOEV HEALTH CENTER, AKFA MEDLINE ва Самaрканд давлат университетларида Урология-Эндоурология мутаххасислиги буйича укиб хам ишлаб тажриба орттирган."
    },
    {
        name: "БАГИРОВА САНОБАР БАТИРОВНА",
        image: "/doctor4.png",
        description: "Айоллар билан шугулланувчи айоллар мутахассиси.",
        specialties: "✅ Онкогинеколог",
        details: "Багирова Санобар Батировна кўп йиллик иш тажрибасига эга Олий тоифали малакали гинеколог. Гинекология сохасига тегишли хар қандай муаммога ечим топишда сизга ёрдам берадилар." 
    },
    {
        name: "ХАМРАЕВ САРДОР ЖЎРАМУРОДОВИЧ",
        image: "/doctor5.png",
        specialties: "✅ Юз-жаг жаррохи ✅ Имплантолог ✅ Пластик жаррох",
        details: "Чет давлатлар тажрибаси асосида сиздаги муаммоларга оператив йўл билан ечим топишда сизга ўз ёрдамини беришга тайёр.Айниқса ИМПЛАНТОЛОГИЯ сохасида сезиларли ютуқларга эришган мутахассисимиз энди BROSMED клиникасида."
    },
];

export default function Doctors() {
    return (
        <div className="bg-blue-400">
            <div className="w-[1200px] mx-auto py-[30px]">
            <h2 className="font-bold text-[38px] text-center">Doctors</h2>
            <div className="flex justify-center mt-[30px] pb-[20px]">
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {doctors.map((doctor, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <Card className=" hover:shadow-2xl hover:scale-105 hover:brightness-110 transition-transform duration-300">
                                    <CardContent className="aspect-square items-center justify-center p-4">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            layout="responsive"
                                            width={50}
                                            height={50}
                                            priority
                                        />
                                        <span className="text-[18px] text-center grid justify-center font-semibold mt-[10px]">
                                            {doctor.name}
                                        </span>
                                        <p>{doctor.description}</p>
                                        <p className="font-semibold">{doctor.specialties}</p>
                                        <p className="text-blue-600 font-bold">{doctor.name}</p>
                                        <p>{doctor.details}</p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
        </div>
    );
}
