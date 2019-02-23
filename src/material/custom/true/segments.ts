// tslint:disable max-file-line-count

import { Segment } from '@musical-patterns/pattern'
import { DictionaryOf, negative, to } from '@musical-patterns/utilities'
import { buildSegment } from '../../segments'
import { buildTrueContourWholes } from './wholes'

const buildTrueSegments: () => DictionaryOf<Segment> =
    (): DictionaryOf<Segment> => {
        const {
            trueYaosInaidjiyaiouzdSummerToSpringContourWhole,
            trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole,
            trueYaosUmowchuwowiestSpringToSummerContourWhole,
            trueYaosUmowchuwowiestSummerToSpringContourWhole,
            trueZdaubGlisContourWhole,
            trueZdaubGlisVariantContourWhole,
            trueZdaubTremContourWhole,
        } = buildTrueContourWholes()

        const trueSpringAllYaosUmowchuwowiestSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const trueAllYaosAllRhythmsAtOnceSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
                trueYaosUmowchuwowiestSummerToSpringContourWhole,
                trueYaosInaidjiyaiouzdSummerToSpringContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(4) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment: Segment = buildSegment(
            [
                trueYaosUmowchuwowiestSummerToSpringContourWhole,
                trueYaosUmowchuwowiestSummerToSpringContourWhole,
                trueYaosUmowchuwowiestSummerToSpringContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(3) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const trueSpringWithZdaubSegment: Segment = buildSegment(
            [
                trueZdaubGlisContourWhole,
                trueYaosUmowchuwowiestSpringToSummerContourWhole,
                trueZdaubTremContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(0) },
                { scaleIndex: to.Ordinal(1) },
                { scaleIndex: to.Ordinal(2) },
            ],
        )

        const trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment: Segment =
            buildSegment(
                [
                    trueYaosUmowchuwowiestSummerToSpringContourWhole,
                    trueZdaubGlisContourWhole,
                    trueZdaubGlisVariantContourWhole,
                ],
                [
                    { scaleIndex: to.Ordinal(3), pitchIndexTranslation: to.Translation(2) },
                    { scaleIndex: to.Ordinal(1) },
                    { scaleIndex: to.Ordinal(2) },
                ],
            )

        const trueSpringySummerTotallyOutThereSegment: Segment = buildSegment(
            [
                trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole,
                trueZdaubGlisContourWhole,
                trueYaosSpringySummerStraightIntoZdaubInaidjiyaiouzdContourWhole,
            ],
            [
                { scaleIndex: to.Ordinal(0), pitchIndexTranslation: to.Translation(2) },
                { scaleIndex: to.Ordinal(1), pitchIndexTranslation: to.Translation(negative(2)) },
                { scaleIndex: to.Ordinal(2), pitchIndexTranslation: to.Translation(negative(3)) },
            ],
        )

        return {
            trueAllYaosAllRhythmsAtOnceSegment,
            trueSpringAllYaosUmowchuwowiestSegment,
            trueSpringWithZdaubSegment,
            trueSpringySummerTotallyOutThereSegment,
            trueSummerAllYaosUmowchuwowiestWithSomeHarmonicallyFlippedSegment,
            trueSummerWithZdaubAndSeparationVariantGetsPleasantlyGnarlyHarmonicallySegment,
        }
    }

export {
    buildTrueSegments,
}
