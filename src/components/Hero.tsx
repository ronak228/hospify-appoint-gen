
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-hospital-100/50 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-hospital-100/50 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-hospital-200/40 blur-2xl animate-pulse-soft"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hospital-100 text-hospital-700 text-sm font-medium animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-hospital-500 mr-2"></span>
                Caring for your health, every day
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-hospital-900 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <span className="text-hospital-600">Quality Healthcare</span> for the Whole Family
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Experience compassionate care and advanced medical services. Book your appointment today for a healthier tomorrow.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#appointment" 
                className={cn(
                  "btn-hover-effect inline-flex items-center justify-center px-8 py-3.5 rounded-full",
                  "bg-hospital-600 text-white font-medium shadow-lg shadow-hospital-500/25",
                  "hover:bg-hospital-700 transition-colors duration-300"
                )}
              >
                Book Appointment
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a 
                href="#services" 
                className={cn(
                  "inline-flex items-center justify-center px-8 py-3.5 rounded-full",
                  "bg-white text-hospital-800 font-medium border border-gray-200",
                  "hover:bg-gray-50 transition-colors duration-300"
                )}
              >
                Our Services
              </a>
            </div>

            <div className="flex items-center space-x-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <div className={`w-full h-full bg-hospital-${i*100} flex items-center justify-center text-white text-sm font-medium`}>
                      {i}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-medium text-gray-900">500+ Satisfied Patients</div>
                <div className="text-gray-500">In the last month</div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] w-full max-w-lg mx-auto lg:max-w-none animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass-panel rounded-3xl w-full h-full overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-hospital-50/50 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-32 h-32 rounded-full bg-hospital-100 mx-auto flex items-center justify-center">
                      <span className="text-hospital-600 text-6xl font-bold">H+</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-medium text-hospital-800">Advanced Healthcare</h3>
                    <p className="mt-2 text-hospital-600">Modern facilities and technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
