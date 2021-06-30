# Getting Started
## Usage

### Clone project to your system
Firstly, you should clone this project to your system. In directory, which you want to clone to, you must write 
```git clone https://github.com/ecordingmapp/ecording-counter.git``` in command line 

### Creating HTML File
Moreover, html file should have been created (Example : sample.html). Then you should paste code that is below in html file.

```javascript
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Sayaç</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="./ecordingcounter.css">
</head>

<body>
  <div class="counter container-fluid">
    <div class="boxes">

      <div class="one-box"></div>
    </div>
  </div>

  <script src="./ecordingcounter.js"></script>
</body>

</html>
```

### Files That Should Be Included In The Project
For bootstrap and call to the API which returns the value for you will be given to you by our company. You should change 'your-api-key' value should be placed in the "ecordingcounter.js" file.

Additionally Bootstrap, custom css file and custom js files should be imported to the main project. This will make sure that the counter assigned to you will work.
 
```javascript
//This is the bootstrap file. If you are already using it, you do not need to include this file.
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

//These are custom javascript and css files for counter.
<link rel="stylesheet" href="./ecordingcounter.css">
<script src="./ecordingcounter.js"></script>
```


### Adding background image
Additionally, you should add your background image url to 'imageUrl' variable (line 8-9) in ecordingcounter.js file. For example, you can review below code.

```javascript
var imageUrl = "your URL";
```

### Example Download Scenario


![ecordingCounter](https://user-images.githubusercontent.com/25638469/123947618-3eb9da80-d9a9-11eb-82f8-f20dd90eea60.gif)
