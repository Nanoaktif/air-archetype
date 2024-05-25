const categorySelect= document.querySelectorAll('.category-bar-container .carousel_category a ')

categorySelect.forEach(a=>{
	a.addEventListener('click',function(event){
		categorySelect.forEach(a=>
			a.classList.remove('active'));
			event.target.classList.add('active');
	}	)
})