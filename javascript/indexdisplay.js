const menuPanel = document.getElementById("menu")
const heroPanel = document.getElementById("hero_section")
const reservationPanel = document.getElementById("reservation")
const contactPanel = document.getElementById("contact")
const membershipBtn = document.getElementById("membership__panel")

const menuClicker = document.getElementById("menu_clicker")
const reservationClicker = document.getElementById("reservation_clicker")
const contactClicker = document.getElementById("contact_clicker")
const membershipClicker = document.getElementById("membership_clicker")
const homePageClicker = document.getElementById("logo")

menuClicker.addEventListener('click', function() {
  if (menuPanel.style.display === 'flex') {
    menuPanel.style.display = 'none';
    heroPanel.style.display = 'flex';
    reservationPanel.style.display = 'none';
    contactPanel.style.display = 'none';
    membershipBtn.style.display = 'none';
  } else {
    menuPanel.style.display = 'flex';
    heroPanel.style.display = 'none';
    reservationPanel.style.display = 'none';
    contactPanel.style.display = 'none';
    membershipBtn.style.display = 'none';
  }
})

reservationClicker.addEventListener('click', function() {
  if (reservationPanel.style.display === 'flex') {
    reservationPanel.style.display = 'none';
    menuPanel.style.display = 'none';
    contactPanel.style.display = 'none';
    heroPanel.style.display = 'flex';
    membershipBtn.style.display = 'none';
  } else {
    reservationPanel.style.display = 'flex';
    heroPanel.style.display = 'none';
    menuPanel.style.display = 'none';
    contactPanel.style.display = 'none';
    membershipBtn.style.display = 'none';
  }
})

contactClicker.addEventListener('click', function() {
  if (contactPanel.style.display === 'flex') {
    contactPanel.style.display = 'none';
    reservationPanel.style.display = 'none';
    menuPanel.style.display = 'none';
    heroPanel.style.display = 'flex';
    membershipBtn.style.display = 'none';
  } else {
    contactPanel.style.display = 'flex';
    heroPanel.style.display = 'none';
    reservationPanel.style.display = 'none';
    menuPanel.style.display = 'none';
    membershipBtn.style.display = 'none';
  }
})

membershipClicker.addEventListener('click', function() {
  if (membershipBtn.style.display === 'flex') {
    membershipBtn.style.display = 'none';
  } else {
    membershipBtn.style.display = 'flex';
  }
})

homePageClicker.addEventListener('click', function() {
  if (heroPanel.style.display === 'flex') {
    heroPanel.style.display = 'flex';
    menuPanel.style.display = 'none';
    reservationPanel.style.display = 'none';
    contactPanel.style.display = 'none';
    membershipBtn.style.display = 'none';
  } else {
    heroPanel.style.display = 'flex';
    menuPanel.style.display = 'none';
    reservationPanel.style.display = 'none';
    contactPanel.style.display = 'none';
    membershipBtn.style.display = 'none';
  }
})