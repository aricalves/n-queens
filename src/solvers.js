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
  let solution = []; //fixme
  let queenBoard = new Board({n: n});
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [[1]];
  }
  // for (let c = 0; c < n; c++) {
  let findDatKween = function(row, col) {
    if (col > n) {
      col = 0;
    }
    col = col || 0;
    if (n === 4) {
    // debugger;      
    }
    // for (let c = 0; c < n; c++) {
    queenBoard.togglePiece(row, col);
      console.log(JSON.stringify(queenBoard.rows()));
    if (!queenBoard.hasAnyQueensConflicts()) {
      if (row === n - 1) {
        solution = (queenBoard.rows());
        // break;
      } else {
        findDatKween(row + 1);
      }
    } else if (col === n - 1 && queenBoard.hasAnyQueensConflicts()) {
      queenBoard = new Board({n: n});
      // continue;
    } else {
      queenBoard.togglePiece(row, col);
      
      findDatKween(row, col + 1);
    }
      
    // }
   
  };
   
  for (let c = 0; c < n; c++) {
    findDatKween(0, c);
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
