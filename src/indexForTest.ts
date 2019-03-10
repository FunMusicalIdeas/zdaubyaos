// tslint:disable no-reaching-imports

export {
    buildNotes,
    materializeEntities,
    buildNote,
    materializeScales,
    buildRenderings,
    Renderings,
    RenderingName,
    buildOtherContourPieces,
    buildThirtyfiveContourPieces,
    getTrueContours,
    buildTrueContourPieces,
    buildAlmostTrueContourPieces,
    applyGainScalar,
    applyPitchIndexTranslation,
    TrueContourPiecesByRenderingName,
    TrueContourPiecesByBarTargetThenBlockStyleThenRenderingName,
    BarTarget,
    BlockStyle,
    AlmostTrueContourPieces,
    OtherContourPieces,
    ThirtyfiveContourPieces,
} from './material/indexForTest'
export { pattern } from './patterns'

// tslint:disable-next-line no-default-import
import * as snapshot from './snapshot.json'

export { snapshot }
