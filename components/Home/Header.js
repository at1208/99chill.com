import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>99Chill | 99 reasons to binge watch</title>
      <meta
        name="description"
        content="99chill is an entertainment hub. Here, you'll come across movie and series reviews, categorically distributed movies based on different genres."
      />
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`} />
      <meta
        property="og:title"
        content={`99chill is an entertainment hub. Here, you'll come across movie and series reviews, categorically distributed movies based on different genres. | ${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
      <meta
        property="og:description"
        content="99chill is an entertainment hub. Here, you'll come across movie and series reviews, categorically distributed movies based on different genres."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
      />
      <meta
        property="og:site_name"
        content={`${process.env.NEXT_PUBLIC_APP_NAME}`}
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/elitegamezone.svg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/elitegamezone.svg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta
        property="fb:app_id"
        content={`${process.env.NEXT_PUBLIC_FB_APP_ID}`}
      />
    </Head>
  );
}
