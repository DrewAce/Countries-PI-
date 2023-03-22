export function handleDelete(event, setActivity, activity) {
    setActivity({
      ...activity,
      countries: activity.countries.filter((country) => country !== event),
    });
  }
  
  
  
  export function handleSelect(event, setActivity) {
    const property = event.target.name;
    const value = event.target.value;
    if (value !== "Select countries..") {
      setActivity((activity) => {
        if (property === "countries") {
          return {
            ...activity,
            countries: [...activity.countries, value],
          };
        } else {
          return {
            ...activity,
            [property]: value,
          };
        }
      });
    }
  }
  
  export function handleChange(event, activeUpdate, setActivity, activity) {
    const property = event.target.name;
    const value = event.target.value;
    setActivity({
      ...activity,
      [property]: value,
    });
    document.activityFrom.difficulty.blur();
  }