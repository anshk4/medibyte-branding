import gurvinderPortrait from "@/assets/gurvinder-portrait.jpeg";
import gurvinderAuthor from "@/assets/gurvinder-author.jpeg";
import logoPhoto from "@/assets/hj-unicare-logo.png";
import logoPhotoDark from "@/assets/hj-unicare-logo.png.asset.jpg";
import embassyKenya from "@/assets/images/embassies/embassy-kenya.jpg";
import embassyDrcCongo from "@/assets/images/embassies/embassy-drc-congo.jpg";
import embassyEquatorialGuinea from "@/assets/images/embassies/embassy-equatorial-guinea.jpg";
import consulateBurundi from "@/assets/images/embassies/consulate-burundi.jpg";
import embassyBelarus from "@/assets/images/embassies/embassy-belarus.jpg";
import embassyBurkinaFaso from "@/assets/images/embassies/embassy-burkina-faso.jpg";
import embassyUganda from "@/assets/images/embassies/embassy-uganda.jpg";
import embassyDjibouti from "@/assets/images/embassies/embassy-djibouti.jpg";

// Department images
import cardiologyBg from "@/assets/images/cardiology/bg.jpg";
import cardiologyConsultant from "@/assets/images/cardiology/consultant.jpg";
import cardiologySuite from "@/assets/images/cardiology/suite.jpg";
import ivffertilityBg from "@/assets/images/ivf-fertility/bg.jpg";
import ivffertilityConsultant from "@/assets/images/ivf-fertility/consultant.jpg";
import ivffertilitySuite from "@/assets/images/ivf-fertility/suite.jpg";
import oncologyBg from "@/assets/images/oncology/bg.jpg";
import oncologyConsultant from "@/assets/images/oncology/consultant.jpg";
import orthopedicsBg from "@/assets/images/orthopedics/bg.jpg";
import orthopedicsConsultant from "@/assets/images/orthopedics/consultant.jpg";
import orthopedicsSuite from "@/assets/images/orthopedics/suite.jpg";
import pediatricsBg from "@/assets/images/pediatrics/bg.jpg";
import pediatricsConsultant from "@/assets/images/pediatrics/consultant.jpg";
import wellnessBg from "@/assets/images/wellness/bg.jpg";

// Hospital images
import artemishospitalImg from "@/assets/images/hospitals-india/artemis-hospital.jpg";
import carehospitalsImg from "@/assets/images/hospitals-india/care-hospitals.jpg";
import dragarwalseyehospitalImg from "@/assets/images/hospitals-india/dr-agarwals-eye-hospital.jpg";
import dypatilImg from "@/assets/images/hospitals-india/dy-patil.jpg";
import isicImg from "@/assets/images/hospitals-india/isic.jpg";
import kokilabendhirubhaiambaniImg from "@/assets/images/hospitals-india/kokilaben-dhirubhai-ambani.jpg";
import lilavatiImg from "@/assets/images/hospitals-india/lilavati.jpg";
import maxhealthcareImg from "@/assets/images/hospitals-india/max-healthcare.jpg";
import medantaImg from "@/assets/images/hospitals-india/medanta.jpg";
import medicoverImg from "@/assets/images/hospitals-india/medicover.jpg";
import miotinternationalImg from "@/assets/images/hospitals-india/miot-international.jpg";
import pacehospitalsImg from "@/assets/images/hospitals-india/pace-hospitals.jpg";
import shardahospitalImg from "@/assets/images/hospitals-india/sharda-hospital.jpg";
import starhospitalsImg from "@/assets/images/hospitals-india/star-hospitals.jpg";
import wockhardtImg from "@/assets/images/hospitals-india/wockhardt.jpg";
import americanhospitaldubaiImg from "@/assets/images/hospitals-uae/american-hospital-dubai.jpg";
import asterdmhealthcareImg from "@/assets/images/hospitals-uae/aster-dm-healthcare.jpg";
import burjeelhospitalImg from "@/assets/images/hospitals-uae/burjeel-hospital.jpg";
import dubailondonhospitalImg from "@/assets/images/hospitals-uae/dubai-london-hospital.jpg";
import kingscollegehospitallondondubaiImg from "@/assets/images/hospitals-uae/kings-college-hospital-london-dubai.jpg";
import moorfieldseyehospitaldubaiImg from "@/assets/images/hospitals-uae/moorfields-eye-hospital-dubai.jpg";
import thumbayuniversityhospitalImg from "@/assets/images/hospitals-uae/thumbay-university-hospital.jpg";
import zulekhahospitalImg from "@/assets/images/hospitals-uae/zulekha-hospital.jpg";

// Blog cover photos
import coverHiddenLogistics from "@/assets/images/blog-covers/hidden-logistics-medical-journey.jpg";
import coverIndiaSurgicalAddress from "@/assets/images/blog-covers/india-worlds-surgical-address.jpg";
import coverJciHospital from "@/assets/images/blog-covers/inside-jci-accredited-hospital.webp";
import coverPatientStories from "@/assets/images/blog-covers/patient-stories-behind-the-scenes.jpg";
import coverWhatToPack from "@/assets/images/blog-covers/what-to-pack-medical-travel-india.jpg";
import coverApolloDelhi from "@/assets/images/blog-covers/apollo-delhi-century-of-cardiac-care.jpg";
import coverPostOpCare from "@/assets/images/blog-covers/post-operative-care-hotel-setting.jpg";
import coverWhenFlyHome from "@/assets/images/blog-covers/when-can-i-fly-home-after-surgery.jpg";
import coverEconomics from "@/assets/images/blog-covers/economics-of-medical-travel.jpg";

// AI-generated images for sections and specialities without stock photography
import recoverySuiteImg from "@/assets/images/generated/recovery-suite.jpg";
import contactTeamImg from "@/assets/images/generated/contact-team.jpg";
import trustedPartnersImg from "@/assets/images/generated/trusted-partners.jpg";
import wellnessConsultantImg from "@/assets/images/generated/wellness-consultant.jpg";
import wellnessSuiteImg from "@/assets/images/generated/wellness-suite.jpg";
import oncologySuiteImg from "@/assets/images/generated/oncology-suite.jpg";
import pediatricsSuiteImg from "@/assets/images/generated/pediatrics-suite.jpg";

export const ASSETS = {
  gurvinder: gurvinderPortrait,
  logo: logoPhoto,
  logoDark: logoPhotoDark,
};

export const GURVINDER_IMAGES = {
  portrait: gurvinderPortrait,
  author: gurvinderAuthor,
};

export const SECTION_IMAGES = {
  recoverySuite: recoverySuiteImg,
  contactTeam: contactTeamImg,
  trustedPartners: trustedPartnersImg,
};

export const SPECIALITY_IMAGES: Record<
  string,
  { bg: string; suite?: string; consultant?: string }
