fetch('products.json')
    .then(function (response) 
    {
        return response.json();
    })
    .then(function (data) 
    {
        appendData(data);
    })
    .catch(function (err) 
    {
        console.log('error: ' + err);
    });


function runAgain() 
{
  fetch('products.json')
  .then(function (response) 
  {
      return response.json();
  })
  .then(function (data) 
  {
      appendData(data);
  })
  .catch(function (err) 
  {
      console.log('error: ' + err);
  });
}


function setTitle1()
{
  document.getElementById("myOrder").innerHTML = "";
  document.getElementById("basketPage").innerHTML = "";
  document.getElementById("fillInfoInstructions").innerHTML = "";
  document.getElementById("myInfo").innerHTML = "";
  document.getElementById("reset").innerHTML = "";

  var mainContainer = document.getElementById("homePage");
  let div = document.createElement("div");
    div.innerHTML = "Beställ en vara." + "<br/>" + "<br/>";

    mainContainer.appendChild(div);
}


function setTitle2()
{
  document.getElementById("myData").innerHTML = "";
  document.getElementById("homePage").innerHTML = "";
  document.getElementById("fillInfoInstructions").innerHTML = "";
  document.getElementById("myInfo").innerHTML = "";
  document.getElementById("reset").innerHTML = "";

  var mainContainer1 = document.getElementById("basketPage");
  let div1 = document.createElement("div");
    div1.innerHTML = "Köp bestämd vara." + "<br/>" + "<br/>";

    mainContainer1.appendChild(div1);

  var mainContainer2 = document.getElementById("fillInfoInstructions");
  let div2 = document.createElement("div");
    div2.innerHTML = "Fyll i din personliga information" + "<br/>";

    mainContainer2.appendChild(div2);
}


function setTitle3()
{
  document.getElementById("myData").innerHTML = "";
  document.getElementById("homePage").innerHTML = "";
  document.getElementById("myOrder").innerHTML = "";
  document.getElementById("basketPage").innerHTML = "";
  document.getElementById("fillInfoInstructions").innerHTML = "";

  var mainContainer1 = document.getElementById("myInfo");
  let div1 = document.createElement("div");
    div1.innerHTML = localStorage.getItem('personalInfo');

    mainContainer1.appendChild(div1);

    var mainContainer2 = document.getElementById("reset");
    let div2 = document.createElement("div");
      div2.innerHTML = "<button onClick=runAgain()>Beställ en ny vara</button>"
  
      mainContainer2.appendChild(div2);
}


function appendData(data) 
{
  setTitle1();

    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) 
    {
        let div = document.createElement("div");
        div.innerHTML = 
            'Title: ' + data[i].title + 
            "<br/>" + 
            'Price: ' + data[i].price  + 
            "<br/>" + 
            'Description: ' +  data[i].description  + 
            "<br/>" + 
            'Category: ' +  data[i].category   + 
            "<br/>" + 
            'Image: ' +  "<img src=" + data[i].image + " width=" + "128" + " height=" + "128" + ">" + 
            "<br/>" + 

            "<BUTTON onclick=" + "setBasketContent(" +
            i + 
            ")" + ">" + "Köp denna produkt" + "</BUTTON>" + 

            "<br/>" + 
            "<br/>";
    

        mainContainer.appendChild(div);
    }
}



function setBasketContent(imp) 
{
  fetch('products.json')
    .then(function (response) 
    {
        return response.json();
    })
    .then(function (data) 
    {
      setUpBasket(data, imp);
    })
    .catch(function (err) 
    {
        console.log('error: ' + err);
    });
}



function setUpBasket(data, imp) 
{
  setTitle2();
  

  var mainContainer = document.getElementById("myOrder");
  for (var i1 = 0; i1 < 1; i1++) 
  {
      let div = document.createElement("div");
      div.innerHTML = 
          'Title: ' + data[imp].title + 
          "<br/>" + 
          'Price: ' + data[imp].price  + 
          "<br/>" + 
          'Description: ' +  data[imp].description  + 
          "<br/>" + 
          'Category: ' +  data[imp].category   + 
          "<br/>" + 
          'Image: ' +  "<img src=" + data[imp].image + " width=" + "128" + " height=" + "128" + ">" + 
          "<br/>" +
          "<br/>" + 
          "<br/>";
  
          mainContainer.appendChild(div);


          goToBasket();
  }
}


function goToBasket() 
{
  var mainContainer = document.getElementById("fillInfoInstructions");
  let div = document.createElement("div");
    div.innerHTML =
    "<form id=add-To-Checkout>" + 

      "Ange namn" + 
        "<br/>" + 
        "<label for=user-name</label>" + 
        "<input type=text name=user-name id=user-name />" + 
        "<br/>" + 

      "Ange telefon" + 
        "<br/>" + 
        "<label for=user-telephone></label>" + 
        "<input type=tel name=user-telephone id=user-telephone />" + 
        "<br/>" + 

      "Ange epost" + 
        "<br/>" + 
        "<label for=user-mail></label>" + 
        "<input type=email name=user-mail id=user-mail />" + 
        "<br/>" + 

      "Ange leverandasress" + 
        "<br/>" + 
        "<label for=user-adress></label>" + 
        "<input type=text name=user-adress id=user-adress />" + 
        "<br/>" + 

      "<" + "button" + " " + "type=" + "submit" + " " + ">" + "Handla" + "</button>"
   
    "</form>";

    
    mainContainer.appendChild(div);


    var addToCheckout = document.querySelector('#add-To-Checkout');
    var userName = document.querySelector('#user-name');
    var userTelephone = document.querySelector('#user-telephone');
    var userMail = document.querySelector('#user-mail');
    var userAdress = document.querySelector('#user-adress');
    var checkoutList = document.querySelector('#add-To-Checkout');

    
    addToCheckout.addEventListener('submit', function (event) 
    {
     event.preventDefault();

      if(userName.value.length < 1) alert("Du har inte fyllt i ett giltigt namn!");
      if(userName.value.length < 1) return;

      if(userTelephone.value.length < 1) alert("Du har inte fyllt i ett giltigt telefonnummer!");
      if(userTelephone.value.length < 1) return;

      if(userMail.value.length < 1) alert("Du har inte fyllt i en giltig epost!");
      if(userMail.value.length < 1) return;

      if(userAdress.value.length < 1) alert("Du har inte fyllt i en giltig afress!");
      if(userAdress.value.length < 1) return;

      checkoutList = 
        'Din beställning lyckades!' + 
          "<br/>" + 
        "Dina uppgifter" + 
          "<br/>" + 
        "Namn: " + userName.value + 
          "<br/>" + 
        "Telefon: " + userTelephone.value + 
          '<br/>' + 
        "E-post: " + userMail.value + 
          '<br/>' + 
        "Adress: " + userAdress.value;

      localStorage.setItem('personalInfo', checkoutList);
      setTitle3();

    }, false);
}