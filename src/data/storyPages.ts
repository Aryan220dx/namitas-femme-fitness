import { FOUNDER_PROFILE } from "./founder";

export type StoryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type StoryCard = {
  eyebrow: string;
  title: string;
  body: string;
};

export type TransformationStory = {
  title: string;
  category: string;
  body: string;
  image: StoryImage;
};

export const COMMUNITY_IMAGES: StoryImage[] = [
  {
    src: "/images/community/IMG-20190307-WA0010.jpg",
    alt: "Community wellness outreach by Namita's Femme Fitness.",
    caption: "Grassroots wellness outreach",
  },
  {
    src: "/images/community/IMG-20190307-WA0039.jpg",
    alt: "Women empowerment and health awareness activity.",
    caption: "Women empowerment in action",
  },
  {
    src: "/images/community/IMG-20190309-WA0008.jpg",
    alt: "Community fitness and health education gathering.",
    caption: "Health education beyond the studio",
  },
  {
    src: "/images/community/IMG-20241016-WA0015.jpg",
    alt: "Awareness program with community participants.",
    caption: "Awareness, confidence, and care",
  },
  {
    src: "/images/community/IMG-20250320-WA0012.jpg",
    alt: "Seminar and public wellness initiative.",
    caption: "Public wellness conversations",
  },
  {
    src: "/images/community/IMG-20250320-WA0019.jpg",
    alt: "Social impact activity led by Dr. Namita Sarang.",
    caption: "Service as a lived value",
  },
];

export const ASSOCIATION_IMAGES: Record<string, StoryImage[]> = {
  gch: [
    {
      src: "/images/associations/gch/IMG-20251218-WA0073.jpg",
      alt: "GCH Foundation association moment.",
      caption: "Global Community Health association",
    },
    {
      src: "/images/associations/gch/IMG20251219121642_01.jpg",
      alt: "International health leadership gathering.",
      caption: "International community health leadership",
    },
  ],
  acess: [
    {
      src: "/images/associations/acses/IMG-20251218-WA0035.jpg",
      alt: "ACESS exercise and sports science association event.",
      caption: "Exercise and sports science network",
    },
    {
      src: "/images/associations/acses/IMG20251219115358_01.jpg",
      alt: "ACESS event connected with exercise science leadership.",
      caption: "Active pathways for holistic wellbeing",
    },
  ],
  resource: [
    {
      src: "/images/associations/resource-person/IMG-20260430-WA0013.jpg",
      alt: "Dr. Namita as a resource person.",
      caption: "Resource person and educator",
    },
    {
      src: "/images/associations/resource-person/IMG-20260430-WA0016.jpg",
      alt: "Educational wellness session.",
      caption: "Teaching the science of wellness",
    },
  ],
};

export const AWARD_IMAGES: StoryImage[] = [
  {
    src: "/images/awards/IMG-20241016-WA0008.jpg",
    alt: "Award recognition for Dr. Namita Sarang.",
    caption: "Recognition for wellness leadership",
  },
  {
    src: "/images/awards/IMG-20241106-WA0061.jpg",
    alt: "Award and community recognition.",
    caption: "Community and institutional recognition",
  },
  {
    src: "/images/awards/IMG-20250123-WA0005.jpg",
    alt: "Award ceremony moment.",
    caption: "A journey of earned credibility",
  },
];

