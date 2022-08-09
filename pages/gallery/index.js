import gallery from '../../util/gallery.json';
import CardList from "../../components/CardList/CardList";
import Layout from '../../components/Layout';
const Gallery = ({schools, lifeAtNUST}) => {
    return( 
    <Layout>
    <div className='width-conia'>
        <CardList schools={schools} lifeAtNUST={lifeAtNUST} />
    </div>
    </Layout>
    )
}

export const getStaticProps = async () => {
    return {
        props: gallery
    }
}

export default Gallery;