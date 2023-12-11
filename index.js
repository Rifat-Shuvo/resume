

const generateCv = () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const skills = document.getElementById('skills').value
    const subject = document.getElementById('subject').value
    const degree = document.getElementById('degree').value
    const phone = document.getElementById('phone').value
    const project1 = document.getElementById('project1').value
    const project2 = document.getElementById('project2').value
//photo upload
    // const photoInput = document.getElementById('photo')
    // const photo = photoInput.files[0]
    // const previewPhoto = document.getElementById('previewPhoto')
    // if (photo) {
    //     const reader = new FileReader()
    //     reader.onload = function (e) {
    //         previewPhoto.src = e.target.result
    //         previewPhoto.style.display = 'block'
    //     }
    //     reader.readAsDataURL(photo)
    // } 
    console.log(name, email, skills, subject, degree);
    let newWindow = window.open()

    let newelement = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume of ${name}</title>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.4.19/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="m-5 p-5">
    <div class="pb-3 border-b-2">
        <h1 class="text-3xl font-bold">${name}</h1>
        <h3 class="font-bold">Email: ${email}</h3>
        <h3 class="font-bold">Phone: ${phone}</h3>
    </div>
    <div>
        <h1 class="p-3 border-b-2 text-2xl bg-gray-400 font-bold">Summary</h1>
        <p class="text-justify font-medium py-4">I am a hardworking and self-motivated individual with a strong analytical mind. I am comfortable working both independently and collaboratively, and I am always eager to learn new things. I am also a problem solver, and I am not afraid to face challenges head-on.</p>
    </div>
    <div class="mb-4">
        <h1 class="p-3 text-2xl border-b-2 bg-gray-400 font-bold mb-4">Skills & Expertise</h1>
        <pre>${skills}</pre>
    </div>
    <div class="mb-4">
        <h1 class="p-3 border-b-2 text-2xl bg-gray-400 font-bold mb-4">Projects</h1>
        <p class="pb-3">${project1}</p>
        <p>${project2}</p>
    </div>
    <div>
        <h1 class="p-1 border-b-2 text-2xl bg-gray-400 font-bold">Education</h1>
        <p class="text-justify font-medium italic py-1">${degree} in ${subject}</p> 
    </div>

    <button onclick="window.print()" class="mt-20 text-green-600 font-bold underline">Print/Download now</button> 
</body>

</html>
    `
{/* <button onclick="window.print()" class="btn btn-primary mt-[80vh]">Print now</button> */}
{/* <h6 class="text-lg text-green-500 font-medium">Full Stack Developer (MERN)</h6> */}
    newWindow.document.write(newelement)
}