import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RotateCcw } from 'lucide-react';
import airpodLeft from '@/assets/airpod-left.png';
import airpodRight from '@/assets/airpod-right.png';
import airpodCase from '@/assets/airpod-case.png';
import iphoneModelNumber from '@/assets/iphone-model-number.png';

type PartType = 'left' | 'right' | 'case' | null;

const airpodsData = {
  generations: {
    airpods_1: {
      label: "AirPods (1e gen)",
      ios_models: ["A1523", "A1722"],
      case_models: ["A1602"],
      bud_models: { L: ["A1722"], R: ["A1523"] },
      urls: { left: "/product/airpod-links-gen-1", right: "/product/airpod-rechts-gen-1", case: "/product/oplaadcase-gen-1" }
    },
    airpods_2: {
      label: "AirPods (2e gen)",
      ios_models: ["A2032", "A2031"],
      case_models: ["A1602", "A1938"],
      bud_models: { L: ["A2031"], R: ["A2032"] },
      urls: { left: "/product/airpod-links-gen-2", right: "/product/airpod-rechts-gen-2", case: "/product/oplaadcase-gen-2" }
    },
    airpods_3: {
      label: "AirPods (3e gen)",
      ios_models: ["A2565", "A2564"],
      case_models: ["A2566", "A2897"],
      bud_models: { L: ["A2564"], R: ["A2565"] },
      urls: { left: "/product/airpod-links-gen-3", right: "/product/airpod-rechts-gen-3", case: "/product/oplaadcase-gen-3" }
    },
    airpods_pro_1: {
      label: "AirPods Pro (1e gen)",
      ios_models: ["A2084", "A2083"],
      case_models: ["A2190"],
      bud_models: { L: ["A2084"], R: ["A2083"] },
      urls: { left: "/product/airpod-pro-links-gen-1", right: "/product/airpod-pro-rechts-gen-1", case: "/product/oplaadcase-pro-gen-1" }
    },
    airpods_pro_2_lightning: {
      label: "AirPods Pro (2e gen) – Lightning",
      ios_models: ["A2931", "A2699", "A2698"],
      case_models: ["A2700"],
      bud_models: { L: ["A2699"], R: ["A2698"] },
      urls: { left: "/product/airpod-pro-2-links-lightning", right: "/product/airpod-pro-2-rechts-lightning", case: "/product/oplaadcase-pro-2-lightning" }
    },
    airpods_pro_2_usbc: {
      label: "AirPods Pro (2e gen) – USB-C",
      ios_models: ["A3047", "A3048", "A3049"],
      case_models: ["A2968"],
      bud_models: { L: ["A3048"], R: ["A3047"] },
      urls: { left: "/product/airpod-pro-2-links-usbc", right: "/product/airpod-pro-2-rechts-usbc", case: "/product/oplaadcase-pro-2-usbc" }
    },
    airpods_4: {
      label: "AirPods (4e gen)",
      ios_models: ["A3053", "A3050", "A3054"],
      case_models: ["A3058"],
      bud_models: { L: ["A3053"], R: ["A3050"] },
      urls: { left: "/product/airpod-links-gen-4", right: "/product/airpod-rechts-gen-4", case: "/product/oplaadcase-gen-4" }
    },
    airpods_4_anc: {
      label: "AirPods (4e gen) ANC",
      ios_models: ["A3056", "A3055", "A3057"],
      case_models: ["A3059"],
      bud_models: { L: ["A3056"], R: ["A3055"] },
      urls: { left: "/product/airpod-links-gen-4-anc", right: "/product/airpod-rechts-gen-4-anc", case: "/product/oplaadcase-gen-4-anc" }
    }
  }
};

const allIosModels = Array.from(new Set(
  Object.values(airpodsData.generations).flatMap(gen => gen.ios_models)
)).sort();

const allCaseModels = Array.from(new Set(
  Object.values(airpodsData.generations).flatMap(gen => gen.case_models)
)).sort();

