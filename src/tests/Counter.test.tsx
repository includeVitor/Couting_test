import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import CountReducer from '../reducers/Counter'
import {actions} from '../reducers/Counter/actions'

describe('CountReducer' , () => {

    describe('incrementing', () => {

        it('should start with zero and be incremented by one', () => {

            const state = CountReducer({count: 0}, {type: actions.increment})

            expect(state.count).toEqual(1)

            const newState = CountReducer(state, {type: actions.increment})

            expect(newState.count).toEqual(2)

        });
        
    });

    describe('decrementing', () => {

        it('should start with 10 and be decremented by one', () => {
            
            const state = CountReducer({count: 10}, {type: actions.decrement})

            expect(state.count).toEqual(9)

            const newState = CountReducer(state, {type: actions.decrement})

            expect(newState.count).toEqual(8)

        });
        
    });

});