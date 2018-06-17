import expect from 'expect';
import { render } from 'enzyme';
import ForeCastCard from './forecastCard';
import React from 'react';

describe('ForeCastCard', () => {
    let wrapper;
    let props;
    beforeEach(() => {
        props = {
            data: [{
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
            }
            ]
        };
        wrapper = render(<ForeCastCard {...props} />);
    });
    it('should render the props', () => {
        expect(wrapper.find('.forecast-text').length).toBe(10);
        expect(wrapper.find('.forecast-text')[0].children[0].data).toBe('09:00 AM');
        expect(wrapper.find('.forecast-text')[2].children[0].data).toBe('Max 25.62ºC');
        expect(wrapper.find('.forecast-text')[3].children[0].data).toBe('Min 25.62ºC');
        expect(wrapper.find('.forecast-text')[4].children[0].data).toBe('Clouds');
        expect(wrapper.find('.forecast-text')[5].children[0].data).toBe('12:00 AM');
        expect(wrapper.find('.forecast-text')[7].children[0].data).toBe('Max 25.62ºC');
        expect(wrapper.find('.forecast-text')[8].children[0].data).toBe('Min 17.62ºC');
        expect(wrapper.find('.forecast-text')[9].children[0].data).toBe('Rain');
    });
});
