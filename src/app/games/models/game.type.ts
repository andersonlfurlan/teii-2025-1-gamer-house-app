export type Game = {
  id?: number,
  image: string | null,
  title: string,
  launchDate: Date | string,
  price: number,
  category: string,
  platforms: string[]
}
