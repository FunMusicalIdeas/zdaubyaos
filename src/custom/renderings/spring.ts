import { ContourPiece, RenderingByBlockElement, to } from '@musical-patterns/pattern'
import { apply, from, Index, INITIAL, numbers } from '@musical-patterns/utilities'
import { INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT } from '../../constants'
import { ContourElement } from '../../types'
import { SINGLE_DURATION } from './constants'

const springRendering: RenderingByBlockElement =
    (blockElement: Index): ContourPiece => {
        const numbersWeNeed: number[] = numbers.slice(from.Index(INITIAL), from.Index(blockElement))
        const contour: ContourPiece = to.ContourPiece(
            numbersWeNeed.map((n: number): ContourElement => [ n, SINGLE_DURATION ]),
        )
        const contourElement: ContourElement = apply.Index(contour, INITIAL)
        contourElement[ from.Index(INDEX_OF_PITCH_INDEX_WITHIN_CONTOUR_ELEMENT) ] = 0

        return contour
    }

export {
    springRendering,
}
