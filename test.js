// Pour les multiples de 3, on affiche 'Fizz' à la place du nombre.
// Pour les multiples de 5, on affiche 'Buzz' à la place du nombre.
// Pour les multiples de 3 et 5, on affiche 'FizzBuzz' à la place du nombre.

for (let index = 0; index <= 100; index++) {
  let answer = "";

  if (index % 3 === 0) {
    answer += "Fizz";
  }

  if (index % 5 === 0) {
    answer += "Buzz";
  }

  answer === "" ? console.log(index) : console.log(answer);
}
