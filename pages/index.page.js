import Layout from 'layout';
import { detectDevice } from 'utils';

export default function Home({ isMobile }) {
  return <Layout isMobile={isMobile}></Layout>;
}

const RenderPage = () => {};

const Desktop = () => {};

const Mobile = () => {};

export async function getServerSideProps(context) {
  const isMobile = detectDevice(context);

  return {
    props: {
      isMobile,
    },
  };
}
