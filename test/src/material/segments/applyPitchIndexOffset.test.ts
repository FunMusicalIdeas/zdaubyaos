import { Note } from '@musical-patterns/material'
import { as, Ordinal, Scalar } from '@musical-patterns/utilities'
import { applyPitchIndexTranslation } from '../../../../src/indexForTest'

const testNote: (pitch: Ordinal<Scalar>) => Note =
    (pitch: Ordinal<Scalar>): Note => ({ pitch: { index: pitch } })

describe('apply pitch index translation', () => {
    it('translates the pitch index of every note', () => {
        const notes: Note[] = [
            testNote(as.Ordinal<Scalar>(1)),
            testNote(as.Ordinal<Scalar>(2)),
            testNote(as.Ordinal<Scalar>(4)),
        ]

        const expectedPart: Note[] = [
            testNote(as.Ordinal<Scalar>(7)),
            testNote(as.Ordinal<Scalar>(8)),
            testNote(as.Ordinal<Scalar>(10)),
        ]

        expect(applyPitchIndexTranslation(notes, as.Translation<Ordinal<Scalar>>(6)))
            .toEqual(expectedPart)
    })
})
