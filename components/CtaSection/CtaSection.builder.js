import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyCTA = dynamic(async () => {
    return (await import('./CtaSection.js')).default
  })

Builder.registerComponent(LazyCTA, { 
name: 'CTA Section',
inputs: [
    { name: 'bgColor', type: "string"},
    { name: 'heading', type:"string"},
    { name: 'description', type: "richText"},
    { name: 'cta', type: 'string'},
    { name: 'href', type: 'string'}
]
})