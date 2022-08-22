function OpenModal() {
    let element = document.getElementById('overlay')
    element.style.display = 'block'
    let popup_element = document.getElementById('popup')
    popup_element.style.animation = 'popup_move_in 1s'
}

function CloseModal() {
    let popup_element = document.getElementById('popup')
    popup_element.style.animation = 'popup_move_out 1s'

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    delay(800).then(() => {
        let element = document.getElementById('overlay')
        element.style.display = 'none';
    });

}

function loadArticles(category, articles) {
    let col_max = 3
    const body = document.body,
        tbl = document.createElement('table');
    tbl.className = 'article_table'
    outer: for (let i = 0; i < 100; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < col_max; j++) {
            const td = tr.insertCell();
            td.style.width = 100/col_max + '%'
            if (i * col_max + j >= articles.length) {
                break outer
            }
            td.appendChild(
                createArticleCard('articles/'+category+'/'+articles[i * col_max + j])
            );
        }
    }
    body.appendChild(tbl);
}

function createArticleCard(filename){
    let cardElement = document.createElement('div');
    cardElement.className = 'article_card'
    let imgElement = document.createElement('img')
    imgElement.src = filename + '.jpeg'
    imgElement.className = 'article_poster'
    let aElement = document.createElement('a')
    aElement.href = filename + '.html'
    cardElement.appendChild(aElement)
    aElement.appendChild(imgElement)
    return cardElement
}