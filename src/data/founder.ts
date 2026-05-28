import { BUSINESS_INFO } from "./business";
import { SITE_ASSETS, type ImageAsset } from "./siteAssets";

export type FounderStat = {
  label: string;
  value: string;
  detail: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

export type AuthorityItem = {
  label: string;
  title: string;
  description: string;
};

export type PublicationItem = {
  title: string;
  role: string;
  detail: string;
};

export type CertificationItem = {
  title: string;
  category: string;
};

export type HumanLayerItem = {
  title: string;
  description: string;
};

export const FOUNDER_PROFILE = {
  name: "Dr. Namita Sarang",
  brand: BUSINESS_INFO.name,
  title: "Ph.D. · Fitness Expert · Wellness Architect",
  descriptor: "Internationally recognized. Academically validated. Built for women, by a woman.",
  portrait: SITE_ASSETS.founder.portrait satisfies ImageAsset,
  heroCredentials: [
    "15+ Years Experience",
    "Ph.D. Physical Education",
    "State Awardee",
    "Asian Council Board Member",
    "Internationally Recognized",
  ],
  manifesto:
    "I didn't just study the science of movement. I lived it — on the field, in the lab, and in every woman I've had the privilege of training.",
  philosophy:
    "Namita's Femme Fitness was built as a women-only sanctuary where academic rigor, athletic discipline, and human care meet.",
};

export const ATHLETIC_STATS: FounderStat[] = [
  {
    value: "National Level",
    label: "Hammer Throw",
    detail: "Represented athletic excellence before shaping it in others.",
  },
  {
    value: "3 Years",
    label: "University Weightlifting",
    detail: "A sustained university-level strength legacy.",
  },
  {
    value: "State Medals",
    label: "Javelin & Shot Put",
    detail: "Competition forged the precision behind her coaching.",
  },
];

export const ACHIEVEMENT_TIMELINE: TimelineItem[] = [
  {
    year: "2005",
    title: "B.P.Ed.",
    institution: "Shri K.G. Nadgir College, Dharwad",
    description: "Formal academic foundation in physical education and training science.",
  },
  {
    year: "2006",
    title: "PG Diploma in Fitness Management",
    institution: "Symbiosis International University, Pune",
    description: "Built a management lens for fitness, wellness, and institutional programs.",
  },
  {
    year: "2008",
    title: "M.P.Ed.",
    institution: "Karnatak University, Dharwad",
    description: "Deepened her research-led understanding of human movement and performance.",
  },
  {
    year: "2009",
    title: "UGC-NET Qualified",
    institution: "National Eligibility",
    description: "A benchmark of academic credibility and teaching readiness.",
  },
  {
    year: "2010-2015",
    title: "Director of Physical Education & Sports",
    institution: "Gogte Institute of Technology, Belagavi",
    description: "Led sports culture, training programs, and student athletic development.",
  },
  {
    year: "2012-2018",
    title: "Assistant Director of Sports",
    institution: "Visvesvaraya Technological University",
    description: "Contributed to institutional sports leadership at university scale.",
  },
  {
    year: "2014-2015",
    title: "SLET Qualified",
    institution: "State Eligibility",
    description: "Strengthened her academic authority in physical education.",
  },
  {
    year: "2020",
    title: "State Women Leadership Award",
    institution: "CMO Asia · Fitness Sector",
    description: "Recognized for leadership in fitness, wellness, and women's empowerment.",
  },
  {
    year: "2020",
    title: "Ms. Champion Attitude",
    institution: "Miss Wellness India",
    description: "A personal recognition of confidence, presence, and wellness leadership.",
  },
  {
    year: "2020",
    title: "Prerana Award for Women Empowerment",
    institution: "Rotary Club Kumata",
    description: "Honored for community impact and her contribution to women's agency.",
  },
  {
    year: "Ongoing",
    title: "Founder & Master Trainer",
    institution: "Namita's Femme Fitness, Dharwad",
    description: "Built a women-only wellness space rooted in science, safety, and care.",
  },
  {
    year: "Ongoing",
    title: "Executive Board Member",
    institution: "Asian Council for Exercise & Sports Science",
    description: "Represents international authority in exercise science and wellness education.",
  },
  {
    year: "Ongoing",
    title: "Future Leader",
    institution: "Foundation for Global Community Health, USA",
    description: "Part of a global health network focused on community wellbeing.",
  },
  {
    year: "2025",
    title: "Ph.D. in Physical Education",
    institution: "Rayalaseema University, Andhra Pradesh",
    description: "The crowning academic milestone in a life devoted to movement and health.",
  },
];

export const AUTHORITY_ITEMS: AuthorityItem[] = [
  {
    label: "Academic",
    title: "Ph.D. in Physical Education",
    description: "Her methodology is grounded in evidence, research, and disciplined study.",
  },
  {
    label: "International",
    title: "Asian Council Board Member",
    description: "Executive Board Member at the Asian Council for Exercise & Sports Science.",
  },
  {
    label: "Global Health",
    title: "Future Leader, USA",
    description: "Recognized by the Foundation for Global Community Health.",
  },
  {
    label: "Leadership",
    title: "State Women Leadership Award",
    description: "CMO Asia recognition for her leadership in the fitness sector.",
  },
  {
    label: "Institutional",
    title: "Former Assistant Director of Sports",
    description: "Served at Visvesvaraya Technological University with sports administration reach.",
  },
  {
    label: "Community",
    title: "Women Empowerment Awardee",
    description: "Prerana Award recognition for her impact beyond the studio floor.",
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "ABC's of Group Fitness",
    role: "Sole Author",
    detail: "ISBN: 978-93-5673-333-6",
  },
  {
    title: "All About Tournaments and Fixtures",
    role: "Co-Author",
    detail: "ISBN: 978-93-92804-37-3",
  },
  {
    title: "Handball, Beach Handball, Mini Handball Niyamagala Kaipidi",
    role: "Co-Author",
    detail: "A practical sports education reference.",
  },
  {
    title: "Netball Aatad Niyamagalu",
    role: "Co-Author",
    detail: "Approved by Karnataka Netball Association.",
  },
  {
    title: "Research Papers",
    role: "Published Scholar",
    detail: "Multiple national and international journal publications.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { title: "NSDC Certified Fitness Trainer", category: "National Skill Development" },
  { title: "Functional Fitness", category: "Movement & Strength" },
  { title: "Trainer for Special Populations", category: "Inclusive Wellness" },
  { title: "Sports Nutrition", category: "Nutrition" },
  { title: "Strength & Conditioning", category: "Performance" },
  { title: "Sports Supplementation", category: "Applied Wellness" },
  { title: "Group Fitness Instruction", category: "Program Design" },
  { title: "Clinical Fitness Foundations", category: "Therapeutic Care" },
  { title: "Corporate Wellness", category: "Community Health" },
];

export const HUMAN_LAYER_ITEMS: HumanLayerItem[] = [
  {
    title: "Dancer & Choreographer",
    description: "Movement is not only science for her. It is rhythm, expression, and joy.",
  },
  {
    title: "Singer",
    description: "A creative life gives warmth to the rigor of her academic and athletic work.",
  },
  {
    title: "Animal Welfare",
    description: "Her compassion extends into finding shelter and care for stray animals.",
  },
  {
    title: "Multilingual Guide",
    description: "English, Hindi, Kannada, Marathi, and Konkani help her meet women where they are.",
  },
  {
    title: "Women Empowerment Advocate",
    description: "Her studio is a sanctuary where confidence, health, and agency are honored.",
  },
];
