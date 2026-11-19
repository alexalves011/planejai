import { ArrowLeft, ArrowRight, type LucideIcon } from 'lucide-react'
import { type SyntheticEvent, useState } from 'react'

import { Button } from '@/components/shared/Button'
import { Input, type InputProps } from '@/components/shared/Input'
import { formatCurrency } from '@/utils/currency'

export interface FormStepProps {
  id: string
  icon: LucideIcon
  title: string
  question: string
  inputProps: InputProps

  submitButtonProps?: {
    label: string
    emojiIcon?: string
  }
}

interface ActionsButtonsProps {
  onNext: (value: string) => void
  onBack: () => void
  hideBackButton?: boolean
}

export function FormStep({
  icon: Icon,
  title,
  question,
  inputProps,
  submitButtonProps,
  onBack,
  onNext,
  hideBackButton,
}: FormStepProps & ActionsButtonsProps) {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!inputValue) {
      return
    }

    onNext(inputValue)
  }

  const [inputValue, setInputValue] = useState('')

  return (
    <div className="bg-card rounded-2xl p-6 shadow-[0px_4px_18px_0px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="bg-primary mb-4 flex h-15 w-15 items-center justify-center rounded-xl">
        <Icon size={32} className="text-primary-foreground" />
      </div>
      <h2 className="text-primary mb-1 text-xs font-semibold tracking-widest uppercase">
        {title}
      </h2>
      <h3 className="text-foreground mb-6 text-xl leading-snug font-semibold sm:text-2xl">
        {question}
      </h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          {...inputProps}
          value={inputValue}
          onChange={(e) =>
            setInputValue(
              inputProps.prefix === 'R$'
                ? formatCurrency(e.target.value)
                : e.target.value,
            )
          }
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {!hideBackButton && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="order-1 flex-1 sm:order-1"
              icon={ArrowLeft}
            >
              Voltar
            </Button>
          )}

          <Button
            variant="primary"
            className="order-2 flex-1 sm:order-2"
            type="submit"
            disabled={!inputValue}
            icon={!submitButtonProps ? ArrowRight : undefined}
          >
            {submitButtonProps?.label ?? 'proximo'}

            {submitButtonProps?.emojiIcon}
          </Button>
        </div>
      </form>
    </div>
  )
}
