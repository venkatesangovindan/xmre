/* 
 * Utility functions
 * 
 */

function Util () {}

// Word wrap function
Util.wordWrap = function(str, maxWidth){
    var newLineStr = "\n"; done = false; res = '';
    
    do {                    
        found = false;
        // Inserts new line at first whitespace of the line
        for (i = maxWidth - 1; i >= 0; i--) {
            if (this.testWhite(str.charAt(i))) {
                res = res + [str.slice(0, i), newLineStr].join('');
                str = str.slice(i + 1);
                found = true;
                break;
            }
        }
        // Inserts new line at maxWidth position, the word is too long to wrap
        if (!found) {
            res += [str.slice(0, maxWidth), newLineStr].join('');
            str = str.slice(maxWidth);
        }

        if (str.length < maxWidth)
            done = true;
    } while (!done);

    return res;
};

Util.testWhite = function(x){
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
};

Util.getLimitedChar = function(str, maxchar){
    if(str =='' || str == undefined ){
        return '';
    }
    if(str.length > maxchar){
        str = str.substring(0,maxchar);
    }
      return str;  
};

Util.getUrlParamByName = function(name){
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    console.log(results);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));    
    
};

Util.getEntityByUrl = function(type){
    
    type = type.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + type + "=([^&#]*)");
    var results = regex.exec(window.location.hash);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));      
}


