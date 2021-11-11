const showYear = () => {
	document.getElementById( 'show-year' ).innerText = ( new Date() ).getFullYear();
}

module.exports.showYear = showYear;