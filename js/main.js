const navMobile = document.querySelector('.mobile-nav__items')
const navBtn = document.querySelector('.hamburger')
const allNavItem = document.querySelectorAll('.mobile-nav__nav-link')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('active')

	allNavItem.forEach(item => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('active')
		})
	})

	allNavItem.forEach(item => {
		item.addEventListener('click', () => {
			navBtn.classList.remove('is-active')
		})
	})
}
navBtn.addEventListener('click', handleNav)

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
