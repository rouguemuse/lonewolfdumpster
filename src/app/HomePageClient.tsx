'use client';

import React from 'react';
import { useSiteContent } from '@/lib/useEditableContent';
import { PageHero, TrustItem } from '@/components/shared/PageHero';
import { HowItWorksSteps } from '@/components/shared/HowItWorksSteps';
import { DumpsterSizeGrid } from '@/components/shared/DumpsterSizeGrid';
import { HorizontalCallout } from '@/components/shared/HorizontalCallout';
import { BenefitIconGrid, BenefitItem } from '@/components/shared/BenefitIconGrid';
import { ReviewsAndProofSection } from '@/components/home/ReviewsAndProofSection';
import { FAQAccordion } from '@/components/shared/FAQAccordion';
import { FreeQuoteForm } from '@/components/shared/FreeQuoteForm';
import { ClosingCtaBanner } from '@/components/shared/ClosingCtaBanner';
import {
  Truck,
  CircleDollarSign,
  MapPin,
  ShieldCheck,
  HardHat,
  Home,
  Building2,
  Wrench,
  Building,
  Landmark,
  Star,
  Users,
  Clock,
} from 'lucide-react';

export default function HomePageClient() {
  const { content } = useSiteContent();
  const hp = content.homepage;

  // 5-Item Trust Strip for Hero
  const heroTrustItems: TrustItem[] = [
    {
      icon: <Truck size={20} />,
      title: 'SAME-DAY DELIVERY',
      subtitle: 'In most of the DFW Metroplex',
    },
    {
      icon: <CircleDollarSign size={20} />,
      title: 'TRANSPARENT PRICING',
      subtitle: 'No hidden fees.',
    },
    {
      icon: <MapPin size={20} />,
      title: 'LOCAL & RELIABLE',
      subtitle: 'Locally owned & operated.',
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'EASY SCHEDULING',
      subtitle: 'Delivery when you need it.',
    },
    {
      icon: <HardHat size={20} />,
      title: 'CONTRACTOR FRIENDLY',
      subtitle: 'We keep your projects moving',
    },
  ];

  // 5 Why Choose Benefits
  const whyChooseItems: BenefitItem[] = [
    {
      icon: <Users size={26} />,
      title: 'LOCAL & LOCALLY OWNED',
      desc: 'We are a local business that cares about our community.',
    },
    {
      icon: <CircleDollarSign size={26} />,
      title: 'TRANSPARENT PRICING',
      desc: 'Transparent pricing with clear weight allowances and straightforward terms.',
    },
    {
      icon: <Clock size={32} color="var(--accent-red)" />,
      title: 'Reliable Scheduling',
      desc: 'We strive for prompt, dependable delivery and pickup scheduling across DFW.',
    },
    {
      icon: <Star size={26} />,
      title: 'GREAT REVIEWS',
      desc: 'Our customers love our service and it shows.',
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'SAFETY & PROFESSIONALISM',
      desc: 'We treat your property with respect and care.',
    },
  ];

  // 5 Who We Serve Items
  const whoWeServeItems: BenefitItem[] = [
    {
      icon: <Home size={26} />,
      title: 'RESIDENTIAL',
      desc: 'Homeowners, renters & DIY projects',
    },
    {
      icon: <Building2 size={26} />,
      title: 'BUSINESSES',
      desc: 'Offices, retail stores & commercial properties',
    },
    {
      icon: <Wrench size={26} />,
      title: 'CONTRACTORS',
      desc: 'Construction, Remodeling, General Contractors and more',
    },
    {
      icon: <Building size={26} />,
      title: 'PROPERTY MANAGERS',
      desc: 'Apartment complexes & rental properties',
    },
    {
      icon: <Landmark size={26} />,
      title: 'MUNICIPALITIES',
      desc: 'Parks, schools & public works',
    },
  ];

  return (
    <>
      {/* 1. Large Photographic Hero + Rating + Dual CTAs + 5-Item Trust Strip */}
      <PageHero
        isHomepage={true}
        badgeText="DFW'S TRUSTED DUMPSTER RENTAL SERVICE"
        headlineWhite={hp.heroHeadlineWhite || 'FAST & RELIABLE'}
        headlineRed={hp.heroHeadlineRed || 'DUMPSTER RENTALS ACROSS DFW'}
        description={hp.heroDescription || 'Dumpsters for cleanouts, remodels, construction, roofing, and more — delivered across DFW.'}
        showRating={true}
        heroTopImageSrc={hp.heroTopImage?.src || '/images/lone-wolf/hero_tile_top.jpg'}
        heroTopImageAlt={hp.heroTopImage?.alt || 'Wayne standing with roll-off dumpsters in Colleyville yard'}
        heroBottomImageSrc={hp.heroBottomImage?.src || '/images/lone-wolf/hero_tile_bottom.jpg'}
        heroBottomImageAlt={hp.heroBottomImage?.alt || 'Wide roll-off dumpster fleet and property ready for delivery across DFW'}
        trustItems={heroTrustItems}
      />

      {/* 2. "Renting a Dumpster Is Easy" Four-Step Process */}
      <HowItWorksSteps />

      {/* 3. Three Dumpster-Size Cards (15yd, 20yd [Most Popular], 25yd) */}
      <DumpsterSizeGrid
        tagline="DUMPSTER SIZES"
        sectionTitle="CHOOSE THE RIGHT SIZE FOR YOUR PROJECT"
        buttonLabel="VIEW DETAILS →"
      />

      {/* 4. Full-Service Junk Removal Horizontal Callout */}
      <HorizontalCallout
        titleBlack="NEED FULL-SERVICE"
        titleRed="JUNK REMOVAL?"
        description="Don't want to load the dumpster yourself? We do the heavy lifting! Perfect for homes, businesses, furniture, appliances and property cleanups."
        checklist={[
          'Garage & storage cleanouts',
          'Yard debris removal',
          'Office & commercial cleanouts',
          'Furniture & appliance removal',
        ]}
        buttonType="link"
        buttonText="LEARN MORE →"
        buttonHref="/junk-removal"
      />

      {/* 5. "Why Choose Wolf Ridge Dumpsters?" Benefits (5 items) */}
      <BenefitIconGrid
        tagline="WHY CHOOSE"
        titleBlack="WOLF RIDGE"
        titleRed="DUMPSTERS"
        items={whyChooseItems}
        columns={5}
        iconStyle="circle-light"
      />

      {/* 6. Customer Reviews & DFW Service Area Proof */}
      <ReviewsAndProofSection />

      {/* 7. "Who We Serve" Audience Row (5 items) */}
      <BenefitIconGrid
        tagline="WHO WE SERVE"
        items={whoWeServeItems}
        columns={5}
        iconStyle="circle-light"
        backgroundColor="#f8fafc"
      />

      {/* 8. FAQ Preview (2-Column Accordion with Questions 1 through 6) */}
      <FAQAccordion
        tagline="FREQUENTLY ASKED"
        titleBlack="QUESTIONS"
        leftFaqs={[
          {
            q: 'How does dumpster rental work with Wolf Ridge Dumpsters?',
            a: 'Renting a dumpster with Wolf Ridge Dumpsters is simple. Choose the dumpster size that fits your project, select your delivery date, and provide a suitable placement location. We deliver the dumpster to your property, you fill it with approved materials, and we pick it up when you’re finished. Our goal is to make dumpster rental convenient, straightforward, and hassle-free.',
          },
          {
            q: 'How long can I rent a dumpster?',
            a: 'We offer flexible dumpster rental periods. Our standard rental periods are up to 3, 5, or 7 days, and additional days are available for $20 per day. If you finish your project early, simply call or text us to schedule pickup, which will end your rental period.',
          },
          {
            q: 'Do I need to be home for delivery?',
            a: 'It is recommended that someone be present for delivery. If you cannot be there, please designate someone to meet the driver, or send us a photo with clear instructions showing exactly where you want the dumpster placed.',
          },
        ]}
        rightFaqs={[
          {
            q: 'What if I need more time?',
            a: 'We are flexible and will do our best to accommodate your needs, depending on availability. Additional days are $20 per day and must be confirmed with us in advance by phone or text. Standard rentals can be extended up to 10 days. If you need the dumpster for 2–3 weeks or longer, please contact us to discuss availability and pricing.',
          },
          {
            q: 'What areas does Wolf Ridge Dumpsters serve?',
            a: 'Wolf Ridge Dumpsters provides dumpster rental services in Dallas, Fort Worth, Arlington, Grand Prairie, Lewisville, Euless, Keller, Irving, Bedford, Hurst, and surrounding areas throughout the DFW Metroplex. Service availability may vary by location, so please check our Service Areas page for the communities we currently serve.',
          },
          {
            q: 'How fast can I get a dumpster delivered?',
            a: 'Same-day and next-day dumpster delivery is available throughout most of Dallas, Tarrant, and Denton Counties, depending on availability. For immediate availability and delivery confirmation, call or text us at 214-876-0321.',
          },
        ]}
        showViewAllLink={true}
        viewAllHref="/faq"
      />

      {/* 9. Free Quote Form (Direct Contact on Left, Inquiry Form on Right) */}
      <FreeQuoteForm id="quote" />

      {/* 10. Closing CTA Banner */}
      <ClosingCtaBanner
        headline="READY TO RENT YOUR DUMPSTER?"
        subheadline="BOOK ONLINE OR CALL TODAY!"
        imageSrc={hp.closingBannerImage?.src || '/images/lone-wolf/real/contractor_environment_showcase.jpg'}
        imageAlt={hp.closingBannerImage?.alt || 'Real Wolf Ridge Roll-Off Dumpster Ready for Delivery in DFW'}
        imageObjectPosition={hp.closingBannerImage?.position || 'center center'}
      />
    </>
  );
}
