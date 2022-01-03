import Head from 'next/head';

import { SEOProps } from '~/types/seo';

export function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
    </Head>
  );
}
