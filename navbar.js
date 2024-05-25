const dropdownlaunchBtn = document.getElementById('droplaunch-button')

const dropdownLaunchMenu = document.getElementById('droplaunchMenu')


document.addEventListener('click',function(event){
if (dropdownlaunchBtn.contains(event.target)) {
	return;
}
if (dropdownLaunchMenu.contains(event.target)==false) {
	dropdownLaunchMenu.style.display='none';
dropdownLaunchMenu.dataset.state='closed';
}
})

dropdownlaunchBtn.addEventListener('click',function(event){

	 if (dropdownLaunchMenu.dataset.state =='closed') {
		dropdownLaunchMenu.style.display='block';
		dropdownLaunchMenu.dataset.state='open';
	 } else{
		dropdownLaunchMenu.style.display='none';
		dropdownLaunchMenu.dataset.state='closed';
	 }
	
})