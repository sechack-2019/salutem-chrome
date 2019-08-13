// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly'

console.log(`'Allo 'Allo! Popup`);

const checkBox: HTMLInputElement = <HTMLInputElement>document.getElementById('visible-setting-switch');



checkBox.addEventListener('click', async (element) => {
   await clickedEvent();
});

async function clickedEvent() {
  console.log('start');

  // @ts-ignore
  // let itemList= (await executeOnChrome(() => { return document.getElementsByClassName('items-box')}));
  const itemList: HTMLCollectionOf<Element> = (await executeOnChrome(() => { return document.getElementsByClassName('items-box') as HTMLCollectionOf<Element>; }));

  console.log(`itemList: ${itemList.length}`);

  const itemElementList: Array<HTMLElement> = (new Array(itemList.length))
    .map((index: number) => itemList[index] as HTMLElement);
    // .filter((element) => element != null)
  console.log(itemElementList);
  console.log(itemElementList.length);

  itemElementList.forEach((element, index, elements) => {
    if (checkBox.checked) {
      element.style.display = (index / 3 === 0) ? 'hidden' : 'inline';
      console.log('on');
    } else {
      element.style.display = 'inline';
      console.log('off');
    }
  });
}

const executeOnChrome = (query: (() => void)) =>
  new Promise(((resolve, reject) => {
    try {
      chrome.tabs.executeScript({
        // code: `(${query})()`
        code: `
        function getDocument[() {
          return document
        }
        return getDocument();
        `
      }, (result) => {
        resolve(result);
      });
    } catch (e) {
      reject(e);
    }
  }));

// const executeOnChrome = (query) =>
//   new Promise(((resolve, reject) => {
//     try {
//       chrome.tabs.executeScript({
//         code: `(${query})()`
//       }, (result) => {
//         resolve(result);
//       });
//     } catch (e) {
//       reject(e);
//     }
//   }));
//
// let query = () => {return "Hello"};
