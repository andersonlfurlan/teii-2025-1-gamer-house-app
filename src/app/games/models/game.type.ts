export type Game = {
  id?: number,
  image: string | null,
  title: string,
  launchDate: Date,
  price: number,
  category: string,
  platforms: string[]
}
