
const form = document.querySelector('.search-form__submit').addEventListener('click', function(e) {
        let inputs = document.querySelectorAll('.search-form__field');
        inputs.forEach(input => {
            if(input.value === '') {
                console.log('Заполните поле');
                e.preventDefault();
                input.classList.add('active');
            } else {
                console.log(input.value);
                input.classList.remove('active')
            }
        })
});
