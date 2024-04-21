import { Router } from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html", "bg-screen-home.png")
router.add("/universe", "/pages/universe.html", "bg-screen-universe.png")
router.add("/explore", "/pages/explore.html", "bg-screen-explore.png")
router.add(404, "/pages/404.html", "bg-screen-error.jpeg")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// 1º fazer o mapeamento das rotas das páginas da minha aplicação
// const routes = {
//     "/": "/pages/home.html",
//     "/universe": "/pages/universe.html",
//     "/explore": "/pages/explore.html",
//     404: "/pages/404.html"
// }

// // 2º  retirar o padrão de redirecionamento dos links com 'event.preventDefault()'
// function route(event) {
//    event = event || window.event;            
//    event.preventDefault();

//    // 4º pegar o href do event que foi acionado event.target = a ; href = href desse link e colocando no histórico
//    window.history.pushState({}, "", event.target.href)

//    handle()
// }   

// // 3º pegar o caminho de acordo com o link clicado
// function handle() {
//    const { pathname } = window.location
   
//    // 5º de acordo com o link clicado pega o valor daquele route do objeto routes baseado no seu pathname
//    const route = routes[pathname] || routes[404]
//    console.log(route);

//    // 6º usando o assincronismo e promessa para não bloquear a tela do usuário quando clicar em um dos links usando fetch().then()
//    fetch(route)
//    .then(data => data.text())
//    .then(html => {
//        document.querySelector('#app').innerHTML = html
//    })
// }

