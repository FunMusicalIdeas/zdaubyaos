// tslint:disable:no-magic-numbers

import { DictionaryOf, Scalar, to } from '../../../../src/indexForTest'
import { buildZdaubyaosScalars } from '../../src/indexForTest'

describe('scales', () => {
    describe('subparticular series scale', () => {
        it('has all the pitches whose numerator is one less than the denominator', () => {
            const { subparticularSeriesScalars }: DictionaryOf<Scalar[]> = buildZdaubyaosScalars()

            const expectedScalars: Scalar[] = [
                1 / 2,
                2 / 3,
                3 / 4,
                4 / 5,
            ].map(to.Scalar)

            expectedScalars.forEach((expectedPitch: Scalar, index: number): void => {
                expect(subparticularSeriesScalars[ index ]).toEqual(expectedPitch)
            })
        })
    })

    describe('dubparticular series scale', () => {
        it('has all the pitches whose numerator is two less than the denominator', () => {
            const { dubparticularSeriesScalars }: DictionaryOf<Scalar[]> = buildZdaubyaosScalars()

            const expectedScalars: Scalar[] = [
                1 / 3,
                2 / 4,
                3 / 5,
                4 / 6,
            ].map(to.Scalar)

            expectedScalars.forEach((expectedPitch: Scalar, index: number): void => {
                expect(dubparticularSeriesScalars[ index ]).toEqual(expectedPitch)
            })
        })
    })

    describe('superparticular series scale', () => {
        it('has all the pitches whose numerator is one more than the denominator', () => {
            const { superparticularSeriesScalars }: DictionaryOf<Scalar[]> = buildZdaubyaosScalars()

            const expectedScalars: Scalar[] = [
                2 / 1,
                3 / 2,
                4 / 3,
                5 / 4,
            ].map(to.Scalar)

            expectedScalars.forEach((expectedPitch: Scalar, index: number): void => {
                expect(superparticularSeriesScalars[ index ]).toEqual(expectedPitch)
            })
        })
    })

    describe('duperparticular series scale', () => {
        it('has all the pitches whose numerator is two more than the denominator', () => {
            const { duperparticularSeriesScalars }: DictionaryOf<Scalar[]> = buildZdaubyaosScalars()

            const expectedScalars: Scalar[] = [
                3 / 1,
                4 / 2,
                5 / 3,
                6 / 4,
            ].map(to.Scalar)

            expectedScalars.forEach((expectedPitch: Scalar, index: number): void => {
                expect(duperparticularSeriesScalars[ index ]).toEqual(expectedPitch)
            })
        })
    })
})
