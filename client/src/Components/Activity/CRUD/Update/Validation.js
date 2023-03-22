export const validation = (dato) => {
    const hasDuplicate = (array) => new Set(array).size < array.length;
  
    let error = {};
  
    if (
      !dato.hasOwnProperty("name") ||
      !dato.hasOwnProperty("difficulty") ||
      !dato.hasOwnProperty("duration") ||
      !dato.hasOwnProperty("season") ||
      !dato.hasOwnProperty("countries")
    ) {
      return error;
    } else {
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
      if (!dato.countries.length)
        error.countries = "❌It is required to enter at least 1 country";
  
      if (hasDuplicate(dato.countries))
        error.countries = "❌There are duplicate countries";
  
      return error;
    }
  };
  