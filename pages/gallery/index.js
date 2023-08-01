import gallery from "../../util/gallery.json";
import CardList from "../../components/CardList/CardList";
import Layout from "../../components/Layout";
const Gallery = ({ schools, lifeAtNUST }) => {
  return (
    <div className="wrapper" suppressHydrationWarning>
      <Layout title={"Life At NUST"}>
        <div className="school__main">
          <CardList schools={schools} lifeAtNUST={lifeAtNUST} />
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: gallery,
  };
};

export default Gallery;
