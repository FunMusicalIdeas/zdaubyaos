// tslint:disable max-file-line-count

import { PitchDuration } from '@musical-patterns/material'
import { as, ContourWhole, repeatCall, sequence } from '@musical-patterns/utilities'
import { RenderingName } from '../../rendering'
import { BarTarget, BlockStyle } from '../../types'
import { AlmostTrueContourPieces, computeAlmostTrueContourPieces } from '../almostTrue'
import { getTrueContours } from './pieces'
import { FormulaicTrueYaosContourWhole, TrueContourWholes } from './types'

const trueFormulaicUmowchuwowiestToInaidjiyaiouzdContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<PitchDuration> => as.ContourWhole(sequence(
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(4),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.IEST, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.TWENTYFOUR, twentyfourRenderingName), as.Cardinal(4),
    ),
))

const trueFormulaicInaidjiyaiouzdToUmowchuwowiestYaosContourWhole: FormulaicTrueYaosContourWhole = (
    fifteenRenderingName: RenderingName, twentyfourRenderingName: RenderingName,
): ContourWhole<PitchDuration> => as.ContourWhole(sequence(
    repeatCall(
        () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(4),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.INAI, BarTarget.FIFTEEN, fifteenRenderingName), as.Cardinal(1),
    ),
    repeatCall(
        () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, twentyfourRenderingName), as.Cardinal(4),
    ),
))

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
            as.ContourWhole(sequence(
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    as.Cardinal(4),
                ),
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    as.Cardinal(1),
                ),
                repeatCall(
                    () =>
                        getTrueContours(BlockStyle.UMOW, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    as.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.OUZD, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    as.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.DJIYAI, BarTarget.FIFTEEN, RenderingName.SPRINGY_SUMMER),
                    as.Cardinal(1),
                ),
                repeatCall(
                    () => getTrueContours(BlockStyle.CHUWOW, BarTarget.TWENTYFOUR, RenderingName.SUMMERY_SPRING),
                    as.Cardinal(4),
                ),
            ))
        const zdaubGlis: ContourWhole<PitchDuration> = as.ContourWhole(sequence(
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS), as.Cardinal(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.GLIS),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.GLIS),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.GLIS), as.Cardinal(3),
            ),
        ))
        const zdaubGlisVariant: ContourWhole<PitchDuration> = as.ContourWhole(sequence(
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.GLIS), as.Cardinal(4)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.GLIS),
            almostTruePieces.zdaubGlisVariant,
        ))
        const zdaubTrem: ContourWhole<PitchDuration> = as.ContourWhole(sequence(
            repeatCall(() => getTrueContours(BlockStyle.NODLE, BarTarget.FIFTEEN, RenderingName.TREM), as.Cardinal(3)),
            getTrueContours(BlockStyle.LIMIN, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.SCEND, BarTarget.FIFTEEN, RenderingName.TREM),
            getTrueContours(BlockStyle.LIMIN, BarTarget.TWENTYFOUR, RenderingName.TREM),
            repeatCall(
                () => getTrueContours(BlockStyle.NODLE, BarTarget.TWENTYFOUR, RenderingName.TREM), as.Cardinal(3),
            ),
        ))

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
