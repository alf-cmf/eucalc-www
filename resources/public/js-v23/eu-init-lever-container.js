// global lever_sections

// masterLeverTitle must be the same (unique) as tableID used in
// appendLeverTableRow
function addMasterLevelTemplate(newDiv, masterLeverID) {
    var masterLeverTitle = lever_groups[masterLeverID -1];
    var template = "<h3 class='accordeon-header'>" +
"  <table border=0>" + 
"    <tr>" + 
"    <td valign='center' align='right'>" + 
"      <a href='' onclick='return false' class='tooltip2' id='mlever-" + masterLeverID + "'>" + 
"	<font color='#6D6E71'>" +
	masterLeverTitle + 
"       </font>" + 
"	<span> <img class='callout' src='imgs/tooltip/callout_black.gif' /><div id='master-lever-" + masterLeverID + "-0' align='left'></div></span>" + 
"      </a>" + 
"    <td class='mw' valign='center' align='right' width='11px'>" + 
"    <td class='mw' onclick='updateClickedMasterLever (" + masterLeverID + ", 1); return false'>" + 
"      <div id='master-lever-" + masterLeverID + "-1' title='set to level 1' style='position:relative;height:42px;width:20px; cursor:pointer'></div>" + 
"    </td>" +
"    <td class='mw' onclick='updateClickedMasterLever (" + masterLeverID + ", 2); return false'>" +
"      <div id='master-lever-" + masterLeverID + "-2' title='set to level 2' style='position:relative;height:42px;width:20px; cursor:pointer'></div>" +
"    </td>" +
"    <td class='mw' onclick='updateClickedMasterLever (" + masterLeverID + ", 3); return false'>" +
"      <div id='master-lever-" + masterLeverID + "-3' title='set to level 3' style='position:relative;height:42px;width:20px; cursor:pointer'></div>" +
"    </td>" +
"    <td class='mw' onclick='updateClickedMasterLever (" + masterLeverID + ", 4); return false'>" +
"      <div id='master-lever-" + masterLeverID + "-4' title='set to level 4' style='position:relative;height:42px;width:20px; cursor:pointer'></div>" +
"    </td>" +
"    <td width='25px' valign='center' align=right>" +
"      <a id='ml-open-close-link-" + masterLeverID + "' href='' onclick='return false' title='show / hide the sub-levers for this section'>" +
"	<img border='0' id='ml-open-close-icon-" + masterLeverID + "' src='imgs/open.gif'>" +
"      </a>" +
"  </table>" +
"</h3>" +
"<div>" +
"  <table border=0 align='right' id='" + masterLeverTitle + "'>" +
"  </table>" +
"</div>" 

    newDiv.innerHTML = template;
}

function addMasterLevelRow(tableNode, masterLeverID) {
    var masterLeverRowNode = document.createElement("tr");
    var newDiv = document.createElement ('div');
    newDiv.setAttribute("id", "flex-accordion-x-" + masterLeverID);
    addMasterLevelTemplate(newDiv, masterLeverID);    
    var cellNode = document.createElement("td");
    cellNode.setAttribute("align", "right");
    cellNode.setAttribute("valign", "top");
    cellNode.appendChild(newDiv);
    masterLeverRowNode.appendChild(cellNode);
    tableNode.appendChild(masterLeverRowNode);    
}

// fieldsetID starts from 0 not 1 like masterLeverIDs and other gc leverIDs?!
function createFieldset(fieldsetID) {
    var fieldNode = document.createElement("fieldset");
    var legendNode = document.createElement("legend");
    var masterLeverNode = document.createElement("table");
    masterLeverNode.setAttribute("border", 0);
    masterLeverNode.setAttribute("align", "right");
    var fieldsetKey = lever_sections[fieldsetID];
    var fieldset_lever_groups = lever_section_map[fieldsetKey];
    var fieldset_lever_group_iterator = getEuIterator(fieldset_lever_groups);
    
    // populate a master level table
    fieldset_lever_group_iterator.map(group_id => addMasterLevelRow(masterLeverNode, lever_groups.indexOf(fieldset_lever_groups[group_id]) + 1));

    // populate the legend
    legendNode.appendChild(document.createTextNode(fieldsetKey));

    // assemble the fieldset from legend and master levels
    fieldNode.appendChild(legendNode);
    fieldNode.appendChild(masterLeverNode);
    return fieldNode;
}

function toggleMasterLevers() {
    getEuIterator(lever_groups).map(i => $("#flex-accordion-x-" + (i + 1)).togglepanels());
}

function addClickHandlerOnMasterLevers() {
    getEuIterator(lever_groups).map(i => $("#flex-accordion-x-" + (i + 1) + " h3 .mw").click(function() { return false; }));
}

function addClickHandlerOnMasterLeverTableMargins() {
    getEuIterator(lever_groups).map(i => $("#flex-accordion-x-" + (i + 1) + " h3 table").click(function() { switchOpenCloseIcon (i + 1); }));
}

function addLevers(masterLeverID) {
    if (LEVER_DEBUG) alert(masterLeverID);
    var masterLeverTitle = lever_groups[masterLeverID -1];
    var lever_group = lever_group_map[masterLeverTitle];
    var lever_group_iterator = getEuIterator(lever_group);
    setMasterLeverTooltip ("master-lever-" + masterLeverID, lever_group);
    lever_group_iterator.map(i => appendLeverTableRow(4, masterLeverTitle, lever_group[i][0], lever_group[i][1], "gc-lever-description-v23.html"));
    appendLeverTableSeperatorRow(masterLeverTitle);  
}

// add the levers in the order given by lever_groups (also the order given by lever_container_metadata)
function addAllLeversNoLevels() {
    getEuIterator(lever_groups).map(i => addLevers(i+1));
}
