    window.onload = ()=> {
        let box = document.querySelectorAll('.box');
        console.log(box);
        box.forEach((value)=> {
            value.classList.add('box_load')
        })
    }