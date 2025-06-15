
export interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    name: "Jennifer L.",
    location: "Austin, TX",
    rating: 5,
    text: "Shark Duct Cleaning transformed my home's air quality! After they cleaned our air ducts, I noticed my son's allergies improved dramatically. Their technicians were professional and explained everything. Worth every penny for a healthier home!",
    date: "April 12, 2025"
  },
  {
    name: "Michael T.",
    location: "San Marcos, TX",
    rating: 5,
    text: "We had our dryer vent cleaned after noticing clothes were taking longer to dry. The technician showed me how much lint was built up - it was shocking! Now our dryer is efficient again and I feel safer knowing we've reduced our fire risk.",
    date: "March 25, 2025"
  },
  {
    name: "Sarah K.",
    location: "San Antonio, TX",
    rating: 5,
    text: "After Shark cleaned our air ducts, the difference in air quality was immediate. We didn't realize how much dust and allergens were circulating until they were gone! The cedar fever season was much more bearable this year.",
    date: "March 3, 2025"
  },
  {
    name: "David R.",
    location: "Round Rock, TX",
    rating: 5,
    text: "Had both our chimney and ducts cleaned by Shark. The chimney service was exceptional - they were thorough and made sure everything was operating safely. Now we can enjoy our fireplace without worry!",
    date: "February 18, 2025"
  },
  {
    name: "Lisa M.",
    location: "New Braunfels, TX",
    rating: 5,
    text: "Outstanding service cleaning our dryer vent. The technician was on time, professional, and explained the importance of regular maintenance. I'm amazed at how much lint they removed - no wonder our clothes weren't drying properly!",
    date: "January 30, 2025"
  }
];
