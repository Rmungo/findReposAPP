function getName(){
    $('.findUser').on('click',function(event){
        event.preventDefault();
        userName = $('.typeUser').val();
        fetchName();
        addRepos();
    })
}

function fetchName(){
    fetch(`https://api.github.com/users/${userName}/repos`).then(response => response.json())
        .then(responseJson => {
         console.log(responseJson)
         addRepos(responseJson)
        });
    
}

function addRepos(x){
    for(let i = 0; i < x.length; i++){
    $('.repoList').append(`<li> ${x[i].name}</li>`);
    }
}





function ready(){
    console.log('We in hurrr');
    getName();
}


$(ready());