// Create a 8*8 chessboard

function createChessBoard(size) {

    let chessBoard = '';

    for (let x = 0; x < size; x++) {     // outer loop defines how many line will be printed
        for (let y = 0; y < size; y++) {  // inner loop defines characters of the line
            if ((x + y) % 2 == 0) {
                chessBoard += ' ';
            } else {
                chessBoard += '#';
            }
        }
        chessBoard += "\n";
    }
    return chessBoard;
}

const result = createChessBoard(8);

console.log(result);


//  output: 
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #