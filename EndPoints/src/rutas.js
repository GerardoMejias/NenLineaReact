const juego=require('./funciones');

module.exports=function(app){
    app.post('/juego',function(req,res){
        const gameData={
            tam:req.body.tam
        };

        juego.setTam(gameData,(err,data)=>{
            if(data){
                res.json(data)
            }
            else{
                res.status(500).json({
                    success:false,
                    msg:'error'
                })
            }
        })
    })
}