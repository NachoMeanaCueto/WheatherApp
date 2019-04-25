const { coordinatesApi, coordinatesPath } = require('../config/axios');

const getCoordinates = async( direction ) => 
{
    let param =  encodeURI(direction);
    let ApiResult = await coordinatesApi.get(coordinatesPath, { params: { location: param }});

   if(ApiResult.data.Results.length === 0)
       throw new Error(`Does not have coordinates for ${direction}`);

    let resp = response = {
        direction: ApiResult.data.Results[0].name,
        lat: ApiResult.data.Results[0].lat,
        lng:ApiResult.data.Results[0].lon,
    };

    return resp;

}

module.exports = { getCoordinates }
