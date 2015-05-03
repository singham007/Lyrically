Name = album = Artist1 = ImgSrc = '';

String.prototype.capitalize=function(all){
    if(all){
       return this.split(' ').map(function(e){return e.capitalize();}).join(' ');    
    }else{
         return this.charAt(0).toUpperCase() + this.slice(1);
    } 
}

var trackChangeInterval = setInterval(function() {
	var prevName = Name;

  Name = Artist1 = ImgSrc ='';
  
Name= $('#player').find('.track-title a').text();
singers=$('#player').find('.artist-name a')[0].innerText;
commaIndex = singers.indexOf(",");
 Artist1 = (commaIndex === -1)?singers:singers.substring(0, commaIndex);
 Artist1=Artist1.toLowerCase();
 Artist1 = Artist1.capitalize(true);
 
ImgSrc=$('.album-thumb').attr('src');



	if (Name !== prevName && Name) {
		chrome.runtime.sendMessage( {'msg' : 'trackInfo','artist' : Artist1,'title' : Name,'album' : album,'imgsrc':ImgSrc});
	}
}, 3000);



