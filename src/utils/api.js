import 'isomorphic-fetch';

const rootUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const apiUrl = '&appid=cbf81d10eb128428255b6ec9169fef12';

const get = (place) => {
    return fetch(rootUrl + place + apiUrl)
        .then(function (response) {
            if (response.status !== 200) {
                return { status: response.status, text: response.statusText };
            }
            return response.json();
        });
};
export default get;
