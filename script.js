const btnTopo = document.getElementById('btnTopo');
const som = document.getElementById('somClique');

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};
