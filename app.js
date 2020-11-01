const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})
const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 929 123 456 78', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Vladimir', 2016, '+7 929 123 456 78', 'images/mondeo.jpg'),
    car('Porsche', 'Panamera', 'Max', 2018, '+7 929 123 456 78', 'images/panamera.jpg'),

]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarInd: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
    },
    methods: {
        selectCar(ind) {
            this.car = cars[ind]
            this.selectedCarInd = ind;
        },
        newOrder() {
          this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${ this.car.model}`, 'ok'))
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Canceled order: ${this.car.name} - ${ this.car.model}`, 'cnl'))
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide Phone' : 'Show phone'
        },
        filteredCars() {
            return this.cars.filter(car => car.name.indexOf(this.search) > -1
                || car.model.indexOf(this.search) > -1);
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }

})