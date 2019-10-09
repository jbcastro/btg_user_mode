const filterWineOnClick = glasses.filter(result=>{
    result.id === value
})



const filterWineOnClick = glasses.filter(result => {
    if (id === "grapes") {
      return filterNulls(result.grapes) === value;
    } else if (id === "grape") {
      return (
        filterNulls(result.grape1) === value ||
        filterNulls(result.grape2) === value ||
        filterNulls(result.grape3) === value
      );

      //safgasfg
    } else if (id === "year") {
      return filterNulls(result.year) === value;
    } else if (id === "vinyard") {
      return filterNulls(result.vinyard) === value;
    } else if (id === "place") {
      return filterNulls(result.place) === value;
    } else if (id === "area") {
      return filterNulls(result.area) === value;
    } else if (id === "country") {
      return filterNulls(result.country) === value;
    } else if (id === "appellation") {
      return filterNulls(result.appellation) === value;
    } else if (id === "place") {
      return filterNulls(result.place) === value;
    } else if (id === "mise") {
      return filterNulls(result.mise) === value;
    } else {
      return (
        filterNulls(result.description1) === value ||
        filterNulls(result.description2) === value ||
        filterNulls(result.description3) === value ||
        filterNulls(result.description4) === value ||
        filterNulls(result.description5) === value ||
        filterNulls(result.description6) === value ||
        filterNulls(result.description7) === value ||
        filterNulls(result.description8) === value ||
        filterNulls(result.description9) === value ||
        filterNulls(result.description10) === value
      );
    }
  });

  this.setState({ glasses: filterWineOnClick });
};

//for selecting items on search v
onSearchSelect = event => {
  let id = event.id;
  let value1 = event.value;
  let value = value1.toUpperCase();

  const glasses = this.state.glasses;

  function filterNulls(item) {
    if (typeof item === "string") {
      return item.toUpperCase();
    }
  }

  const filterWineOnClick = glasses.filter(result => {
    if (id === "grapes") {
      return filterNulls(result.grapes) === value;
    } else if (id === "grape") {
      return (
        filterNulls(result.grape1) === value ||
        filterNulls(result.grape2) === value ||
        filterNulls(result.grape3) === value
      );
      const filterWineOnClick = glasses.filter(result=>{
        result.id === value
    })



    const filterWineOnClick = glasses.filter(result => {
        return filterNulls(`result.${id}`) === value;
      });
      //safgasfg
    } else if (id === "year") {
      return filterNulls(result.year) === value;
    } else if (id === "name") {
      return filterNulls(result.name) === value;
    } else if (id === "vinyard") {
      return filterNulls(result.vinyard) === value;
    } else if (id === "place") {
      return filterNulls(result.place) === value;
    } else if (id === "area") {
      return filterNulls(result.area) === value;
    } else if (id === "country") {
      return filterNulls(result.country) === value;
    } else if (id === "appellation") {
      return filterNulls(result.appellation) === value;
    } else if (id === "place") {
      return filterNulls(result.place) === value;
    } else if (id === "mise") {
      return filterNulls(result.mise) === value;
    } else {
      return (
        filterNulls(result.description1) === value ||
        filterNulls(result.description2) === value ||
        filterNulls(result.description3) === value ||
        filterNulls(result.description4) === value ||
        filterNulls(result.description5) === value ||
        filterNulls(result.description6) === value ||
        filterNulls(result.description7) === value ||
        filterNulls(result.description8) === value ||
        filterNulls(result.description9) === value ||
        filterNulls(result.description10) === value
      );
    }
  });
















  const filterWineOnClick = glasses.filter(result => {
    if (id === "grapes") {
      return filterNulls(result.grapes) === value;
    } else if (id === "grape") {
      return (
        filterNulls(result.grape1) === value ||
        filterNulls(result.grape2) === value ||
        filterNulls(result.grape3) === value
      );

      //safgasfg
    } else if (id === "year") {
      return filterNulls(result.year) === value;
    } else if (id === "vinyard") {
      return filterNulls(result.vinyard) === value;
    } else if (id === "place") {
      return filterNulls(result.place) === value;
    } else if (id === "area") {
      return filterNulls(result.area) === value;
    } else if (id === "country") {
      return filterNulls(result.country) === value;
    } else if (id === "appellation") {
      return filterNulls(result.appellation) === value;
    } else if (id === "place") {
      return filterNulls(result.place) === value;
    } else if (id === "mise") {
      return filterNulls(result.mise) === value;
    } else {
      return (
        filterNulls(result.description1) === value ||
        filterNulls(result.description2) === value ||
        filterNulls(result.description3) === value ||
        filterNulls(result.description4) === value ||
        filterNulls(result.description5) === value ||
        filterNulls(result.description6) === value ||
        filterNulls(result.description7) === value ||
        filterNulls(result.description8) === value ||
        filterNulls(result.description9) === value ||
        filterNulls(result.description10) === value
      );
    }
  });