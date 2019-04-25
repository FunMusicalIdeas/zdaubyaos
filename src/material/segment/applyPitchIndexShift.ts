import { Note } from '@musical-patterns/material'
import { Cardinal, Ordinal, Pitch, Scalar, use } from '@musical-patterns/utilities'

const applyPitchIndexShift: (notes: Note[], pitchIndexShift: Cardinal<Ordinal<Array<Scalar<Pitch>>>>) => Note[] =
    (notes: Note[], pitchIndexShift: Cardinal<Ordinal<Array<Scalar<Pitch>>>>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            pitch: note.pitch && {
                ...note.pitch,
                // tslint:disable-next-line no-non-null-assertion
                index: use.Cardinal(note.pitch.index!, pitchIndexShift),
            },
        }))

export {
    applyPitchIndexShift,
}
