document.addEventListener("DOMContentLoaded", () => {
    const targetNode = document.querySelector('.points-label-wrapper');
    const pointsButton = document.querySelector('.points-button');
    const pointsModal = document.querySelector('.points-modal');
    const body = document.querySelector('body');
    const modalCloseBtn = document.querySelector('.points-icon');
    const header = document.querySelector('header');

    const toggleModal = (isVisible) => {
        pointsModal.classList.toggle('active', isVisible);
        body.style.overflow = isVisible ? 'hidden' : '';
        header.style.background = isVisible ? '#d3d3d380' : '#fff';
    };

    pointsButton.addEventListener("click", () => {
        toggleModal(true);
    });

    modalCloseBtn.addEventListener("click", () => {
        toggleModal(false);
    });

    window.addEventListener('click', (event) => {
        if (pointsModal.contains(event.target) && !targetNode.contains(event.target)) {
            toggleModal(false);
        }
    });

    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                const rewardItems = document.querySelectorAll('.lion-reward-item__content');

                rewardItems.forEach((item) => {
                    const button = item.querySelector('.lion-action-button--tile');
                    if (button && button.getAttribute('aria-disabled') === 'true') {
                        item.classList.add('lion-disabled-content');
                    }
                });
            }
        }
        observer.disconnect();
    });

    observer.observe(document.querySelector('#points-label-id'), {
        childList: true,
        subtree: true
    });
});