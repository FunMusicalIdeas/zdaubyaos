import { Offset, Scalar } from '../../../../src/utilities/nominalTypes'
import numbers from '../../../../src/utilities/numbers'
import offset from '../../../../src/utilities/offset'
import scale from '../../../../src/utilities/scale'
import * as to from '../../../../src/utilities/to'
import { Contour, ContourElement } from '../types'
import * as zdaubyaosFrom from '../utilities/from'
import { Block } from '../utilities/nominalTypes'

// tslint:disable-next-line:no-any no-magic-numbers
const SUMMERY_SPRING_OFFSET: Offset = -1.5 as any
// tslint:disable-next-line:no-any no-magic-numbers
const SUMMERY_SPRING_SCALAR: Scalar = 2 as any

const INDEX_OF_PITCH_INDEX: number = 0
const INITIAL: number = 0

const summerySpringBlock: (block: Block) => Contour =
    (block: Block): Contour => {
        const contour: Contour = numbers
            .slice(0, zdaubyaosFrom.Block(block))
            .map((n: number): ContourElement => ([
                to.Index(scale(offset(n, SUMMERY_SPRING_OFFSET), SUMMERY_SPRING_SCALAR)),
                to.Time(1),
            ]))
        contour[INITIAL][INDEX_OF_PITCH_INDEX] = to.Index(0)

        return contour
    }

export default summerySpringBlock