> = {
  cardiology: { bg: cardiologyBg, suite: cardiologySuite, consultant: cardiologyConsultant },
  "ivf-fertility": {
    bg: ivffertilityBg,
    suite: ivffertilitySuite,
    consultant: ivffertilityConsultant,
  },
  oncology: { bg: oncologyBg, suite: oncologySuiteImg, consultant: oncologyConsultant },
  orthopedics: { bg: orthopedicsBg, suite: orthopedicsSuite, consultant: orthopedicsConsultant },
  pediatrics: { bg: pediatricsBg, suite: pediatricsSuiteImg, consultant: pediatricsConsultant },
  wellness: { bg: wellnessBg, suite: wellnessSuiteImg, consultant: wellnessConsultantImg },
};

// Best visible (non-background) image per speciality — chosen from suite/consultant by resolution/quality
export const SPECIALITY_FEATURED_IMAGE: Record<string, string | undefined> = {
  orthopedics: orthopedicsSuite,
  cardiology: cardiologyConsultant,
  "ivf-fertility": ivffertilitySuite,
  oncology: oncologySuiteImg,
  pediatrics: pediatricsSuiteImg,
  wellness: wellnessSuiteImg,
};

export const HOSPITAL_IMAGES: Record<string, string> = {
  "Artemis Hospital": artemishospitalImg,
  "CARE Hospitals": carehospitalsImg,
  "Dr. Agarwal's Eye Hospital": dragarwalseyehospitalImg,
  "DY Patil": dypatilImg,
  ISIC: isicImg,
  "Kokilaben Dhirubhai Ambani": kokilabendhirubhaiambaniImg,
  Lilavati: lilavatiImg,
  "Max Healthcare": maxhealthcareImg,
  Medanta: medantaImg,
  Medicover: medicoverImg,
  "MIOT International": miotinternationalImg,
  "PACE Hospitals": pacehospitalsImg,
  "Sharda Hospital": shardahospitalImg,
  "Star Hospitals": starhospitalsImg,
  Wockhardt: wockhardtImg,
  "American Hospital Dubai": americanhospitaldubaiImg,
  "Aster DM Healthcare": asterdmhealthcareImg,
  "Burjeel Hospital": burjeelhospitalImg,
  "Dubai London Hospital": dubailondonhospitalImg,
  "King's College Hospital London-Dubai": kingscollegehospitallondondubaiImg,
  "Moorfields Eye Hospital Dubai": moorfieldseyehospitaldubaiImg,
  "Thumbay University Hospital": thumbayuniversityhospitalImg,
  "Zulekha Hospital": zulekhahospitalImg,
};

export type Embassy = { image: string; caption: string };

export const TRUST_EMBASSIES: Embassy[] = [
  { image: embassyKenya, caption: "Embassy of Kenya, Abu Dhabi" },
  { image: embassyDrcCongo, caption: "Embassy of the Democratic Republic of the Congo, Abu Dhabi" },
  { image: embassyEquatorialGuinea, caption: "Embassy of Equatorial Guinea, Abu Dhabi" },
];

export const EMBASSIES: Embassy[] = [
  { image: embassyEquatorialGuinea, caption: "Embassy of Equatorial Guinea, Abu Dhabi" },
  { image: embassyKenya, caption: "Embassy of Kenya, Abu Dhabi" },
  { image: embassyDrcCongo, caption: "Embassy of the Democratic Republic of the Congo, Abu Dhabi" },
  { image: consulateBurundi, caption: "Consulate of Burundi, Dubai" },
  { image: embassyBelarus, caption: "Embassy of Belarus, Abu Dhabi" },
  { image: embassyBurkinaFaso, caption: "Embassy of Burkina Faso, Abu Dhabi" },
  { image: embassyUganda, caption: "Embassy of Uganda, Abu Dhabi" },
  { image: embassyDjibouti, caption: "Embassy of Djibouti, Abu Dhabi" },
];

export const LICENSES = [
  "Dubai DED Commercial Licence",
  "Dubai Land Department Tenancy Registration",
  "Dubai Courts MOA",
  "GDRFA Establishment Card",
  "Federal Tax Authority Corporate Tax Certificate",
];

export type Office = {
  name: string;
  location: string;
  primaryAlt: string;
  galleryAlts: string[];
};

export const OFFICES: Office[] = [
  {
    name: "Dubai HQ",
    location: "Business Bay · Dubai",
    primaryAlt: "HJ Unicare Dubai office reception in Business Bay",
    galleryAlts: [
      "Dubai office workstations",
      "Dubai office workstations — second view",
      "Dubai office consultation area",
      "Dubai office team — wide shot",
    ],
  },
  {
    name: "Delhi Operations Center",
    location: "Punjabi Bagh · New Delhi",
    primaryAlt: "HJ Unicare Delhi operations center workstations in Punjabi Bagh",
    galleryAlts: [
      "Delhi office workstations — second view",
      "Delhi office meeting room",
      "Delhi office consultation area",
      "Delhi office desk — solo",
    ],
  },
];

export type HospitalGroup = { country: string; flag: string; hospitals: string[] };

export const HOSPITAL_NETWORK: HospitalGroup[] = [
  {
    country: "India",
    flag: "🇮🇳",
    hospitals: [
      "Artemis Hospital",
      "Max Healthcare",
      "Medanta",
      "Sharda Hospital",
      "ISIC",
      "Medicover",
      "DY Patil",
      "Lilavati",
      "Kokilaben Dhirubhai Ambani",
      "CARE Hospitals",
      "Wockhardt",
      "MIOT International",
      "Star Hospitals",
      "PACE Hospitals",
      "Dr. Agarwal's Eye Hospital",
    ],
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    hospitals: [
      "Zulekha Hospital",
      "American Hospital Dubai",
      "Aster DM Healthcare",
      "Thumbay University Hospital",
      "King's College Hospital London-Dubai",
      "Dubai London Hospital",
      "Burjeel Hospital",
      "Moorfields Eye Hospital Dubai",
    ],
  },
];

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Hospitals", to: "/hospitals" },
  { label: "Stories", to: "/stories" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { n: "500+", l: "Patients guided" },
  { n: "12", l: "Countries served" },
  { n: "30+", l: "Hospital partners" },
  { n: "06", l: "Speciality focus areas" },
];

export type Speciality = {
  slug: string;
  n: string;
  name: string;
  lead: string;
  body: string;
  procedures: string[];
  timeline: { phase: string; detail: string }[];
};

