(function($){
    var options = document.getElementById('really-simple-csv-importer-form-options');    
    if ( options ) {
        document.getElementById('import-upload-form').insertAdjacentElement('afterbegin',options);
        options.style.display="";
    }
})();