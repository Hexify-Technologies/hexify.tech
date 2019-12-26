let animate = () => {
	document.querySelectorAll('.anim').forEach(e => {
		if (
			e.offsetTop - window.innerHeight / 1.2 <
			(window.scrollY || window.pageYOffset)
		) {
			e.classList.add('animate')
		}
	})
}

animate()
window.onscroll = animate
window.onresize = animate
