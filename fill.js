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
		let obj = data[d]
		if (typeof(obj) === "function") obj = obj()

		domObject.innerText = obj
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

		if (domObject.tagName == "SECTION"){
			if (!sec.children.length) sec.remove() // Remove empty section/page (which is always the standby implicit section)

			art.appendChild(domObject) //append section as is
			sec = document.createElement('section') //create new section
			art.appendChild(sec)

		}else{
			sec.appendChild(domObject)
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
	for (let section of art.children){
		transformClassList(section)

		if( !section.classList.contains("nocount") ) ++pages //dont count the nocounts
	}

	for (let section of art.children){
		if( !section.classList.contains("nocount") ) ++pagecount //dont count the nocounts

		if( !section.classList.contains("noheader") ){
			let h = document.createElement("header")
			h.innerHTML = header()
			section.appendChild(h)
		}

		if( !section.classList.contains("nofooter") ){
			let f = document.createElement("footer")
			f.innerHTML = footer()
			section.appendChild(f)
		}
	}


}
main()