interface Promotion {
  title: string;
  price: string;
  originalPrice: string;
  description: string;
  benefits: string[];
}

export const promotionData: Promotion[] = [
  {
    title: "Air Duct Cleaning",
    price: "$89",
    originalPrice: "$199",
    description: "Breathe easier with a deep clean that removes dust, allergens, and contaminants.",
    benefits: [
      "Removes harmful buildup",
      "Boosts indoor air quality",
      "Reduces allergy symptoms"
    ]
  },
  {
    title: "Dryer Vent Cleaning",
    price: "$85",
    originalPrice: "$150",
    description: "Protect your home from fire hazards and boost dryer efficiency.",
    benefits: [
      "Prevents dryer fires",
      "Improves drying speed",
      "Extends appliance life"
    ]
  },
  {
    title: "Air Duct + Dryer Vent Combo",
    price: "$149",
    originalPrice: "$249",
    description: "The ultimate home air care package—save more, breathe better.",
    benefits: [
      "Complete home protection",
      "Best value for families",
      "One visit, total peace of mind"
    ]
  },
  {
    title: "Duct & Vent Inspection",
    price: "$49",
    originalPrice: "$99",
    description: "Get peace of mind with a full system check. Fee waived with service.",
    benefits: [
      "Comprehensive safety check",
      "Expert recommendations",
      "No obligation"
    ]
  }
];
