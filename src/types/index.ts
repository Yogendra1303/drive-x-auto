export type ServiceCategory =
  | 'periodic-servicing'
  | 'ac-repair'
  | 'batteries'
  | 'tyres-wheel-care'
  | 'denting-painting'
  | 'detailing-services'
  | 'car-spa-cleaning'
  | 'inspections-diagnostics'
  | 'windshields-lights'
  | 'suspension-fitments'
  | 'clutch-body-parts'
  | 'insurance-claims'
  | 'sos-emergency'
  | 'custom-repairs';

export interface AutomotiveService {
  id: string;
  category: ServiceCategory;
  categoryNumber: number;
  title: string;
  summary: string;
  detail: string;
  inspectionScope: string[];
  deliverables: string[];
  recommendedInterval?: string;
  mechanicalSceneTarget?:
    | 'engine'
    | 'wheel-brake'
    | 'ac-compressor'
    | 'battery'
    | 'suspension'
    | 'clutch'
    | 'exterior-panel'
    | 'none';
  actionType: 'book' | 'inquire' | 'emergency';
}

export interface BookingInquiry {
  serviceId: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  preferredDate?: string;
  notes?: string;
}
