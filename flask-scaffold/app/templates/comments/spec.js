// spec.js
describe('Testing Comments CRUD Module', function() {

var Comment = function() {
        
        var author = element(by.id('author'));
        this.setAuthor = function(authorText) { author.clear(); author.sendKeys(authorText); };
        
        var body = element(by.id('body'));
        this.setBody = function(bodyText) { body.clear(); body.sendKeys(bodyText); };
        
        var author_url = element(by.id('author_url'));
        this.setAuthor_Url = function(author_urlText) { author_url.clear(); author_url.sendKeys(author_urlText); };
        

        this.get = function() {
                                   browser.get('http://localhost:5000/');
                                       };

        this.toast = function(message){
                                        $('.btn.btn-primary').click()  // css selectors http://angular.github.io/protractor/#/api?view=build$
                                            .then(function() {
                                                  var EC = protractor.ExpectedConditions;
                                                  var toastMessage = $('.toast-message');
                                                  browser.wait(EC.visibilityOf(toastMessage), 6000) //wait until toast is displayed
                                                             .then(function(){
                                                                    expect(toastMessage.getText()).toBe(message);

                                                                        });
                                                                  });
                                    }
                    };

it('Should add a new Comment', function() {

    var comment = new Comment();

    // Get comments URL
    comment.get();

    // Goto the new menu
    element(by.linkText('Comments')).click();
    element(by.linkText('New')).click();

    // Fill in the Fields
    
        comment.setAuthor("Your Title text here");
        comment.setBody("Your Body text here 77569yuii3wui&%$$^"); 
        comment.setAuthor_Url("http://techarena51.com");   
        element(by.name("created_on")).sendKeys("12/11/2015"); 
        element(by.css("input[type='radio'][value='0']")).click(); 

    //Expectations
    comment.toast("Comment saved successfully");

  });

it('Should  edit a Comment', function() {

    var comment = new Comment();

    comment.get();

    //Goto the edit menu
    element(by.linkText('Comments')).click();
     element(by.id('editButton')).click();

    // Fill in the fields
    
        comment.setAuthor("Your Updated Title text here");
        comment.setBody("Your Updated Body text here 77569yuii3wui&%$$^"); 
        comment.setAuthor_Url("https://github.com/Leo-G/DevopsWiki");   
        element(by.name("created_on")).sendKeys("12/03/2015"); 
        element(by.css("input[type='radio'][value='1']")).click(); 

    //Expectations
    comment.toast("Update was a success");



});

it('Should  delete a Comment', function() {
    browser.get('http://localhost:5000/');
    element(by.linkText('Comments')).click();
    element(by.id('deleteButton')).click()

    .then(function(){

        var EC = protractor.ExpectedConditions;
        var toastMessage = $('.toast-message');

         browser.wait(EC.visibilityOf(toastMessage), 60) //wait until toast is displayed
            .then(function(){

                expect(toastMessage.getText()).toBe("Comment deleted successfully")

      });

  });
});

  });
