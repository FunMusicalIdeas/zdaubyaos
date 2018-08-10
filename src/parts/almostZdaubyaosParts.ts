import repeatCall from '../../../../src/utilities/repeatCall'
import sequence from '../../../../src/utilities/sequence'
import { backboneFifteenContour, backboneTwentyfourContour } from '../contours/otherContours'
import { getZdaubyaosContours } from '../contours/zdaubyaosContours'
import { BarTarget, BlockStyle, Part, Rendering } from '../types'

const almostTrueExtendedEndingZdaubPart:
    (rendering: Rendering) => Part = (rendering: Rendering): Part =>
    sequence([
        repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.FIFTEEN, rendering), 3),
        getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, rendering),
        getZdaubyaosContours(BlockStyle.SCEND, BarTarget.FIFTEEN, rendering),
        getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, rendering),
        repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, rendering), 5),
    ])
const almostTrueExtendedEndingZdaubTremPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.TREM)
const almostTrueExtendedEndingZdaubBonyPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.BONY)
const almostTrueExtendedEndingZdaubGlisPart: Part = almostTrueExtendedEndingZdaubPart(Rendering.GLIS)

const almostTrueYetOfBackbonePart: Part = sequence([
    repeatCall(() => backboneFifteenContour, 8),
    repeatCall(() => backboneTwentyfourContour, 3),
])
const almostTrueZdaubBonyWithSuperinscapePart: Part = sequence([
    repeatCall(() => getZdaubyaosContours(BlockStyle.NODLE, BarTarget.FIFTEEN, Rendering.BONY), 3),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, Rendering.BONY),
    getZdaubyaosContours(BlockStyle.SCEND, BarTarget.FIFTEEN, Rendering.BONY),
    getZdaubyaosContours(BlockStyle.SCEND, BarTarget.TWENTYFOUR, Rendering.BONY),
    getZdaubyaosContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, Rendering.BONY),
    getZdaubyaosContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, Rendering.BONY),
])

const almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart: Part = sequence([
    getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.INAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.OUZD, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.INAI, BarTarget.FIFTEEN, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, Rendering.FALL),
    getZdaubyaosContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, Rendering.FALL),
])

export {
    almostTrueExtendedEndingZdaubTremPart,
    almostTrueExtendedEndingZdaubBonyPart,
    almostTrueExtendedEndingZdaubGlisPart,
    almostTrueYetOfBackbonePart,
    almostTrueZdaubBonyWithSuperinscapePart,
    almostTrueYaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustmentPart,
}