const allBudModels = Object.values(airpodsData.generations).flatMap(gen => [
  ...gen.bud_models.L.map(m => ({ model: m, side: 'L' as const })),
  ...gen.bud_models.R.map(m => ({ model: m, side: 'R' as const }))
]);

const PodFinder = () => {
  const location = useLocation();
  const isEnglish = location.pathname.startsWith('/en');
  
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPart, setSelectedPart] = useState<PartType>(null);

  const t = {
    title: 'AirPodFinder',
    step: isEnglish ? 'Step' : 'Stap',
    of: isEnglish ? 'of' : 'van',
    step1Question: isEnglish ? 'Which replacement part do you need?' : 'Welk vervangend apparaat heb je nodig?',
    leftAirPod: isEnglish ? 'Single left AirPod' : 'Losse linker AirPod',
    rightAirPod: isEnglish ? 'Single right AirPod' : 'Losse rechter AirPod',
    chargingCase: isEnglish ? 'Single charging case' : 'Losse oplaadcase',
    step2Question: isEnglish ? 'Do you have an iPhone and are you connected to your AirPods via Bluetooth?' : 'Heb je een iPhone en ben je via Bluetooth verbonden met je AirPods?',
    step2Instructions: isEnglish ? 'Go to Settings → Bluetooth → tap the (i) icon next to your AirPods' : 'Ga naar Instellingen → Bluetooth → tik op het (i)-icoon bij je AirPods',
    step2ImageAlt: isEnglish ? 'How to find the model number in iPhone settings' : 'Hoe je het modelnummer vindt in iPhone instellingen',
    step3Question: isEnglish ? 'Do you have your charging case at hand?' : 'Heb je je oplaadcase bij de hand?',
    step3Instructions: isEnglish ? 'Look at the engraving on the inside of the lid' : 'Kijk naar de gravure aan de binnenkant van het deksel',
    step4Question: isEnglish ? 'Do you have one of your AirPods at hand?' : 'Heb je een van je AirPods bij de hand?',
    step4Instructions: isEnglish ? 'Look at the number under the "head" of the AirPod' : 'Kijk naar het nummer onder de "kop" van de AirPod',
    skipQuestion: isEnglish ? 'Skip question' : 'Vraag overslaan',
    reset: isEnglish ? 'Reset' : 'Opnieuw',
    startOver: isEnglish ? 'Start over' : 'Opnieuw beginnen',
    leftAlt: isEnglish ? 'Left AirPod' : 'Linker AirPod',
    rightAlt: isEnglish ? 'Right AirPod' : 'Rechter AirPod',
    caseAlt: isEnglish ? 'Charging case' : 'Oplaadcase',
  };

  const handlePartSelect = (part: PartType) => {
    setSelectedPart(part);
    setCurrentStep(2);
  };

  const handleSkipStep = () => {
    if (currentStep === 2) setCurrentStep(3);
    else if (currentStep === 3) setCurrentStep(4);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedPart(null);
  };

  const handleModelSelection = (model: string, type: 'ios' | 'case' | 'bud', side?: 'L' | 'R') => {
    for (const [, genData] of Object.entries(airpodsData.generations)) {
      let matched = false;
      
      if (type === 'ios' && genData.ios_models.includes(model)) matched = true;
      else if (type === 'case' && genData.case_models.includes(model)) matched = true;
      else if (type === 'bud' && (genData.bud_models.L.includes(model) || genData.bud_models.R.includes(model))) matched = true;

      if (matched && selectedPart) {
        let url = '';
        if (selectedPart === 'case') url = genData.urls.case;
        else if (selectedPart === 'left') url = genData.urls.left;
        else if (selectedPart === 'right') url = genData.urls.right;
        
        // Add /en prefix for English pages
        if (isEnglish) {
          url = '/en' + url;
        }
        
        window.location.href = url;
        return;
      }
    }
  };

  const progressValue = (currentStep / 4) * 100;

  return (
    <section id="podfinder" className="py-12 md:py-16 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-10">
        <Card className="max-w-2xl mx-auto overflow-hidden border-border shadow-card bg-background">
          <Progress value={progressValue} className="h-1 rounded-none" />
          
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">{t.title}</h2>
              <p className="text-sm text-muted-foreground">{t.step} {currentStep} {t.of} 4</p>
            </div>

            {/* Step 1: Part Selection */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-lg md:text-xl font-medium text-center text-foreground mb-8">
                  {t.step1Question}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    onClick={() => handlePartSelect('left')}
                    className="flex flex-col items-center p-6 bg-background border border-border rounded-2xl hover:border-primary hover:bg-accent/30 transition-all duration-200 group"
                  >
                    <img src={airpodLeft} alt={t.leftAlt} className="w-24 h-24 object-contain mb-4 group-hover:scale-105 transition-transform" />
                    <span className="font-medium text-foreground">{t.leftAirPod}</span>
                  </button>
                  <button
                    onClick={() => handlePartSelect('right')}
                    className="flex flex-col items-center p-6 bg-background border border-border rounded-2xl hover:border-primary hover:bg-accent/30 transition-all duration-200 group"
                  >
                    <img src={airpodRight} alt={t.rightAlt} className="w-24 h-24 object-contain mb-4 group-hover:scale-105 transition-transform" />
                    <span className="font-medium text-foreground">{t.rightAirPod}</span>
                  </button>
                  <button
                    onClick={() => handlePartSelect('case')}
                    className="flex flex-col items-center p-6 bg-background border border-border rounded-2xl hover:border-primary hover:bg-accent/30 transition-all duration-200 group"
                  >
                    <img src={airpodCase} alt={t.caseAlt} className="w-24 h-24 object-contain mb-4 group-hover:scale-105 transition-transform" />
                    <span className="font-medium text-foreground">{t.chargingCase}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: iOS Model */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-lg md:text-xl font-medium text-center text-foreground mb-2">
                  {t.step2Question}
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  {t.step2Instructions}
                </p>
                <img 
                  src={iphoneModelNumber} 
                  alt={t.step2ImageAlt}
                  className="max-w-full h-auto max-h-56 mx-auto rounded-xl shadow-soft mb-6 object-contain"
                />
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {allIosModels.map(model => (
                    <Button
                      key={model}
                      variant="outline"
                      size="sm"
                      onClick={() => handleModelSelection(model, 'ios')}
                      className="text-sm rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-primary"
                    >
                      {model}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <Button variant="ghost" onClick={handleSkipStep} className="text-muted-foreground">
                    {t.skipQuestion}
                  </Button>
                  <Button variant="ghost" onClick={handleReset} className="text-muted-foreground">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t.reset}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Case Model */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-lg md:text-xl font-medium text-center text-foreground mb-2">
                  {t.step3Question}
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  {t.step3Instructions}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {allCaseModels.map(model => (
                    <Button
                      key={model}
                      variant="outline"
                      size="sm"
                      onClick={() => handleModelSelection(model, 'case')}
                      className="text-sm rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-primary"
                    >
                      {model}
                    </Button>
                  ))}
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <Button variant="ghost" onClick={handleSkipStep} className="text-muted-foreground">
                    {t.skipQuestion}
                  </Button>
                  <Button variant="ghost" onClick={handleReset} className="text-muted-foreground">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t.reset}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Earbud Model */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-lg md:text-xl font-medium text-center text-foreground mb-2">
                  {t.step4Question}
                </h3>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  {t.step4Instructions}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {allBudModels.map(({ model, side }) => (
                    <Button
                      key={`${model}-${side}`}
                      variant="outline"
                      size="sm"
                      onClick={() => handleModelSelection(model, 'bud', side)}
                      className="text-sm rounded-lg hover:bg-accent hover:text-accent-foreground hover:border-primary"
                    >
                      {model} ({side})
                    </Button>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Button variant="ghost" onClick={handleReset} className="text-muted-foreground">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {t.startOver}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PodFinder;