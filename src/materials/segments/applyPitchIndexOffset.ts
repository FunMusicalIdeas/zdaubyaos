import { apply, Offset } from '@musical-patterns/shared'
import { NoteSpec, PartSpec } from '../../../../../compile'

const applyPitchIndexOffset: (partSpec: PartSpec, pitchIndexOffset: Offset) => PartSpec =
    (partSpec: PartSpec, pitchIndexOffset: Offset): PartSpec =>
        partSpec.map((noteSpec: NoteSpec): NoteSpec => ({
            ...noteSpec,
            pitchSpec: noteSpec.pitchSpec && {
                ...noteSpec.pitchSpec,
                index: apply.Offset(noteSpec.pitchSpec.index, pitchIndexOffset),
            },
        }))

export {
    applyPitchIndexOffset,
}
