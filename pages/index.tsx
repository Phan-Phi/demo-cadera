import { GetServerSidePropsContext } from "next";

import { Home } from "@/containers";
import { transformUrl } from "@/utils";
import prefetchData from "@/libs/prefetchData";
import { PAGES_API, TYPE_PARAMS } from "@/apis";
import { HomePageProps } from "@/containers/Home/Home";

export default function HomePage(props: HomePageProps) {
  return <Home {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["home.HomePage"],
        fields: "*",
        locale,
      }),

      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["service.ServiceDetailPage"],
        fields: "*",
        locale,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
