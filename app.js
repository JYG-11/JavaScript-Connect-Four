document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    const root = Math.sqrt(squares.length)
    const goal = 4
    let currentPlayer = 1
    let gameOver = false

    function makeMove(index) {
        return function() {

            if (gameOver) {
                return null
            }

            if (squares[index].classList.contains('player-one') === false && 
                squares[index].classList.contains('player-two') === false && 
                (index >= squares.length - Math.sqrt(squares.length) || 
                squares[index + root].classList.contains('taken'))) {

                if (currentPlayer === 1) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer

                } else {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                checkBoard()
            } else {
                alert('choose another square')
            }
        }
    }

    function checkBoard() {
        for (let i = 0; i < squares.length; i++) {
            checkHorizontal(i)

            if (gameOver) {
                return
            }

            checkVertical(i)

            if (gameOver) {
                return
            }

            checkDiagonalLeft(i)

            if (gameOver) {
                return
            }

            checkDiagonalRight(i)

            if (gameOver) {
                return
            }
        }   
    }

    function checkHorizontal(i) {
        let player = null

        if (currentPlayer === 1) {
            player = 'two'
        } else if (currentPlayer === 2){
            player = 'one'
        } else {
            result.innerHTML = 'Something went wrong...'
            gameOver = true
            return
        }

        let consequetive = 0

        for (let x = 0; x < root; x++) {
            if (x == 0 || ((i + x) % root != 0)) {
                if (squares[i + x].classList.contains('player-' + player)) {
                    consequetive++
                    if (consequetive == goal) {
                        result.innerHTML = 'Player ' + player + ' wins!'
                        gameOver = true
                        return
                    }
                } else {
                    consequetive = 0
                }
            } else {
                return
            }
        }
    }

    function checkVertical(i) {
        let player = null

        if (currentPlayer === 1) {
            player = 'two'
        } else if (currentPlayer === 2){
            player = 'one'
        } else {
            result.innerHTML = 'Something went wrong...'
            gameOver = true
            return
        }

        let consequetive = 0

        for (let z = 0; z < squares.length; z+= root) {
            if (i + z < squares.length) {
                if (squares[i + z].classList.contains('player-' + player)) {
                    consequetive++
                    if (consequetive == goal) {
                        result.innerHTML = 'Player ' + player + ' wins!'
                        gameOver = true
                        return
                    }
                } else {
                    consequetive = 0
                }
            } else {
                return
            }
        }
    }

    function checkDiagonalLeft(i) {
        let player = null

        if (currentPlayer === 1) {
            player = 'two'
        } else if (currentPlayer === 2){
            player = 'one'
        } else {
            result.innerHTML = 'Something went wrong...'
            gameOver = true
            return
        }

        let consequetive = 0

        for (let z = 0; z < squares.length; z+= (root - 1)) {
            if (i + z < squares.length) {
                if (squares[i + z].classList.contains('player-' + player)) {
                    consequetive++
                    if (consequetive == goal) {
                        result.innerHTML = 'Player ' + player + ' wins!'
                        gameOver = true
                        return
                    }
                } else {
                    consequetive = 0
                }
            } else {
                return
            }
        }
    }

    function checkDiagonalRight(i) {
        let player = null

        if (currentPlayer === 1) {
            player = 'two'
        } else if (currentPlayer === 2){
            player = 'one'
        } else {
            result.innerHTML = 'Something went wrong...'
            gameOver = true
            return
        }

        let consequetive = 0

        for (let z = 0; z < squares.length; z+= (root + 1)) {
            if (i + z < squares.length) {
                if (squares[i + z].classList.contains('player-' + player)) {
                    consequetive++
                    if (consequetive == goal) {
                        result.innerHTML = 'Player ' + player + ' wins!'
                        gameOver = true
                        return
                    }
                } else {
                    consequetive = 0
                }
            } else {
                return
            }
        }
    }

    squares.forEach((square, index) => square.addEventListener('click', makeMove(index)))
})