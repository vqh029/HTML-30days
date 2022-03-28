const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.open-modal-btn')
const iconCloseModal = document.querySelector('.modal__header i')
const closeModalBtn = document.querySelector('.close-modal-btn')

function toggleModal() {
	modal.classList.toggle('hide')
}


openModalBtn.addEventListener('click', toggleModal)
iconCloseModal.addEventListener('click', toggleModal)
closeModalBtn.addEventListener('click', toggleModal)

modal.addEventListener('click', (e) => {
	if (e.target == e.currentTarget) toggleModal()
})
