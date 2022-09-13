import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyHero = dynamic(async () => {
    return (await import('./Hero')).default
  })

Builder.registerComponent(LazyHero, { 
    name: 'Hero',
})