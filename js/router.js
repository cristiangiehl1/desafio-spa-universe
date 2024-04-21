// criando a classe para criar a estrutura de redirecionamento das páginas. 
export class Router {
    routes = {}

    add(routName, page, backgroundImage) {
        this.routes[routName] = { page, backgroundImage };
    }

    route(event) {
        event = event || window.event;            
        event.preventDefault();
     
        // 4º pegar o href do event que foi acionado event.target = a ; href = href desse link e colocando no histórico
        window.history.pushState({}, "", event.target.href)        
        
        this.handle()           
     }   

     handle() {
        const { pathname } = window.location
        
        // 5º de acordo com o link clicado pega o valor daquele route do objeto routes baseado no seu pathname
        const route = this.routes[pathname] || this.routes[404]  
        console.log(route.page);  
        console.log(route.backgroundImage);   
        
        // 6º usando o assincronismo e promessa para não bloquear a tela do usuário quando clicar em um dos links usando fetch().then()
        fetch(route.page)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html;
            if (route.backgroundImage) {
                document.body.style.backgroundImage = `url(/assets/${route.backgroundImage})`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'bottom center';
                document.body.style.backgroundRepeat = 'no-repeat';
            } else {
                document.body.style.backgroundImage = 'none';                
            }
        });       
     }
}

