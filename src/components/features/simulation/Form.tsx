import { useState } from 'react'

import { SteppProgress } from '@/components/features/simulation/Progress'
import { simulationFormSteps } from '@/data/Simulation'

import { FormStep } from './FormStep'

export function SimulationForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const totalStep = simulationFormSteps.length

  const currentStep = simulationFormSteps[currentStepIndex]

  const handleNextStep = () => {
    if (currentStepIndex + 1 > totalStep - 1) {
      return
    }

    setCurrentStepIndex((prev) =>  prev +1)
  }

  const handlePrevStep = () => {
    if (currentStepIndex  === 0) {
      return
    }

    setCurrentStepIndex((prev) => prev - 1)
  }

  return (
    <>
      <SteppProgress currentStep={currentStepIndex + 1} totalStepp={totalStep} />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onBack={handlePrevStep}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0}
      />
    </>
  )
}
