import moment from 'moment';
/* eslint-disable no-param-reassign */
export const groupBy = (list, prop) => {
    return list.reduce((groups, item) => {
        const val = item[prop];
        (groups[val.substring(0, 10)] = groups[val.substring(0, 10)] || []).push(item);
        return groups;
    }, {});
};

export const getDate = (date) => {
    return moment(date).format('dddd, MMMM Do YYYY');
};

export const getIcon = ele => `https://openweathermap.org/img/w/${ele.weather[0].icon}.png`;
