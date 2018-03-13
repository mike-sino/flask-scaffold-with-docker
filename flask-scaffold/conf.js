exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [  
   'app/templates/users/spec.js'   
    
   
   
   //Specs
   , 'app/templates/authors/spec.js' 
   , 'app/templates/comments/spec.js' 
   , 'app/templates/posts/spec.js' 

  ]
}

