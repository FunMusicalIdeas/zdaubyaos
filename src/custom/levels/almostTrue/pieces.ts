import { Block, ContourPiece, Rendering, to } from '@musical-patterns/pattern'
import { DictionaryOf, Index, sequence } from '@musical-patterns/utilities'
import { BarTarget, BlockStyle } from '../../../types'
import { buildRenderings, RenderingName, Renderings } from '../../renderings'
import { buildTrueBlocks, TrueBlocks } from '../true'
import { buildAlmostTrueBlocks } from './blocks'

const buildAlmostTrueContourPieces: () => DictionaryOf<ContourPiece> =
    (): DictionaryOf<ContourPiece> => {
        const { trueGlisVariantBlock } = buildAlmostTrueBlocks()

        const renderings: Renderings = buildRenderings()
        const glis: Rendering = renderings[ RenderingName.GLIS ]

        const zdaubGlisVariantContourPiece: ContourPiece = glis(trueGlisVariantBlock)

        const trueBlocks: TrueBlocks = buildTrueBlocks()
        const inai: Block = trueBlocks[ BarTarget.TWENTYFOUR ][ BlockStyle.INAI ]
        const inaiiiVarietyContourPiece: ContourPiece = to.ContourPiece(sequence(
            inai.map((blockElement: Index, index: number): ContourPiece => {
                const renderingsSequence: Rendering[] = [
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.SPRING ],
                    renderings[ RenderingName.SUMMER ],
                    renderings[ RenderingName.FALL ],
                    renderings[ RenderingName.FALL ],
                ]

                const rendering: Rendering = renderingsSequence[ index ]

                return rendering(to.Block([ blockElement ]))
            }),
        ))

        return {
            inaiiiVarietyContourPiece,
            zdaubGlisVariantContourPiece,
        }
    }

export {
    buildAlmostTrueContourPieces,
}
