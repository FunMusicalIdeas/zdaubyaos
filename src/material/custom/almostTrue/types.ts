import { PitchDuration, Segment } from '@musical-patterns/material'
import { Block, ContourPiece, ContourWhole } from '@musical-patterns/utilities'

interface AlmostTrueBlocks {
    trueGlisVariant: Block,
}

interface AlmostTrueContourPieces {
    inaiiiVariety: ContourPiece<PitchDuration>,
    zdaubGlisVariant: ContourPiece<PitchDuration>,
}

interface AlmostTrueSegments {
    bonyJigAndNowItBecomesKindaHighAndMagicSparkly: Segment,
    extendedEndingAllZdaubTriumphantAllNoteTypesFlippedHarmonically: Segment,
    fallAllYaosBothBlockStrategiesBonyJigIntroHappyGoLuckyRandomFeeling: Segment,
}

interface AlmostTrueContourWholes {
    extendedEndingZdaubBony: ContourWhole<PitchDuration>,
    extendedEndingZdaubGlis: ContourWhole<PitchDuration>,
    extendedEndingZdaubTrem: ContourWhole<PitchDuration>,
    yaosUmowchuwowiestAndInaidjiyaiouzdFallAndPitchAdjustment: ContourWhole<PitchDuration>,
    yetOfBackbone: ContourWhole<PitchDuration>,
    zdaubBonyWithSuperinscape: ContourWhole<PitchDuration>,
}

export {
    AlmostTrueBlocks,
    AlmostTrueContourPieces,
    AlmostTrueSegments,
    AlmostTrueContourWholes,
}
