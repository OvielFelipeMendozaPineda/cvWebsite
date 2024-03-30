export class Header extends HTMLElement  {
    constructor() {
        super()
        this.render()
        this.showSidebar()
    }
    render() {
        this.innerHTML = /* HTML*/ `
        <style>
            @import url("./app/componentes/Header/header.css");
        </style>
        <header>
        <div class="name">
            <h1>Felipe <b>Mendoza</b></h1>
        </div>
        <div class="btn-menu">
            <i class='bx bx-menu'  ></i>
        </div>
        <ul class="links">
            <li class="link"><a href="#">Home</a></li>
            <li class="link"><a href="#">Education</a></li>
            <li class="link"><a href="#">Experience</a></li>
            <li class="link"><a href="#">Services</a></li>
            <li class="link"><a href="#">Contact</a></li>
        </ul>
    </header>
        ` 
    }
    showSidebar() {
        const links = this.querySelector('.links')
        const btnMenu = this.querySelector('.btn-menu').addEventListener('click', (e) => {
            links.classList.toggle('active')
        })
    }
}
customElements.define("custom-header", Header)