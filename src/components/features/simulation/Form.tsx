import { SteppProgress } from '@/components/features/simulation/Progress'

export function SimulationForm() {
  return (
    <>
      <SteppProgress currentStep={2} totalStepp={6} />
    </>
  )
}
