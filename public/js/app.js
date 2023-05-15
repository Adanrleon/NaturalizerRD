const form = document.querySelector('#form')

form.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const target = e.target,
       nombre = target.querySelector('#nombre').value,
       telefono = target.querySelector('#telefono').value, 
       email = target.querySelector('#email').value,
       subject = target.querySelector('#subject').value,
       message = target.querySelector('#message').value

    const response = await fetch('https://naturalizer-mail-server.onrender.com/api/email', {
        method: 'POST',
        body: JSON.stringify({
            nombre,
            email,
            subject,
            message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }),
    data = await response.json()

    if (response.status === 200) {
        alert(data.message)
        form.reset()
    } else {
        alert(data.message)
    }

})