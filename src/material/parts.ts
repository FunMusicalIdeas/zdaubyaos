import { NoteSpec } from '@musical-patterns/compiler'
import { Segment } from '@musical-patterns/pattern'
import { apply, DictionaryOf, INCLUSIVE, INITIAL, Ordinal, slice, to } from '@musical-patterns/utilities'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { buildSegments } from './segments'

const buildParts: () => DictionaryOf<NoteSpec[]> =
    (): DictionaryOf<NoteSpec[]> => {
        const segments: Segment[] = buildSegments()

        const end: Ordinal = to.Ordinal(segments.length)

        let subparticularOrDubparticularPart: NoteSpec[] = []
        let superparticularOrDuperparticularPart: NoteSpec[] = []
        let harmonicOrSubharmonicPart: NoteSpec[] = []

        slice(segments, INITIAL, apply.Translation(end, INCLUSIVE))
            .forEach((segment: Segment): void => {
                subparticularOrDubparticularPart = subparticularOrDubparticularPart
                    .concat(apply.Ordinal(segment, SEGMENT_A))
                superparticularOrDuperparticularPart = superparticularOrDuperparticularPart
                    .concat(apply.Ordinal(segment, SEGMENT_B))
                harmonicOrSubharmonicPart = harmonicOrSubharmonicPart
                    .concat(apply.Ordinal(segment, SEGMENT_C))
            })

        return {
            harmonicOrSubharmonicPart,
            subparticularOrDubparticularPart,
            superparticularOrDuperparticularPart,
        }
    }

export {
    buildParts,
}
