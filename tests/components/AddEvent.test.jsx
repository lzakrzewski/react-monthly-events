import React from 'react';
import { mount } from 'enzyme';
import AddEvent from "../../src/components/AddEvent";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});
let reference;

beforeEach(() => {
    reference = null;
});

test('can open modal', () => {
    mount(<Provider store={store}><AddEvent onRef={ref => (reference = ref)} /></Provider>);

    reference.openModal();

    expect(reference.state.modalIsOpen).toBe(true)
});

test('can close modal', () => {
    mount(<Provider store={store}><AddEvent onRef={ref => (reference = ref)} /></Provider>);

    reference.openModal();
    reference.closeModal();

    expect(reference.state.modalIsOpen).toBe(false)
});
