import { Note, Segment } from '@musical-patterns/material'
import { use } from '@musical-patterns/utilities'
import { SEGMENT_A, SEGMENT_B, SEGMENT_C } from '../constants'
import { computeSegments } from './segment'
import { ZdaubyaosNotes } from './types'

const computeNotes: () => ZdaubyaosNotes =
    (): ZdaubyaosNotes => {
        const segments: Segment[] = computeSegments()

        let subpartSuperpart: Note[] = []
        let dubpartDuperpart: Note[] = []
        let harmSubharm: Note[] = []

        segments.forEach((segment: Segment): void => {
            subpartSuperpart = subpartSuperpart
                .concat(use.Ordinal(segment, SEGMENT_A))
            dubpartDuperpart = dubpartDuperpart
                .concat(use.Ordinal(segment, SEGMENT_B))
            harmSubharm = harmSubharm
                .concat(use.Ordinal(segment, SEGMENT_C))
        })

        return {
            dubpartDuperpart,
            harmSubharm,
            subpartSuperpart,
        }
    }

export {
    computeNotes,
}
