var tableToJiraMarkdown = function(){
	var text = prompt('Paste full table here');
	if(!text) return;
	
	var md = "",
		separator,
		cols,
		colText,
		rows = text.split(/[\r\n|\n]/),
		str,
		asText,
		effectiveRow=0;
		
	for(var i=0; i<rows.length; i++){
		separator = effectiveRow ? '|' : '||';
		cols = rows[i].split(/\t/);
		
		if(cols.length){
			asText = rows[i] && rows[i].replace(/\s/g,'');
			if(!asText || asText == ''){
				continue;
			}
			colText = [];
			/*console.log('columns in row ' + i + ': ', cols);
			console.log('row ' + i + ': ', rows[i]);*/
			for(var c=0; c<cols.length; c++){
				str = cols[c].trim();
				colText.push(str && str != '' ? str : '-');
			}
			md += "\n" + separator + colText.join(separator) + separator;
			effectiveRow++;
		}
		
	}
	
	var elem = document.activeElement;
	if(elem.nodeName.match(/textarea/i)){
		var val = elem.value;
		var pos = elem.selectionStart;
		elem.value = val.slice(0,pos) + "\n" + md + "\n" + val.slice(pos);
	}else{
		prompt('here is your markdown', md);
	}

};
tableToJiraMarkdown();
