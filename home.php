<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="style/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Edu+NSW+ACT+Foundation:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
    <script src="https://cdn.jsdelivr.net/npm/exif-js"></script>
    <script type="text/javascript" src="script.js"></script>
</head>
<body>
    
<div id="app">
    <header>
        <div class="h-pageTitle f40 f-bold elem-center">SkyPhotoMap</div>
        <div class="divider"></div>
        <nav>
            <ul class="f-28 h-nav">
                <li><a href="#">upload</a></li>
                <li><a href="#">explore</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
        <div class="divider"></div>
    </header>
    <main>
        <div id="map"></div>
        <img id="img" src="img.jpg" width="1000px;">
    </main>
    <footer>

    </footer>
</div>
</body>
</html>