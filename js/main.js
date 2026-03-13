document.addEventListener('DOMContentLoaded', () => {

    // 헤더 스크롤 처리
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 바뀌는 단어 순환 (페이드인/아웃)
    const rotator = document.querySelector('.word-rotator');
    if (rotator) {
        const spans = rotator.querySelectorAll('span');
        let currentIndex = 0;
        const interval = 2500;

        function rotateWord() {
            spans[currentIndex].classList.remove('is-visible');

            currentIndex = (currentIndex + 1) % spans.length;

            spans[currentIndex].classList.add('is-visible');
        }

        setInterval(rotateWord, interval);
    }

    // 하단 퀵 네비 hover 인터랙션
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });

        item.addEventListener('mouseleave', function () {
            // 호버 해제 시 active 유지하지 않음 (필요시 첫 번째 항목 복원 가능)
        });
    });

});
