
const fileInput = document.getElementById('file');


fileInput.addEventListener('change', async function(event) {
    
    
    const file = event.target.files[0];

    if (!file) return; 

    console.log(`Начинаем загрузку файла: ${file.name}`);

    
    const formData = new FormData();
    
    formData.append('file', file); 

    try {
        const response = await fetch('https://httpbin.org/post', {
            method: 'POST', 
            body: formData  
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Успешно загружено:', result);
            alert('Файл успешно отправлен!');
        } else {
            console.error('Ошибка сервера:', response.status);
            alert('Ошибка при загрузке');
        }

    } catch (error) {
        console.error('Ошибка сети:', error);
        alert('Нет соединения с сервером');
    }
});