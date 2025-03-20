
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface DoctorCardProps {
  name: string;
  specialty: string;
  image: string;
  index: number;
}

const DoctorCard = ({ name, specialty, image, index }: DoctorCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card rounded-2xl overflow-hidden transition-all duration-500 group",
        "hover:shadow-xl hover:-translate-y-2",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-64 overflow-hidden">
        <div 
          className="w-full h-full bg-gray-200 transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-medium text-gray-900">{name}</h3>
        <p className="text-hospital-600 font-medium">{specialty}</p>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-2">
            <span className="w-8 h-8 rounded-full bg-hospital-100 flex items-center justify-center text-hospital-600 transition-colors hover:bg-hospital-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </span>
            <span className="w-8 h-8 rounded-full bg-hospital-100 flex items-center justify-center text-hospital-600 transition-colors hover:bg-hospital-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </span>
          </div>
          
          <a 
            href="#appointment" 
            className="px-4 py-2 rounded-full bg-hospital-600 text-white font-medium text-sm hover:bg-hospital-700 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
