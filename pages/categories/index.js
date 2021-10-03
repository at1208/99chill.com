import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import { Grid } from "@material-ui/core";
// import BlogMediumCard from "../../components/Blog/Cards/mediumCard";
import { category_list_by_domain } from "../../actions/category";
import Link from "next/link";

const Category = ({ data, router }) => {
  if (data) {
    function HeaderSEO() {
      return (
        <Head>
          <title>Categories | {process.env.NEXT_PUBLIC_APP_NAME}</title>
          <meta
            name="description"
            content="99chill is an entertainment hub. Here, you'll come across movie and series reviews, categorically distributed movies based on different genres."
          />
          <link
            rel="canonical"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
          />
          <meta
            property="og:title"
            content={`99chill is an entertainment hub. Here, you'll come across movie and series reviews, categorically distributed movies based on different genres. | ${process.env.NEXT_PUBLIC_APP_NAME}`}
          />
          <meta
            property="og:description"
            content="99chill is an entertainment hub. Here, you'll come across movie and series reviews, categorically distributed movies based on different genres "
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

    return (
      <>
        <Layout>
          <HeaderSEO />
          <Grid container justify="left">
            {data.map((category, i) => {
              return (
                <Grid item md={3} lg={3} xs={12}>
                  <div className="col-md-3 category-name" key={i}>
                    <Link href={`/category/${category.slug}`}>
                      <a>
                        <span style={{ color: "teal" }}>{category.name}</span>
                      </a>
                    </Link>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Layout>
      </>
    );
  } else {
    return <></>;
  }
};

Category.getInitialProps = () => {
  return category_list_by_domain().then(async (response) => {
    return { data: response };
  });
};

export default withRouter(Category);
