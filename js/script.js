const links = document.getElementsByClassName('header__link');
const onHeaderLinkClick = (event)=>{
	if(event.target.classList.value !== 'header__link header__link_active'){
		[...links].forEach(link => {
			link.classList.value === 'header__link header__link_active' && link.classList.remove('header__link_active')
		});
		event.target.classList.add('header__link_active');
	}
}

const onMenuBurgerClick = () =>{
	document.querySelector(".header__burger").classList.toggle('active');
	document.querySelector(".header__menu-body").classList.toggle('active');
	document.body.classList.toggle("lock");
}