import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

const Faqs: React.FC = () => {
  const faqData = [
    {
      id: "item-1",
      question: "How do I create a new project in the tool?",
      answer:
        "To create a new project, simply log in, navigate to the dashboard, and click on the 'New Project' button. Fill in the required details, and your project will be ready to go.",
    },
    {
      id: "item-2",
      question: "Can I invite team members to collaborate on my project?",
      answer:
        "Yes, you can invite team members to collaborate on your project. Go to the project settings and use the 'Invite Team Members' feature.",
    },
    {
      id: "item-3",
      question: "Is there a way to track task progress within the tool?",
      answer:
        "Absolutely! Use the progress tracker available in the dashboard to monitor milestones and deadlines.",
    },
    {
      id: "item-4",
      question:
        "How can I customize the notifications I receive from the project management tool?",
      answer:
        "Absolutely! Use the progress tracker available in the dashboard to monitor milestones and deadlines.",
    },
    {
      id: "item-5",
      question:
        "What security measures are in place to protect my project data?",
      answer:
        "Absolutely! Use the progress tracker available in the dashboard to monitor milestones and deadlines.",
    },
  ];
  return (
    <>
      <div className="py-6 px-6 border-b border-b-gray-20">
        <h5 className="text-xl font-semibold text-dark-gray-50">FAQ’s</h5>
      </div>
      <div className="py-14 px-6 bg-gray-10">
        <div className="grid grid-cols-3 max-md:grid-cols-1 items-start gap-4">
          <div className="col-span-2">
            <p className="text-primary-50 mb-2">Support</p>
            <h5 className="text-4xl max-md:text-2xl font-semibold text-white">
              Top questions about Agile Atlas
            </h5>
          </div>
          <p className="text-dark-gray-60 text-xl">
            Need something cleared up? Here are our most frequently asked
            questions.
          </p>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
          <div>
            <h1 className="text-4xl max-md:text-2xl text-white font-bold mb-2">
              FAQs
            </h1>
            <p className="text-dark-gray-70 text-lg">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our team.
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible>
              {faqData.map(({ id, question, answer }) => (
                <AccordionItem
                  key={id}
                  className="border-0 p-8 py-4 rounded-3xl text-xl data-[state=open]:bg-gray-10"
                  value={id}
                >
                  <AccordionTrigger className="text-lg data-[state=open]:text-white hover:text-white hover:no-underline">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base data-[state=open]:text-dark-gray-70">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
