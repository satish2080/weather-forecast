import { getIcon } from '../utils/helper';
import React from 'react';

const ForecastCard = (props) => {
    return props.data.map((ele, index) => {
        const time = ele.dt_txt.substring(11, 16);
        const icon = getIcon(ele);
        return <div className="box-item forecast-card" key={index}>
            <div className="forecast-text">{`${time} ${parseInt(10, time) > 12 ? 'PM' : 'AM'}`}</div>
            <div className="forecast-text"><img src={icon}/></div>
            <div className="forecast-text">Max {`${(ele.main.temp - 273.15).toFixed(2)}ºC`}</div>
            <div className="forecast-text">Min {`${(ele.main.temp_min - 273.15).toFixed(2)}ºC`}</div>
            <div className="forecast-text">{ele.weather[0].main}</div>
        </div>;
    });
};
export default ForecastCard;
