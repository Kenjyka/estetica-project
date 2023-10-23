function criarCard (user){
return`
    <article class="git-user">
        <div class="div-botton">
            <div class="container-botton">
                <img src="${user.image}" alt="${user.name}" class="botton-image" id="user-image">
                <div class="botton"></div>
            </div>
        </div>
        <div class="div-information">
            <div class="container-botton">
                <img src="${user.image}" alt="${user.name}" class="botton-image" id="user-image">
                <div class="botton"></div>
            </div>
            <h2 id="user-name">${user.name}</h2>
            <div class="redes">
                <a href="${user.github}" target="_blank" class="github">
                    <i class="bi bi-github"></i>
                </a>
                <a href="${user.project}" target="_blank" class="projeto">
                    <i class="bi bi-window"></i>
                </a>
            </div>
        </div>
    </article>
`
}
export {criarCard}