import React, { useRef } from 'react';
import StartPage from './StartPage';
import NameForm from './NameForm';
import EmailForm from './EmailForm';
import CountryForm from './CountryForm';
import PhoneNumberForm from './PhoneForm';
import LanguagesForm from './LanguagesForm';
import CodingExperienceForm from './CodingExperienceForm';
import AnnualCompensationForm from './AnnualCompensationForm';
import CertifyingStatementForm from './CertifyingStatementForm';

const ScrollingComponent = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const ref9 = useRef(null);

  const sections = [
    { component: <StartPage onStart={() => scrollToSection(1)} />, ref: ref1 },
    { component: <NameForm onNext={() => scrollToSection(2)} />, ref: ref2 },
    { component: <EmailForm onNext={() => scrollToSection(3)} onPrevious={() => scrollToSection(1)} />, ref: ref3 },
    { component: <CountryForm onNext={() => scrollToSection(4)} onPrevious={() => scrollToSection(2)} />, ref: ref4 },
    { component: <PhoneNumberForm onNext={() => scrollToSection(5)} onPrevious={() => scrollToSection(3)} />, ref: ref5 },
    { component: <LanguagesForm onNext={() => scrollToSection(6)} onPrevious={() => scrollToSection(4)} />, ref: ref6 },
    { component: <CodingExperienceForm onNext={() => scrollToSection(7)} onPrevious={() => scrollToSection(5)} />, ref: ref7 },
    { component: <AnnualCompensationForm onNext={() => scrollToSection(8)} onPrevious={() => scrollToSection(6)} />, ref: ref8 },
    { component: <CertifyingStatementForm onPrevious={() => scrollToSection(7)} />, ref: ref9 },
  ];

  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      sections[index].ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      {sections.map((section, index) => (
        <div
          key={index}
          ref={section.ref}
          className="h-screen flex items-center justify-center w-full"
        >
          {section.component}
        </div>
      ))}
    </div>
  );
};

export default ScrollingComponent;
