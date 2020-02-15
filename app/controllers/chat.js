module.exports.iniciaChat = function(application, req, res){
  var dadosForm = req.body;
  //req.assert('apelido','Nome ou apelido não pode ser vazio').notEmpty();
  res.render('chat');
}
