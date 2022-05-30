let appHour = document.getElementById("appHour")
var obj = document.querySelector("#chart");
let chart;

var options = {
    chart: {
        type: 'donut'
    },
    dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
            return opts.w.config.labels[opts.seriesIndex] + ": " + opts.w.config.series[opts.seriesIndex]
        }
    },
    series: [new Date().getSeconds(), new Date().getMinutes(), new Date().getHours(), new Date().getDate()],
    labels: ['Segundos', 'Minutos', 'Horas', 'Dias']
}

chart = new ApexCharts(obj, options)
chart.render()

updateHour()

function updateHour() {
    appHour.textContent = `Hora: ${this.setHour()}:${this.setMinutes()}:${this.setSeconds()}`

    chart.updateSeries([
        new Date().getSeconds(), new Date().getMinutes(), new Date().getHours(), new Date().getDate()
    ])

    setTimeout(() => {
        updateHour()
    }, 1000);

}

function setHour() {
    if (new Date().getHours().toString().length == 1)
        return "0" + new Date().getHours();
    else
        return new Date().getHours();
}

function setMinutes() {
    if (new Date().getMinutes().toString().length == 1)
        return "0" + new Date().getMinutes().toString();
    else
        return new Date().getMinutes().toString();
}

function setSeconds() {
    if (new Date().getSeconds().toString().length == 1)
        return "0" + new Date().getSeconds().toString();
    else
        return new Date().getSeconds().toString();
}