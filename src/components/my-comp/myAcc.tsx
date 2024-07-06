"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

function AccordionDemo() {
  return (
    <>
    <div className="pt-12 w-full flex flex-col justify-center items-center">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="pl-20 pr-20 bg-blue-300 border border-gray-300 hover:bg-nav">
            1ST YEAR
          </AccordionTrigger>
          <AccordionContent className="pl-20 pr-20 bg-white border border-gray-300">
            <Link href="/first-year">
                ALL SUBJECTS
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="pl-20 pr-20 bg-gray-200 border border-gray-300 hover:bg-gray-300">
            2ND YEAR
          </AccordionTrigger>
          <AccordionContent className="pl-20 pr-20 bg-white border border-gray-300">
            <Link href="/second-year">
              SUBJECTS
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="pl-20 pr-20 bg-gray-200 border border-gray-300 hover:bg-gray-300">
            3RD YEAR
          </AccordionTrigger>
          <AccordionContent className="pl-20 pr-20 bg-white border border-gray-300">
            <Link href="/third-year">
              SUBJECTS
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className=" pl-20 pr-20 bg-gray-200 border border-gray-300 hover:bg-gray-300">
            4TH YEAR
          </AccordionTrigger>
          <AccordionContent className="pl-20 pr-20 bg-white border border-gray-300">
            <Link href="/fourth-year">
               SUBJECTS
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    </>
  );
}

export { AccordionDemo };