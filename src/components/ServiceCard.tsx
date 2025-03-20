
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
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
        "border border-gray-100 rounded-lg p-4 transition-all duration-300",
        "hover:shadow-md bg-white",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-3 w-10 h-10 rounded-md bg-hospital-50 text-hospital-600 flex items-center justify-center">
        {icon}
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      
      <div className="mt-3">
        <a 
          href="#appointment" 
          className="text-sm text-hospital-600 font-medium hover:text-hospital-800 transition-colors"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
