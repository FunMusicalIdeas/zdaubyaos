import { Note } from '@musical-patterns/material'
import { Amplitude, apply, insteadOf, NormalScalar, Scalar, to } from '@musical-patterns/utilities'

const applyGainScalar: (notes: Note[], gainScalar: NormalScalar<Amplitude>) => Note[] =
    (notes: Note[], gainScalar: NormalScalar<Amplitude>): Note[] =>
        notes.map((note: Note): Note => ({
            ...note,
            gain: note.gain && {
                ...note.gain,
                scalar: apply.Scalar(
                    note.gain.scalar || to.Scalar<Scalar>(0),
                    insteadOf<Scalar, Scalar<Scalar>>(gainScalar),
                ),
            },
        }))

export {
    applyGainScalar,
}
