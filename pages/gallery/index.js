import gallery from "../../util/gallery.json";
import CardList from "../../components/CardList/CardList";
import Layout from "../../components/Layout";
const Gallery = ({ schools, lifeAtNUST }) => {
  return (
    <Layout title={"Life At NUST"}>
      <div className="school__main">
        <div className="school__container ">
          <CardList schools={schools} lifeAtNUST={lifeAtNUST} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: gallery,
  };
};

export default Gallery;
