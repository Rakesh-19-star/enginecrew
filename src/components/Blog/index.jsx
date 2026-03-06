import { useParams } from "react-router-dom";
import "./index.css";
import Footer from "../Footer";

const pages = {
  "car-repair-hyderabad": {
    title: "Car Repair in Hyderabad – Doorstep Car Service by EngineCrew",
    hero: "https://res.cloudinary.com/dvj4c6ren/image/upload/v1767549423/jump_start_1_l2pz4k.jpg",
    subtitle: "Fast, Affordable & Professional Mobile Car Repair in Hyderabad",

    content: `
EngineCrew provides premium doorstep car repair in Hyderabad. We bring certified mechanics, professional tools, and genuine parts directly to your home, office, or roadside.

Hyderabad traffic, heat and daily usage cause frequent vehicle problems like battery failure, engine overheating, brake wear, AC breakdown and more. EngineCrew eliminates the need for garages by fixing everything on-site.

We are trusted across:
Malkajgiri, Secunderabad, Uppal, Tarnaka, ECIL, Kukatpally, Miyapur and all Hyderabad areas.

Our service includes:
• Car diagnostics  
• Engine repair  
• Battery replacement  
• Jump start  
• Brake repair  
• AC service  
• Suspension repair  
• Emergency breakdown assistance  

Unlike local garages, EngineCrew provides:
✔ Transparent pricing  
✔ No towing required  
✔ On-time arrival  
✔ Digital bills  
✔ Warranty on parts  

Thousands of Hyderabad car owners trust EngineCrew because we are fast, honest, and professional.
`,
  },

  "car-mechanic-hyderabad": {
    title: "Car Mechanic in Hyderabad – Verified Mobile Mechanics",
    hero: "https://images.unsplash.com/photo-1605038779984-c2b59fddfb5b?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Professional Car Mechanics at Your Doorstep",

    content: `
Looking for a car mechanic in Hyderabad you can trust? EngineCrew sends trained and background-verified mechanics directly to your location.

Our mechanics specialize in:
• Petrol & diesel engines  
• Hatchback, sedan, SUV & luxury cars  
• Manual & automatic transmission  
• Battery, brakes, clutch & suspension  

Whether your car won’t start, is making noise, or has dashboard warnings, we diagnose and fix it on-site.

No more:
❌ Long garage waiting  
❌ Overcharging  
❌ Towing hassles  

EngineCrew is Hyderabad’s fastest growing mobile mechanic network.
`,
  },

  "car-repair-malkajgiri": {
    title: "Car Repair in Malkajgiri – Doorstep Auto Service",
    hero: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Trusted Local Car Repair Experts",

    content: `
EngineCrew provides professional car repair in Malkajgiri including Prasanth Nagar, East Anandbagh, ECIL and Moula Ali.

We fix:
• Battery issues  
• Engine problems  
• Brake failure  
• AC not cooling  
• Car not starting  

Our mobile technicians reach you within minutes. No garage visits. No towing.

Malkajgiri car owners rely on EngineCrew for honest pricing and fast service.
`,
  },

  "mobile-car-service-hyderabad": {
    title: "Mobile Car Service in Hyderabad – At Your Home or Office",
    hero: "https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Car Servicing Without Visiting a Garage",

    content: `
EngineCrew provides full mobile car service in Hyderabad including oil change, filter replacement, brake inspection and battery service.

We save you:
✔ Time  
✔ Travel  
✔ Garage waiting  

Our mechanics come with professional tools and genuine spare parts.

This is the future of car servicing in Hyderabad.
`,
  },

  "jump-start-service-hyderabad": {
    title: "Jump Start Service in Hyderabad – 24x7 Battery Support",
    hero: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Instant Car Battery Jump Start Anywhere",

    content: `
Car not starting? EngineCrew provides instant jump start service across Hyderabad.

We reach you within minutes and safely restart your vehicle. If required, we also replace your battery on the spot.

Available across Malkajgiri, Secunderabad, Uppal, Tarnaka, ECIL and all Hyderabad.
`,
  },
};

const Blog = () => {
  const { slug } = useParams();
  const page = pages[slug] || pages["car-repair-hyderabad"];

  return (
    <div className="blog">
      <div
        className="blog-hero"
        style={{ backgroundImage: `url(${page.hero})` }}
      >
        <h1>{page.title}</h1>
        <p>{page.subtitle}</p>
        <a href="tel:9059391800" className="blog-cta">
          📞 Call EngineCrew
        </a>
      </div>

      <div className="blog-content">
        {page.content.split("\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
