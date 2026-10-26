// JavaScript

const allTabButtons = document.querySelectorAll('.tab-button');
const allTabContents = document.querySelectorAll('.tab-content');

function resetAllTabs() {
    // 全てのタブから .active クラスを削除する
    allTabButtons.forEach(button => {
        button.classList.remove('active');
    });
    // 全てのコンテンツから .active クラスを削除する
    allTabContents.forEach(content => {
        content.classList.remove('active');
    });
}

function activateTab(tabId) {
    const content = document.getElementById(tabId);
    const button = document.querySelector(`.tab-button[data-id="${tabId}"]`);
    
    if (content) content.classList.add('active');
    if (button) button.classList.add('active');
}

allTabButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const clickedTabId = event.currentTarget.dataset.id;

        if (!clickedTabId) return;

        resetAllTabs();
        activateTab(clickedTabId);
    });
});