import { Note } from '../../../../src/types'
import { Offset } from '../../../../src/utilities/nominalTypes'
import offset from '../../../../src/utilities/offset'
import * as to from '../../../../src/utilities/to'
import { Notes } from '../types'

const offsetPitchIndex: (notes: Notes, pitchIndexOffset?: Offset) => Notes =
    (notes: Notes, pitchIndexOffset: Offset = to.Offset(0)): Notes =>
        notes.map((note: Note): Note => ({...note, pitchIndex: offset(note.pitchIndex, pitchIndexOffset)}))

export default offsetPitchIndex
