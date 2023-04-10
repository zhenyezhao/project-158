AFRAME .registerComponent('poster'(
    schema={
      
  createCards: function () {
    const thumbNailsRef = [
      {
        id: "superman",
        title: "Superman",
        url: "./assets/thumbnails/superman.png",
      },
      {
        id: "spider-man",
        title: "Spider Man",
        url: "./assets/thumbnailsspider_man.jpg",
      },

      {
        id: "captain-aero",
        title: "Captain Aero",
        url: "./assets/thumbnails/captain_aero.jpg",
      },
      {
        id: "outer-space",
        title: "Outer Space",
        url: "./assets/thumbnails/outer_space.png",
      },
    ];
    
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
       createborder:function(item){
        const createElement=document.createEntity('a-entity')
        a-entityEl.setAttribute('visible=true')
        a-entityEl.setAttribute('geometry')
        primitive=plane
         width=20,
         height=28
       }}));
    
       a-entityEl.setAttribute('X:0,y:5,z:10')
       a-entityEl.setAttribute('material',{src:item.url} )
