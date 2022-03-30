const buttonShows = document.querySelectorAll('.control button')

buttonShows.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        createToast(e.target.getAttribute('class'))
    })
})

const toasts = {
    success: {
		icon: '<i class="bx bxs-check-circle"></i>',
		msg: 'This is a success message !',
	},
	error: {
		icon: '<i class="bx bxs-error-circle"></i>',
		msg: 'This is a error message !',
	},
	warning: {
		icon: '<i class="bx bxs-error"></i>',
		msg: 'This is a warning message !',
	}
}

function createToast(status){
    let toast = document.createElement('div')
    toast.className = `toast ${status}`

    toast.innerHTML = 
        `
        ${toasts[status].icon}
        <span class="msg">${toasts[status].msg}</span>
        <span class="countdown"></span>
        `
    document.querySelector('#toasts').appendChild(toast)

    setTimeout(()=>{
        toast.style.animation = 'hide_noti 1s ease forwards'
    }, 4000)
    setTimeout(()=>{
        toast.remove()
    }, 6000)
    
}