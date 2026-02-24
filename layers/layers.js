ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([475797.132906, 6585684.759856, 523532.835426, 6609495.465423]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.575000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZONAGE_1 = new ol.format.GeoJSON();
var features_ZONAGE_1 = format_ZONAGE_1.readFeatures(json_ZONAGE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_ZONAGE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAGE_1.addFeatures(features_ZONAGE_1);
var lyr_ZONAGE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONAGE_1, 
                style: style_ZONAGE_1,
                popuplayertitle: 'ZONAGE',
                interactive: true,
    title: 'ZONAGE<br />\
    <img src="styles/legend/ZONAGE_1_0.png" /> UP<br />\
    <img src="styles/legend/ZONAGE_1_1.png" /> UH<br />\
    <img src="styles/legend/ZONAGE_1_2.png" /> UEp<br />\
    <img src="styles/legend/ZONAGE_1_3.png" /> UEm<br />\
    <img src="styles/legend/ZONAGE_1_4.png" /> UEc<br />\
    <img src="styles/legend/ZONAGE_1_5.png" /> UEd<br />\
    <img src="styles/legend/ZONAGE_1_6.png" /> UE<br />\
    <img src="styles/legend/ZONAGE_1_7.png" /> UC<br />\
    <img src="styles/legend/ZONAGE_1_8.png" /> Nt<br />\
    <img src="styles/legend/ZONAGE_1_9.png" /> Np<br />\
    <img src="styles/legend/ZONAGE_1_10.png" /> Nep<br />\
    <img src="styles/legend/ZONAGE_1_11.png" /> Ne<br />\
    <img src="styles/legend/ZONAGE_1_12.png" /> Nab<br />\
    <img src="styles/legend/ZONAGE_1_13.png" /> Na<br />\
    <img src="styles/legend/ZONAGE_1_14.png" /> N<br />\
    <img src="styles/legend/ZONAGE_1_15.png" /> At<br />\
    <img src="styles/legend/ZONAGE_1_16.png" /> Ap<br />\
    <img src="styles/legend/ZONAGE_1_17.png" /> Ae<br />\
    <img src="styles/legend/ZONAGE_1_18.png" /> A<br />\
    <img src="styles/legend/ZONAGE_1_19.png" /> 1AUe<br />\
    <img src="styles/legend/ZONAGE_1_20.png" /> 1AU<br />\
    <img src="styles/legend/ZONAGE_1_21.png" /> 2AUe<br />\
    <img src="styles/legend/ZONAGE_1_22.png" /> Nb<br />\
    <img src="styles/legend/ZONAGE_1_23.png" /> Nd<br />' });
var format_PRESCRIPTION_LINEAIRE_2 = new ol.format.GeoJSON();
var features_PRESCRIPTION_LINEAIRE_2 = format_PRESCRIPTION_LINEAIRE_2.readFeatures(json_PRESCRIPTION_LINEAIRE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PRESCRIPTION_LINEAIRE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRESCRIPTION_LINEAIRE_2.addFeatures(features_PRESCRIPTION_LINEAIRE_2);
var lyr_PRESCRIPTION_LINEAIRE_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRESCRIPTION_LINEAIRE_2, 
                style: style_PRESCRIPTION_LINEAIRE_2,
                popuplayertitle: 'PRESCRIPTION_LINEAIRE',
                interactive: true,
    title: 'PRESCRIPTION_LINEAIRE<br />\
    <img src="styles/legend/PRESCRIPTION_LINEAIRE_2_0.png" /> ALIGNEMENT ARBRE<br />\
    <img src="styles/legend/PRESCRIPTION_LINEAIRE_2_1.png" /> CHEMIN<br />\
    <img src="styles/legend/PRESCRIPTION_LINEAIRE_2_2.png" /> COMMERCE<br />\
    <img src="styles/legend/PRESCRIPTION_LINEAIRE_2_3.png" /> HAIE<br />\
    <img src="styles/legend/PRESCRIPTION_LINEAIRE_2_4.png" /> MURET<br />' });
var format_PRESCRIPTION_PONCTUELLE_3 = new ol.format.GeoJSON();
var features_PRESCRIPTION_PONCTUELLE_3 = format_PRESCRIPTION_PONCTUELLE_3.readFeatures(json_PRESCRIPTION_PONCTUELLE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PRESCRIPTION_PONCTUELLE_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRESCRIPTION_PONCTUELLE_3.addFeatures(features_PRESCRIPTION_PONCTUELLE_3);
var lyr_PRESCRIPTION_PONCTUELLE_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRESCRIPTION_PONCTUELLE_3, 
                style: style_PRESCRIPTION_PONCTUELLE_3,
                popuplayertitle: 'PRESCRIPTION_PONCTUELLE',
                interactive: true,
    title: 'PRESCRIPTION_PONCTUELLE<br />\
    <img src="styles/legend/PRESCRIPTION_PONCTUELLE_3_0.png" /> ARBRE<br />\
    <img src="styles/legend/PRESCRIPTION_PONCTUELLE_3_1.png" /> CHANGEMENT DE DESTINATION<br />\
    <img src="styles/legend/PRESCRIPTION_PONCTUELLE_3_2.png" /> ELEMENT PAYSAGER<br />\
    <img src="styles/legend/PRESCRIPTION_PONCTUELLE_3_3.png" /> MARE<br />\
    <img src="styles/legend/PRESCRIPTION_PONCTUELLE_3_4.png" /> PATRIMOINE<br />' });
