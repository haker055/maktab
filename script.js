
        document.getElementById('contactForm').onsubmit = function(event) {
            event.preventDefault(); // Formni yubormaslik uchun
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            
            const token = '7235024663:AAFVdLW3t6xX5hf1tk_LDPoFOfBIYGB_rls'; // Sizning bot tokeningiz
            const chatId = '-1002410861812'; // Sizning guruh chat id

            const url = `https://api.telegram.org/bot${token}/sendMessage`;
            const data = {
                chat_id: chatId,
                text: `Ism: ${name} Email: ${email} subject: ${subject}  Xabar: ${message} `
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                alert('Xabaringiz yuborildi!');
                document.getElementById('contact-form').reset();
            })
            .catch((error) => {
                
            });
        };
        

        