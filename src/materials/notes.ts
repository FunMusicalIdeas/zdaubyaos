import { NoteSpec } from '@musical-patterns/compiler'
import {
    DEFAULT_DURATIONS_SCALE_INDEX,
    DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
    FULL_GAIN,
    unpackContourElement,
} from '@musical-patterns/pattern'
import { from, offsetFromOneIndexedToZeroIndexed, to } from '@musical-patterns/utilities'
import { PITCH_INDEX_INDICATING_REST } from '../constants'
import { BuildNoteSpec, ContourElement } from '../types'

const buildNoteSpec: BuildNoteSpec =
    (contourElement: ContourElement): NoteSpec => {
        const { pitch, duration } = unpackContourElement(contourElement)

        if (pitch === from.Index(PITCH_INDEX_INDICATING_REST)) {
            return {
                durationSpec: {
                    index: offsetFromOneIndexedToZeroIndexed(to.Index(duration)),
                    scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
                },
                gainSpec: {
                    scalar: to.Scalar(0),
                },
                sustainSpec: {
                    index: offsetFromOneIndexedToZeroIndexed(to.Index(duration)),
                    offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                    scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
                },
            }
        }

        return {
            durationSpec: {
                index: offsetFromOneIndexedToZeroIndexed(to.Index(duration)),
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
            gainSpec: {
                scalar: FULL_GAIN,
            },
            pitchSpec: {
                index: offsetFromOneIndexedToZeroIndexed(to.Index(pitch)),
            },
            sustainSpec: {
                index: offsetFromOneIndexedToZeroIndexed(to.Index(duration)),
                offset: DEFAULT_OFFSET_FOR_ALMOST_FULL_SUSTAIN,
                scaleIndex: DEFAULT_DURATIONS_SCALE_INDEX,
            },
        }
    }

export {
    buildNoteSpec,
}
