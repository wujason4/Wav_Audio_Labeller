function loadAudioFileNames() {

  AudioFiles = [];
  AudioIndex = 0;
    $(window).ready(function() {

    var filenames = [],
        foldernames = [];

    $.get("http://127.0.0.1:8887/", function(response) {
        window.write(response);
        getNames();
        parent.history.back();
    });


    function getNames() {
        var files = window.querySelectorAll("a.icon.file");
        var folders = window.querySelectorAll("a.icon.dir");
        files.forEach(function(item) {
            filenames.push(item.textContent)
        })
        folders.forEach(function(item) {
            foldernames.push(item.textContent.slice(0, -1))
        })
    

    for (var i = 0; i < filenames.length; i++)
    {
        if (filenames[i].endsWith(".mp3") || filenames[i].endsWith(".wav"))
        AudioFiles.push(filenames[i]);
    }

  
  } 

  });
}
