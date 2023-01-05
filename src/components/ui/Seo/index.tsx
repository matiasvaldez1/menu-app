import Head from "next/head";

export function CommonHead({ title }: { title: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Tu menu online en 30 segundos" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