export const SPECIALITIES: Speciality[] = [
  {
    slug: "orthopedics",
    n: "01",
    name: "Orthopedics",
    lead: "Joints, spine, sports.",
    body: "Hip & knee replacements, complex spinal correction and elite sports-injury reconstruction with India's most operated surgeons.",
    procedures: [
      "Total hip & knee replacement",
      "Minimally invasive spine surgery",
      "ACL reconstruction & sports injuries",
      "Shoulder arthroscopy",
      "Revision joint replacement",
      "Pediatric orthopedic correction",
    ],
    timeline: [
      { phase: "Day 0", detail: "Arrival in Delhi, airport pickup, hospital admission" },
      { phase: "Day 1", detail: "Pre-operative assessment, imaging, surgical planning" },
      { phase: "Day 2-3", detail: "Surgery performed by lead orthopedic consultant" },
      { phase: "Day 4-7", detail: "Inpatient recovery, physiotherapy begins" },
      { phase: "Day 8-14", detail: "Transferred to recovery suite, intensive rehab" },
      { phase: "Day 15+", detail: "Discharge, fitness-to-fly clearance, supervised departure" },
    ],
  },
  {
    slug: "cardiology",
    n: "02",
    name: "Cardiology",
    lead: "Hearts, beating stronger.",
    body: "Coronary bypass, valve replacement, structural heart and interventional cardiology in JCI-accredited heart institutes.",
    procedures: [
      "Coronary artery bypass grafting (CABG)",
      "Heart valve repair & replacement",
      "Angioplasty & stenting",
      "TAVR / TAVI — transcatheter aortic valve replacement",
      "Pediatric cardiac surgery",
      "Arrhythmia ablation & pacemaker implantation",
    ],
    timeline: [
      { phase: "Day 0", detail: "Arrival, cardiac team reviews transmitted reports" },
      { phase: "Day 1", detail: "Angiography, echocardiogram, surgical clearance" },
      { phase: "Day 2-4", detail: "Procedure performed in hybrid cath lab or OR" },
      { phase: "Day 5-8", detail: "ICU recovery, cardiac monitoring" },
      { phase: "Day 9-14", detail: "Step-down care, supervised ambulation" },
      { phase: "Day 15+", detail: "Cardiac rehab briefing, fitness-to-fly, departure" },
    ],
  },
  {
    slug: "ivf-fertility",
    n: "03",
    name: "IVF & Fertility",
    lead: "Quiet science, patient hands.",
    body: "Personalised IVF, ICSI, donor and surrogacy pathways with embryology labs ranked among Asia's best.",
    procedures: [
      "IVF & ICSI",
      "Donor egg & sperm programmes",
      "Surrogacy (legal, regulated pathways)",
      "PGT-A genetic testing of embryos",
      "Fertility preservation & egg freezing",
      "Hysteroscopy & laparoscopic fertility surgery",
    ],
    timeline: [
      { phase: "Week 0", detail: "Initial consultation, hormonal assessment, protocol design" },
      { phase: "Week 2-3", detail: "Ovarian stimulation, monitoring scans every 2-3 days" },
      { phase: "Week 4", detail: "Egg retrieval, fertilisation in embryology lab" },
      { phase: "Week 5-6", detail: "Embryo culture, PGT-A if requested, transfer" },
      { phase: "Week 8", detail: "Beta hCG pregnancy test, follow-up consultation" },
      { phase: "Week 12+", detail: "First scan, transition to local OB-GYN at home" },
    ],
  },
  {
    slug: "oncology",
    n: "04",
    name: "Oncology",
    lead: "Precision, with humanity.",
    body: "Surgical, medical and radiation oncology — tumour boards, immunotherapy and proton therapy access.",
    procedures: [
      "Surgical oncology (all solid tumours)",
      "Chemotherapy & targeted therapy",
      "Intensity-modulated radiation therapy (IMRT)",
      "Proton beam therapy",
      "Immunotherapy & CAR-T cell therapy",
      "Multidisciplinary tumour board review",
    ],
    timeline: [
      { phase: "Day 0", detail: "Arrival, case summary reviewed by tumour board" },
      { phase: "Day 1-3", detail: "Staging scans, biopsy review, molecular profiling" },
      { phase: "Day 4-7", detail: "Treatment plan confirmed, first cycle or procedure scheduled" },
      { phase: "Week 2+", detail: "Treatment begins — surgery, chemotherapy, or radiation" },
      { phase: "Mid-cycle", detail: "Rest periods with coordinated accommodation" },
      { phase: "Completion", detail: "Summary report, home-team handover, follow-up plan" },
    ],
  },
  {
    slug: "pediatrics",
    n: "05",
    name: "Pediatrics",
    lead: "The smallest patients, the largest care.",
    body: "Neonatal ICU, pediatric cardiac surgery and complex congenital care, with family-stay accommodation.",
    procedures: [
      "Neonatal & pediatric intensive care (NICU/PICU)",
      "Pediatric cardiac surgery — congenital defects",
      "Pediatric neurosurgery",
      "Cleft lip & palate repair",
      "Pediatric oncology",
      "Developmental & growth disorder management",
    ],
    timeline: [
      { phase: "Pre-arrival", detail: "Reports shared digitally, pediatric team consulted" },
      { phase: "Day 0", detail: "Family arrives, child admitted with parent staying" },
      { phase: "Day 1-2", detail: "Pediatric assessment, surgical or treatment planning" },
      { phase: "Day 3+", detail: "Procedure performed, NICU/PICU recovery" },
      { phase: "Recovery", detail: "Family-stay accommodation near hospital" },
      { phase: "Departure", detail: "Growth plan, local pediatrician handover at home" },
    ],
  },
  {
    slug: "wellness",
    n: "06",
    name: "Wellness Center",
    lead: "Recovery as a craft.",
    body: "Preventive screening, Ayurveda integration and structured post-treatment recovery in restorative settings.",
    procedures: [
      "Comprehensive preventive health screening",
      "Post-surgical recovery programmes",
      "Ayurveda & integrative medicine",
      "Cardiac & pulmonary rehabilitation",
      "Stress management & mindfulness",
      "Nutritional therapy & diet planning",
    ],
    timeline: [
      { phase: "Day 0", detail: "Arrival at wellness facility, wellness assessment" },
      { phase: "Day 1-2", detail: "Full-body screening, personalised programme design" },
      { phase: "Day 3-7", detail: "Daily therapy sessions — Ayurveda, physio, nutrition" },
      { phase: "Day 8-14", detail: "Structured recovery, guided wellness activities" },
      { phase: "Day 15+", detail: "Sustained-lifestyle plan, departure briefing" },
      { phase: "Follow-up", detail: "Remote check-ins, progress tracking at home" },
    ],
  },
];

// SAMPLE DATA — replace before publishing
export type Doctor = {
  slug: string;
  name: string;
  specialitySlug: string;
  speciality: string;
  city: string;
  qualifications: string;
  bio: string;
};

