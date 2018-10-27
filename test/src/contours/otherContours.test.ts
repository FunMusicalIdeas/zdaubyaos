import { buildOtherContours, to } from '../../../src/indexForTest'

describe('other contours', () => {
    it('handles backbone fifteen', () => {
        const { backboneFifteenContour } = buildOtherContours()

        expect(backboneFifteenContour).toEqual(to.Contour([
            [ 1, 1 ], [ 2, 2 ],
            [ 1, 1 ], [ 2, 2 ],
            [ 1, 1 ], [ 2, 2 ],
            [ 1, 1 ], [ 2, 2 ],
            [ 1, 1 ], [ 2, 2 ],
        ]))
    })

    it('handles backbone twentyfour', () => {
        const { backboneTwentyfourContour } = buildOtherContours()

        expect(backboneTwentyfourContour).toEqual(to.Contour([
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
            [ 1, 1 ], [ 3, 3 ],
        ]))
    })

    it('handles shifty fifteen', () => {
        const { shiftyFifteenContour } = buildOtherContours()

        expect(shiftyFifteenContour).toEqual(to.Contour([
            [ 2, 2 ], [ 1, 1 ],
            [ 5, 5 ], [ 1, 1 ],
            [ 2, 2 ], [ 4, 4 ],
        ]))
    })

    it('handles shifty twentyfour', () => {
        const { shiftyTwentyfourContour } = buildOtherContours()

        expect(shiftyTwentyfourContour).toEqual(to.Contour([
            [ 3, 3 ], [ 1, 1 ],
            [ 3, 3 ], [ 1, 1 ],
            [ 3, 3 ], [ 4, 4 ],
            [ 5, 5 ], [ 4, 4 ],
        ]))
    })

    it('handles shifty twentyfour variant', () => {
        const { shiftyTwentyfourVariantContour } = buildOtherContours()

        expect(shiftyTwentyfourVariantContour).toEqual(to.Contour([
            [ 4, 4 ], [ 7, 7 ], [ 4, 4 ],
            [ 1, 1 ], [ 3, 3 ], [ 1, 1 ], [ 3, 3 ], [ 1, 1 ],
        ]))
    })

    it('handles shifty', () => {
        const { shiftyContour } = buildOtherContours()

        expect(shiftyContour).toEqual(to.Contour([
            [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ],
            [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ],
            [ 3, 3 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ], [ 2, 2 ], [ 1, 1 ],
            [ 3, 3 ], [ 5, 5 ], [ 7, 7 ], [ 9, 9 ],
            [ 11, 11 ], [ 13, 13 ],
            [ 15, 15 ], [ 17, 17 ], [ 19, 19 ], [ 21, 21 ],
            // (this spreads across 3 bars)
            // (this spreads across 3 bars)
            [ 23, 23 ], [ 25, 25 ],
            // (this spreads across 2 bars)
        ]))
    })
})
