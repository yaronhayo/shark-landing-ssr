import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const dirtyDuctsImages = [
  {
    id: 1, // Updated ID for consistency
    src: "/images/airductdirty1.webp",
    alt: "Close-up of a very dirty air duct before cleaning",
  },
];

const DirtyDuctsGallery: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {dirtyDuctsImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden border-0 shadow-lg">
                    <CardContent className="p-0">
                      <AspectRatio ratio={1} className="bg-gray-100">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                          loading="lazy"
                          decoding="async"
                        />
                      </AspectRatio>
                    </CardContent>
                  </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex justify-center gap-2">
            <CarouselPrevious className={`relative inset-0 translate-y-0 ${isMobile ? 'mr-4' : 'mr-8'}`} />
            <CarouselNext className={`relative inset-0 translate-y-0 ${isMobile ? 'ml-4' : 'ml-8'}`} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DirtyDuctsGallery;
