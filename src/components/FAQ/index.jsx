import { useState } from "react"
import "./index.css"

const faqData = [
  {
    question: "Do you provide mobile car service in Hyderabad?",
    answer:
      "Yes. EngineCrew provides professional doorstep car service across Hyderabad including Malkajgiri, Secunderabad, ECIL and nearby areas.",
  },
  {
    question: "Can I get jump start service near me?",
    answer:
      "Absolutely. We offer fast jump start and roadside assistance services at your location anywhere in Hyderabad.",
  },
  {
    question: "Do I need to visit a garage for car repair?",
    answer:
      "No. Our technicians perform most car services at your home or office. Garage visits are needed only for major repairs.",
  },
  {
    question: "Is EngineCrew available for emergency car breakdown?",
    answer:
      "Yes. We provide emergency breakdown assistance with quick response times across Hyderabad.",
  },
  {
    question:"Can you do jump start at night?",
    answer:"Yes, our emergency jump start service is available 24/7."

  },
  {
    question: "How do I book a car service?",
    answer:
      "You can book instantly by calling us or sending a WhatsApp message. Our team will confirm and dispatch a technician.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section">
      <header className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about our doorstep car service</p>
      </header>

      <div className="faq-list">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span className="faq-icon">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
