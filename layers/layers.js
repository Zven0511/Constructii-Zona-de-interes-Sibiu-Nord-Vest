ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([430081.294319, 477870.780794, 434205.338792, 480458.159015]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Zonadeinteresconstructii_3 = new ol.format.GeoJSON();
var features_Zonadeinteresconstructii_3 = format_Zonadeinteresconstructii_3.readFeatures(json_Zonadeinteresconstructii_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_Zonadeinteresconstructii_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonadeinteresconstructii_3.addFeatures(features_Zonadeinteresconstructii_3);
var lyr_Zonadeinteresconstructii_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonadeinteresconstructii_3, 
                style: style_Zonadeinteresconstructii_3,
                popuplayertitle: 'Zona de interes constructii',
                interactive: true,
                title: '<img src="styles/legend/Zonadeinteresconstructii_3.png" /> Zona de interes constructii'
            });
var format_TotalConstructii_4 = new ol.format.GeoJSON();
var features_TotalConstructii_4 = format_TotalConstructii_4.readFeatures(json_TotalConstructii_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_TotalConstructii_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TotalConstructii_4.addFeatures(features_TotalConstructii_4);
var lyr_TotalConstructii_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TotalConstructii_4, 
                style: style_TotalConstructii_4,
                popuplayertitle: 'Total Constructii',
                interactive: true,
                title: '<img src="styles/legend/TotalConstructii_4.png" /> Total Constructii'
            });
var format_PunctStereographic_5 = new ol.format.GeoJSON();
var features_PunctStereographic_5 = format_PunctStereographic_5.readFeatures(json_PunctStereographic_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_PunctStereographic_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunctStereographic_5.addFeatures(features_PunctStereographic_5);
var lyr_PunctStereographic_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PunctStereographic_5, 
                style: style_PunctStereographic_5,
                popuplayertitle: 'Punct Stereographic',
                interactive: true,
                title: '<img src="styles/legend/PunctStereographic_5.png" /> Punct Stereographic'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_Zonadeinteresconstructii_3.setVisible(true);lyr_TotalConstructii_4.setVisible(true);lyr_PunctStereographic_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_OpenStreetMap_1,lyr_GoogleSatelliteHybrid_2,lyr_Zonadeinteresconstructii_3,lyr_TotalConstructii_4,lyr_PunctStereographic_5];
lyr_Zonadeinteresconstructii_3.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_TotalConstructii_4.set('fieldAliases', {'id': 'id', 'Supr.[mp]': 'Supr.[mp]', });
lyr_PunctStereographic_5.set('fieldAliases', {'id': 'id', });
lyr_Zonadeinteresconstructii_3.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', });
lyr_TotalConstructii_4.set('fieldImages', {'id': 'TextEdit', 'Supr.[mp]': 'TextEdit', });
lyr_PunctStereographic_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Zonadeinteresconstructii_3.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'altitude': 'inline label - visible with data', 'alt_mode': 'inline label - visible with data', 'time_begin': 'inline label - visible with data', 'time_end': 'inline label - visible with data', 'time_when': 'inline label - visible with data', });
lyr_TotalConstructii_4.set('fieldLabels', {'id': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_PunctStereographic_5.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_PunctStereographic_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});