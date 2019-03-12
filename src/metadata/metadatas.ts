import { Metadata } from '@musical-patterns/pattern'
import { post } from './posts'

const metadata: Metadata = {
    description: post,
    formattedName: 'Zdaubyaos',
    mostRecentPublish: process.env.PUBLISH_DATE || '2018-08-04T07:00:00.000Z',
    musicalIdeaIllustrated: 'superparticular series',
    originalPublish: '2018-08-04T07:00:00.000Z',
    version: process.env.PATTERN_VERSION || 'unknown',
}

export {
    metadata,
}
