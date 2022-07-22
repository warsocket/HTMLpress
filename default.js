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