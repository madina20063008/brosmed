// import Image from "next/image";
// import {
//     Tooltip,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { AnimatedList } from "@/registry/magicui/animated-list";

// export default function Services() {
//     return (
//         <div className="w-[1100px] mx-auto mt-[30px]">
//             <h2 className="font-bold text-[38px] text-center">Services</h2>
//             <div className="grid gap-[20px] mt-[20px]">
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Akusherlik</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Allergologiya</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Anesteziologiya va reanimatsiya</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Vertebrologiya</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Ginekologiya</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Dermatologiya</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Diagnostika markazi</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Kardiologiya</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Kosmetologiya</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//                 <TooltipProvider>
//                     <Tooltip>
//                         <TooltipTrigger asChild>
//                             <Button variant="outline">Vertebrologiya</Button>
//                         </TooltipTrigger>
//                     </Tooltip>
//                 </TooltipProvider>
//             </div>
//         </div>
//     )
// }



"use client";

import Image from "next/image";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

const services = [
  "Akusherlik",
  "Allergologiya",
  "Anesteziologiya va reanimatsiya",
  "Vertebrologiya",
  "Ginekologiya",
  "Dermatologiya",
  "Diagnostika markazi",
  "Kardiologiya",
  "Kosmetologiya",
  "Mammologiya",
];

export default function Services() {
  return (
    <div className="w-[1200px] mx-auto mt-[30px] mb-[50px]">
      <h2 className="font-bold text-[38px] text-center">Services</h2>
      <div className="mt-[20px]">
        <AnimatedList>
          {services.map((service) => (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="w-full text-[20px] py-2 text-white bg-gradient-to-r from-[#2EC4B6] via-[#00A7E1] to-[#0077B6] hover:opacity-80 transition-all duration-300 border-none">
                    {service}
                  </Button>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}
