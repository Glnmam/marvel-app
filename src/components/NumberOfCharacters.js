
<<<<<<< HEAD

=======
>>>>>>> a456bde09e775c4b32d51c25d2c22378663beb15
export function NumberOfCharacters({ characters = [] }) {
  if (characters.length === 0) {
    return <p>There is no characters</p>;
  } else if (characters.length === 1) {
    return <p>There is 1 character</p>;
  } else {
    return <p>There is {characters.length} characters</p>;
  }
}
