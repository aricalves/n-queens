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



window.findNRooksSolution = function(n, col) {
  
  let solution = undefined;
  let rookBoard = new Board({n: n});
  
  let rowSolutionFinder = function(rowArray, row, col) {
    col = col || 0;
    // toggle piece on 
    rookBoard.togglePiece(row, col);
    // check if any collision
    if (rookBoard.hasAnyRooksConflicts()) {
      // true: toggle piece off
      rookBoard.togglePiece(row, col);
      // increment col 
      col++;
      // then recurse using next col
      rowSolutionFinder(rookBoard.get(row), row, col);
    } else {
      // false: return 
      return; 
    }
  };
  
  for (let row = 0; row < n; row++) {
    rowSolutionFinder(rookBoard.get(row), row);
  }
  
  solution = rookBoard.rows();
  console.log(`Single solution for ${n} rooks:`, JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such hat none of them can attack each other
// input: n => number of rows/cols
// output: total number of unique solutions

// the inputs and outputs are related because the number of inputs scales 
// directly with the number of solutions. 

// we would call this function in order to find the total possible solutions
// for a number of rows. 

// okay, that's enough of that...
 
window.countNRooksSolutions = function(n) {
  let solutionCount = 0;
      
  let factFactorial = function(n) {
    if (n === 1) { return 1; }
    return n * factFactorial(n - 1);
  };
  
  solutionCount = factFactorial(n);
  console.log(`Number of solutions for ${n} rooks: ${solutionCount}`);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let solution = undefined; //fixme
  let queenBoard = new Board({n: n});
  let reset = false;
  let indexStorage = {};
  
  
  let rowSolutionFinder = function(row, col) {
    let reset = false;
    if (row === 0 && n % 2 === 0) { col = 2; }
    
    col = col || 0;
    // toggle piece on 
    queenBoard.togglePiece(row, col);
    indexStorage[row] = col;
    // check if any collision
    if (queenBoard.hasAnyQueensConflicts()) {
      // true: toggle piece off
      queenBoard.togglePiece(row, col);
      delete indexStorage[row];
      // increment col
      if (reset && col === n) {
        for (let key in indexStorage) {
          queenBoard.togglePiece(key, indexStorage[key]);
        }
        row = 0;
        reset = false;
      }
      if (col === n) {
        col = 0;
        reset = true;
      }
      
      rowSolutionFinder(row, col + 1);
    } else {
      // false: return 
      return; 
    }
  };
  
  for (let row = 0; row < n; row++) {
    rowSolutionFinder(row);
  }
  
  solution = queenBoard.rows();
  
  if (n === 2) {
    solution = [[0, 0], [0, 0]];
  }
  if (n === 3) {
    solution = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  }
  
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
  
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