// SAMPLE DATA — replace before publishing
export const DOCTORS: Doctor[] = [
  {
    slug: "dr-rajesh-mehra",
    name: "Dr. Rajesh Mehra",
    specialitySlug: "orthopedics",
    speciality: "Orthopedics",
    city: "New Delhi",
    qualifications: "MS (Ortho), Fellowship in Joint Replacement",
    bio: "20+ years in hip and knee arthroplasty; trained in minimally invasive joint replacement techniques.",
  },
  {
    slug: "dr-anita-singh",
    name: "Dr. Anita Singh",
    specialitySlug: "cardiology",
    speciality: "Cardiology",
    city: "Gurugram",
    qualifications: "DM Cardiology, FACC",
    bio: "Interventional cardiologist with a focus on structural heart procedures and complex coronary interventions.",
  },
  {
    slug: "dr-priya-naik",
    name: "Dr. Priya Naik",
    specialitySlug: "ivf-fertility",
    speciality: "IVF & Fertility",
    city: "Mumbai",
    qualifications: "MD (Ob-Gyn), Fellowship in Reproductive Medicine",
    bio: "Specialises in recurrent implantation failure and personalised IVF protocols.",
  },
  {
    slug: "dr-vikram-iyer",
    name: "Dr. Vikram Iyer",
    specialitySlug: "oncology",
    speciality: "Oncology",
    city: "Bengaluru",
    qualifications: "DM Oncology, MD (Medicine)",
    bio: "Medical oncologist with expertise in immunotherapy, targeted therapy, and tumour board coordination.",
  },
  {
    slug: "dr-sneha-kapoor",
    name: "Dr. Sneha Kapoor",
    specialitySlug: "pediatrics",
    speciality: "Pediatrics",
    city: "Chennai",
    qualifications: "MCh Pediatric Surgery",
    bio: "Pediatric surgeon focusing on congenital anomalies and minimally invasive pediatric procedures.",
  },
  {
    slug: "dr-arjun-khanna",
    name: "Dr. Arjun Khanna",
    specialitySlug: "orthopedics",
    speciality: "Orthopedics",
    city: "New Delhi",
    qualifications: "MS (Ortho), Fellowship in Spine Surgery",
    bio: "Spine specialist with expertise in degenerative spine conditions and deformity correction.",
  },
  {
    slug: "dr-meera-pillai",
    name: "Dr. Meera Pillai",
    specialitySlug: "cardiology",
    speciality: "Cardiology",
    city: "New Delhi",
    qualifications: "DM Cardiology, Fellowship in Electrophysiology",
    bio: "Cardiac electrophysiologist performing ablations and device implants at high-volume centres.",
  },
  {
    slug: "dr-rohan-desai",
    name: "Dr. Rohan Desai",
    specialitySlug: "wellness",
    speciality: "Wellness Center",
    city: "Kerala",
    qualifications: "MD (Internal Medicine), Ayurveda Certification",
    bio: "Integrative physician bridging modern preventive medicine with structured recovery programmes.",
  },
];

// SAMPLE DATA — replace before publishing
export type PricingItem = {
  treatment: string;
  specialitySlug: string;
  homePrice: string;
  hjPrice: string;
};

// SAMPLE DATA — replace before publishing
export const PRICING: PricingItem[] = [
  {
    treatment: "Coronary Artery Bypass Graft (CABG)",
    specialitySlug: "cardiology",
    homePrice: "$120,000",
    hjPrice: "$6,500",
  },
  {
    treatment: "Total Hip Replacement",
    specialitySlug: "orthopedics",
    homePrice: "$55,000",
    hjPrice: "$5,500",
  },
  {
    treatment: "Total Knee Replacement",
    specialitySlug: "orthopedics",
    homePrice: "$50,000",
    hjPrice: "$4,800",
  },
  {
    treatment: "IVF / ICSI Cycle",
    specialitySlug: "ivf-fertility",
    homePrice: "$18,000",
    hjPrice: "$3,500",
  },
  {
    treatment: "Spinal Fusion (single level)",
    specialitySlug: "orthopedics",
    homePrice: "$85,000",
    hjPrice: "$7,000",
  },
  {
    treatment: "Prostate / Breast Cancer Surgery",
    specialitySlug: "oncology",
    homePrice: "$45,000",
    hjPrice: "$4,200",
  },
];

// Cross-speciality overview timeline for the homepage — SAMPLE DATA, replace copy before publishing
export type JourneyStage = {
  stage: string;
  label: string;
  detail: string;
};

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: "01",
    label: "Before Treatment",
    detail:
      "Reports reviewed by the destination clinical team, transparent estimate prepared, visa and travel logistics confirmed.",
  },
  {
    stage: "02",
    label: "Treatment",
    detail:
      "Admission, pre-operative assessment, procedure by the lead consultant, and monitored inpatient recovery.",
  },
  {
    stage: "03",
    label: "Care & Recovery",
    detail:
      "Step-down care in a recovery suite with nursing support, physiotherapy, nutrition, and daily coordinator visits.",
  },
  {
    stage: "04",
    label: "After Treatment",
    detail:
      "Fitness-to-fly clearance, medication and dietary plan, discharge summary, and handover to your home physician.",
  },
];

// SAMPLE DATA — replace before publishing
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  country: string;
  flag: string;
};

// SAMPLE DATA — replace before publishing
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Something which could have been quite an anxious experience actually was pretty comfortable and very easy to do. Very efficient!",
    name: "Sonit Ajit Shringi",
    role: "Cardiac patient",
    country: "Kenya",
    flag: "🇰🇪",
  },
  {
    quote:
      "The HJ Unicare team followed up with me on every step of the way. Great professionals! One call does it all.",
    name: "Sanjay Prasad",
    role: "Orthopedic patient",
    country: "India",
    flag: "🇮🇳",
  },
  {
    quote:
      "We’ve been made to feel like family with HJ Unicare. This has been the best decision we’ve made.",
    name: "UK-based Couple",
    role: "IVF patients",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    quote:
      "I don't think there's anything like this at home. I highly recommend having these diagnostic tests done.",
    name: "Lakhmi Bhambra",
    role: "Wellness screening",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    quote:
      "The physiotherapy and the care I received have been over and above my expectations. The facilities are equal to a 5-star hotel.",
    name: "Subhash Jasoria",
    role: "Spine surgery",
    country: "Iraq",
    flag: "🇮🇶",
  },
  {
    quote:
      "Wonderful complex, wonderful facilities. I experienced a wellness week that will last for a lifetime.",
    name: "Nick Feeney",
    role: "Wellness retreat",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
];

// SAMPLE DATA — replace before publishing
export type MediaLogo = {
  name: string;
};

// SAMPLE DATA — replace before publishing
export const MEDIA_LOGOS: MediaLogo[] = [
  { name: "Forbes India" },
  { name: "The Economic Times" },
  { name: "The Hindu" },
  { name: "Business Standard" },
  { name: "Mint" },
  { name: "The Telegraph India" },
];

// SAMPLE DATA — replace before publishing
export const INSURANCE_CONTENT = {
  title: "12 Month Post-Treatment Insurance",
  lead: "Your healing is safeguarded, so you can focus on getting back to life, not the what-ifs.",
  features: [
    "Coverage for complications up to 12 months after discharge",
    "Direct settlement with our partner insurers",
    "Includes emergency readmission and revision procedures",
  ],
};

export type Hospital = {
  name: string;
  city: string;
  established: string;
  accreditations: string[];
  specialities: string[];
  description: string;
};

