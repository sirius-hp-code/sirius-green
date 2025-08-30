document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const gNav = document.getElementById("g-nav");
    const circleBg = document.querySelector(".menu-circle"); // ← 修正

    const toggleMenu = () => {
        gNav.classList.toggle("active");
        circleBg.classList.toggle("active");
    };

    const closeMenu = () => {
        gNav.classList.remove("active");
        circleBg.classList.remove("active");
    };

    // メニューボタン
    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();   // ← aタグのデフォルト動作を止める
        e.stopPropagation();
        toggleMenu();
    });

    // ナビリンククリック時に閉じる
    gNav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            closeMenu();
        }
    });

    // 背景円クリック時に閉じる
    circleBg.addEventListener("click", (e) => {
        if (e.target === circleBg) {
            closeMenu();
        }
    });

    // 外側クリックで閉じる
    document.addEventListener("click", (e) => {
        if (
            gNav.classList.contains("active") &&
            !gNav.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            closeMenu();
        }
    });
});
