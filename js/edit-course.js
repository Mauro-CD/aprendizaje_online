const { createApp } = Vue
createApp({
    data() {
        return {
            courses: [],
            url: 'https://maurocd.pythonanywhere.com/courses', // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            name: "",
            imagen: "",
            description: "",
            instructor: "",
            duracion: "",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.courses = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(course) {
            const url = this.url + '/' + course;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let course = {
                name: this.name,
                image: this.imagen,
                description: this.description,
                instructor: this.instructor,
                duracion: this.duracion,
                views: 0
            }
            var options = {
                body: JSON.stringify(course),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./edit-course.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabarr")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')