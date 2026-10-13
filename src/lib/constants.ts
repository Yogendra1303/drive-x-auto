export const BRAND_NAME = 'Drive X Auto';
export const BRAND_TAGLINE = 'Complete Car Care. All in One Place.';
export const BRAND_SUBTITLE =
  'From routine servicing and AC repair to tyres, diagnostics, detailing, and bodywork, explore the verified services your vehicle needs.';

export const WHATSAPP_COUNTRY_CODE = '+91';
export const WHATSAPP_RAW_PHONE = '9971715176';
export const WHATSAPP_NUMBER = '919971715176';
export const CONTACT_PHONE = '+91 9971715176';
export const CONTACT_EMAIL = 'service@drivexauto.com';
export const WORKING_HOURS = 'Mon - Sat: 8:00 AM - 7:00 PM';

/**
 * Builds a safe, encoded WhatsApp deep-link URL for Drive X Auto inquiries.
 */
export function getWhatsAppUrl(params?: {
  serviceTitle?: string;
  vehicle?: string;
  customerName?: string;
  phone?: string;
  notes?: string;
}): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!params) {
    const defaultText =
      'Hi Drive X Auto, I would like to enquire about your car care services. Please share the details and booking availability.';
    return `${base}?text=${encodeURIComponent(defaultText)}`;
  }

  const { serviceTitle, vehicle, customerName, phone, notes } = params;

  const lines: string[] = ['Hi Drive X Auto, I would like to book an automotive service:'];
  if (serviceTitle) lines.push(`• Service: ${serviceTitle}`);
  if (vehicle) lines.push(`• Vehicle: ${vehicle}`);
  if (customerName) lines.push(`• Name: ${customerName}`);
  if (phone) lines.push(`• Mobile: ${phone}`);
  if (notes) lines.push(`• Details/Symptoms: ${notes}`);
  lines.push('Please share available slots and an estimate.');

  return `${base}?text=${encodeURIComponent(lines.join('\n'))}`;
}

/**
 * Legacy overload supporting direct string for backward compatibility.
 */
export function getServiceWhatsAppUrl(serviceTitle?: string): string {
  if (serviceTitle) {
    return getWhatsAppUrl({ serviceTitle });
  }
  return getWhatsAppUrl();
}

export const NAV_LINKS = [
  { href: '#', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#custom-repair', label: 'Custom Repair' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#contact', label: 'Contact' },
] as const;

export const WHY_CHOOSE_US_BENEFITS = [
  {
    id: 'transparent-estimates',
    title: 'Itemised Service Estimates',
    description:
      'We review vehicle symptoms with you and provide a clear, itemised scope before any repair or component replacement begins. No surprise costs.',
    icon: 'document-check',
  },
  {
    id: 'multi-system-coverage',
    title: '14 Comprehensive Service Domains',
    description:
      'From scheduled filter & fluid intervals and computerized wheel alignment to booth painting, AC service, and electrical diagnostics—all in one place.',
    icon: 'wrench-cog',
  },
  {
    id: 'fast-whatsapp-support',
    title: 'Direct WhatsApp Concierge',
    description:
      'Convenient booking, prompt updates, and direct photographic feedback of vehicle parts via WhatsApp at every milestone of the repair journey.',
    icon: 'chat-bubbles',
  },
  {
    id: 'equipped-facility',
    title: 'Equipped Diagnostic Tools',
    description:
      'Facility outfitted with OBD-II diagnostic scanners, precision 3D wheel alignment apparatus, and dedicated refinish stations for quality repairs.',
    icon: 'cpu-chip',
  },
] as const;

export const SERVICE_WORKFLOW_STEPS = [
  {
    stepNumber: '01',
    title: 'Explore & Select Service',
    description:
      'Browse all 14 service categories or share your vehicle symptoms directly with our service desk.',
  },
  {
    stepNumber: '02',
    title: 'Share Vehicle Details',
    description:
      'Tell us your vehicle make, model, and requirements via WhatsApp or our instant enquiry form.',
  },
  {
    stepNumber: '03',
    title: 'Itemised Estimate & Approval',
    description:
      'Receive a transparent scope of work with itemised recommendations. Servicing proceeds only after your approval.',
  },
  {
    stepNumber: '04',
    title: 'Quality Care & Handover',
    description:
      'Careful servicing, thorough quality inspection, and a transparent review upon vehicle collection.',
  },
] as const;

export const FAQS_LIST = [
  {
    id: 'faq-services',
    question: 'What services does Drive X Auto offer?',
    answer:
      'Drive X Auto provides 14 verified service categories covering periodic maintenance, AC service & repair, battery care, tyres & 3D wheel alignment, denting & painting, detailing & ceramic protection, car spa cleaning, custom mechanical repairs, windshields & glass replacement, suspension & fitments, clutch overhaul, multi-point inspections & OBD diagnostics, insurance claim assistance, and roadside emergency assistance.',
  },
  {
    id: 'faq-booking',
    question: 'How do I book a service with Drive X Auto?',
    answer:
      'Booking is quick and hassle-free. You can click "Book Now" on any service card, use the Quick Booking card in our Hero section, or message our WhatsApp concierge directly at +91 9971715176 with your vehicle make, model, and service needs.',
  },
  {
    id: 'faq-quote',
    question: 'How do I get an estimate or quote for my car?',
    answer:
      'Simply share your car make, model, and specific symptoms with us on WhatsApp or through our Custom Repair form. Our service advisors review the requirements and share a clear, itemised estimate before any servicing or component replacement begins.',
  },
  {
    id: 'faq-details',
    question: 'What vehicle details should I provide when enquiring?',
    answer:
      'Please mention your vehicle make, model, manufacturing year, and fuel type (petrol, diesel, CNG, or EV), along with any symptoms you have noticed (such as unusual noises, AC cooling drop, warning lights, or scheduled maintenance interval).',
  },
  {
    id: 'faq-custom',
    question: 'What if I need a repair that is not listed in standard categories?',
    answer:
      'Use our "Looking for a Specific Repair?" section or message us on WhatsApp. Our technicians handle custom diagnostics, engine troubleshooting, electrical harness repair, and tailored mechanical work.',
  },
  {
    id: 'faq-contact',
    question: 'How can I contact Drive X Auto directly?',
    answer:
      'You can reach our team directly via WhatsApp at +91 9971715176, call us at +91 9971715176 during working hours (Mon - Sat: 8:00 AM - 7:00 PM), or email service@drivexauto.com.',
  },
] as const;
