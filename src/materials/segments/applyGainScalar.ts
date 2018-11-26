import { apply, Scalar } from '@musical-patterns/shared'
import { NoteSpec, PartSpec } from '../../../../../compile'

const applyGainScalar: (partSpec: PartSpec, gainScalar: Scalar) => PartSpec =
    (partSpec: PartSpec, gainScalar: Scalar): PartSpec =>
        partSpec.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            gainSpec: noteSpec.gainSpec && {
                ...noteSpec.gainSpec,
                scalar: apply.Scalar(noteSpec.gainSpec.scalar, gainScalar),
            },
        }))

export {
    applyGainScalar,
}
