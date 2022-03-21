import Azul from '../media/Azul.png'
import Calico from '../media/Calico.png'
import Catan from '../media/Catan.png'
import Clank from '../media/Clank.png'
import Codenames from '../media/Codenames.png'
import Iwari from '../media/Iwari.png'
import Onitama from '../media/Onitama.png'
import Pandemic from '../media/Pandemic.png'
import Patchwork from '../media/Patchwork.png'
import Splendor from '../media/Splendor.png'
import Startups from '../media/Startups.png'
import TerraformingMars from '../media/TerraformingMars.png'
import Wingspan from '../media/Wingspan.png'

export interface productInterface {
    Name: string,
    Price: number,
    Img: string,
    ID: string | null
  }

export const ProductData:productInterface[] = [
  {Name: "Azul", Price: 40, Img: Azul, ID: null},
  {Name: "Calico", Price: 40, Img: Calico, ID: null},
  {Name: "Catan", Price: 55, Img: Catan, ID: null},
  {Name: "Clank!", Price: 37, Img: Clank, ID: null},
  {Name: "Codenames", Price: 20, Img: Codenames, ID: null},
  {Name: "Iwari", Price: 50, Img: Iwari, ID: null},
  {Name: "Onitama", Price: 30, Img: Onitama, ID: null},
  {Name: "Pandemic", Price: 45, Img: Pandemic, ID: null},
  {Name: "Patchwork", Price: 35, Img: Patchwork, ID: null},
  {Name: "Splendor", Price: 45, Img: Splendor, ID: null},
  {Name: "Startups", Price: 25, Img: Startups, ID: null},
  {Name: "Terraforming Mars", Price: 70, Img: TerraformingMars, ID: null},
  {Name: "Wingspan", Price: 60, Img: Wingspan, ID: null},
]