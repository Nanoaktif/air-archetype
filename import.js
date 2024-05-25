


///import for navbar
document.addEventListener("DOMContentLoaded", function() {
    fetch("/pages/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbarContainer").innerHTML = data;
        })
        .catch(error => {
            console.error("Navbar yüklenirken bir hata oluştu: ", error);
        });
});



///import for mainPageTabs
document.addEventListener("DOMContentLoaded", function() {
    fetch("/pages/mainPageTabs.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("mainTabsContainer").innerHTML = data;
        })
        .catch(error => {
            console.error("Main Pages Tabs yüklenirken bir hata oluştu: ", error);
        });
});

///import for main
document.addEventListener("DOMContentLoaded", function() {
    fetch("/pages/main.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("mainContainer").innerHTML = data;
        })
        .catch(error => {
            console.error("main yüklenirken bir hata oluştu: ", error);
        });
});

/// import for footer
document.addEventListener("DOMContentLoaded", function() {
    fetch("/pages/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footerContainer").innerHTML = data;
        })
        .catch(error => {
            console.error("Footer yüklenirken bir hata oluştu: ", error);
        });
});

/// import for minibar
document.addEventListener("DOMContentLoaded", function() {
    fetch("/pages/navbarMini.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("miniBarsection").innerHTML = data;
        })
        .catch(error => {
            console.error("minibar yüklenirken bir hata oluştu: ", error);
        });
});
