import React from 'react';
import { Phone, CalendarDays, Shield, Star, Award } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    text: "Licensed & Bonded",
    description: "Full insurance coverage"
  },
  {
    icon: Star,
    text: "250+ Five Star Reviews",
    description: "Austin's top-rated service"
  },
  {
    icon: Award,
    text: "Military & Seniors Discount",
    description: "10% off with valid ID"
  }
];

const HeroTrustBadges = React.memo(() => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      {badges.map((badge, index) => (
        <div 
          key={index}
          className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-200"
        >
          <badge.icon className="h-8 w-8 text-shark-accent mb-2" />
          <h3 className="font-semibold text-sm">{badge.text}</h3>
          <p className="text-xs text-white/80">{badge.description}</p>
        </div>
      ))}
    </div>
  );
});

HeroTrustBadges.displayName = 'HeroTrustBadges';

export default HeroTrustBadges; 