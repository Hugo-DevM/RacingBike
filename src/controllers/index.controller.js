const controller = {}

controller.index = (req, res)=>{
    res.render('index.ejs')
}
controller.ranking = (req, res)=>{
    res.render('ranking.ejs')
}
controller.races = (req, res)=>{
    res.render('races.ejs')
}
controller.sponsors = (req, res)=>{
    res.render('sponsors.ejs')
}
controller.login = (req, res)=>{
    res.render('login.ejs')
}
controller.register = (req, res)=>{
    res.render('register.ejs')
}



module.exports = controller;