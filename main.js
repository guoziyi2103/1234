// 补全移动端菜单：点击导航链接后自动关闭菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// 快捷导航折叠/展开（手机端）
const quickNav = document.getElementById('quickNav');
const quickNavToggle = document.getElementById('quickNavToggle');
quickNavToggle.addEventListener('click', () => {
  quickNav.classList.toggle('collapsed');
  const icon = quickNavToggle.querySelector('i');
  icon.classList.toggle('fa-chevron-down');
  icon.classList.toggle('fa-chevron-up');
  quickNavToggle.innerHTML = icon.outerHTML + (quickNav.classList.contains('collapsed') 
    ? '<span class="cn">展开导航</span><span class="en">Expand Navigation</span>' 
    : '<span class="cn">收起导航</span><span class="en">Collapse Navigation</span>');
});

// 页面加载时初始化所有功能
window.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  setupLanguageSwitch();
  setupSmoothScroll();
  setupMobileMenu();
});