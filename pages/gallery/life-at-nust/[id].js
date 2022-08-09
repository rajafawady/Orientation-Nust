import gallery from "../../../util/gallery.json";
import Modal from "../../../components/Modal/modal";

const LifeGalleryItem = ({data, schools, lifeAtNUST}) => {
    return <Modal lifeAtNUST={lifeAtNUST} schools={schools} data={data} type='Life at NUST' />
}

export const getStaticProps = async ({params}) => {
    return {
        props: {
            data: gallery.lifeAtNUST.find(school => school.id === params.id),
            ...gallery
        }
    }
}

export const getStaticPaths = async () => {
    return {
        paths: gallery.lifeAtNUST.map(school => {
            return {params: {id: school.id}}
        }),
        fallback: false
    }
}

export default LifeGalleryItem;