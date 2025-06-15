import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import React, { Suspense, useRef } from 'react';
const HeroForm = React.lazy(() => import('../hero/HeroForm'));
import { useHashRouter } from '@/hooks/useHashRouter';

interface BookingDialogProps {
  children: React.ReactNode;
  trigger?: boolean;
}

const BookingDialog: React.FC<BookingDialogProps> = ({ children, trigger = true }) => {
  const preloadRef = useRef(false);

  // Preload HeroForm when user hovers or focuses the trigger
  const preloadHeroForm = () => {
    if (!preloadRef.current) {
      // @ts-ignore
      import('../hero/HeroForm');
      preloadRef.current = true;
    }
  };
  const { isModalOpen, navigateToBookingForm, closeModal } = useHashRouter();
  
  const isBookingOpen = isModalOpen('booking') || isModalOpen('booking/quote') || isModalOpen('booking/inspection');

  const handleOpenChange = (open: boolean) => {
    if (open) {
      navigateToBookingForm();
    } else {
      closeModal();
    }
  };

  return (
    <Dialog open={isBookingOpen} onOpenChange={handleOpenChange}>
      {trigger ? (
  <DialogTrigger asChild>
    {React.cloneElement(children as React.ReactElement, {
      onMouseEnter: (e: React.MouseEvent) => {
        preloadHeroForm();
        if (children.props.onMouseEnter) children.props.onMouseEnter(e);
      },
      onFocus: (e: React.FocusEvent) => {
        preloadHeroForm();
        if (children.props.onFocus) children.props.onFocus(e);
      },
    })}
  </DialogTrigger>
) : children}
      <DialogContent className="sm:max-w-md md:max-w-lg bg-white rounded-xl shadow-2xl border-none max-h-[95vh] overflow-y-auto p-4 sm:p-6 w-[95vw] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl text-center font-bold text-shark-darkBlue">
            Book Your Free Air Quality Inspection
          </DialogTitle>
          <p className="mt-2 text-center text-shark-blue text-base font-medium">
            No pressure, no obligation. Breathe easier today!
          </p>
        </DialogHeader>
        
        <div className="mt-2 sm:mt-4">
  <Suspense fallback={<div className="py-8 text-center text-shark-blue">Loading form...</div>}>
    <HeroForm />
  </Suspense>
</div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
