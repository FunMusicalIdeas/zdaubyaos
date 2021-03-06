import { as, isUndefined, Maybe, objectSet, use } from '@musical-patterns/utilities'
import { RenderingName } from '../rendering'
import { BarTarget, BlockStyle } from '../types'
import { UsageCount, UsageCountByRendering, UsageGrouping } from './types'

const contourUsages: UsageGrouping = {
    [ BarTarget.FIFTEEN ]: {},
    [ BarTarget.TWENTYFOUR ]: {},
}

const countUsage: (barTarget: BarTarget, blockStyle: BlockStyle, renderingName: RenderingName) => void =
    (barTarget: BarTarget, blockStyle: BlockStyle, renderingName: RenderingName): void => {

        contourUsages[ barTarget ][ blockStyle ] =
            contourUsages[ barTarget ][ blockStyle ] || {}

        const byBlockStyle: Maybe<UsageCountByRendering> =
            contourUsages[ barTarget ][ blockStyle ]

        if (!isUndefined(byBlockStyle)) {
            let byRenderingName: Maybe<UsageCount> = byBlockStyle[ renderingName ]
            if (!isUndefined(byRenderingName)) {
                byRenderingName = use.Cardinal(byRenderingName, as.Cardinal<UsageCount>(1))
                objectSet(byBlockStyle, renderingName, byRenderingName)
            }
            else {
                objectSet(byBlockStyle, renderingName, as.Cardinal(1))
            }
        }
    }

export {
    countUsage,
    contourUsages,
}