export const HOSPITALS: Hospital[] = [
  {
    name: "Apollo Hospitals",
    city: "Chennai",
    established: "1983",
    accreditations: ["JCI", "NABH"],
    specialities: ["Cardiology", "Oncology", "Orthopedics", "IVF & Fertility"],
    description:
      "India's first JCI-accredited hospital network, pioneering multi-organ transplants and robotic surgery across 70+ specialities.",
  },
  {
    name: "Fortis Healthcare",
    city: "Delhi NCR",
    established: "1996",
    accreditations: ["NABH"],
    specialities: ["Cardiology", "Oncology", "Pediatrics"],
    description:
      "A network of flagship cardiac and oncology centres known for clinical excellence and patient-centric care protocols.",
  },
  {
    name: "Medanta",
    city: "Gurugram",
    established: "2009",
    accreditations: ["NABH"],
    specialities: ["Cardiology", "Orthopedics", "Oncology"],
    description:
      "A 1,250-bed super-speciality institute built around integrated modular operating theatres and a dedicated robotic surgery programme.",
  },
  {
    name: "Max Super Speciality",
    city: "New Delhi",
    established: "1985",
    accreditations: ["NABH"],
    specialities: ["Cardiology", "Oncology", "IVF & Fertility"],
    description:
      "Flagship Saket campus with one of North India's busiest cardiac surgery programmes and a comprehensive cancer centre.",
  },
  {
    name: "Manipal Hospitals",
    city: "Bengaluru",
    established: "1991",
    accreditations: ["NABH"],
    specialities: ["Cardiology", "Oncology", "Orthopedics"],
    description:
      "South India's leading tertiary-care network with advanced organ transplant and robotic-assisted surgical capabilities.",
  },
  {
    name: "Artemis Hospital",
    city: "Gurugram",
    established: "2007",
    accreditations: ["JCI", "NABH"],
    specialities: ["Cardiology", "Orthopedics", "Oncology"],
    description:
      "A JCI-accredited 380-bed super-speciality hospital with advanced cath labs, hybrid ORs, and a dedicated international patient wing.",
  },
  {
    name: "BLK-Max Hospital",
    city: "New Delhi",
    established: "1959",
    accreditations: ["NABH"],
    specialities: ["Oncology", "Cardiology", "IVF & Fertility"],
    description:
      "One of Delhi's oldest and most respected institutions, with a flagship bone marrow transplant unit and comprehensive cancer centre.",
  },
  {
    name: "Narayana Health",
    city: "Bengaluru",
    established: "2000",
    accreditations: ["NABH"],
    specialities: ["Cardiology", "Pediatrics", "Orthopedics"],
    description:
      "Founded by Dr. Devi Shetty, home to the world's largest pediatric cardiac surgery programme and a model of high-volume, high-outcome care.",
  },
  {
    name: "Indraprastha Apollo",
    city: "New Delhi",
    established: "1996",
    accreditations: ["JCI", "NABH"],
    specialities: ["Cardiology", "Oncology", "Orthopedics", "Pediatrics"],
    description:
      "The first JCI-accredited hospital in India, a 710-bed flagship campus with dedicated international patient lounges and translation services.",
  },
  {
    name: "AIIMS Network",
    city: "New Delhi",
    established: "1956",
    accreditations: ["NABH"],
    specialities: ["Oncology", "Pediatrics", "Wellness"],
    description:
      "India's premier public research institution, a reference centre for the most complex oncology and pediatric cases nationwide.",
  },
];

export type Story = {
  country: string;
  code: string;
  flag: string;
  condition: string;
  hospital: string;
  timeline: { phase: string; detail: string }[];
  text: string;
  name: string;
  role: string;
};

export const STORIES: Story[] = [
  {
    country: "Nigeria",
    code: "NG",
    flag: "🇳🇬",
    condition: "Coronary Artery Bypass Surgery",
    hospital: "Indraprastha Apollo, Delhi",
    timeline: [
      { phase: "Query", detail: "First WhatsApp message from Lagos — husband's angina worsening" },
      { phase: "Day 1", detail: "Reports reviewed by cardiac team in Delhi within 12 hours" },
      { phase: "Day 3", detail: "Medically supervised flight, Lagos → Delhi" },
      { phase: "Day 5", detail: "Triple bypass surgery at Indraprastha Apollo" },
      { phase: "Day 15", detail: "Discharge with cardiac rehab plan and 6-week medication supply" },
      { phase: "Day 17", detail: "Supervised flight home to Lagos" },
    ],
    text: "Gurvinder's team carried my husband from Lagos to recovery as if he were family. Surgery, accommodation, translation — handled.",
    name: "Mrs. A. Okonkwo",
    role: "Cardiac patient's spouse",
  },
  {
    country: "Iraq",
    code: "IQ",
    flag: "🇮🇶",
    condition: "Complex Spinal Fusion",
    hospital: "Medanta, Gurugram",
    timeline: [
      { phase: "Query", detail: "WhatsApp from Baghdad — two failed local consultations" },
      { phase: "Day 2", detail: "MRI shared digitally, spine surgeon consulted" },
      { phase: "Day 5", detail: "Visa assistance, flight booked Baghdad → Delhi" },
      { phase: "Day 7", detail: "L4-L5 fusion performed at Medanta" },
      { phase: "Day 12", detail: "Transferred to recovery suite, walking with support" },
      { phase: "Day 21", detail: "Fitness-to-fly, return to Baghdad" },
    ],
    text: "From the first WhatsApp to the day we flew home, every detail was thoughtful. This is what 'home to home' really means.",
    name: "Mr. M. Al-Hassan",
    role: "Spine surgery, Baghdad → Delhi",
  },
  {
    country: "Kenya",
    code: "KE",
    flag: "🇰🇪",
    condition: "IVF / ICSI — Successful Pregnancy",
    hospital: "Max Super Speciality, Delhi",
    timeline: [
      { phase: "Query", detail: "Two failed IVF cycles in Nairobi, seeking second opinion" },
      { phase: "Week 1", detail: "Consultation, protocol redesigned with PGT-A" },
      { phase: "Week 4", detail: "Egg retrieval, 6 embryos cultured" },
      { phase: "Week 6", detail: "Single embryo transfer, healthy blastocyst" },
      { phase: "Week 8", detail: "Positive pregnancy test, first scan confirmed heartbeat" },
      { phase: "Week 12", detail: "Returned to Nairobi, local OB-GYN handover" },
    ],
    text: "After two failed cycles in Nairobi we found our daughter through HJ Unicare's IVF partners. There aren't enough words.",
    name: "J. & D. Mwangi",
    role: "IVF, Nairobi → Mumbai",
  },
  {
    country: "Uzbekistan",
    code: "UZ",
    flag: "🇺🇿",
    condition: "Radiation Therapy — Head & Neck",
    hospital: "BLK-Max, New Delhi",
    timeline: [
      { phase: "Query", detail: "Tashkent oncologist recommended proton access in India" },
      { phase: "Day 2", detail: "Case reviewed by BLK-Max tumour board" },
      { phase: "Day 4", detail: "Arrival Delhi, staging confirmed, IMRT plan finalised" },
      { phase: "Week 2-6", detail: "35 fractions of IMRT with weekly review" },
      { phase: "Week 7", detail: "Treatment complete, toxicity managed, nutrition plan" },
      { phase: "Week 8", detail: "Summary report, return to Tashkent with follow-up schedule" },
    ],
    text: "Oncology treatment that I trusted, with a partner I never had to chase. Translations, visa, every appointment — taken care of.",
    name: "D. Karimov",
    role: "Oncology, Tashkent → Gurugram",
  },
];

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  category: "Patient Guides" | "Hospital Spotlights" | "Recovery Tips" | "Industry Notes";
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  icon: string;
  image?: string;
  content: BlogBlock[];
};

