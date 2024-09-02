interface Item {
  name: string
  regularPrice: number
  jumboPrice: number
}

const milkshakes: Item[] = [
  { name: 'Banana Milkshake', regularPrice: 160, jumboPrice: 280 },
  { name: 'Banana Khoya Milkshake', regularPrice: 260, jumboPrice: 360 },
  { name: 'Banana Khoya Badam Milkshake', regularPrice: 410, jumboPrice: 510 },
  { name: 'Apple Banana Milkshake', regularPrice: 160, jumboPrice: 280 },
  { name: 'Apple Banana Khoya Milkshake', regularPrice: 260, jumboPrice: 360 },
  { name: 'Apple Milkshake', regularPrice: 180, jumboPrice: 280 },
  { name: 'Apple Khoya Milkshake', regularPrice: 280, jumboPrice: 380 },
  { name: 'Mango Milkshake', regularPrice: 260, jumboPrice: 360 },
  { name: 'Mango Khoya Milkshake', regularPrice: 360, jumboPrice: 460 },
  { name: 'Super Mango', regularPrice: 500, jumboPrice: 600 },
  { name: 'Khoya Khajor Milkshake', regularPrice: 360, jumboPrice: 460 },
  { name: 'Khoya Badam Milkshake', regularPrice: 420, jumboPrice: 520 },
  { name: 'Khoya Khajor Badam Milkshake', regularPrice: 520, jumboPrice: 620 },
  { name: 'Banana Khajor', regularPrice: 320, jumboPrice: 420 },
  { name: 'Avocado Milkshake with Honey', regularPrice: 1000, jumboPrice: 1400 },
  { name: 'Injer Khoya Badam Milkshake', regularPrice: 730, jumboPrice: 830 },
  { name: 'Strawberry Milkshake', regularPrice: 330, jumboPrice: 430 },
  { name: 'Strawberry Khoya', regularPrice: 430, jumboPrice: 530 },
  { name: 'Strawberry Banana', regularPrice: 250, jumboPrice: 350 },
  { name: 'Pineapple Milkshake', regularPrice: 350, jumboPrice: 350 }
]

const juices: Item[] = [
  { name: 'Apple Juice', regularPrice: 280, jumboPrice: 380 },
  { name: 'Pineapple Juice', regularPrice: 350, jumboPrice: 450 },
  { name: 'Grapefruit Juice', regularPrice: 200, jumboPrice: 250 },
  { name: 'White Anar Juice', regularPrice: 400, jumboPrice: 600 },
  { name: 'Red Anar Juice', regularPrice: 400, jumboPrice: 600 },
  { name: 'Peach Juice', regularPrice: 250, jumboPrice: 350 },
  { name: 'Alo Bukhara Juice', regularPrice: 310, jumboPrice: 410 },
  { name: 'Pina Colada', regularPrice: 380, jumboPrice: 480 },
  { name: 'Mint Margrita', regularPrice: 180, jumboPrice: 280 },
  { name: 'Super Lemon', regularPrice: 180, jumboPrice: 280 },
  { name: 'Fresh Lime', regularPrice: 180, jumboPrice: 280 },
  { name: 'Cocktail Juice', regularPrice: 360, jumboPrice: 460 }
]

export { milkshakes, juices }
