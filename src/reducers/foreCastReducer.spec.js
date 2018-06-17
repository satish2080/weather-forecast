import reducer from './foreCastReducer';
import expect from 'expect';
import { FETCH_DATA_FULFILLED, FETCH_DATA_REJECTED } from '../actions/actionTypes';
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
describe('data reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({ data: null, status: null });
    });

    it('should handle FETCH_DATA_FULFILLED', () => {
        const startFetch = {
            type: FETCH_DATA_FULFILLED,
            payload: { data: mockData }
        };

        expect(reducer({}, startFetch)).toEqual({ data: { data: mockData }, status: 'success' });
    });

    it('should handle FETCH_DATA_REJECTED', () => {
        const startFetch = {
            type: FETCH_DATA_REJECTED,
            payload: {}
        };

        expect(reducer({ data: null, status: null }, startFetch)).toEqual({ data: null, status: 'failed' });
    });
});

