import Layout from "../components/Layout";
import SplashComponent from "../components/SplashComponent/SplashComponent";
export default function Home() {
  return (
    <>
      <Layout isIndex={true}>
      <div className="mt-60 md:mt-64 relative z-30">
        <SplashComponent />
      </div>
      </Layout>
    </>
  );
}
