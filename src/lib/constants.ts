export const BRAND_NAME = 'Drive X Auto';
export const BRAND_TAGLINE = 'Complete Car Care. All in One Place.';
export const WHATSAPP_COUNTRY_CODE = '+91';
export const WHATSAPP_NUMBER = '919971715176';

/**
 * Builds a safe, encoded WhatsApp deep-link URL for Drive X Auto inquiries.
 */
export function getWhatsAppUrl(serviceTitle?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (serviceTitle) {
    const text = `Hello Drive X Auto, I would like to enquire about booking ${serviceTitle}. Please share the next steps.`;
    return `${base}?text=${encodeURIComponent(text)}`;
  }
  const defaultText = 'Hello Drive X Auto, I would like to enquire about your services. Please share the next steps.';
  return `${base}?text=${encodeURIComponent(defaultText)}`;
}

export const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#interactive-stage', label: '3D Experience' },
  { href: '#process', label: 'Service Process' },
  { href: '#enquiry', label: 'Contact' },
] as const;

export const WORKSHOP_CAPABILITIES = [
  {
    id: 'multi-system',
    title: 'Multi-System Workshop Coverage',
    description: '14 confirmed service categories covering maintenance, mechanical systems, bodywork, detailing, and roadside triage under one roof.',
  },
  {
    id: 'clear-communication',
    title: 'Itemised Service Estimates',
    description: 'We review vehicle needs with you and provide a clear, itemised scope before any servicing or component replacement begins.',
  },
  {
    id: 'dedicated-tooling',
    title: 'Dedicated Workshop Equipment',
    description: 'Equipped with diagnostic scan tools, wheel alignment apparatus, and dedicated refinish stations for quality repairs.',
  },
  {
    id: 'support-services',
    title: 'Assistance & Support',
    description: 'Help with collision claim documentation and emergency roadside triage to get you moving again safely.',
  },
] as const;

export const SERVICE_WORKFLOW_STEPS = [
  {
    stepNumber: '01',
    title: 'Initial Consultation',
    description: 'Discuss your vehicle symptoms, service requirements, or scheduled maintenance milestones.',
  },
  {
    stepNumber: '02',
    title: 'Vehicle Assessment',
    description: 'Physical inspection and diagnostic checks to evaluate the exact condition of relevant components.',
  },
  {
    stepNumber: '03',
    title: 'Clear Estimate & Approval',
    description: 'You receive an itemised scope with explained recommendations. Work only starts once you approve.',
  },
  {
    stepNumber: '04',
    title: 'Service & Handover',
    description: 'Careful servicing, thorough quality check, and a transparent review upon vehicle collection.',
  },
] as const;
