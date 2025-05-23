import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Services.css';

const services = [
  {
    title: 'Diagnostic Lab - Blood Sample Collection',
    subtitle: 'Convenient, Accurate, and Safe Sample Collection',
    description: [
      'In-clinic blood sample collection conducted by experienced phlebotomists',
      'Strict hygiene protocols and sterile equipment used for every procedure',
      'Comfortable and professionally maintained clinic environment',
      'Accurate labeling and secure handling of all samples',
      'Supports a wide range of diagnostic tests, from routine panels to specialized investigations',
      'Prompt dispatch of samples to accredited labs for timely analysis',
      'Minimal wait times with a streamlined and patient-friendly collection process',
      'Got a complication like a broken file? We’re equipped and trained to retrieve it with precision, often avoiding the need for surgery.',
    ],
  },
 {
  title: 'Root Canals Reinvented',
  subtitle: 'Single-Sitting RCTs. Zero Delay. Maximum Relief.',
  description: [
    'We specialize in single-visit root canals — because we understand time matters.',
    'Advanced rotary endodontics ensure faster, more comfortable procedures.',
    'Digital X-rays and apex locators improve precision and reduce chair time.',
    'Biocompatible materials used for long-lasting results and safe healing.',
    'Post-treatment guidance provided to support smooth and speedy recovery.',
    "Got a complication like a broken file? We’re equipped and trained to retrieve it with precision, often avoiding the need for surgery.",
  ],
},
  {
    title: 'Laser Dentistry',
    subtitle: 'Cutting-Edge. Painless. Fast Healing.',
    description: [
      'Laser Teeth Whitening for instant, visible brightness with minimal sensitivity.',
    'Laser Operculectomy for gentle and precise soft tissue management.',
    'Laser-assisted gum treatments for effective periodontal care.',
    'Minimally invasive procedures with little to no bleeding.',
    'Reduced post-operative pain and faster healing times.',
    'Ideal for anxious patients seeking a quieter, more comfortable experience.',
    ],
  },
  {
  title: 'Oral & Maxillofacial Surgery',
  subtitle: 'When Expertise Meets Surgical Precision',
  description: [
    'We manage everything from surgical extractions to tumor excisions — safely, compassionately, and with full surgical protocol.',
    'Advanced imaging and diagnostics guide every surgical procedure.',
    'Expertise in managing facial trauma and reconstructive surgeries.',
    'Minimally invasive techniques to reduce recovery time and discomfort.',
    'Comprehensive pre- and post-operative care for optimal healing.',
    'Experienced team ensures precise and personalized treatment plans.',
  ],
},
  {
    title: 'Restorative & Cosmetic Dentistry',
    subtitle: 'Smile Makeovers That Feel Natural',
    description: [
      'Crowns, Bridges & Veneers',
      'Complete & Partial Dentures',
      'Digital Scanners for flawless fit and finish',
      'Your new smile begins with a scan — not a mold.',
    ],
  },
  {
    title: 'Orthodontics',
    subtitle: 'Straightening More Than Teeth',
    description: [
      'Clear Aligners',
      'Self-Ligating & Conventional Braces',
      'Habit-Breaking Appliances',
      'TMJ Disorder Management',
      'Each plan is customized, monitored, and results-driven.',
    ],
  },
  {
  title: 'Pediatric Dentistry',
  subtitle: 'Big Smiles for Little Ones',
  description: [
    'Management of thumb-sucking, tongue thrusting, and other oral habits.',
    'Pulpectomies (root canals) tailored specifically for milk teeth.',
    'Preventive care including fluoride treatments and sealants.',
    'Restorative treatments designed to be gentle and child-friendly.',
    'Education for children and parents on oral hygiene and healthy habits.',
    'Creating a comfortable and positive dental experience for every child.',
  ],
},
  {
  title: 'Periodontics (Gum Treatments)',
  subtitle: 'Healthy Gums. Healthy Life.',
  description: [
    'Diagnosis and treatment of gum infections and bleeding.',
    'Deep cleaning procedures including root planing and scaling.',
    'Gum surgeries and flap procedures for advanced cases.',
    'Personalized periodontal therapy tailored to individual needs.',
    'Use of laser therapy to enhance healing and reduce discomfort.',
    'Ongoing maintenance programs to ensure long-term gum health.',
  ],
},
  {
    title: 'Restorations & Diagnostics',
    subtitle: 'Advanced Tools. Better Decisions.',
    description: [
      'Digital RVG X-rays',
      'Tooth-Colored Fillings (Composites and GICs)',
      'TMJ Treatments for Pain & Dysfunction',
      'Technology That Sets Us Apart',
      'RVG Digital Imaging',
      'Intraoral Scanners for Aligners & Crowns',
      'Laser Units for Painless Procedures',
      'Chairside Efficiency with Enhanced Patient Comfort',
    ],
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.85) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`services-section ${isVisible ? 'fade-in' : ''}`}
    >
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtext">Delivering professional dental care tailored to your needs.</p>
      <div className="services-slider">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index}>
              <div className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-subtitle">{service.subtitle}</p>
                <ul className="service-points">
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
