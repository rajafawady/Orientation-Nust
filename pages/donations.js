import React from 'react'
import Layout from '../components/Layout'
import Tabs  from '../components/Tabs/Tabs'

export default function donations() {
    return (
        <Layout title={"Donations"}>
            <div className='mt-32'>
                <div className='w-full flex flex-col justify-center'>
                    <Tabs />
                </div>
            </div>
        </Layout>
    )
}
