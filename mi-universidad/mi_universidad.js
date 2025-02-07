document.querySelectorAll('.tab-link-org').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-link-org').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content-org').forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});