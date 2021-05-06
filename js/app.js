      function RemovRelationship(){
        selectedButton = 3;
        let el =  lopElement(selectedButton);

        ell = el.arraBborder;
        e = el.arrayId;
        if (e === undefined) {
          alert("You have not selected line")
        }else {
          for (var i = 0; i < e.length; i++) {
            idd = e[i];
            document.getElementById(idd).remove();
          }
        }

      }



      function ConnectRelationship(){
        selectedButton = 1;
      let el =  lopElement(selectedButton);

      ell = el.arraBborder;


      e = el.arrayId;
      if (e === undefined) {
        alert("You have not selected items")
      }else if(e.length < 2 ){
        alert("There is no other element for linking")
      }else {
        y1s = ell[0].style.top;
        x1s = ell[0].style.left;
        y2s = ell[1].style.top;
        x2s = ell[1].style.left;

        if(x2s === "" || y2s === "" || x1s === "" || y1s=== "" ){
          alert("There is an item that has not moved on the page")
        }else {
          let y1;
          let x1;
          let y2;
          let x2;
          for (var i = 0; i < y1s.length - 2; i++) {

            if(i === 0){
              y1 = y1s[i];
            }else {
              y1 = y1 + y1s[i];
            }
          }
          for (var i = 0; i < x1s.length - 2; i++) {

            if(i === 0){
              x1 = x1s[i];
            }else {
              x1 = x1 + x1s[i];
            }
          }
          for (var i = 0; i < y2s.length - 2; i++) {

            if(i === 0){
              y2 = y2s[i];
            }else {
              y2 = y2 + y2s[i];
            }
          }
          for (var i = 0; i < x2s.length - 2; i++) {

            if(i === 0){
              x2 = x2s[i];
            }else {
              x2 = x2 + x2s[i];
            }
          }

          creatLine(Number(x1),Number(y1),Number(x2),Number(y2));
        }

      }

      }



      function lopElement(selectedButton){

        if(selectedButton === 1){
          let el = document.getElementById("nn").children;
          let count = 0;
          let returnValue = {};
          let arrayId = [];
          let arraBborder = [];
          for (var i = 0; i < el.length; i++) {

            let b = el[i];
            let bb = b.id;

            let borderParentElement = document.getElementById(bb);
            if(borderParentElement.style.border === "2px solid green"){

                count++;
                arrayId.push(bb);
                arraBborder.push(borderParentElement);
                returnValue.arrayId = arrayId;
                returnValue.arraBborder = arraBborder;
            }

          }
          return returnValue;


        }else if (selectedButton === 3) {

          let el = document.getElementsByClassName('line');
          let count = 0;
          let returnValue = {};
          let arrayId = [];
          let arraBborder = [];
          for (var i = 0; i < el.length; i++) {

            let b = el[i];
            let bb = b.id;

            let borderParentElement = document.getElementById(bb);

            if(borderParentElement.style.backgroundColor === "red"){

                count++;
                arrayId.push(bb);

                arraBborder.push(borderParentElement);
                returnValue.arrayId = arrayId;
                returnValue.arraBborder = arraBborder;
            }

          }
          return returnValue;
        }else {
          let el = document.getElementById("nn").children;
          let count = 0;
          let returnValue = [];
          for (var i = 0; i < el.length; i++) {

            let b = el[i];
            let bb = b.id;

            let borderParentElement = document.getElementById(bb)
            if(borderParentElement.style.border === "2px solid red"){
              count++;
              returnValue[0] = bb;
              returnValue[1] = borderParentElement

            }
          }
          if(count === 1){
            return returnValue;
          }else {
            return false;
          }
        }


      }



      point3.onmousedown = function(event){
        getValueLopElement = lopElement();
          idd = getValueLopElement[0];
          borderParentElement = getValueLopElement[1];
          if(idd){
            bx = point3.style.left;
            by = point3.style.top;
            point3.style.position = 'absolute';
            point3.style.zIndex = 1000;

            function moveTo(x,y){
              point3.style.left = x - point3.offsetWidth/2+'px';
              point3.style.top = y - point3.offsetHeight/2+'px';

            }

            moveTo(event.pageX , event.pageY);

            function onMoving(event){
                moveTo(event.pageX , event.pageY);


            }



            document.addEventListener('mousemove' , onMoving);

            point3.onmouseup = function(){
              document.removeEventListener('mousemove',onMoving);
              point3.onmouseup = null;





                 borderParentElement.style.position = 'absolute';

                 borderParentElement.style.zIndex = 1000;



                  $("#"+idd).animate({left:$("#point3").css("left"),
                  top:$(this).css("top")},2000 , function(){
                    borderParentElement.style.border = null;
                  point3.style.position = 'relative';
                  $("#point3").animate({left:bx,
                  top:by},500)

                });


            }
          }

      }




      let createId = 1 ;
      let removChildren = document.getElementById("nn").children.length;

      function createElement(src){

        let div = `<div class="image-preview" id="mg${createId}">
          <p class="parg" id="p${createId}">move</p>
          <p class="pargline" id="p${createId}">Relation</p>
          <img id="m${createId}" src=${src} alt="Image Preview" class="image-preview__image"/>
          <button class="removbtn" id="btn${createId}" >Remov</button>
        </div>`
        nn.innerHTML = nn.innerHTML + div;
        if (src !== "") {
          createId++;
        }
      }




      document.addEventListener('click' , (e) =>{
        let {target} = e;
        let btnId = target.id;


        if(target && target.classList.contains('removbtn')){

              document.getElementById(btnId).parentElement.remove();


        }else if (target && target.classList.contains('line')) {

          let borderParentElement = document.getElementById(btnId);

          if(borderParentElement.style.backgroundColor === "red"){
            borderParentElement.style.backgroundColor = "white";
          }else {
            borderParentElement.style.backgroundColor = "red";
          }


        }else if (target && target.classList.contains('pargline')) {

            let  selectedButton = 1;
            let borderParentElement = document.getElementById(btnId).parentElement;

          if(borderParentElement.style.border === "2px solid green"){

            borderParentElement.style.border = null;

          }else {




              let checkborder = lopElement(selectedButton);
              let arraBborder = checkborder.arraBborder
              let arrayId = checkborder.arrayId;


                if(checkborder.arrayId !== undefined){
                  if(arrayId.length > 1){
                  alert("You already have a specific item, select the item you want to move and cancel any other item")
                }else {
                  borderParentElement.style.border = "2px solid green";
                }
                }else {

                    borderParentElement.style.border = "2px solid green";

                }


          }

        }else if (target && target.classList.contains('parg')) {
          let  selectedButton = 2;
          let borderParentElement = document.getElementById(btnId).parentElement;

          if(borderParentElement.style.border === "2px solid red"){

            borderParentElement.style.border = null;

          }else {


              let checkborder = lopElement(selectedButton);
               idd = checkborder[0];

              if(idd){
                alert("You already have a specific item, select the item you want to move and cancel any other item")
              }else {
                borderParentElement.style.border = "2px solid red";
              }
          }

        }else if (target && target.classList.contains('ConnectRelationship')) {
          ConnectRelationship();
        }else if (target && target.classList.contains('RemovRelationship')) {
        RemovRelationship()
      }else if (target && target.classList.contains('addPhotounKnown')) {
        createElement("images/und.jpeg");
      }
      });





      file.onchange = ()=>{

        let stopClickBtnRemove = 1 ;

        var file = document.getElementById("file").files;

        if(file.length > 0 ){

          var fileReader = new FileReader();

          fileReader.onload = function (event){

            createElement("");

            document.getElementById("m"+createId).setAttribute("src",event.target.result);

              createId++;

          };
          fileReader.readAsDataURL(file[0]);
          document.getElementById('file').value = "";

        }
      }



      let createIdline = 1;
      function creatLine(x1,y1,x2,y2){

       distance = Math.sqrt( ((x1-x2)*(x1-x2)) + ((y1-y2)*(y1-y2)) );


       xMid = (x1+x2)/2;
       yMid = (y1+y2)/2;

       salopeInRadian = Math.atan2(y1 - y2 , x1 - x2);
       salopInDegrees = (salopeInRadian * 180) / Math.PI;
        let line = document.createElement('div');
        line.id = "line"+createIdline;
        line.className = "line"
        line.style.width = distance+'px';
        line.style.top = (yMid + 50) +'px' ;
        line.style.left = (xMid + 50) - (distance/2)+'px';
        line.style.transform = "rotate("+salopInDegrees+"deg)";
        document.getElementById('nn').append(line);

        createIdline++;

      }
