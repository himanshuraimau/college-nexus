import { AccordionDemo } from "@/components/my-comp/myAcc";
import Navbar from "@/components/navBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full bg-background text-text font-sans">
      <Navbar  />
      <div className=" text-text space-y-4">
               <AccordionDemo/>
      </div>
    </div>
  );
}
