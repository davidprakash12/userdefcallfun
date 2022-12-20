1) Design a function, print message and assign the function to a variable and print it like a function
<html lang="en">
<head>
    <script>
        function hello(){
            document.write("Hello <Br />")
        }

        hello();
        a=hello;
        a();
    </script>
</head>
<body>
    
</body>
</html>
//
<html lang="en">
<head>
    <script>
        hello();
        function hello(){
            document.write("Hello <Br />")
        }
    </script>
</head>
<body>
    
</body>
</html>

<html lang="en">
<head>
    <script>
        function hello(){
            document.write("Hello <Br />")
        }
    </script>
</head>
<body>
    <script>
        hello();
    </script>
</body>
</html>
----------------------------------------------------------------------------------------------------------------------------------------------------------------
<html lang="en">
<head>
    <script>
        hello(); 
    </script>
</head>
<body>
    <script>
        function hello(){
            document.write("Hello <Br />")
        }
    </script>
</body>
</html>
----------------------------------------------------------------------------------------------------------------------------------------------------------------
<html lang="en">
<head>
    <script>
         
    </script>
</head>
<body>
    <script>
        hello();
        function hello(){
            document.write("Hello <Br />")
        }
    </script>
</body>
</html>