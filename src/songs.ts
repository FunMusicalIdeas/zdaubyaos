// tslint:disable:no-console comment-format no-unused-variable

import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { defaultHandleCustomConfigChange } from '../../../src/interface/defaultHandleCustomConfigChange'
import { harmonicSeriesPitches, subharmonicSeriesPitches } from '../../../src/pitches'
import { Song, SongName } from '../../../src/songTypes'
import * as to from '../../../src/utilities/to'
import { ZDAUBYAOS_BASE_FREQUENCY } from './basePitch'
import {
    zdaubyaosHarmonicOrSubharmonicSine,
    zdaubyaosSubparticularOrDubparticularSquare,
    zdaubyaosSuperparticularOrDuperparticularSaw,
} from './entities'
import {
    dubparticularSeriesPitches,
    duperparticularSeriesPitches,
    subparticularSeriesPitches,
    superparticularSeriesPitches,
} from './pitches'
import { zdaubyaosContourUsages } from './utilities/zdaubyaosContourUsage'

const zdaubyaos: Song = {
    compile: defaultSongCompile,
    customConfig: {},
    description: 'fun with the superparticular series & variants, plus stepwise motion within recurring bounds',
    entityConfigs: [
        zdaubyaosSuperparticularOrDuperparticularSaw,
        zdaubyaosHarmonicOrSubharmonicSine,
        zdaubyaosSubparticularOrDubparticularSquare,
    ],
    formattedName: 'Zdaubyaos',
    handleCustomConfigChange: defaultHandleCustomConfigChange,
    name: SongName.ZDAUBYAOS,
    scales: [
        subparticularSeriesPitches,
        dubparticularSeriesPitches,
        harmonicSeriesPitches,
        superparticularSeriesPitches,
        duperparticularSeriesPitches,
        subharmonicSeriesPitches,
    ],
    standardConfig: {
        baseFrequency: ZDAUBYAOS_BASE_FREQUENCY,
        durationScalar: to.Scalar(1),
    },
}

// console.log(zdaubyaos)
// console.log(zdaubyaosContourUsages)

export {
    zdaubyaos,
}
