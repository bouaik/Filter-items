(function () {
    const filterBtn = document.querySelectorAll('.filter-btn')

    filterBtn.forEach( (btn) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const value = e.target.dataset.filter

        })
    })




    
})();