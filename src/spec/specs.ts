import {
    Spec,
    standardConfigurations,
    standardInitialSpecs,
    StandardSpec,
    StandardSpecs,
} from '@musical-patterns/spec'
import { ZDAUBYAOS_INITIAL_BASIS_DURATION, ZDAUBYAOS_INITIAL_BASIS_FREQUENCY } from './constants'

const initialSpecs: StandardSpecs = {
    ...standardInitialSpecs,
    [ StandardSpec.BASIS_DURATION ]: ZDAUBYAOS_INITIAL_BASIS_DURATION,
    [ StandardSpec.BASIS_FREQUENCY ]: ZDAUBYAOS_INITIAL_BASIS_FREQUENCY,
}

const spec: Spec<StandardSpecs> = {
    configurations: standardConfigurations,
    initialSpecs,
}

export {
    spec,
}
