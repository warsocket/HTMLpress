function main(){

	/* sanity check */
	let articles = document.querySelectorAll("article");
	if (articles.length != 1){
		alert("No or multiple article tags found, should be 1!")
		return
	}

	/* Filling in text from data sctructure*/
	for (var domObject of document.querySelectorAll("[data]")){
		let d = domObject.getAttribute("data")
		domObject.innerText = data[d]
	}


	/* paging */
	var article = articles[0]
	article.style.display = "none"

	/* Get all non section in article, and put them in sections (pages) */
	const art = document.createElement('article')
	article.parentNode.insertBefore(art, article)

	var sec = document.createElement('section')
	art.appendChild(sec)

	var domObject
	while(article.children.length){
		domObject = article.children[0]
		if (domObject.tagName != "SECTION"){
			sec.appendChild(domObject)
		}else{
			if (!sec.children.length) sec.remove()
			art.appendChild(domObject) //append section as is

			sec = document.createElement('section') //create new section
			art.appendChild(sec)

		}	

		// check for overflow
		if (sec.clientHeight != sec.scrollHeight){
			sec = document.createElement('section') //create new section
			art.appendChild(sec)
			sec.appendChild(domObject) // add it to new section (technically moving it)
		}	
	}
	// article.remove()

	/* place headers and footers */
	pages = art.children.length //overwrite pages variable
	for (let section of art.children){
		if(section.classList.contains("title")) continue //Title pages dont get headers / footers

		let h = document.createElement("header")
		h.innerHTML = header()
		section.appendChild(h)

		let f = document.createElement("footer")
		f.innerHTML = footer()
		section.appendChild(f)
	}


}
main()