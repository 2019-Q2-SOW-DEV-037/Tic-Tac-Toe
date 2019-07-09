class TicTacToeView{
    renderGameLayout() {
        document.body.innerHTML = '<div class="grid-container" id="grid"></div>';
        var element;
        for (let i = 1; i < 10; i++) {
            element = document.createElement('div');
            element.className = 'grid-item';
            element.dataset.sequence = i.toString();
            document.getElementById('grid').appendChild(element);
        }
    }
}

module.exports = TicTacToeView;