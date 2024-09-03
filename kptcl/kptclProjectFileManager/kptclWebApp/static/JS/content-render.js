const tabs = document.querySelectorAll('nav .tabs')
const content = document.querySelectorAll('.content')

const removeActive = () => {
    tabs.forEach((t) => {
        t.classList.remove('active');
    });

    content.forEach((c)=> {
        c.classList.remove('active');
    });
}

tabs.forEach((t, i) => {
    t.addEventListener('click', ()=> {
        removeActive();
        content[i].classList.add('active');
        t.classList.add('active')
    });
})