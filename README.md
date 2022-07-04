# Graph SDK

## Project setup

Inside the project folder.

Install Dependency
```
npm install
```

Build
```
npm run build
```

Inside dist create index.html and put the following code inside to test
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Getting Started</title>
        <script src="main.js"></script>
    </head>
    <body>
        <button onclick="updateChart()">Update Chart</button>
        <canvas id="chart-sdk" width="400" height="400"></canvas>
    </body>
    <script defer>
        const initialData = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                },
            ],
        };

        const chart = new ChartHandler('chart-sdk', 'bar', initialData);
        chart.render();

        function updateChart() {
            const updatedData = {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3].reverse(),
                    },
                ],
            };

            chart.update(updatedData);
        }
    </script>
</html>
```