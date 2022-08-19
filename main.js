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