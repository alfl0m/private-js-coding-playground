
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Handling</title>
</head>
<body>
    <form onsubmit="submitForm()">
        <label for="name">Name:</label>
        <input type="text" id="name" required>
        <button type="submit">Submit</button>
    </form>
    <script>
        function submitForm() {
            const name = document.getElementById("name").value;
            alert("Form submitted! Name: " + name);
        }
    </script>
</body>
</html>
