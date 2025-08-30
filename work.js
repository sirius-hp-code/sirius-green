document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const gNav = document.getElementById("g-nav");
    const circleBg = document.querySelector(".circle-bg");

    const toggleMenu = () => {
        gNav.classList.toggle("active");
        circleBg.classList.toggle("active");
    };

    const closeMenu = () => {
        gNav.classList.remove("active");
        circleBg.classList.remove("active");
    };

    // メニューボタンをクリックしたときに開閉
    menuBtn.addEventListener("click", (e) => {
        e.preventDefault();   // ← ここを追加： # のジャンプを防ぐ
        e.stopPropagation();
        toggleMenu();
    });

    // ナビゲーションリンクをクリックしたら閉じる（リンク先へは飛ばす）
    gNav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            closeMenu();
            // e.preventDefault() は書かない → 普通にリンク先へ飛ぶ
        }
    });

    // 円背景をクリックしたら閉じる
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
