let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let winner = null;

        function handleClick(index) {
            if (!gameBoard[index] && !winner) {
                document.getElementById(`cell${index}`).innerHTML = currentPlayer;
                gameBoard[index] = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateStatus();
            }
        }

        function resetGame() {
            currentPlayer = 'X';
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            winner = null;
            resetBoard();
            updateStatus();
            clearWinner();
        }

        function checkWinner() {
            const winConditions = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]             // Diagonals
            ];

            for (let condition of winConditions) {
                const [a, b, c] = condition;
                if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                    winner = gameBoard[a];
                    document.querySelector('.winner').textContent = `Winner: ${winner}`;
                    return;
                }
            }
        }

        function updateStatus() {
            document.querySelector('.status').textContent = `Current player: ${currentPlayer}`;
        }

        function clearWinner() {
            document.querySelector('.winner').textContent = '';
        }

        function resetBoard() {
            const cells = document.querySelectorAll('.container > div');
            cells.forEach(cell => {
                cell.innerHTML = '';
            });
        }