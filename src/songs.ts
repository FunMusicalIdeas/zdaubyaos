// tslint:disable:no-console comment-format no-unused-variable

import { Song } from '../../../src'
import { buildZdaubyaosEntities } from './entities'
import { zdaubyaosSongMaterial } from './songMaterials'
import { zdaubyaosSongMetadata } from './songMetadata'
import { zdaubyaosSongSpec } from './songSpecs'
import { zdaubyaosContourUsages } from './utilities'

const zdaubyaosSong: Song = {
    material: zdaubyaosSongMaterial,
    metadata: zdaubyaosSongMetadata,
    spec: zdaubyaosSongSpec,
}

// console.log(zdaubyaosContourUsages)
// console.log(buildZdaubyaosEntities(zdaubyaosSongSpec))

export {
    zdaubyaosSong,
}
