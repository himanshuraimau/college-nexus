import { AccordionDemo } from "@/components/my-comp/myAcc";
import Navbar from "@/components/navBar";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-10 space-y-4">
        <div className="border border-solid border-gray-300 pt-3 pb-3 pl-20 pr-20 text-2xl">
          1ST YEAR
        </div>
        <div className="flex flex-col items-center justify-center pt-5 space-y-4">
          <div >
        <AccordionDemo/>
      </div>
      </div>
      </div>
    </div>
  );
}
