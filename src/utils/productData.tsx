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
import { v4 as uuidv4 } from 'uuid'

export interface productInterface {
    Name: string,
    Price: number,
    Img: string,
    ID: string,
  }

export const ProductData:productInterface[] = [
  {Name: "Azul", Price: 40, Img: Azul, ID: uuidv4() },
  {Name: "Calico", Price: 40, Img: Calico, ID: uuidv4() },
  {Name: "Catan", Price: 55, Img: Catan, ID: uuidv4() },
  {Name: "Clank!", Price: 37, Img: Clank, ID: uuidv4() },
  {Name: "Codenames", Price: 20, Img: Codenames, ID: uuidv4() },
  {Name: "Iwari", Price: 50, Img: Iwari, ID: uuidv4() },
  {Name: "Onitama", Price: 30, Img: Onitama, ID: uuidv4() },
  {Name: "Pandemic", Price: 45, Img: Pandemic, ID: uuidv4() },
  {Name: "Patchwork", Price: 35, Img: Patchwork, ID: uuidv4() },
  {Name: "Splendor", Price: 45, Img: Splendor, ID: uuidv4() },
  {Name: "Startups", Price: 25, Img: Startups, ID: uuidv4() },
  {Name: "Terraforming Mars", Price: 70, Img: TerraformingMars, ID: uuidv4() },
  {Name: "Wingspan", Price: 60, Img: Wingspan, ID: uuidv4() },
]