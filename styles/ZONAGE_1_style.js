var size = 0;
var placement = 'point';
function categories_ZONAGE_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Up':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,176,176,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Uh':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(240,164,0,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Uep':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,82,234,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Uem':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(217,166,241,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Uec':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,170,255,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ued':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,222,241,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ue':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(141,79,255,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Uc':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(220,35,0,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nt':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(201,240,44,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Np':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(3,216,103,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nep':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(8,202,193,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ne':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,234,215,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nab':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(150,175,54,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Na':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(111,224,25,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'N':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(106,175,54,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'At':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(225,195,71,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ap':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(197,197,59,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ae':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(223,223,101,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'A':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,220,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1AUe':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,140,221,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '1AU':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,135,191,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2AUe':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.682)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(60,71,162,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nb':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(82,160,105,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Nd':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(133,182,111,0.682)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ZONAGE_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("LIBELLE");
    var labelFont = "27.3px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_ZONAGE_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
