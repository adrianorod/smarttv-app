const API_URL = '//swapi.dev/api'

export type Card = {
  name: string
}

export type Rail = {
  title: string
  type: string
  cards: Card[]
}

const rails = [
  {
    type: 'people',
    title: 'Personagens',
  },
  {
    type: 'planets',
    title: 'Planetas',
  },
  {
    type: 'starships',
    title: 'Naves Espaciais'
  }
]

const getRails = async (): Promise<Rail[]> => {
  const promises = rails.map(async (rail) => {
    const response = await fetch(`${API_URL}/${rail.type}`)
    const data = await response.json()
    return {
      ...rail,
      cards: data?.results
    }
  })

  const data = await Promise.all(promises)
  return data
}

export default getRails
