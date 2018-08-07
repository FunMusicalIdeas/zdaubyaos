import { thirtyfiveYaosBassNotes, thirtyfiveYaosAccidentInspiredNotes, thirtyfiveZdaubNotes } from '../../src/notes/thirtyfiveNotes'
import calculateDuration from '../../../../src/utilities/calculateDuration'

describe('thirtyfive notes', () => {
    it('is the case that they are all actually length multiples of 35', () => {
        expect(calculateDuration(thirtyfiveYaosBassNotes) % 35).toBe(0)
        expect(calculateDuration(thirtyfiveYaosAccidentInspiredNotes) % 35).toBe(0)
        expect(calculateDuration(thirtyfiveZdaubNotes) % 35).toBe(0)
    })
})
