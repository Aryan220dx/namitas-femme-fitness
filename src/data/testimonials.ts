export type ReviewPlatform = "Google" | "Justdial" | "Website";

export type Testimonial = {
  name: string;
  rating: number;
  review: string;
  platform: ReviewPlatform;
  avatar?: string;
  featured?: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Client Voice 01",
    rating: 5,
    platform: "Website",
    review:
      "Joining the Zumba class was a great experience for me. The sessions are very energetic, fun, and motivating. The trainer explains the steps clearly and makes everyone feel comfortable. I feel more active, confident, and stress-free after attending the classes. Thank you for creating such a positive and friendly environment.",
    featured: true,
  },
  {
    name: "Client Voice 02",
    rating: 5,
    platform: "Website",
    review:
      "Really enjoying the Zumba classes! The trainer is very supportive and energetic. The sessions are fun, refreshing, and helpful for fitness and stress relief. Thank you for the wonderful experience.",
  },
  {
    name: "Client Voice 03",
    rating: 5,
    platform: "Website",
    review:
      "As a beginner, I love this place. Trainers are always around to guide and help if our form isn’t quite right, which makes the whole experience feel very safe and supportive. The group classes for Dance and Yoga are a total highlight. The Trainer is extremely knowledgeable, professional, and genuinely passionate about fitness.",
    featured: true,
  },
  {
    name: "Client Voice 04",
    rating: 5,
    platform: "Website",
    review: "Motivation and support for weight loss its good",
  },
  {
    name: "Client Voice 05",
    rating: 5,
    platform: "Website",
    review:
      "Namita’s Femme Fitness is a great place for women who want to stay fit in a comfortable and motivating environment. The trainer is very supportive, friendly, and gives personal attention to everyone. The workouts are enjoyable and different every day, which keeps fitness interesting. The atmosphere is positive, clean, and encouraging for beginners as well as regular members. It is a wonderful fitness center for improving both physical and mental health.",
    featured: true,
  },
  {
    name: "Client Voice 06",
    rating: 5,
    platform: "Website",
    review:
      "Namita femme Fitness is a great place to start and continue your fitness journey. The gym has a clean and well-maintained environment with good quality equipment for all types of workouts. The trainers are friendly, supportive, and always ready to guide you properly.",
  },
  {
    name: "Client Voice 07",
    rating: 5,
    platform: "Website",
    review:
      "Great gym with good equipment, helpful trainers, and a positive atmosphere. Clean, well-maintained, and perfect for fitness goals. Highly recommended!",
  },
  {
    name: "Client Voice 08",
    rating: 5,
    platform: "Website",
    review:
      "Namitas Femme Fitness is the best place for women’s fitness and confidence building. Very positive environment and excellent training. Trainer Namita mam is very supportive, motivating, and inspiring. Her guidance helped me improve my fitness and confidence a lot.\n\nI feel very comfortable and happy at Namitas Femme Fitness. Friendly atmosphere, good workouts, and amazing results. Namita mam’s dedication and energy are next level. She motivates everyone to stay strong and healthy.\n\nClean gym, positive vibes, and professional training. One of the best fitness centers for women.\n\nJoining Namitas Femme Fitness was a great decision for my fitness journey.",
    featured: true,
  },
];
