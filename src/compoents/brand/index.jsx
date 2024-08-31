// import './style.css'
// import Visa from "../../assets/imgs/visa.png"
// import Alelo from "../../assets/imgs/alelo.png"
// import Elo from "../../assets/imgs/elo.png"
// import MasterCard from "../../assets/imgs/mastercard.png"

// export default function Brand({brand}) {
//     switch (brand) {
//         case 'visa' : return <img src={Visa} alt='icone visa'/>
//         case 'alelo' : return <img src={Alelo} alt='icone alelo'/>
//         case 'elo' : return <img src={Elo} alt='icone elo'/>
//         case 'mastercard' : return <img src={MasterCard} alt='icone mastercard'/>
//         default : return <h1>Selecione um disponivel</h1>
//     }
// }

import './style.css'
import Visa from "../../assets/imgs/visa.png"
import Alelo from "../../assets/imgs/alelo.png"
import Elo from "../../assets/imgs/elo.png"
import MasterCard from "../../assets/imgs/mastercard.png"

const brandImage = {
    visa : Visa,
    master : MasterCard,
    alelo : Alelo,
    elo : Elo
}

export default function Brand({brand}) {
    const ImageSrc = brandImage[brand]
  return ImageSrc ? <img src={ImageSrc} alt={`imagem da bandeira ${brand}`}/> : <h1>Selecione um bandeira disponivel</h1>
}