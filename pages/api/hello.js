export default function handler(req, res){
    if (req.method === "GET") {
        res.status(200).json({id: req.query.id, nom:'Konate Dotemin'})
    } else {
        res.status(500).json({Message:'Method not allowed'})
    }   
}