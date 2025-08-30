document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const gNav = document.getElementById("g-nav");
    const circleBg = document.querySelector(".circle-bg");

    // 開閉用の関数
    const toggleMenu = () => {
        gNav.classList.toggle("active");
        circleBg.classList.toggle("active");
    };

    const closeMenu = () => {
        gNav.classList.remove("active");
        circleBg.classList.remove("active");
    };

    // ボタンをクリックしたときに開閉
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // 下に伝播しないようにする
        toggleMenu();
    });

    // ナビゲーションリンクをクリックしたら閉じる
    gNav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            closeMenu();
        }
    });

    // 円背景をクリックしたら閉じる
    circleBg.addEventListener("click", (e) => {
        // 背景部分だけに反応（中のナビは除外）
        if (e.target === circleBg) {
            closeMenu();
        }
    });

    // 画面全体をクリックしたら閉じる（ナビやボタン以外）
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
