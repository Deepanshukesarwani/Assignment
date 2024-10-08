// components/LoadingComponent.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CenterImg from "/public/icons/paperPlane.gif"
import circularGif from "/public/icons/circularloader.gif"
interface LoadingComponentProps {
  planeImage?: string; // URL for the paper plane image
}

const LoadingComponent: React.FC<LoadingComponentProps> = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { id: 1, text: 'Searching 400+ flights' },
    { id: 2, text: 'Attaching company rules' },
    { id: 3, text: 'Serving best results' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep < steps.length ? prevStep + 1 : prevStep));
    }, 1000); // Change steps every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [steps.length]);

  return (
    <div className="w-[323px] h-[300px] absolute left-0 top-10 mx-auto flex-col  inset-0 z-50 bg-white rounded-[16px_0_0_0] border border-gray-200 shadow-lg p-4">
      {/* Plane Image */}
      <div className="flex justify-center">
        <Image src={CenterImg} alt="Paper plane" className="h-[9.3rem] w-[9.3rem] mb-4" />
      </div>

      {/* Loading Steps */}
      <ul className="space-y-2 flex-col items-center justify-center">
        {steps.map((step, index) => (
          <li key={step.id} className="  ml-4  ">
            <div className=' flex space-x-4 '>
            <span>
              {index < activeStep ? (
                <span className="text-green-500">✔</span>
              ) : index === activeStep ? (
                // <span className="loader h-4 w-4 border-4 border-t-green-500 border-gray-200 rounded-full animate-spin"></span>
                <Image src={circularGif} alt='circular loader' className='h-4 w-4'/>
              ) : (
                // <span className="w-4 h-4 border-4 rounded-full border-gray-300"></span>
                <div className='h-4 w-4'></div>
              )}
            </span>
            <span className={index <= activeStep ? 'text-black' : 'text-gray-400'}>{step.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoadingComponent;
