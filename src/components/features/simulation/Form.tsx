import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SteppProgress } from '@/components/features/simulation/Progress'
import { type SimulationFormData, simulationFormSteps } from '@/data/simulation'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'

import { FormStep } from './FormStep'

export function SimulationForm() {
  const navigate = useNavigate()
  const { saveFormData } = useSimulationStorage()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<SimulationFormData>(
    {} as SimulationFormData,
  )
  const totalStep = simulationFormSteps.length

  const currentStep = simulationFormSteps[currentStepIndex]

  const handleNextStep = (value: string) => {
    const updateFormData = { ...formData, [currentStep.id]: value }
    setFormData(updateFormData)

    if (currentStepIndex + 1 > totalStep - 1) {
      saveFormData(updateFormData)
      void navigate('/resultado')
      return
    }

    setCurrentStepIndex((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    if (currentStepIndex === 0) {
      return
    }

    setCurrentStepIndex((prev) => prev - 1)
  }

  return (
    <>
      <SteppProgress
        currentStep={currentStepIndex + 1}
        totalStepp={totalStep}
      />
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
