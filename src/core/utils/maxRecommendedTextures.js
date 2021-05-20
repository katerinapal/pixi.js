

import ext_Device from "ismobilejs";

"use strict";

var maxRecommendedTextures = function(max)
{

	if(ext_Device.tablet || ext_Device.phone)
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

var mod_maxRecommendedTextures;

mod_maxRecommendedTextures = maxRecommendedTextures;
export { mod_maxRecommendedTextures as maxRecommendedTextures };