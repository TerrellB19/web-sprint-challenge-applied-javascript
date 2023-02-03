const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  //createElement
  const headerDV = document.createElement('div');
  const dateSP = document.createElement('span');
  const titleH1 = document.createElement('h1');
  const tempSP = document.createElement('span');

  //classes
  headerDV.classList.add('header');
  dateSP.classList.add('date');
  tempSP.classList.add('temp');

  //textContnet
  dateSP.textContent = `${date}`
  titleH1.textContent = `${title}`
  tempSP.textContent = `${temp}`

  //appendChild
  headerDV.appendChild(dateSP);
  headerDV.appendChild(titleH1);
  headerDV.appendChild(tempSP);

  return headerDV;

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!

  const appendInfo = document.querySelector(selector);

  appendInfo.appendChild(Header('this is a title', '2/3/2023', 'this is temporary text'));

  return appendInfo;
}

export { Header, headerAppender }
