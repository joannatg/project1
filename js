
$(document).ready(function () {
  $("#go").click(function(){
   var q = $("#keyword").val();
  function getWikiInfo(){
      return $.ajax ({
        type: "GET",
        url: ("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + encodeURIComponent(q)),
        dataType: "jsonp",
        success: function(results) {
          var labels = results[1];
          var urls = results[3];          
          for(var i = 1; i<urls.length; i++){
           var a = urls[i];  
           var l = labels[i];
          $("#results").append( "<div>" + i + "."+ " <a href=\"" + a + "\">" + l + " </a></div>");
      }
  }
 });
}; getWikiInfo();
});
});
