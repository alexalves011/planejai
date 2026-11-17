interface StepProgressProps {
  currentStep: number
  totalStepp: number
}

export function SteppProgress({ currentStep, totalStepp }: StepProgressProps) {
  const progress = (currentStep / totalStepp) * 100

  return (
    <>
      <div className="mb-4">
        <p className="text-muted-foreground mb-2 text-sm">
          Passo {currentStep} de {totalStepp}
        </p>

        <div className="bg-border h-1 w-full overflow-hidden rounded-full">
          <div
            role="progressbar"
            aria-valuenow={currentStep}
            aria-valuemin={1}
            aria-valuemax={totalStepp}
            className="bg-primary h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </>
  )
}
