import Merchandise from "../components/Merchandise";
import Layout from "../components/Layout";

import React from 'react'

function merchandise() {
    return (
        <>
            <Layout title={"Buy Merchandise"}>
                <Merchandise></Merchandise>
            </Layout>
        </>
    )
}

export default merchandise
