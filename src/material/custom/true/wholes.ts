// tslint:disable max-file-line-count

import { PitchDuration } from '@musical-patterns/pattern'
import { ContourWhole, repeatCall, sequence, to } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { AlmostTrueContourPieces, computeAlmostTrueContourPieces } from '../almostTrue'
import { getTrueContours } from './pieces'
import { FormulaicTrueYaosContourWhole, TrueContourWholes } from './types'

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<PitchDuration> => to.ContourWhole(sequence([
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(4),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRenderingName), to.Cardinal(4),
    ),
]))

const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<PitchDuration> => to.ContourWhole(sequence([
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(4),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName), to.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRenderingName), to.Cardinal(4),
    ),
]))

const computeTrueContourWholes: () => TrueContourWholes =
    (): TrueContourWholes => {
        const almostTruePieces: AlmostTrueContourPieces = computeAlmostTrueContourPieces()
        const yaosUmowchuwowiestSpringToSummer: ContourWhole<PitchDuration> =
            trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole(RenderingName.SPRING, RenderingName.SUMMER)
        const yaosUmowchuwowiestSummerToSpring: ContourWhole<PitchDuration> =
            trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole(RenderingName.SUMMER, RenderingName.SPRING)
        const yaosInaidjiyaiouzdSummerToSpring: ContourWhole<PitchDuration> =
            trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole(RenderingName.SUMMER, RenderingName.SPRING)
        const yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd: ContourWhole<PitchDuration> =
            to.ContourWhole(sequence([
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(4),
                ),
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(1),
                ),
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    to.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, RenderingName.SUMMERY_SPRING),
                    to.Cardinal(4),
                ),
            ]))
        const zdaubGlis: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS), to.Cardinal(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.GLIS),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.GLIS), to.Cardinal(3),
            ),
        ]))
        const zdaubGlisVariant: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS), to.Cardinal(4)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            almostTruePieces.zdaubGlisVariant,
        ]))
        const zdaubTrem: ContourWhole<PitchDuration> = to.ContourWhole(sequence([
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.TREM), to.Cardinal(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.TREM),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.TREM), to.Cardinal(3),
            ),
        ]))

        return {
            yaosInaidjiyaiouzdSummerToSpring,
            yaosSpringySummerStraightIntoZdaubInaidjiyaiouzd,
            yaosUmowchuwowiestSpringToSummer,
            yaosUmowchuwowiestSummerToSpring,
            zdaubGlis,
            zdaubGlisVariant,
            zdaubTrem,
        }
    }
export { computeTrueContourWholes }
