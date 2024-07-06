import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const subjects1 = ['MATHS(CIVIL)','MATHS(CSE)','MATHS(MECH)','MATHS(ECE)']


const FirstYear = () => {
  return (
  <div className='flex flex-col'>
    <div className="pt-12 w-full flex flex-col justify-center items-center">
      <Accordion type="single" collapsible>
        {subjects1.map((subject, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="pl-20 pr-20 bg-blue-300 border border-gray-300 hover:bg-nav">
              {subject}
            </AccordionTrigger>
            <AccordionContent className="border border-gray-300">
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}-notes`}>
                  <AccordionTrigger className="pl-20 pr-20 bg-blue-200 border border-gray-300 hover:bg-nav">
                    NOTES
                  </AccordionTrigger>
                  <AccordionContent className="pl-20 pr-20 bg-white border border-gray-300">
                    {/* Add content for NOTES */}
                    Content for {subject} Notes
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value={`item-${index}-qb`}>
                  <AccordionTrigger className="pl-20 pr-20 bg-blue-200 border border-gray-300 hover:bg-nav">
                    QUESTION BANK
                  </AccordionTrigger>
                  <AccordionContent className="pl-20 pr-20 bg-white border border-gray-300">
                    {/* Add content for QUESTION BANK */}
                    Content for {subject} Question Bank
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value={`item-${index}-pyqs`}>
                  <AccordionTrigger className="pl-20 pr-20 bg-blue-200 border border-gray-300 hover:bg-nav">
                    PYQS
                  </AccordionTrigger>
                  <AccordionContent className="pl-20 pr-20 bg-white border border-gray-300">
                    {/* Add content for PYQS */}
                    Content for {subject} PYQS
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </div>
  );
};

export default FirstYear;
