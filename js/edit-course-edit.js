console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4)
// console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            url: 'https://maurocd.pythonanywhere.com/courses/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {

                    console.log(data)
                    this.id = data.id
                    this.name = data.name,
                        this.imagen = data.image,
                        this.description = data.description,
                        this.instructor = data.instructor,
                        this.duracion = data.duracion,
                        this.views = data.views,
                        this.modulos = data.modulos
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let curso = {
                name: this.name,
                image: this.imagen,
                description: this.description,
                instructor: this.instructor,
                duracion: this.duracion,
                views: this.views,
            }

            var options = {
                body: JSON.stringify(curso),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./edit-course.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        },
        // test() {
            
        //     localStorage.setItem("cursoID", this.id);
        //     localStorage.setItem("cursoName", this.name);
        //     localStorage.setItem("cursoImage", this.imagen);
        //     window.location.href = "./edit-modulo.html?id="+id;
        // }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')