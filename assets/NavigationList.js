document.write(
    `
    <section id="list">
        <div class="navigator">
            <div class="nav-icon">
                 <i class="fa-solid fa-book"></i>
            </div>
            <div class="nav-title">
                <h5><a href="index.html">Subjects</a></h5>
            </div>
        </div>
        <div class="navigator">
            <div class="nav-icon">
            <i class="fa-solid fa-bullhorn"></i>
            </div>
            <div class="nav-title">
            <h5><a href="Announcements.html">Announcements</a></h5>
            </div>
        </div>
        <div class="navigator">
            <div class="nav-icon">
            <i class="fa-solid fa-table-list"></i>
            </div>
            <div class="nav-title">
            <h5><a href="MyTable.html">My Table</a></h5>
            </div>
        </div>
        <div class="navigator">
            <div class="nav-icon">
            <i class="fa-solid fa-power-off"></i>
            </div>
            <div class="nav-title">
            <h5><a href="#">Logout</a></h5>
            </div>
        </div>
    </section>
    <div onclick="toggleNavigationList()" id="overlay" class="overlay"></div>
    
    `
)