document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageArea = document.querySelector('.newsletter .message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (email === '' || !validateEmail(email)) {
            messageArea.textContent = 'Please enter a valid email address.';
        } else {
            messageArea.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            emailInput.value = '';
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
