import gallery from '../../../util/gallery.json';
import Modal from "../../../components/Modal/modal";

const SchoolGalleryItem = ({data, schools, lifeAtNUST}) => {
    return <Modal lifeAtNUST={lifeAtNUST} schools={schools} data={data} type='School' />
}

export const getStaticProps = async ({params}) => {
    return {
        props: {
            data: gallery.schools.find(school => school.id === params.id),
            ...gallery
        }
    }
}

export const getStaticPaths = async () => {
    return {
        paths: gallery.schools.map(school => {
            return {params: {id: school.id}}
        }),
        fallback: false
    }
}

export default SchoolGalleryItem;