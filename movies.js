// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorNames = [];

  moviesArray.forEach((movie) => {
    const director = movie.director;
    if (!directorNames.includes(director)) {
      directorNames.push(director);
    }
  });

  return directorNames;
}

console.log(getAllDirectors(movies));


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaStevenSpielberg = moviesArray.filter(movie => {
    return movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama');
  });
  return dramaStevenSpielberg.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const scoreSum = moviesArray.reduce(function (accumulator, movie) {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  const averageScore = scoreSum / moviesArray.length;
  return parseFloat(averageScore.toFixed(2));
}

console.log(scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes('Drama');
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const scoreSum = dramaMovies.reduce(function (accumulator, movie) {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);

  const averageScore = scoreSum / dramaMovies.length;
  return parseFloat(averageScore.toFixed(2));
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = moviesArray.slice();

  sortedArray.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } if (a.title < b.title) {
      return -1;
    } if (a.title > b.title) {
      return 1;
    } return 0;
  });
  return sortedArray;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copiedArray = [...moviesArray];
  copiedArray.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    } if (a.title > b.title) {
      return 1;
    } return 0;
  });
  const titles = copiedArray.slice(0, 20).map(movie => movie.title);
  return titles;
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const modifiedMovies = [];
  for (let i = 0; i < moviesArray.length; i++) {
    const movie = { ...moviesArray[i] };
    const duration = movie.duration;
    const hours = parseInt(duration.match(/\d+h/), 10) || 0;
    const minutes = parseInt(duration.match(/\d+min/), 10) || 0;
    const totalMinutes = hours * 60 + minutes;
    movie.duration = totalMinutes;
    modifiedMovies.push(movie);
  }

  return modifiedMovies;
}

console.log(turnHoursToMinutes(movies));



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (movies.length === 0) {
    return null;
  }
  const yearScores = {};
  for (const movie of movies) {
    const { year, score } = movie;

    if (year in yearScores) {
      yearScores[year].push(score);
    } else {
      yearScores[year] = [score];
    }
  }
  const averages = {};
  for (const year in yearScores) {
    const scores = yearScores[year];
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    averages[year] = averageScore;
  }
  let bestYear;
  let maxAverage = -Infinity;
  for (const year in averages) {
    const averageScore = averages[year];
    if (averageScore > maxAverage) {
      maxAverage = averageScore;
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${maxAverage.toFixed(1)}`;
}


console.log(bestYearAvg(movies))

