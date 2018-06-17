import expect from 'expect';
import { shallow } from 'enzyme';
import { App } from './app';
import React from 'react';
const mockData = {
    city: {
        coord:
            { lat: 51.5073, lon: -0.1277 },
        country:
            'GB',
        id:
            2643743,
        name:
            'London',
        population:
            1000000
    },
    list: [{
        dt: 1406106000,
        main: {
            temp: 298.77,
            temp_min: 298.77,
            temp_max: 298.774,
            pressure: 1005.93,
            sea_level: 1018.18,
            grnd_level: 1005.93,
            humidity: 87,
            temp_kf: 0.26
        },
        weather: [{
            id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'
        }],
        clouds: { all: 88 },
        wind: { speed: 5.71, deg: 229.501 },
        sys: { pod: 'd' },
        dt_txt: '2014-07-23 09:00:00'
    }
    ]
};

describe('App', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App data={mockData}/>);
    });
    it('should have an input box', () => {
        expect(wrapper.find('#txtcity').length).toBe(1);
    });
    it('should have an search button', () => {
        expect(wrapper.find('#btnsearch').length).toBe(1);
    });
    it('default city to london', () => {
        expect(wrapper.state().city).toBe('London');
    });
    it('city name should change when you type in text box', () => {
        wrapper.find('#txtcity').simulate('change', { target: { value: 'Belfast' } });
        expect(wrapper.state().city).toBe('Belfast');
    });
});
