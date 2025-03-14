//FizzBuzz
function fizzBuzz (n)
{
  if (!Number.isInteger(n) || n < 1 || n >= 100)
  {
    console.error("Error");
    return;
  }

  for (let i = 1; i <= n; i++)
  {
    const remainderBy3 = i % 3;
    const remainderBy5 = i % 5;

    if (remainderBy3 === 0 && remainderBy5 === 0)
    {
      console.log("FizzBuzz");
    }
    else if (remainderBy3 === 0)
    {
      console.log("Fizz");
    }
    else if (remainderBy5 === 0)
    {
      console.log("Buzz");
    }
    else
    {
      console.log(i);
    }
  }
}

fizzBuzz(0);
fizzBuzz(100);
fizzBuzz(16);

//Letter COunt
function letterCount (word)
{
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (typeof word !== "string")
  {
    console.error("Error");
    return;
  }

  for (const letter of word)
  {
    if (!alphabet.includes(letter.toLowerCase()))
    {
      console.error("Error");
      return;
    }
  }

  let letterCounts = {};

  for (let letter of word)
  {
    let lowerCaseLetter = letter.toLowerCase();

    // If the letter is already in the dictionary, increment its count
    if (letterCounts[lowerCaseLetter] !== undefined)
    {
      letterCounts[lowerCaseLetter]++;
    }
    else
    {
      letterCounts[lowerCaseLetter] = 1;
    }
  }

  return letterCounts;
}

letterCount("Caesar42");
console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));

