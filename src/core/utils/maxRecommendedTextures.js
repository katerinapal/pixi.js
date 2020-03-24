

import Device from "ismobilejs";

var maxRecommendedTextures = function(max)
{

	if(Device.tablet || Device.phone)
	{
		// check if the res is iphone 6 or higher..
		return 2;
	}
	else
	{
		// desktop should be ok
		return max;
	}
};

let exported_maxRecommendedTextures = maxRecommendedTextures;
export { exported_maxRecommendedTextures as maxRecommendedTextures };