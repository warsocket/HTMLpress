function header(){
	return `${data.title}`
}

function footer(){
	return `${pagecount}/${pages}`
}

function transformClassList(section){
	if (section.classList.contains("title")){
		section.classList.add("nocount")
		section.classList.add("noheader")
		section.classList.add("nofooter")
	}

	if (section.classList.contains("nodecoration")){
		section.classList.add("noheader")
		section.classList.add("nofooter")
	}
}

function date(){
	let d = new Date()
	date = `${String(d.getFullYear()).padStart(4,'0')}-${String(d.getMonth()).padStart(2,'0')}-${String(d.getDay()).padStart(2,'0')}`  
	return date
}