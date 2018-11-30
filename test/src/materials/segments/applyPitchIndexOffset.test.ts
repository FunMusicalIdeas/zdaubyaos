import { NoteSpec, PartSpec } from '@musical-patterns/compiler'
import { Index, to } from '@musical-patterns/utilities'
import { applyPitchIndexOffset } from '../../../../src/indexForTest'

const testNoteSpec: (pitch: Index) => NoteSpec =
    (pitch: Index): NoteSpec => ({ pitchSpec: { index: pitch } })

describe('apply pitch index offset', () => {
    it('offsets the pitch index of every note', () => {
        const part: PartSpec = [
            testNoteSpec(to.Index(1)),
            testNoteSpec(to.Index(2)),
            testNoteSpec(to.Index(4)),
        ]

        const expectedPart: PartSpec = [
            testNoteSpec(to.Index(2)),
            testNoteSpec(to.Index(3)),
            testNoteSpec(to.Index(5)),
        ]

        expect(applyPitchIndexOffset(part, to.Offset(1)))
            .toEqual(expectedPart)
    })
})
