interface PageHeroProps {
  tiltle: string
  subTiltle: string
}

export function PageHero({ tiltle, subTiltle }: PageHeroProps) {
  return (
    <>
      <h1 className="text-foreground mb-1 text-2xl font-semibold sm:text-3xl">
        {tiltle}
      </h1>

      <p className="text-muted-foreground mb-8 text-sm">{subTiltle}</p>
    </>
  )
}
