// load the eu calc lever configuration
var leverContainerMetadata = JSON.parse(document.getElementById('lever_container_metadata').innerHTML);
var lever_iterator = getEuIterator(leverContainerMetadata["leverMetaData"].slice(1));
var lever_sections = selectEuArrayOfUniques(0, leverContainerMetadata, "leverMetaData");
var lever_groups = selectEuArrayOfUniques(1, leverContainerMetadata, "leverMetaData");
var lever_group_map = {};
var lever_section_map = {};

// return an ordered section array of groups in the old gc-lever-setup
// format given a lever_section
function getGroups (lever_section) {
    return selectEuArrayOfData (1, leverContainerMetadata, "leverMetaData", 0, lever_section);
    
}

// return an ordered group array of levers in the old gc-lever-setup
// format given a lever_group
function getLevers (lever_group) {
    var _lever_names, _lever_ids, _lever_iterator;
    _lever_names = selectEuArrayOfData (2, leverContainerMetadata, "leverMetaData", 1, lever_group);
    _lever_ids = selectEuArrayOfData (4, leverContainerMetadata, "leverMetaData", 1, lever_group);
    _lever_iterator = getEuIterator(_lever_names);
    return _lever_iterator.map(lever_index => [_lever_names[lever_index], _lever_ids[lever_index]+1]);
    
}
    
// define a lever_group_map unordered hashmap replacing individual
// master level setup variables from gc-lever-setup.js:
// --------------------------------------------------------------------
// master lever setup (lever names + lever ids) 
// lever id denotes position in url param str, starting with 1
// --------------------------------------------------------------------

lever_groups.map(lever_group => lever_group_map[lever_group] = getLevers(lever_group));



lever_sections.map(lever_section => lever_section_map[lever_section] = getGroups(lever_section).filter(function (x, i, a) { return a.indexOf(x) == i; }));


// redefine other variables from gc-lever-setup.js

// -------------------------------------------------------------------------------
// lever information
// -------------------------------------------------------------------------------
var NUM_MASTER_LEVERS 	= lever_groups.length;
var NUM_LEVERS        	= leverContainerMetadata["leverMetaData"].slice(1).length;
var NUM_CTRLABLE_LEVERS = NUM_LEVERS;

// -------------------------------------------------------------------------------
// store current status of all levers
// storage index = lever index (= url param string index, starting with 1)-1
// -------------------------------------------------------------------------------
var indices = lever_iterator.map(i => 0);

// -------------------------------------------------------------------------------
// store current status of all master levers
// -------------------------------------------------------------------------------
var master_indices = getEuIterator(lever_groups).map(i => 0);

// -----------------------------------------------------------------------------------------------
// denotes those levers that have less than 4 stages and / or do not allow for decimals
//
// [lever id, max stages, decimal allowed]
// -----------------------------------------------------------------------------------------------
var specificLeverSetup = lever_iterator.map(i => [i+1, 4, false]);


function getMaxStageForLever (leverID) {
  for(var i=0; i<specificLeverSetup.length; i++) 
    if (specificLeverSetup[i][0] == leverID) return specificLeverSetup[i][1];
  return 4;
}

function isDecimalAllowedForLever (leverID) {
  for(var i=0; i<specificLeverSetup.length; i++) 
    if (specificLeverSetup[i][0] == leverID) return specificLeverSetup[i][2];
  return true;
}

// --------------------------------------------------------------------
// returns the internal lever ids for a given lever setup group
// --------------------------------------------------------------------
function getLeverSetFromSetup (leverSetup) {

  var arr = [];
  for(var i=0; i<leverSetup.length; i++) 
    arr.push(leverSetup[i][1]-1); // lever url pos id = internal id + 1
  return arr;
}

// --------------------------------------------------------------------
// returns the internal lever ids for a given master lever id
// --------------------------------------------------------------------
function getLeverSetForMaster (masterLeverID) {

    if ((masterLeverID <= lever_groups.length) && (masterLeverID > 0)) {
	return getLeverSetFromSetup(lever_group_map[lever_groups[masterLeverID - 1]]);
    } else {
	return [];
    }

}
