const links = document.getElementsByClassName('header__link');

const onMenuBurgerClick = () =>{
	document.querySelector(".header__burger").classList.toggle('active');
	document.querySelector(".header__menu-body").classList.toggle('active');
	document.body.classList.toggle("lock");
}

const onHeaderLinkClick = (event, id)=>{
	const section = document.getElementById(`${id}`);
	const y = section.getBoundingClientRect().top + window.scrollY - document.querySelector('.header').offsetHeight;
	setTimeout(function() {window.scrollTo({top:y, left:0, behavior: "smooth"})},1);

	if(event.target.classList.value !== 'header__link header__link_active'){
		[...links].forEach(link => {
			link.classList.value === 'header__link header__link_active' && link.classList.remove('header__link_active')
		});
		event.target.classList.add('header__link_active');
	}
}



const onCopyInfo = (n) =>{
	let copyText = [...document.querySelectorAll('.contact__info')];
    copyText[n].select();
    copyText[n].setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
    alert("Copied: " + copyText[n].value);
}