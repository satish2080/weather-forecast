import expect from 'expect';
import sinon from 'sinon';
import get from '../utils/api';

describe('Api', () => {
    afterEach(()=>{
        sinon.restore();
    });
    it('should fetch the data', async () => {
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
        const promise = Promise.resolve({ json: () => mockData, status: 200 });
        sinon.stub(global, 'fetch').callsFake(() => promise);
        let data = await get('Belfast');
        expect(data).toEqual(mockData);
    });
    it('should return error message', async () => {
        const promise = Promise.resolve({ ok: false, status: 401, statusText: 'Unauthorized' });
        sinon.stub(global, 'fetch').callsFake(() => promise);
        let data = await get('Belfast');
        expect(data).toEqual({ status: 401, text: 'Unauthorized' });
    });
});
