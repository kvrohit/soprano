
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Soprano - A web app to help you sight read' });
};
