import { Note } from '@musical-patterns/material'
import { Segment } from '@musical-patterns/pattern'
import { apply } from '@musical-patterns/utilities'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { computeSegments } from './segment'
import { ZdaubyaosNotes } from './types'

const computeNotes: () => ZdaubyaosNotes =
    (): ZdaubyaosNotes => {
        const segments: Segment[] = computeSegments()

        let subDub: Note[] = []
        let superDuper: Note[] = []
        let harmSubharm: Note[] = []

        segments.forEach((segment: Segment): void => {
            subDub = subDub
                .concat(apply.Ordinal(segment, SEGMENT_A))
            superDuper = superDuper
                .concat(apply.Ordinal(segment, SEGMENT_B))
            harmSubharm = harmSubharm
                .concat(apply.Ordinal(segment, SEGMENT_C))
        })

        return {
            harmSubharm,
            subDub,
            superDuper,
        }
    }

export {
    computeNotes,
}
