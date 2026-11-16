import PiggyBankImage from '@/assets/piggy-bank.png'

export function SimulationHero() {
  return (
    <div className="mb-8 text-center">
      {/* Adicionado sm:justify-center aqui para alinhar na mesma linha e centralizar */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-center">
        <h1 className="text-foreground text-3xl font-semibold sm:text-4xl">
          Vamos planejar seu futuro
        </h1>
        <img
          src={PiggyBankImage}
          alt=""
          aria-hidden="true"
          className="h-16 w-16 sm:-mt-2 sm:-ml-3"
        />
      </div>
      <p className="text-muted-foreground text-sm">
        Responda algumas questões para ter insights financeiros personalizados
      </p>
    </div>
  )
}