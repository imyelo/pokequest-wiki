import combinations from 'ml-combinations'

function pick (typesSize, space, selectedTypesSize) {
  let types, divisions

  if (selectedTypesSize < 1 || selectedTypesSize > space) {
    throw new Error(`Kind must between 1...SPACE (${space})`)
  }

  types = C(selectedTypesSize, typesSize)
  divisions = C(selectedTypesSize - 1, space - 1)

  let result = []
  types.forEach((type) => divisions.forEach((division) => {
    let mask = []
    division.concat(space - 1).forEach((endAt, index) => {
      let startAt = index === 0 ? 0 : (division[index - 1] + 1)
      for (let i = startAt; i <= endAt; i++) {
        mask.push(type[index])
      }
    })
    result.push(mask)
  }))
  return result
}

function C (m, n) {
  if (m === 0) {
    return [[]]
  }
  return Array.from(combinations(m, n))
}

export default function multicombinations (n, k) {
  return Array.from(new Array(k)).reduce((memo, item, index) => {
    return memo.concat(pick(n, k, index + 1))
  }, [])
}
