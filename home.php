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
    <script type="text/javascript" src="scripts/script.js"></script>
</head>
<body>
    
<div id="app">
    <header>
        <div class="h-pageTitle f-bold elem-center f-lrg">SkyPhotoMap</div>
        <div class="divider"></div>
        <nav>
            <ul class="h-nav f-sml">
                <li><a href="#">upload</a></li>
                <li><a href="#">explore</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </nav>
        <div class="divider"></div>
    </header>
    <main>


        <div id="map"></div>
        <img id="img" src="album/img3.jpg" width="1000px;">

        <?php
            function debug_to_console($data) {
                $output = $data;
                if (is_array($output))
                    $output = implode(',', $output);
            
                echo "<script>console.log('Debug Objects: " . $output . "');</script>";
                echo "<script>console.log('$data[2]');</script>";
            }


            $dir    = 'G:/Programming/XAMPP/htdocs/skyphotomap/skyphotomap/album';
            $files1 = scandir($dir);

            debug_to_console($files1);
        ?>


    </main>
    <footer>

    </footer>
</div>
</body>
</html>