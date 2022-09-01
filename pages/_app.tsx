import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import "../components/CtaSection/CtaSection.builder"
import "../components/ThreeColumn/ThreeColumn.builder"
import '../assets/index.css'
import Layout from '@components/Layout/layout'


builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
