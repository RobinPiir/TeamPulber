// JavaScript võetud Robin Piiri teise aine projektist ja kohendatud vastava eesmärgi jaoks
$(function() {
    //Json query
    $.get( "https://raw.githubusercontent.com/RobinPiir/TeamPulber/main/res/json/tooted.json", function( data ) {
        console.log(data);
        $( ".result" ).html( data );
        $.each(JSON.parse(data), function( index, value ) {
            
            let toode = new Toode(value.id,value.nimi,value.pilt,value.hind);
        
            $(".tooted").append(toode.postContent());
            
        });
    })
})

class User{
    constructor(name, avatar){
        this.name=name;
        this.avatar=avatar;
    }
}

class Toode{

    constructor(id,nimi,pilt,hind){
        this.id=id;
        this.nimi=nimi;
        this.pilt=pilt;
        this.hind=hind;
    }


    postContent(){
       let postBody= '<h1 class="nimi">' + this.nimi +'</h1>'+
       '<img class="pilt" src="' + this.pilt + '" alt="Eesti">'+
       '<h2 class="hind">' + this.hind + '</h2>';

       return '<div class="toode">'+postBody+'</div>';
    }
    }