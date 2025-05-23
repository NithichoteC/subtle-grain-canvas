
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemType {
  question: string;
  answer: string;
}

const faqItems: FAQItemType[] = [
  {
    question: "How do you qualify leads better than internal teams?",
    answer: "Our AI qualification system pre-screens leads based on 27 distinct buying signals, filtering out tire-kickers and focusing only on prospects ready to make decisions. Unlike internal teams that often pursue every lead equally, we segment prospects by urgency and budget readiness, ensuring your calendar only contains high-intent buyers."
  },
  {
    question: "Do you guarantee a specific number of meetings?",
    answer: "Yes. We guarantee a minimum of 15 qualified meetings within the first 30 days for qualified clients in our target industries. If we don't hit this benchmark, we'll continue working for free until we do. Our average client exceeds this number by week 3."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We currently focus exclusively on solar installation companies and residential roofing contractors. This specialization allows us to refine our AI qualification models specifically for these industries, resulting in significantly higher conversion rates compared to general agencies."
  },
  {
    question: "How quickly can we start seeing results?",
    answer: "Most clients see their first qualified meetings within 7-10 days of campaign activation. Our full optimization cycle takes about 30 days to reach peak performance, at which point you'll be receiving a consistent flow of pre-qualified meetings directly on your calendar."
  }
];

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionTrigger>,
  React.ComponentPropsWithoutRef<typeof AccordionTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionTrigger 
    ref={ref}
    className="py-5 text-white text-left hover:text-[#FFC94D] [&[data-state=open]>svg]:text-[#FFC94D] [&[data-state=open]]:text-[#FFC94D]"
    {...props}
  >
    {children}
  </AccordionTrigger>
));

CustomAccordionTrigger.displayName = "CustomAccordionTrigger";

export const FAQSection = () => {
  return (
    <section className="w-full py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
            Frequently Asked <span className="bronze-gradient-fix">Questions</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
              <CustomAccordionTrigger>{item.question}</CustomAccordionTrigger>
              <AccordionContent className="text-white/60 pb-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
