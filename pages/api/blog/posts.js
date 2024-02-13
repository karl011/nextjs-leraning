export default function handler(req, res){
    if (req.method === "GET") {
        res.status(200).json([
            {
                slug : "Article numéro 1",
                titre : "Ordinateur portable"
            },
            {
                slug : "Article numéro 2",
                titre : "Smartphone"
            },
            {
                slug : "Article numéro 3",
                titre : "Appareil électronique"
            },
            {
                slug : "Article numéro 4",
                titre : "Téléphone mobile"
            }
        ])
    } else {
        res.status(500).json({Message:'Method not allowed'})
    }   
}