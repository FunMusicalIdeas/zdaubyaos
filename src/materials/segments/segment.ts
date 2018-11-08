import { Part, Segment } from '../../../../../src'
import { ContourWhole } from '../../nominal'
import { applyNoteStyle } from './applyNoteStyle'
import { NoteStyle } from './types'

const buildSegment: (contourWholes: ContourWhole[], noteStyles: NoteStyle[]) => Segment =
    (contourWholes: ContourWhole[], noteStyles: NoteStyle[]): Segment =>
        contourWholes.map((contourWhole: ContourWhole, index: number): Part => {
            const noteStyle: NoteStyle = noteStyles[ index ]

            return applyNoteStyle(contourWhole, noteStyle)
        })

export {
    buildSegment,
}
