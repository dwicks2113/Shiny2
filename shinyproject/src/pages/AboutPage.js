import React from 'react'
import Collapse from '../components/Collapse'
// import Banner from '../components/Banner'

function AboutPage () {
  return (
    <div className='about-page'>
      {/* <Banner customClass='about-banner' />  */}
      
    <div>
 
      <Collapse title='Reliability'>
        <p>
          Les annonces postees sur Kasa garantissent une fiabilite totale. Les photos sont conformes aux logements, et toutes les informations sont regulierement verifiees par nos equipes.
        </p>
        </Collapse>
        <Collapse title='Respect'>
          <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout utilisateur de notre plateforme se doit de respecter autrui.  
          </p>
          </Collapse>
          <Collapse title='Service'>
            <p>Kasa est disponible pour vous aider dans toutes les etapes de votre reservation. N'hesitez pas a nous contacter si vous avez la moindre question.</p>
          </Collapse> 
          <Collapse title='Security'>
              <p>
                La securite est la priorite de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement est verifie regulierement par nos equipes pour garantir un sejour serein.</p>
           </Collapse>
    </div>
  </div>  
  )
}

export default AboutPage
