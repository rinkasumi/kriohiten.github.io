document.addEventListener('DOMContentLoaded', function () {
    const snowfallContainer = document.body;

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        const size = Math.random() * 5 + 2;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = Math.random() * 5 + 5;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${startX}%`;
        snowflake.style.top = `${startY}%`;
        snowflake.style.animation = `snowfall ${duration}s linear infinite`;

        snowfallContainer.appendChild(snowflake);
    }

    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.animation = `rainfall 2s linear infinite`;
        snowfallContainer.appendChild(raindrop);
    }

    // Get current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    // Fetch weather data from API
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Lutsk,ua&appid=3be5d5c583451bddc8caf0794e0ea433')
        .then(response => response.json())
        .then(data => {
            const weatherList = data.list;

            // Check weather condition for the current day
            const weatherCondition = weatherList.find(item => {
                const itemDate = new Date(item.dt_txt);
                return itemDate.getDate() === currentDay;
            }).weather[0].main;

            // Check if it will snow or rain today and adjust snowfall
            if (weatherCondition === 'Snow') {
                for (let i = 0; i < 50; i++) {
                    createSnowflake();
                }
            } else if (weatherCondition === 'Rain') {
                for (let i = 0; i < 50; i++) {
                    createRaindrop();
                }
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

document.body.style.zoom = 0.74;  
