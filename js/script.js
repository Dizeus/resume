const links = document.getElementsByClassName('header__link');
const onHeaderLinkClick = (event)=>{
	if(event.target.classList.value !== 'header__link active'){
		[...links].forEach(link => {
			link.classList.value === 'header__link active' && link.classList.remove('active')
		});
		event.target.classList.add('active');
	}
}

