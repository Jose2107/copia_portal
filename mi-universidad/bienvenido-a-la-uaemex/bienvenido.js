function showTab(index) {
    let contents = document.querySelectorAll('.tab-content');
    contents.forEach((content, i) => {
        content.classList.toggle('active', i === index);
    });
    
    let container = document.querySelector('.content-container');
    let activeContent = document.querySelector('.tab-content.active');
    container.style.height = '50px' + activeContent.scrollHeight + 'px';
}

document.addEventListener("DOMContentLoaded", function() {
    showTab(0);
});

function showTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(`content-${tabIndex}`).classList.add('active');
    tabs[tabIndex].classList.add('active-tab');
}