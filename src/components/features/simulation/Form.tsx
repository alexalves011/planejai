import { PiggyBank } from 'lucide-react'

import { SteppProgress } from '@/components/features/simulation/Progress'

import { FormStep } from './FormStep'

export function SimulationForm() {
  return (
    <>
      <SteppProgress currentStep={2} totalStepp={6} />
      <FormStep
        icon={PiggyBank}
        title="Renda Mensal Bruta"
        question="Quanto é depositado na sua conta toso mês ( somado todas as fontes "
        inputProps={{
          type: 'text',
          placeholder: "5.000,00",
          prefix: 'R$'
        }}
      />
    </>
  )
}
