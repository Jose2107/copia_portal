function showTab(index) {
    let contents = document.querySelectorAll('.tab-content');
    contents.forEach((content, i) => {
        content.classList.toggle('active', i === index);
    });
}
