(function(global,$){
        
    "use strict";
    var 
        //defining the version of the library
        version = '1.0.0',
        // name of the library
        name = 'ZoomR';
        // description 
        
        
    var ZoomR = function(selector,context){
            return new ZoomR.fn.init(selector,context);
    };
    
    ZoomR.fn = ZoomR.prototype = {
            version : '1.0.0',    
        
    };
    
    var init = ZoomR.fn.init = function(selector,context){
                this.selector = selector || {};
                this.context  = context || global;
    };
    
    init.prototype = ZoomR.fn;
    global.ZoomR = global.Z$ = ZoomR;
    
})(window,jQuery);