export const FOUNDER_STORY = {
  hero: {
    title: FOUNDER_PROFILE.name,
    kicker: "Founder of Namita's Femme Fitness",
    body: FOUNDER_PROFILE.descriptor,
    image: FOUNDER_PROFILE.portrait,
  },
  why: [
    "Namita's Femme Fitness exists for women who never felt fully comfortable in a unisex gym, women who needed privacy, patience, and a setting where their body would be understood without judgement.",
    "It was built for medically advised women, beginners rebuilding confidence, and women seeking a safe transformation environment where self-esteem matters as much as strength.",
    "The goal was never only fitness. It was a sanctuary where women could feel seen, supported, and professionally guided.",
  ],
  research: [
    "Dr. Namita's Ph.D. foundation connects physical education with the psychology of exercise, self-esteem, body image, confidence, and women's wellness.",
    "Her work treats movement as both science and emotional restoration: a way for women to return to trust in their own bodies.",
  ],
  origin: [
    "The journey began in Karwar in 2017 with a clear conviction: women deserved a fitness environment created around their comfort, dignity, and health realities.",
    "That origin evolved into the Dharwad expansion, carrying the same women-first philosophy into a more complete wellness and fitness centre.",
  ],
  impactStats: [
    { value: "300-400+", label: "women transformed", detail: "Across confidence, strength, self-esteem, and lifestyle change." },
    { value: "Dharwad", label: "expansion chapter", detail: "A women-only sanctuary rooted in local trust." },
    { value: "Miss India", label: "mentorship pathway", detail: "Guidance that reaches aspirational national platforms." },
    { value: "UN SDGs", label: "aligned vision", detail: "Women empowerment, wellbeing, education, and community health." },
    { value: "Global", label: "associations", detail: "GCH Foundation, ACESS, CNES Academy, and Key Squad Academy." },
  ],
  sadhvi: {
    title: "The Sadhvi Sail Story",
    body:
      "Dr. Namita's mentorship introduced Sadhvi Sail to Miss Fitness, supporting the discipline, confidence, and presentation that became part of her journey toward Femina Miss India World 2026 achievement.",
  },
  empowerment: [
    "Women entrepreneurship events, conclaves, social initiatives, and empowerment work are not separate from the studio's mission.",
    "They are the wider expression of the same belief: when women feel strong, informed, and supported, families and communities change with them.",
  ],
  associations: [
    {
      eyebrow: "GCH Foundation",
      title: "Community health on a global platform",
      body:
        "GCH Foundation is driven by promoting healthy schools and healthy children, with an international network spanning scientific advisors and community wellbeing models.",
    },
    {
      eyebrow: "ACESS",
      title: "Exercise and sports science leadership",
      body:
        "The Asian Council of Exercise and Sports Science brings regional credibility to exercise science, holistic health, and collaborative professional practice.",
    },
    {
      eyebrow: "CNES Academy",
      title: "Gold standard of training",
      body:
        "CNES positions itself around accredited health and fitness education, global recognitions, practical knowledge, and premium certification programs.",
    },
    {
      eyebrow: "Key Squad Academy",
      title: "Education, training, and leadership",
      body:
        "A professional education association that strengthens Dr. Namita's wider role as a trainer, mentor, and wellness educator.",
    },
  ] satisfies StoryCard[],
  awards: [
    { eyebrow: "CMO Asia", title: "State Women Leadership Award", body: "Recognition for leadership in the fitness sector and women-focused wellness." },
    { eyebrow: "Rotary Club", title: "Prerana Award for Women Empowerment", body: "Community recognition for work that extends beyond the studio floor." },
    { eyebrow: "FSSAI", title: "Nutrition and wellness credibility", body: "Part of a broader professional ecosystem around safe health and nutrition awareness." },
  ] satisfies StoryCard[],
};

export const ASSOCIATIONS = [
  {
    name: "Foundation for Global Community Health",
    slug: "gch",
    url: "https://gchfoundation.org",
    summary:
      "A global community health foundation focused on healthy schools, healthy children, and sharing school-based wellbeing resources through an international advisor network.",
    markers: ["Healthy schools", "Student wellbeing", "Global scientific advisors", "SDG-aligned community impact"],
  },
  {
    name: "ACESS",
    slug: "acess",
    url: "https://gchfoundation.org/acess.html",
    summary:
      "An exercise and sports science platform connected to active, innovative pathways and collaborative practices for holistic health and wellbeing.",
    markers: ["Executive board positioning", "Exercise science", "Sports science", "Holistic wellbeing"],
  },
  {
    name: "CNES Academy",
    slug: "cnes",
    url: "https://cnes.online",
    summary:
      "CNES presents itself as a gold standard training institute with internationally accredited courses, global recognitions, and practical health and fitness education.",
    markers: ["Accredited courses", "Global recognitions", "Fitness education", "Practical knowledge"],
  },
  {
    name: "Key Squad Academy",
    slug: "key-squad",
    url: "#",
    summary:
      "A professional training and education association supporting mentorship, leadership, and applied wellness learning.",
    markers: ["Education partnership", "Training culture", "Mentorship", "Professional growth"],
  },
];

export const TRANSFORMATION_FILTERS = ["Weight Management", "Confidence", "Strength", "Post-Medical", "Senior Wellness"];

