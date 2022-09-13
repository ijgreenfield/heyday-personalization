import type { AppProps } from 'next/app';
import { builder } from '@builder.io/react';
import builderConfig from '../config/builder';
import Layout from '@components/Layout/layout';
import "../components/CtaSection/CtaSection.builder";
import "../components/Testimonials/Testimonials.builder";
import "../components/ThreeColumn/ThreeColumn.builder";
import "../components/Hero/Hero.builder";
import '../assets/index.css';


builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
