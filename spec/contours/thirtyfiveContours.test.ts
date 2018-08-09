import {
    thirtyfiveYaosAccidentInspiredContour,
    thirtyfiveYaosBassContour,
    thirtyfiveZdaubContour, thirtyfiveZdaubOnlyWiggleContour
} from '../../src/contours/thirtyfiveContours'
import * as to from '../../src/utilities/to'

describe('thirtyfive contours', () => {
    it('handles yaos bass', () => {
        expect(thirtyfiveYaosBassContour).toEqual(to.Contour([
            [1, 1], [5, 5],
            [1, 1], [5, 5],
            [1, 1], [3, 3],
            [1, 1], [5, 5],
            [1, 1], [5, 5],
            [1, 1], [3, 3],
            [1, 1], [2, 2],
        ]))
    })

    it('handles yaos accident inspired', () => {
        expect(thirtyfiveYaosAccidentInspiredContour).toEqual(to.Contour([
            [1, 1], [2, 2], [3, 3],
            [1, 1], [2, 2], [3, 3], [4, 4],
            [1, 1], [2, 2], [3, 3],
            [1, 1], [2, 2], [3, 3], [4, 4],
            [1, 1], [2, 2],
        ]))

    })

    it('handles zdaub', () => {
        expect(thirtyfiveZdaubContour).toEqual(to.Contour([
            [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1],
            [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1],
            [13, 13], [10, 10], [7, 7], [4, 4], [1, 1],
            [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1], [4, 4], [1, 1],
            [19, 19], [16, 16],
            [13, 13], [10, 10], [7, 7], [4, 4], [1, 1],
        ]))
    })

    it('handles only wiggle', () => {
        expect(thirtyfiveZdaubOnlyWiggleContour).toEqual(to.Contour([
            [4, 4], [1, 1],
            [4, 4], [1, 1],
            [4, 4], [1, 1],
            [4, 4], [1, 1],
            [4, 4], [1, 1],
            [4, 4], [1, 1],
            [4, 4], [1, 1],
        ]))
    })
})