export const TRANSFORMATION_STORIES: TransformationStory[] = [
  {
    title: "Senior Wellness & Mobility",
    category: "Senior Wellness",
    body:
      "Supportive movement for graceful aging, balance, mobility, and strength. Each session is shaped around safety, confidence, and the quiet dignity of staying active through every stage of life.",
    image: {
      src: "/images/transformations/senior-wellness.webp",
      alt: "Senior wellness consultation and supportive mobility guidance.",
      caption: "Safe strength, mobility, and graceful aging",
    },
  },
  {
    title: "Post Medical Recovery",
    category: "Post-Medical",
    body:
      "Guided movement for women rebuilding trust in their bodies after medical challenges. The focus is patient-centered progress, careful coaching, and confidence that returns gently.",
    image: {
      src: "/images/transformations/post-medical-recovery.webp",
      alt: "Guided post medical recovery movement with professional support.",
      caption: "Patient-centered movement after medical challenges",
    },
  },
  {
    title: "Strength & Functional Conditioning",
    category: "Strength",
    body:
      "Progressive training for modern women's strength: resilient movement, better posture, steady form, and the confidence that comes from feeling capable in everyday life.",
    image: {
      src: "/images/transformations/strength-conditioning.webp",
      alt: "Woman strength training with dumbbells in a wellness studio.",
      caption: "Functional strength with calm progression",
    },
  },
  {
    title: "Confidence Beyond Fitness",
    category: "Confidence",
    body:
      "Transformation is also emotional. This pathway supports self-esteem, body confidence, presence, and the empowering shift of feeling at home in your own strength.",
    image: {
      src: "/images/transformations/confidence-transformation.webp",
      alt: "Woman speaking confidently during a wellness empowerment session.",
      caption: "Confidence, presence, and self-belief",
    },
  },
  {
    title: "Healthy Weight Management",
    category: "Weight Management",
    body:
      "A sustainable, non-shaming approach to wellness transformation. The emphasis is guided consistency, healthy lifestyle shifts, and long-term balance that can actually be lived.",
    image: {
      src: "/images/transformations/weight-management.webp",
      alt: "Healthy weight management transformation comparison.",
      caption: "Sustainable progress with long-term balance",
    },
  },
];

export const TEAM = [
  {
    name: "Priyanka Jadhav",
    role: "SENIOR TRAINER",
    image: {
      src: "/images/team/priyanka-jadhav.jpeg",
      alt: "Priyanka Jadhav, Senior Trainer at Namita's Femme Fitness.",
    },
    intro:
      "Priyanka brings the discipline of a competitive athlete into the training floor. With a strong background in Basketball, Netball, and Handball, she coaches with composure, intensity, and a grounded belief in steady progress.",
    groups: [
      {
        title: "Athletic Foundation",
        items: [
          "Basketball, Netball, and Handball shaped her movement intelligence and team-first discipline.",
          "Bronze medalist at the Senior National Netball Championship.",
          "Represented across 15 Inter-University South Zone and All India tournaments.",
        ],
      },
      {
        title: "Competitive Recognition",
        items: [
          "Recognized through MVP, Best Shooter, and Best Player awards.",
          "Best Player award at the Kerala Handball South Zone Tournament in 2026.",
          "Carries tournament-tested confidence into every session she leads.",
        ],
      },
      {
        title: "Leadership",
        items: [
          "Led teams as Captain with calm authority and accountability.",
          "Served as Sports Secretary at JSS College.",
          "Builds training environments where discipline feels motivating, not intimidating.",
        ],
      },
    ],
  },
  {
    name: "Samata Sarvankar",
    role: "TRAINER",
    image: {
      src: "/images/team/samata-sarvankar.jpeg",
      alt: "Samata Sarvankar, Trainer at Namita's Femme Fitness.",
    },
    intro:
      "Samata brings movement, rhythm, and momentum into high-energy classes. Her sessions are warm, motivating, and designed to help women feel capable while building confidence in a supportive training atmosphere.",
    groups: [
      {
        title: "Training Energy",
        items: [
          "Leads momentum-driven sessions with a positive coaching style.",
          "Creates an energetic class environment without losing personal attention.",
          "Focuses on confidence, consistency, and movement that feels alive.",
        ],
      },
    ],
  },
  {
    name: "Aarti Patil",
    role: "CERTIFIED NUTRITIONAL ADVISOR",
    image: {
      src: "/images/team/aarti-patil.jpeg",
      alt: "Aarti Patil, Certified Nutritional Advisor at Namita's Femme Fitness.",
    },
    intro:
      "Aarti supports the wellness journey through calm, practical nutritional guidance. Her approach is balanced, women-first, and rooted in everyday healthy living rather than overwhelming rules.",
    groups: [
      {
        title: "Wellness Guidance",
        items: [
          "Supports balanced nutrition and practical healthy living.",
          "Helps women connect food choices with sustainable wellbeing.",
          "Brings a calm, trustworthy presence to wellness planning.",
        ],
      },
    ],
  },
];

export const CONTACT_CTA = {
  title: "Begin Your Journey",
  body: "Step into a women-only wellness space where science, care, and confidence meet.",
  href: "/#contact",
};
