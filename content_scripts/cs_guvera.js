Name = album = Artist1 = ImgSrc = '';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

var trackChangeInterval = setInterval(function() {
	var prevName = Name;

  Name = Artist1 = ImgSrc ='';
  
Name= $('#player').find('.track-title a').text();
singers=$('#player').find('.artist-name a')[0].innerText;
commaIndex = singers.indexOf(",");
 Artist1 = (commaIndex === -1)?singers:singers.substring(0, commaIndex);
 Artist1.capitalize();
 Name.capitalize();
 album.capitalize();
 
ImgSrc=$('.album-thumb').attr('src');



	if (Name !== prevName && Name) {
		chrome.runtime.sendMessage( {'msg' : 'trackInfo','artist' : Artist1,'title' : Name,'album' : album,'imgsrc':ImgSrc});
	}
}, 3000);



