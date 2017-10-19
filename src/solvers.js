/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  let solution = undefined;
  let rookBoard = new Board({n: n});
  let col = 0;
  
  if (n === 1) {
    solution = [[1]];
  }
  
  for (let row = 0; row < n; row++, col++) {
    if (col === n) {
      col = 0;
    }
    // toggle row, col
    if (row === 0) {
      rookBoard.togglePiece(row, col);
    } else {
      rookBoard.togglePiece(row, col);
      if (rookBoard.hasAnyRooksConflicts()) {
        rookBoard.togglePiece(row, col);
      }
    }
    
  }
  
  solution = rookBoard.rows();
  //for(var i;){}// loop through rookBoard) 
    // loop through row array
    //   use rookBoard.togglePiece(row, col)
    //   
  // console.log('this is a board: ', solution);
  console.log(`Single solution for ${n} rooks:`, JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
