import { zdaubBlocksByBarDurationThenBlockStyle } from '../blocks/zdaubBlocks'
import zdaubRenderings from '../renderings/zdaubRenderings'
import { Blocks, Contour, RenderingFunction } from '../types'
import * as to from '../utilities/to'
import { BarDuration, ZdaubBlockStyle, ZdaubRendering } from '../zdaubyaosTypes'

type ByRendering = { [z in ZdaubRendering]: Contour }
type ByBlockStyle = { [y in ZdaubBlockStyle]: ByRendering }
type ZdaubContours = { [x in BarDuration]: ByBlockStyle }

// @ts-ignore
const zdaubContoursByBarDurationBlockStyleThenRendering: ZdaubContours = {}

Object.entries(zdaubBlocksByBarDurationThenBlockStyle).forEach(
// @ts-ignore
    ([barDuration, blocksBy]: [BarDuration, ByBlockStyle]): void => {
        Object.entries(blocksBy).forEach(
            // @ts-ignore
            ([blocksName, blocks]: [ZdaubBlockStyle, Blocks]): void => {
                Object.entries(zdaubRenderings).forEach(
                    // @ts-ignore
                    ([renderingName, rendering]: [ZdaubRendering, RenderingFunction]): void => {
                        const contour: Contour = rendering(blocks)

                        zdaubContoursByBarDurationBlockStyleThenRendering[barDuration] =
                            zdaubContoursByBarDurationBlockStyleThenRendering[barDuration] || {}
                        zdaubContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName] =
                            zdaubContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName] || {}
                        zdaubContoursByBarDurationBlockStyleThenRendering[barDuration][blocksName][renderingName] =
                            contour
                    })
            })
    })

const zdaubGlisVariantContour: Contour = to.Contour([
    [4, 4], [5, 5], [6, 6],
    [7, 7], [8, 8],
    [9, 9], [8, 8],
    [6, 6], [4, 4], [2, 2], [4, 4], [6, 6],
    [8, 8], [6, 6], [4, 4], [2, 2], [4, 4],
    [6, 6], [4, 4], [2, 2], [4, 4], [6, 6],
    [8, 8], [6, 6], [4, 4], [2, 2], [4, 4], [2, 2],
])

export {
    zdaubContoursByBarDurationBlockStyleThenRendering,
    zdaubGlisVariantContour,
}
