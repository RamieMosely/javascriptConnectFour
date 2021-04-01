document.addEventListener('DOMContentLoaded', () =>
{
    //Grabbing elements from DOM and assigning them to variables
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#currentPlayer')
    let currentPlayer = 1

    //Checking where player clicks 
    for(let i = 0; i < squares.length; i++)
    {
        squares[i].onclick = () => {
            //if the sqaure below your current square is taken, you can go ontop of it
            if (squares[i + 7].classList.contains('taken'))
            {
                if(currentPlayer == 1)
                {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('playerOne')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                }

                else if(currentPlayer == 2)
                {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('playerTwo')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
                else alert('INVALID OPERATION!')

            }
        }

    }
})