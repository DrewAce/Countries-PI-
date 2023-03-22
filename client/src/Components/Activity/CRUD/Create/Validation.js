export const validation = (dato) => {
    const regexName = /[^A-Za-z0-9 ]+/g;
    const hasDuplicate = (array) => new Set(array).size < array.length;
  
    let error = {};
  
    if (!dato.name || !dato.duration || dato.countries.length) {
      return error;
    } else {
      if (!dato.name) {
        error.name = "❌Entering a Name is required";
      }
      if (dato.name.length > 40) {
        error.name = "❌Cannot have more than 40 characters";
      }
      if (dato.name.length < 3) {
        error.name = "❌Must be more than 3 characters";
      }
      if (regexName.test(dato.name))
        error.name = "❌Name cannot have special characters or tildes";
  
      if (!dato.difficulty) {
        error.difficulty = "❌The difficulty field is required";
      } else if (dato.difficulty > 5 || dato.difficulty < 1) {
        error.difficulty = "❌ Only values from 1 to 5 are accepted";
      }
      if (!dato.duration) {
        error.duration = "❌The duration field is required";
      } else if (dato.duration > 24 || dato.duration < 1) {
        error.duration = "❌Only values from 1 to 24 are accepted";
      }
      if (!dato.season) {
        error.season = "❌The season field is required";
      }
      if (dato.countries.length === 0)
        error.countries = "❌It is required to enter at least 1 country";
  
      if (hasDuplicate(dato.countries))
        error.countries = "❌There are duplicate countries";
  
      return error;
    }
  };