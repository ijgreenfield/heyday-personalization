import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyThreeColumn = dynamic(async () => {
    return (await import('./ThreeColumn')).default
  })

Builder.registerComponent(LazyThreeColumn, { 
    name: 'Three Column Section',
    inputs: [
        { name: 'heading', type: 'string'},
        { name: 'description', type: 'string'},
        { name: 'bgColor', type: 'boolean'},
        { name: 'image1', type: 'string'},
        { name: 'image2', type: 'string'},
        { name: 'image3', type: 'string'},
        { name: 'copy1', type: 'string'},
        { name: 'copy2', type: 'string'},
        { name: 'copy3', type: 'string'},
    ]
})