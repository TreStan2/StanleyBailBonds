import React, { useState } from 'react'; // Importing React and useState hook to manage component state
import MainLayout from '../layout/MainLayout'; // Importing a custom layout component for the page
import './FaqPage.css'; // Importing the CSS styles for the FAQ page

// Array containing the FAQ data with each question and its corresponding answer
const faqData = [
    {
        question: 'What is a bail bond?',
        answer: 'A bail bond is where a person spends money to secure the release of a person who has been arrested and is awaiting trial.'
    },
    {
        question: 'Can I use a Bondsman for Family Court?',
        answer: 'No you can NOT use a Bondsman for child support.',
    },
    {
        question: 'Are bail bond fees refundable?',
        answer: 'Bail bond fees are NOT refundable.',
    },
    {
        question: 'What time is bonding court?',
        answer: 'Bonding court times vary by county and state. Georgetown County times are 9am and 3pm. Georgetown City Time is at 11am. Court times are subject to change on holidays and weekends.'
    },
    {
        question: 'Bond has been posted. Why is my loved one still incarcerated?',
        answer: 'Release times are determined at the jail/detention center.',
    },
    {
        question: 'When is my court date?',
        answer: 'Court dates are issued upon inmate release. It will be printed on the release paperwork given to you. Your bail bondsman will also have a copy of the court date.',
    },
    {
        question: 'Where do I go for court?',
        answer: 'It is determined by the type of charge. Refer to your release paperwork - it should be listed there along with the address.',
    },
    {
        question: 'If I need an attorney, but can’t afford one, who should I call?',
        answer: 'Contact the public defender office in the county where the alleged crime took place.',
    },
    {
        question: 'Can you use a bail bondsman for a probation violation?',
        answer: 'Yes',
    },
    {
        question: 'Can a bail bondsman refer an attorney to a defendant?',
        answer: 'No',
    },
    {
      question: 'Is there a fee to use my debit or credit card?',
      answer: 'Yes, there is a 5% fee when using your debit or credit card.',
    },
    {
      question: 'Where are we located?',
      answer: 'We are a mobile business based in Georgetown, South Carolina, and we meet clients at a convenient mutual location.',
    },
];

// FaqPage component, representing the FAQ page
const FaqPage = () => {
  // State to manage which FAQ item is currently open (default is null, meaning no item is open)
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the visibility of an FAQ answer when a question is clicked
  const toggleAccordion = (index) => {
    // If the clicked question is already open, close it (set to null). Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <MainLayout> {/* Wrapping the content inside the MainLayout component */}
      <div className="faq-container"> {/* Container for the entire FAQ section */}
        <h1 className="faq-title">Frequently Asked Questions</h1> {/* Title of the FAQ section */}
        
        {/* Mapping through the faqData array to create each FAQ item */}
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item"> {/* Wrapper for each individual FAQ */}
            <div 
              className="faq-question" // Styling for the question section
              onClick={() => toggleAccordion(index)} // Add click handler to toggle visibility of the answer
            >
              {faq.question} {/* Display the question */}
            </div>
            
            {/* If the current question is open (i.e., the openIndex matches the current index), show the answer */}
            {openIndex === index && (
              <div className="faq-answer"> {/* Display the answer if the question is open */}
                {faq.answer} {/* Display the answer */}
              </div>
            )}
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default FaqPage; // Export the FaqPage component to be used in other parts of the app
