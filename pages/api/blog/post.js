export default function handler(req, res){
    const {slug} = req.query
    if (req.method === "GET") {
        const data = [
            {
                slug : "Article numéro 1",
                titre : "Ordinateur portable",
                content: "Un ordinateur portable, ou simplement portable est un ordinateur personnel dont le poids et les dimensions limitées permettent un transport facile. Les ordinateurs portables ont plusieurs usages, à la fois professionnels, personnels et éducatifs, et sont parfois utilisés pour la sauvegarde de médias personnels. Un ordinateur portable est muni des mêmes types de composants qu'un ordinateur de bureau classique, incluant notamment un écran, des haut-parleurs et un clavier physique. Depuis les années 2010, la plupart sont équipés en outre d'une webcam et d'un microphone intégrés. Enfin, la présence d'un accumulateur électrique, ou batterie, rechargeable à l'aide d'une prise de courant assure à ce type d'ordinateur l'autonomie nécessaire à sa portabilité.",
                image: "/images/ordi.jpg"
            },
            {
                slug : "Article numéro 2",
                titre : "Smartphone",
                content: "Un smartphone (également appelé téléphone intelligent, téléphone multifonction, mobile multifonction ou encore ordiphone) est un téléphone mobile disposant en général d'un écran tactile, d'un appareil photographique numérique, des fonctions d'un assistant numérique personnel et de certaines fonctions d'un ordinateur portable.",
                image: "/images/ordi.jpg"
            },
            {
                slug : "Article numéro 3",
                titre : "Appareil électronique",
                content: "Un appareil électronique est un objet qui peut effectuer une ou des tâches en traitant des informations codées sous la forme de signaux électriques. Les appareils électroniques sont fabriqués à partir de composants électroniques tels que les transistors.",
                image: "/images/ordi.jpg"
            },
            {
                slug : "Article numéro 4",
                titre : "Téléphone mobile",
                content: "Un téléphone mobile, téléphone portable ou téléphone cellulaire est un appareil électronique de télécommunication, normalement portatif, offrant une fonction de téléphonie mobile et pouvant être utilisé sur de grandes distances sous réserve d'une couverture réseau.",
                image: "/images/ordi.jpg"
            }]
            res.status(200).json(data.filter((post) => post.slug === slug))
    } else {
        res.status(500).json({Message:'Method not allowed'})
    }   
}