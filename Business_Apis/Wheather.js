const { weatherApiKey, weatherApi, weatherPath} = require('../config/axios');

const getCurrentWheather = async(lat,lng) => 
{
    let latParam =  encodeURI(lat);
    let lngParam = encodeURI(lng)

    let ApiResult = await weatherApi.get(weatherPath, { params: { lat: latParam, lon: lngParam, appid: weatherApiKey, lang: 'es' }});

   if(ApiResult.data.weather.length === 0) 
        throw new Error(`Does not have wheather information for  the coordinates : (${lat},${lng})`);

    return ApiResult.data.weather[0].description;
}

module.exports = { getCurrentWheather }
