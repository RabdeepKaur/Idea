"use client"
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if my code is messy?",
      answer: "It's totally fine! That's exactly why you need help. Most successful revivals start with messy code - fresh eyes and new perspectives are often exactly what a project needs to reach its potential."
    },
    {
      question: "Do I have to share ownership?", 
      answer: "Not at all! You have complete control over ownership terms. Many project owners offer equity or profit-sharing to attract serious collaborators, but others prefer to keep full ownership and just get help. The choice is entirely yours."
    },
    {
      question: "What if no one wants to help?",
      answer: "Honestly? That's still better than letting your project die completely. But in our experience, most projects that get abandoned by one person are actually exciting to someone else. You'd be surprised how often 'impossible problems' become easy with fresh perspective."
    },
    {
      question: "Is this just for developers?",
      answer: "Absolutely not! We need designers, marketers, writers, project managers, and more. Many projects fail not because of code issues, but because they lack design, marketing, or clear direction. Your non-technical skills might be exactly what a project needs."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about reviving ghost projects
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-black rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                className="w-full text-left p-6 hover:bg-gray-750 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <div className="text-purple-400 font-bold text-xl">
                    {openIndex === index ? '−' : '+'}
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;