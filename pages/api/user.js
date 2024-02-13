export default function handler(req, res){
    if (req.method === "GET") {
        const {prenom, nom} = req.query
        res.status(200).json({name: prenom, firstName: nom})
    } else {
        res.status(500).json({Message:'Method not allowed'})
    }   
}