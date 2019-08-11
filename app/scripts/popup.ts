// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

console.log(`'Allo 'Allo! Popup`);

const checkBox: HTMLInputElement  = <HTMLInputElement>document.getElementById('visible-setting-switch');
checkBox.addEventListener('click', (element) => {
  alert(checkBox.checked);
});
