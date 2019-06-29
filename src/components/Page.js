import React from 'react'
import PageContent from './PageContent'

const Page = ({ page }) => {
    return (
        <div>
            <PageContent content={page} />
        </div>
    )
}

export default Page