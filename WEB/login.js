function Log() {
    let usuario = document.getElementById("User").value;
    let password = document.getElementById("pass").value;

    app.post('/login', function(req, res) {
        User.login({
          email: usuario,
          password: password
        }, 'user', function(err, token) {
          if (err) {
            res.render('response', { //render view named 'response.ejs'
              title: 'Login failed',
              content: err,
              redirectTo: '/',
              redirectToLinkText: 'Try again'
            });
            return;
          }
      
          res.render('home', { //login user and render 'home' view
            email: req.body.email,
            accessToken: token.id
          });
        });
      });

}