var format_PRESCRIPTION_SURFACIQUE_4 = new ol.format.GeoJSON();
var features_PRESCRIPTION_SURFACIQUE_4 = format_PRESCRIPTION_SURFACIQUE_4.readFeatures(json_PRESCRIPTION_SURFACIQUE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PRESCRIPTION_SURFACIQUE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRESCRIPTION_SURFACIQUE_4.addFeatures(features_PRESCRIPTION_SURFACIQUE_4);
var lyr_PRESCRIPTION_SURFACIQUE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRESCRIPTION_SURFACIQUE_4, 
                style: style_PRESCRIPTION_SURFACIQUE_4,
                popuplayertitle: 'PRESCRIPTION_SURFACIQUE',
                interactive: true,
    title: 'PRESCRIPTION_SURFACIQUE<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_0.png" /> ARCHEO<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_1.png" /> AZI<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_2.png" /> CONE VUE<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_3.png" /> EBC<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_4.png" /> ENP<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_5.png" /> EMPLCAMENT RESERVE<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_6.png" /> MARE<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_7.png" /> OAP<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_8.png" /> PATRIMOINE<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_9.png" /> PARCS ET JARDINS A PROTEGER<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_10.png" /> PPRi<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_11.png" /> PPRmt<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_12.png" /> BANDE DE RETRAIT<br />\
    <img src="styles/legend/PRESCRIPTION_SURFACIQUE_4_13.png" /> ZH<br />' });
var format_PARCELLE_5 = new ol.format.GeoJSON();
var features_PARCELLE_5 = format_PARCELLE_5.readFeatures(json_PARCELLE_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_PARCELLE_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARCELLE_5.addFeatures(features_PARCELLE_5);
var lyr_PARCELLE_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARCELLE_5, 
                style: style_PARCELLE_5,
                popuplayertitle: 'PARCELLE',
                interactive: true,
                title: '<img src="styles/legend/PARCELLE_5.png" /> PARCELLE'
            });
var format_BATIMENT_6 = new ol.format.GeoJSON();
var features_BATIMENT_6 = format_BATIMENT_6.readFeatures(json_BATIMENT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_BATIMENT_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATIMENT_6.addFeatures(features_BATIMENT_6);
var lyr_BATIMENT_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATIMENT_6, 
                style: style_BATIMENT_6,
                popuplayertitle: 'BATIMENT',
                interactive: false,
                title: '<img src="styles/legend/BATIMENT_6.png" /> BATIMENT'
            });
var format_COMMUNE_7 = new ol.format.GeoJSON();
var features_COMMUNE_7 = format_COMMUNE_7.readFeatures(json_COMMUNE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_COMMUNE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_7.addFeatures(features_COMMUNE_7);
var lyr_COMMUNE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_7, 
                style: style_COMMUNE_7,
                popuplayertitle: 'COMMUNE',
                interactive: true,
                title: '<img src="styles/legend/COMMUNE_7.png" /> COMMUNE'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ZONAGE_1.setVisible(true);lyr_PRESCRIPTION_LINEAIRE_2.setVisible(true);lyr_PRESCRIPTION_PONCTUELLE_3.setVisible(true);lyr_PRESCRIPTION_SURFACIQUE_4.setVisible(true);lyr_PARCELLE_5.setVisible(true);lyr_BATIMENT_6.setVisible(true);lyr_COMMUNE_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ZONAGE_1,lyr_PRESCRIPTION_LINEAIRE_2,lyr_PRESCRIPTION_PONCTUELLE_3,lyr_PRESCRIPTION_SURFACIQUE_4,lyr_PARCELLE_5,lyr_BATIMENT_6,lyr_COMMUNE_7];
lyr_ZONAGE_1.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', });
lyr_PRESCRIPTION_LINEAIRE_2.set('fieldAliases', {'TXT': 'TXT', });
lyr_PRESCRIPTION_PONCTUELLE_3.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', });
lyr_PRESCRIPTION_SURFACIQUE_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', });
lyr_PARCELLE_5.set('fieldAliases', {'PARCELLE': 'PARCELLE', });
lyr_BATIMENT_6.set('fieldAliases', {'TYPE': 'TYPE', });
lyr_COMMUNE_7.set('fieldAliases', {'NOM_COM': 'NOM_COM', });
lyr_ZONAGE_1.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', });
lyr_PRESCRIPTION_LINEAIRE_2.set('fieldImages', {'TXT': 'TextEdit', });
lyr_PRESCRIPTION_PONCTUELLE_3.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', });
lyr_PRESCRIPTION_SURFACIQUE_4.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', });
lyr_PARCELLE_5.set('fieldImages', {'PARCELLE': 'TextEdit', });
lyr_BATIMENT_6.set('fieldImages', {'TYPE': 'TextEdit', });
lyr_COMMUNE_7.set('fieldImages', {'NOM_COM': 'TextEdit', });
lyr_ZONAGE_1.set('fieldLabels', {'LIBELLE': 'inline label - always visible', 'LIBELONG': 'no label', });
lyr_PRESCRIPTION_LINEAIRE_2.set('fieldLabels', {'TXT': 'inline label - always visible', });
lyr_PRESCRIPTION_PONCTUELLE_3.set('fieldLabels', {'LIBELLE': 'inline label - always visible', 'TXT': 'no label', });
lyr_PRESCRIPTION_SURFACIQUE_4.set('fieldLabels', {'LIBELLE': 'inline label - always visible', 'TXT': 'no label', });
lyr_PARCELLE_5.set('fieldLabels', {'PARCELLE': 'inline label - always visible', });
lyr_BATIMENT_6.set('fieldLabels', {'TYPE': 'no label', });
lyr_COMMUNE_7.set('fieldLabels', {'NOM_COM': 'inline label - always visible', });
lyr_COMMUNE_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});