import { BuildScalesFunction, Scale } from '@musical-patterns/compiler'
import { buildStandardScales, StandardSpec, StandardSpecProperties } from '@musical-patterns/pattern'
import { from, NO_TRANSLATION, Scalar, to, Translation } from '@musical-patterns/utilities'
import { buildScalars } from './scalars'

const buildScales: BuildScalesFunction =
    (spec: StandardSpec): Scale[] => {
        const patternPitchScalar: Scalar =
            from.Hz(spec[ StandardSpecProperties.BASE_FREQUENCY ] || to.Scalar(to.Hz(1)))
        const patternPitchTranslation: Translation =
            from.Hz(spec[ StandardSpecProperties.FREQUENCY_TRANSLATION ] || to.Hz(NO_TRANSLATION))
        const patternDurationScalar: Scalar =
            from.Ms(spec[ StandardSpecProperties.BASE_DURATION ] || to.Scalar(to.Ms(1)))
        const patternDurationTranslation: Translation =
            from.Ms(spec[ StandardSpecProperties.DURATION_TRANSLATION ] || to.Ms(NO_TRANSLATION))

        const {
            subparticularSeriesScalars,
            dubparticularSeriesScalars,
            superparticularSeriesScalars,
            duperparticularSeriesScalars,
        } = buildScalars()

        const {
            flatDurationsScale,
            harmonicSeriesScale,
            subharmonicSeriesScale,
        } = buildStandardScales()

        return [
            flatDurationsScale,
            {
                scalar: patternDurationScalar,
                scalars: flatDurationsScale.scalars,
                translation: patternDurationTranslation,
            },
            {
                scalar: patternPitchScalar,
                scalars: subparticularSeriesScalars,
                translation: patternPitchTranslation,
            },
            {
                scalar: patternPitchScalar,
                scalars: dubparticularSeriesScalars,
                translation: patternPitchTranslation,
            },
            {
                scalar: patternPitchScalar,
                scalars: harmonicSeriesScale.scalars,
                translation: patternPitchTranslation,
            },
            {
                scalar: patternPitchScalar,
                scalars: superparticularSeriesScalars,
                translation: patternPitchTranslation,
            },
            {
                scalar: patternPitchScalar,
                scalars: duperparticularSeriesScalars,
                translation: patternPitchTranslation,
            },
            {
                scalar: patternPitchScalar,
                scalars: subharmonicSeriesScale.scalars,
                translation: patternPitchTranslation,
            },
        ]
    }

export {
    buildScales,
}
