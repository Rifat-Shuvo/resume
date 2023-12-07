

const generateCv = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const skills = document.getElementById('skills').value
    const subject = document.getElementById('subject').value
    const degree = document.getElementById('degree').value
    const phone = document.getElementById('phone').value

    console.log(name, email, skills, subject, degree);
    let newWindow = window.open('', '_blank')

    let newelement = `<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>your Resume</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.4.19/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <H1 class="text-green-400">CV Of ${name}</H1>
    <H1> ${email}</H1>
    <H1> ${phone}</H1>

    
     <h1 class="text-xl">Career objectives</h1>
     
     <p class="text-lg">Hello, I'm ${name}, highly motivated and results-oriented professional with 5+ years of experience in the industry. Proven ability to ${skills}. Seeking a challenging role where I can utilize my skills and experience to make a significant contribution to the company.</p>
     
     <h1 class="text-xl">Education</h1>
     
     <p>Name of ${subject} and ${degree}</p>
     
     <h1 class="text-xl">Skills & Experties</h1>
     
     <p>I have this folowing skills: ${skills}</p>

    <button onclick="window.print()" class="btn btn-primary mt-[80vh]">Print now</button>
     </body>
</html> `

    newWindow.document.write(newelement)
}