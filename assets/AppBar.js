document.write(
`
<header class="user-page-header">
        <div class="container-with-flex-alignment">
            <div class="burger-and-logo">
                <button onclick="toggleNavigationList()" class="burger-button">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="website-logo">
                    <img src="assets/imgs/logo.png" />
                </div>
            </div>

            <div class="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" />
            </div>
            <div class="user-and-notifications">
                <button onclick = "toggleNotificationsList ()" class="burger-button">
                    <i class="fa-solid fa-comment" style="color: #ffffff;"></i>
                </button>
                <img src="assets/imgs/user.png" class="user-icon" />
            </div>
        </div>
    </header>
`
); 
