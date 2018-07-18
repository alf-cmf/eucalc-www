
// takes an array identifierArray of non-redundant identifiers
// (otherwise the trick from below is broken) as input and returns an
// array of indices from 0 to the length of the input array - 1
function getEuIterator(identifierArray) {
    
    return identifierArray.map(identifier => identifierArray.indexOf(identifier));
    
}

// extracts an array of unique data identifiers/points found under an
// index selectedIndex from a json "Eu-Calc" dataset jsonDataset
// (e.g. json returned by eucalc-app) within a context identified by
// jsonContextIdentifier; an "Eu-Calc" dataset is a map of multiple
// subdatasets identified by a jsonContextIdentifier. Such a
// subdataset is in turn an array of arrays having a header as first
// element; this is a generalisation from getEuDsCountries
function selectEuArrayOfUniques (selectedIndex, jsonDataset, jsonContextIdentifier) {

    var data_array = jsonDataset[jsonContextIdentifier].slice(1).map(point => point[selectedIndex]);
    var unique_data_array = data_array.filter(function (x, i, a) { return a.indexOf(x) == i; });
    return unique_data_array;
    
}

// unsorted generalisation from getEuDsSeries where
// whereConstraintValue plays the role of the country parameter
function selectEuArrayOfData (selectedIndex, jsonDataset, jsonContextIdentifier, whereConstraintIndex, whereConstraintValue) {

    var eu_data_array = jsonDataset[jsonContextIdentifier].slice(1).filter(point => point[whereConstraintIndex] == whereConstraintValue);
    eu_data_array = eu_data_array.map(point => point[selectedIndex]);
    return eu_data_array;
    
}


function getEuDsCountries () {
   
    var countries = ds["result"].slice(1).map(point => point[2]);
    var country_names = countries.filter(function (x, i, a) { return a.indexOf(x) == i; });
    return country_names;

}

function getEuDsSeries (country) {
    
    var country_metrics = ds["result"].slice(1).filter(point => point[2] == country);
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

    return ds["result"][0][0];

}
