function getEuDsCountries () {
   
    var countries = eds["result"].slice(1).map(point => point[2]);
    var country_names = countries.filter(function (x, i, a) { return a.indexOf(x) == i; });
    return country_names;

}

function getEuDsSeries (country) {
    
    var country_metrics = eds["result"].slice(1).filter(point => point[2] == country);
    country_metrics = country_metrics.map(point => [parseInt(point[1]), roundValue(point[0]/5000)]);
    return country_metrics.sort();
    
}

//function getColors (howMany) {
//
//color: '#ffffcc',
//color: '#bdbdbd',
//color: '#a6cee3',
//color: '#1f78b4',
//color: '#b2df8a',
//color: '#33a02c',
//color: '#ff7f00',
//color: '#fb9a99',
//color: '#e31a1c',
//color: '#d53e4f',
//color: '#f46d43',
//color: '#fdae61',
//color: '#ffffbf',
//color: '#e6f598',
//color: '#abdda4',
//color: '#fee08b',
//color: '#66c2a5',
//color: '#3288bd',
//color: '#C0C0C0',
//color: '#fdbf6f',
//color: '#cab2d6',
//color: '#7fc97f',
//color: '#ffff33',
//color: '#6a3d9a',
//color: '#ffff99',
//color: '#fef0d9',
//color: '#fdcc8a',
//color: '#fc8d59',
//color: '#d7301f',
//color: '#cfcfcf',
//    
//}
//

function getEuDsTitle () {

    return eds["result"][0][0];

}
