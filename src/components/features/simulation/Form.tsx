import { SteppProgress } from '@/components/features/simulation/Progress'
import { simulationFormSteps } from '@/data/Simulation'

import { FormStep } from './FormStep'

export function SimulationForm() {
  const currentStep = simulationFormSteps[0]

  return (
    <>
      <SteppProgress currentStep={2} totalStepp={6} />
      <FormStep key={currentStep.id} {...currentStep} />
    </>
  )
}
