import Slider from "react-slick"
import "./index.css"

const googleReviewsLink =
  "https://goo.gl/maps/rT1tQDqV9RHE87zV9"

const testimonials = [
  {
    name: "Ravi",
    location: "Malkajgiri",
    review:
      "Quick response and professional service. The mechanic reached on time and fixed my battery issue within minutes. Very reliable doorstep car service.",
    rating: 5,
  },
  {
    name: "Suresh",
    location: "Hyderabad",
    review:
      "Excellent mobile car service. No garage visit needed. Transparent pricing and very polite technician. Highly recommended.",
    rating: 5,
  },
  {
    name: "Anil",
    location: "Secunderabad",
    review:
      "My car broke down suddenly and EngineCrew helped immediately. Jump start was done quickly and smoothly.",
    rating: 5,
  },
]

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Testimonials = () => {
  return (
    <section className="testimonials">
      {/* 🔍 SEO Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "EngineCrew Mobile Car Service",
            image: "https://enginecrew.in/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressCountry: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
            },
            review: testimonials.map(t => ({
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: t.rating,
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: t.name,
              },
              reviewBody: t.review,
            })),
          }),
        }}
      />

      <h2 className="testimonials-title">
        Trusted by Car Owners in Hyderabad
      </h2>

      {/* Mobile Slider */}
      <div className="testimonials-mobile">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-slide">
              <TestimonialCard data={t} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop Grid */}
      <div className="testimonials-desktop">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} data={t} />
        ))}
      </div>

     
    </section>
  )
}

const TestimonialCard = ({ data }) => {
  return (
    <div className="testimonial-card">
      <div className="stars">{"★".repeat(data.rating)}</div>

      <p className="review-text">“{data.review}”</p>

      <div className="reviewer">
        <strong>{data.name}</strong>
        <span>{data.location}</span>
      </div>
    </div>
  )
}

export default Testimonials
