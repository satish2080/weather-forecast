import expect from 'expect';
import * as Helpers from '../utils/helper';

describe('Helper', () => {
    it('getDate should return day in text, day and year', () => {
        let date = Helpers.getDate('2018-02-06');
        expect(date).toEqual('Tuesday, February 6th 2018');
    });
    it('groupBy should group elements on property', () => {
        const data = [{
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
        }, {
            dt: 1406106000,
            main: {
                temp: 298.77,
                temp_min: 290.77,
                temp_max: 290.774,
                pressure: 1005.93,
                sea_level: 1018.18,
                grnd_level: 1005.93,
                humidity: 87,
                temp_kf: 0.26
            },
            weather: [{
                id: 804, main: 'Rain', description: 'overcast cloudsRain', icon: '03d'
            }],
            clouds: { all: 88 },
            wind: { speed: 5.71, deg: 229.501 },
            sys: { pod: 'd' },
            dt_txt: '2014-07-23 12:00:00'
        }, {
            dt: 1406106000,
            main: {
                temp: 298.77,
                temp_min: 290.77,
                temp_max: 290.774,
                pressure: 1005.93,
                sea_level: 1018.18,
                grnd_level: 1005.93,
                humidity: 87,
                temp_kf: 0.26
            },
            weather: [{
                id: 804, main: 'Rain', description: 'overcast cloudsRain', icon: '03d'
            }],
            clouds: { all: 88 },
            wind: { speed: 5.71, deg: 229.501 },
            sys: { pod: 'd' },
            dt_txt: '2014-07-24 12:00:00'
        }
        ];
        let response = Helpers.groupBy(data, 'dt_txt');
        expect(response['2014-07-23'].length).toBe(2);
        expect(response['2014-07-24'].length).toBe(1);
    });
});
