let posY1, posY2, scroll;
let currentPage = 0;
let pages = document.getElementsByClassName('page');
document.ontouchstart = (e) =>  posY1 = e.touches[0].pageY;
document.ontouchend = (e) => {
    posY2 = e.changedTouches[0].pageY;
    scroll = posY1 - posY2;
    if (scroll > 100 && currentPage < 3) {
        let [page1, page2] = [pages[currentPage], pages[currentPage + 1]];
            currentPage++;
        let [height, opacity] = [100,0];
        let anim = setInterval(() => {
            if (height > 0) {
                height -= 10;
                opacity += 10;
                page1.style.height = height + '%';
                page1.style.opacity = ((100- opacity) / 100) + '';
                page2.style.opacity = (opacity / 100 ) + '';
            } else clearInterval(anim);
        }, 40);
    } else if (scroll < -100 && currentPage > 0) {
        [page1, page2] = [pages[currentPage], pages[currentPage -1]];
        currentPage--;
        let [height, opacity] = [0, 100];
        let anim = setInterval(() => {
            if (height < 100) {
                height += 10;
                opacity -= 10;
                page2.style.opacity = ((100 - opacity) / 100) + '';
                page1.style.opacity = (opacity / 100) + '';
                page2.style.height = height + '%'; 
            } else clearInterval(anim);
        }, 40);
    }
};