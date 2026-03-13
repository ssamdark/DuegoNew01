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

    // 바뀌는 단어 순환 (슬라이드업 전환)
    const rotator = document.querySelector('.word-rotator');
    if (rotator) {
        const spans = rotator.querySelectorAll('span');
        let currentIndex = 0;
        spans[0].classList.add('is-visible'); // 초기 첫 번째 단어 표시
        const waitTime = 2500;
        const transitionTime = 600;

        function rotateWord() {
            const current = spans[currentIndex];
            currentIndex = (currentIndex + 1) % spans.length;
            const next = spans[currentIndex];

            // 현재 단어: 위로 슬라이드 아웃
            current.classList.remove('is-visible');
            current.classList.add('is-hidden');

            // 다음 단어: 아래에서 위로 슬라이드 인
            next.classList.remove('is-hidden');
            next.offsetHeight; // reflow 강제 실행
            next.classList.add('is-visible');

            // 아웃된 단어 초기 위치 복원 (트랜지션 완료 후)
            setTimeout(() => {
                current.classList.remove('is-hidden');
            }, transitionTime);
        }

        setInterval(rotateWord, waitTime);
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
