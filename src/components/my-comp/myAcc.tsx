import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import Link from "next/link";
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="border border-solid border-gray-300 pl-20 pr-20">
            Chemistry
          </AccordionTrigger>
          <AccordionContent>
            <div className="p-5 flex flex-col justify-stretch space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2">
                  <AccordionTrigger className="border border-solid border-gray-300 pl-20 pr-20 bg-slate-300">
                    ELECTRODE-SYSTEM
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-5 flex flex-col justify-stretch space-y-4">
                      <Link href="">PART-1</Link>
                      <Link href="">PART-2</Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
  
                <AccordionItem value="item-3">
                  <AccordionTrigger className="border border-solid border-gray-300 pl-20 pr-20 bg-slate-300">
                    ANALYTICAL-TECH
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-5 flex flex-col justify-stretch space-y-4">
                      <Link 
                       href="https://drive.google.com/uc?export=download&id=1R5Kaa6Y1QhbJKus9VuTRs16KvLxnFeBb">
                       PART-1
                      </Link>
                      <Link
                       href="https://drive.google.com/uc?export=download&id=17AkjmQ7Q2y8GXaHEpKSgfG3ECibr5Fao">
                        PART-2
                      </Link>
                     
                    </div>
                  </AccordionContent>
                </AccordionItem>
  
                <AccordionItem value="item-4">
                  <AccordionTrigger className="border border-solid border-gray-300 pl-20 pr-20 bg-slate-300">
                    NANO-TECH
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-5 flex flex-col justify-stretch space-y-4">
                      <Link href="">PART-1</Link>
                      <Link href="">PART-2</Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
  
                <AccordionItem value="item-5">
                  <AccordionTrigger className="border border-solid border-gray-300 pl-20 pr-20 bg-slate-300">
                    POLYMERIC-MATERIALS
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-5 flex flex-col justify-stretch space-y-4">
                      <Link href="">PART-1</Link>
                      <Link href="">PART-2</Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
  
                <AccordionItem value="item-6">
                  <AccordionTrigger className="border border-solid border-gray-300 pl-20 pr-20 bg-slate-300">
                    CORROSION-SCIENCE
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="p-5 flex flex-col justify-stretch space-y-4">
                      <Link href="">PART-1</Link>
                      <Link href="">PART-2</Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
  