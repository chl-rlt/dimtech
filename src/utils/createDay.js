const createDay = () => {
  let day = 1; 
  let id = 1;
  let days = []

  for (let i = 0; i < 30; i++){
    days.push({
      id: id++,
      day: day++
    })
  }
 return days
}

export default createDay