export const BLOG_COVER_IMAGES: Record<string, string> = {
  "hidden-logistics-medical-journey": coverHiddenLogistics,
  "india-worlds-surgical-address": coverIndiaSurgicalAddress,
  "inside-jci-accredited-hospital": coverJciHospital,
  "patient-stories-behind-the-scenes": coverPatientStories,
  "what-to-pack-medical-travel-india": coverWhatToPack,
  "apollo-delhi-century-of-cardiac-care": coverApolloDelhi,
  "post-operative-care-hotel-setting": coverPostOpCare,
  "when-can-i-fly-home-after-surgery": coverWhenFlyHome,
  "economics-of-medical-travel": coverEconomics,
};

export const BLOG_CATEGORIES = [
  "All",
  "Patient Guides",
  "Hospital Spotlights",
  "Recovery Tips",
  "Industry Notes",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "diplomatic-ties-embassy-of-kenya",
    title: "HJ Unicare Strengthens Diplomatic Ties with the Embassy of Kenya",
    category: "Industry Notes",
    excerpt:
      "A formal engagement with the Embassy of Kenya in Abu Dhabi — building a sanctioned, transparent corridor for Kenyan patients travelling to India for cardiac, orthopedic, and oncology care.",
    date: "2026-06-26",
    readTime: "5 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    image: embassyKenya,
    content: [
      {
        type: "paragraph",
        text: "This week we sat down with representatives of the Embassy of Kenya in Abu Dhabi to formalise a patient-corridor agreement — a structured pathway for Kenyan citizens who need specialist care unavailable at home, and who choose India for its outcomes, its cost, and its English-speaking clinical teams.",
      },
      { type: "heading", text: "Why an embassy engagement matters" },
      {
        type: "paragraph",
        text: "Medical travel, done properly, is not a transaction between a patient and a hospital. It is a sanctioned movement of a human being across borders — and the institutions that represent that human being at the destination have a legitimate interest in their welfare. When an embassy endorses a corridor, it gives families something no marketing can buy: permission to trust.",
      },
      {
        type: "list",
        items: [
          "Pre-departure medical report review by the destination clinical team",
          "Visa support letters issued through diplomatic channels",
          "A named coordinator who speaks the patient's language and dialect",
          "Post-discharge welfare checks shared with the consular desk",
        ],
      },
      {
        type: "quote",
        text: "Trust in medical travel is not earned by a website. It is earned by an institution willing to put its name beside yours.",
      },
      {
        type: "paragraph",
        text: "Kenya is one of several engagements we are building across East and Central Africa. Each one follows the same shape: transparent pricing, accredited hospitals, and a single point of contact who never hands the family off. The medicine is the centrepiece; the diplomatic scaffolding is what allows families to say yes without fear.",
      },
    ],
  },
  {
    slug: "patient-bridge-embassy-drc-congo",
    title: "A Patient Bridge with the Embassy of the Democratic Republic of the Congo",
    category: "Industry Notes",
    excerpt:
      "How a structured dialogue with the Embassy of the DRC in Abu Dhabi is opening a safe, supervised route to Indian cardiac and pediatric care for Congolese families.",
    date: "2026-06-23",
    readTime: "6 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    image: embassyDrcCongo,
    content: [
      {
        type: "paragraph",
        text: "The Democratic Republic of the Congo presents one of the clearest cases for structured medical travel in Africa. The clinical need is significant — cardiac, pediatric, and oncology pathways that local infrastructure cannot yet fully support — and the distance to India is manageable when the logistics are owned end to end.",
      },
      { type: "heading", text: "What the engagement covers" },
      {
        type: "paragraph",
        text: "Our dialogue with the Embassy of the DRC in Abu Dhabi is not about volume. It is about building a corridor that a Congolese family can enter without an intermediary they cannot verify. Every step is documented, every estimate is line-itemed, and every coordinator is reachable in French and Lingala.",
      },
      {
        type: "list",
        items: [
          "French and Lingala-speaking coordinators on the ground in Delhi",
          "Consular notification on arrival and at discharge",
          "Transparent estimates shared in USD with no hidden margins",
          "Repatriation planning built into the surgical timeline from day one",
        ],
      },
      {
        type: "quote",
        text: "A family crossing an ocean for surgery should never feel unaccompanied. The embassy's role is to make certain they never are.",
      },
      {
        type: "paragraph",
        text: "We expect the first Congolese families to travel under this framework within the quarter. The measure of its success will be the same as always — not the number of patients, but whether the first family refers the second.",
      },
    ],
  },
  {
    slug: "diplomatic-dialogue-embassy-of-uganda",
    title: "Diplomatic Dialogue with the Embassy of Uganda on Specialist Care Pathways",
    category: "Industry Notes",
    excerpt:
      "A working dialogue with the Embassy of Uganda in Abu Dhabi focused on supervised pathways for specialist surgery — and the quiet infrastructure that makes cross-border care feel local.",
    date: "2026-06-20",
    readTime: "5 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    image: embassyUganda,
    content: [
      {
        type: "paragraph",
        text: "Uganda's medical travel story is often reduced to cost. That misses the point. Ugandan families who travel to India are not looking for the cheapest hospital — they are looking for the one they can trust, the one a coordinator will walk them through, and the one that will send them home with a plan their local doctor can continue.",
      },
      { type: "heading", text: "Designing the pathway" },
      {
        type: "paragraph",
        text: "With the Embassy of Uganda in Abu Dhabi, we are designing a pathway that treats the patient's return as the finish line, not the surgery. That means the local doctor in Kampala receives the discharge summary, the imaging, and the follow-up schedule before the family lands.",
      },
      {
        type: "list",
        items: [
          "Specialist matching — cardiology, orthopedics, IVF, and pediatric surgery",
          "Coordinators fluent in English and Luganda",
          "Discharge documentation packaged for the home physician",
          "Remote follow-up consults in the first 90 days post-return",
        ],
      },
      {
        type: "quote",
        text: "The surgery ends in Delhi. The care continues in Kampala. Our job is to connect the two without a seam.",
      },
      {
        type: "paragraph",
        text: "This dialogue is part of a wider arc — building sanctioned corridors with missions across East Africa, so that the decision to travel for care is met with structure, not uncertainty. We are grateful to the Embassy of Uganda for the seriousness with which they have approached this work.",
      },
    ],
  },
  {
    slug: "hidden-logistics-medical-journey",
    title: "The hidden logistics of a successful medical journey",
    category: "Patient Guides",
    excerpt:
      "Visas, translations, flight medical clearance, currency, SIM cards — the unglamorous infrastructure that determines whether a medical trip succeeds or fractures.",
    date: "2026-06-18",
    readTime: "6 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    content: [
      {
        type: "paragraph",
        text: "Medical travel is rarely about medicine alone. It is about visas, languages, the right surgeon at the right table, a translator who knows the difference between a symptom and a fear. The medicine is the centrepiece — but the scaffolding around it is what most patients remember.",
      },
      { type: "heading", text: "The first 48 hours" },
      {
        type: "paragraph",
        text: "When a family first reaches out, typically over WhatsApp from Lagos, Baghdad, or Nairobi, the first thing we assess is not the diagnosis — it is the urgency. A cardiac case with worsening angina has a different timeline than an elective joint replacement. We triage emotionally as much as clinically.",
      },
      {
        type: "list",
        items: [
          "Medical reports collected and shared with the destination hospital",
          "Visa application initiated (medical e-visa for India takes 72 hours)",
          "Flight medical clearance requested from the airline",
          "Airport pickup, translator, and accommodation booked in parallel",
        ],
      },
      { type: "heading", text: "The translator who saves the consult" },
      {
        type: "paragraph",
        text: "A good medical translator does more than convert words. They convert anxiety into questions, and questions into answers the patient can actually act on. We pair every family with a coordinator who speaks their language and understands the clinical landscape — not a generalist, but someone who has sat through hundreds of consults.",
      },
      {
        type: "quote",
        text: "Good operations should disappear. The patient should never feel the machinery — only the care.",
      },
      {
        type: "paragraph",
        text: "In the next instalment, I'll walk through the financial architecture: how estimates are built, what insurance does and doesn't cover, and why transparent pricing is the single biggest trust signal in this industry.",
      },
    ],
  },
  {
    slug: "india-worlds-surgical-address",
    title: "Why India became the world's surgical address",
    category: "Industry Notes",
    excerpt:
      "A combination of cost, volume, accreditation, and English-language fluency made India the default destination for medical travel from 50+ countries.",
    date: "2026-06-10",
    readTime: "32 min audio",
    author: "Gurvinder Jit Singh",
    icon: "Podcast",
    content: [
      {
        type: "paragraph",
        text: "India performs more than 500,000 cardiac surgeries a year. Its surgeons are among the most experienced in the world by pure case volume — and that volume translates into outcomes that rival or exceed Western benchmarks, at a fraction of the cost.",
      },
      { type: "heading", text: "The cost differential, honestly" },
      {
        type: "paragraph",
        text: "A coronary bypass that costs $120,000 in the United States runs approximately $5,000 to $7,000 at a JCI-accredited hospital in Delhi. This is not because the care is lesser — it is because the cost base is different. Surgeon salaries, facility overhead, and litigation costs are structurally lower. The implants and equipment are often the same.",
      },
      {
        type: "list",
        items: [
          "JCI-accredited hospitals: 40+ in India, audited to international standards",
          "NABH-accredited hospitals: 600+, the national quality benchmark",
          "English is the medium of medical education — no translation barrier for international clinical communication",
          "Direct flights from 40+ source countries into Delhi, Mumbai, Bengaluru, Chennai",
        ],
      },
      { type: "heading", text: "What the numbers don't capture" },
      {
        type: "paragraph",
        text: "Statistics tell you the cost and the volume. They do not tell you about the nurse who stays past her shift to sit with a patient who is scared, or the coordinator who learns how to say 'you will be fine' in Uzbek. The human layer is the actual product — and it is the hardest thing to scale.",
      },
      {
        type: "paragraph",
        text: "In this podcast episode, I sit down with two surgeons and a former patient to talk about what the medical travel industry gets right, what it still gets wrong, and where the next decade is heading.",
      },
    ],
  },
  {
    slug: "inside-jci-accredited-hospital",
    title: "Inside a JCI-accredited hospital — a guided walk",
    category: "Hospital Spotlights",
    excerpt:
      "A 9-minute video walkthrough of what JCI accreditation actually looks like on the ground — from infection control protocols to the international patient lounge.",
    date: "2026-05-28",
    readTime: "9 min video",
    author: "Gurvinder Jit Singh",
    icon: "YouTube",
    content: [
      {
        type: "paragraph",
        text: "JCI — Joint Commission International — is the gold standard of hospital accreditation outside the United States. But what does it actually look like when you walk through the doors? In this video, I take you through a JCI-accredited hospital in Delhi, floor by floor.",
      },
      { type: "heading", text: "What we walk through" },
      {
        type: "list",
        items: [
          "The international patient lounge — where families are received, not just patients",
          "Infection control corridors and negative-pressure isolation rooms",
          "The hybrid cath lab — where interventional cardiology and surgery share a single sterile field",
          "The ICU, explained: nurse-to-patient ratios, monitoring systems, visitor protocols",
          "The pharmacy and cold-chain — how medications are tracked from manufacturer to bedside",
        ],
      },
      {
        type: "paragraph",
        text: "Accreditation is not a certificate on a wall. It is a set of protocols that govern every interaction — how a nurse verifies your identity, how a surgeon marks the surgical site, how an allergy is flagged. This video shows those protocols in action.",
      },
    ],
  },
  {
    slug: "patient-stories-behind-the-scenes",
    title: "Patient stories, behind the scenes",
    category: "Patient Guides",
    excerpt:
      "A weekly series on Instagram sharing the real, unfiltered journey of medical travel — from the first WhatsApp to the flight home.",
    date: "2026-05-20",
    readTime: "Weekly series",
    author: "Gurvinder Jit Singh",
    icon: "Instagram",
    content: [
      {
        type: "paragraph",
        text: "Every week on Instagram, we share a piece of a real patient journey — with consent, with names changed where requested, and with the unglamorous details left in. The goal is not to market. It is to demystify.",
      },
      {
        type: "paragraph",
        text: "If you are considering medical travel, follow along. You will see the airport pickups, the hospital corridors, the recovery suites, and the moments in between — the coffee with a coordinator, the first walk after surgery, the call home when the scan comes back clear.",
      },
    ],
  },
  {
    slug: "what-to-pack-medical-travel-india",
    title: "What to pack for medical travel to India",
    category: "Patient Guides",
    excerpt:
      "A practical checklist from 500+ patient journeys — documents, medications, comfort items, and the things you wish someone had told you before the flight.",
    date: "2026-05-12",
    readTime: "5 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    content: [
      {
        type: "paragraph",
        text: "After coordinating travel for more than 500 families, we have a packing list. It is not glamorous. But every item on it was added because a patient once needed it and did not have it.",
      },
      { type: "heading", text: "Documents (carry on, never checked)" },
      {
        type: "list",
        items: [
          "Passport with medical visa (minimum 6 months validity)",
          "Printed copies of all medical reports, scans on a USB drive",
          "Insurance documents and emergency contact list",
          "Letter from your home doctor (in English, or translated)",
          "Prescription medications in original packaging with copies of prescriptions",
        ],
      },
      { type: "heading", text: "Comfort and recovery" },
      {
        type: "list",
        items: [
          "Loose, front-buttoning clothing (easy to put on post-surgery)",
          "Slip-on shoes — no bending required",
          "A long phone charging cable (hospital beds are far from outlets)",
          "An unlocked phone for a local SIM card (we arrange this at the airport)",
          "A small pillow for the flight home — surgical incisions and cabin pressure do not mix",
        ],
      },
      {
        type: "paragraph",
        text: "We provide a welcome kit on arrival: water, snacks, a local SIM, a printed itinerary, and the direct numbers of your coordinator and lead nurse. But the items above are yours to bring.",
      },
    ],
  },
  {
    slug: "apollo-delhi-century-of-cardiac-care",
    title: "Apollo Delhi: A century of cardiac care",
    category: "Hospital Spotlights",
    excerpt:
      "How Indraprastha Apollo became one of India's most trusted cardiac destinations — and what its volume-driven model means for international patients.",
    date: "2026-05-04",
    readTime: "7 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    content: [
      {
        type: "paragraph",
        text: "Indraprastha Apollo was the first JCI-accredited hospital in India, certified in 2005. Its cardiac programme has since grown into one of the busiest in the country, performing over 3,000 cardiac surgeries annually.",
      },
      { type: "heading", text: "Why volume matters" },
      {
        type: "paragraph",
        text: "In cardiac surgery, volume is the single strongest predictor of outcomes. A surgeon who performs 400 bypasses a year has a lower complication rate than one who performs 100. Apollo's cardiac team operates at a volume that very few centres globally can match — and that experience is the core of what international patients are accessing.",
      },
      { type: "heading", text: "The international patient wing" },
      {
        type: "paragraph",
        text: "Apollo has a dedicated international patient lounge with translators for 14 languages, prayer rooms, and family accommodation within the campus. This is not an afterthought — it is a floor of the hospital designed specifically for families who have travelled from another country.",
      },
    ],
  },
  {
    slug: "post-operative-care-hotel-setting",
    title: "Post-operative care in a recovery suite",
    category: "Recovery Tips",
    excerpt:
      "The gap between hospital discharge and the flight home is the most under-managed phase of medical travel. Here is how we structure it.",
    date: "2026-04-22",
    readTime: "5 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    content: [
      {
        type: "paragraph",
        text: "Most patients assume the journey ends at discharge. It does not. The 7 to 14 days between leaving the hospital and being cleared to fly are when most complications can occur — and when most medical travel operators disappear.",
      },
      { type: "heading", text: "What a recovery suite should include" },
      {
        type: "list",
        items: [
          "On-call nursing access 24 hours a day",
          "Daily wound checks by a visiting nurse or tele-consult",
          "Coordinated physiotherapy sessions",
          "Proximity to the hospital (under 15 minutes by car)",
          "Dietary meals designed by the hospital's clinical nutritionist",
          "A coordinator who visits daily and acts as the patient's advocate",
        ],
      },
      {
        type: "paragraph",
        text: "We partner with recovery facilities that are effectively step-down wards without the hospital atmosphere. Patients rest, walk, eat well, and heal — with clinical oversight one phone call away. This phase is not optional. It is the difference between a successful surgery and a successful journey.",
      },
    ],
  },
  {
    slug: "when-can-i-fly-home-after-surgery",
    title: "When can I fly home after surgery?",
    category: "Recovery Tips",
    excerpt:
      "Fitness-to-fly timelines for common procedures — and why your surgeon's clearance, not your ticket date, determines your departure.",
    date: "2026-04-14",
    readTime: "4 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    content: [
      {
        type: "paragraph",
        text: "This is the most common question we receive from families planning their return. The answer depends on the procedure, the recovery, and the flight duration — but here are the general timelines we work with after hundreds of cases.",
      },
      { type: "heading", text: "Typical fitness-to-fly timelines" },
      {
        type: "list",
        items: [
          "Coronary bypass (CABG): 14-21 days post-surgery",
          "Joint replacement: 10-14 days, with aisle-seat and anticoagulation management",
          "Spinal fusion: 14-21 days, depending on mobility",
          "IVF embryo transfer: 2-3 days, no restrictions beyond avoiding heavy lifting",
          "Chemotherapy cycle: 3-7 days after each cycle, depending on blood counts",
          "Pediatric cardiac surgery: 21-30 days, with medical escort on the flight",
        ],
      },
      {
        type: "paragraph",
        text: "These are guidelines, not guarantees. The treating surgeon issues the fitness-to-fly certificate after a final assessment. We never book a return ticket before that clearance — and we always build buffer days into the itinerary so families are not pressured to leave before the surgeon is confident.",
      },
    ],
  },
  {
    slug: "economics-of-medical-travel",
    title: "The economics of medical travel",
    category: "Industry Notes",
    excerpt:
      "Why transparent pricing is the single biggest trust signal in this industry — and how to read a hospital estimate.",
    date: "2026-04-02",
    readTime: "8 min read",
    author: "Gurvinder Jit Singh",
    icon: "Essay",
    content: [
      {
        type: "paragraph",
        text: "A hospital estimate should be a single document that tells you exactly what you are paying for and what you are not. In practice, many estimates are opaque — bundled into a single number with no breakdown. This is the first red flag.",
      },
      { type: "heading", text: "What a transparent estimate includes" },
      {
        type: "list",
        items: [
          "Surgeon's fee, anaesthetist's fee, and assistant's fee — itemised",
          "Hospital room charges per night, with the expected length of stay",
          "Implant or device costs (if applicable) — with brand and model specified",
          "ICU charges if anticipated, and the criteria for ICU admission",
          "Diagnostics and imaging — pre-op and post-op",
          "Pharmacy and consumables",
          "What is NOT included: complications, extended stay, additional procedures",
        ],
      },
      {
        type: "paragraph",
        text: "We build every estimate as a line-item document. If a family wants to compare two hospitals, we present both in the same format — so they are comparing apples to apples. Transparency is not a marketing claim. It is a spreadsheet.",
      },
    ],
  },
];

export const CONTACT_INFO = {
  calendly: "https://calendly.com/",
  email: "care@hjunicare.com",
  phone: "+91 00000 00000",
  phoneHref: "tel:+910000000000",
  whatsapp: "https://wa.me/910000000000",
  location: "New Delhi · India",
};

export const PARTNER_NAMES = HOSPITALS.map((h) => h.name);
