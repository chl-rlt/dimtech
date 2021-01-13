const createYears = () => {
  let recentYear = 2012
  let id = 1
  let years = []


  for (let i = 0; i < 63; i++) {
    years.push({
      id: id++,
      year: recentYear--
    })
  }

return years
}

export default createYears