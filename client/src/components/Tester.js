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








  Hubert Clavin Cremant du Jura Brut Blanc de Blancs 	100% Chardonnay	NV	Franche-Comté, France	Cotes du Jura	Citrus, Apple, Brioche, Chalk, Wet Stones, Roasted Nuts, Buckwheat	Hubert Clavelin and his two sons have vineyards in the Côte du Jura, a small range of mountains about 30 miles to the east of the Côte D’Or in the province of the Franche-Comté. Within their holding they have a parcel of very high limestone soil that they have planted in Chardonnay and from this parcel they make their sparkling wine, Brut Comte. Their method is the same as champagne; the wine is fermented in the bottle and each bottle is hand-riddled. The care that they take is shown in the very fine quality of the Brut Comte – tasting more like a lesser, true champagne than a sparkling wine from Burgundy. 	AP 	$14.00
Veuve Fourny & Fils, Blanc de Blancs, Brut	Chardonnay	NV 	Champagne, France	Vertus, Cotes de Blanc	Lemon Cake, Apples, Pears, Brewers Yeast, Chamomile, Almonds, Wet Chalk	Champagne Veuve Fourny & Fils has been an active family domaine since 1856. The estate is located in the prestigious Côte des Blancs, in the premier cru village of Vertus, an appellation that gives them the rare opportunity to grow Pinot Noir as well as Chardonnay. Brothers Charles-Henry and Emmanuel Fourny sustainably farm nearly nine hectares of vineyards and have been carrying on the family winegrowing tradition since 1993. The house style at Veuve Fourny is best characterized as classic Côte des Blancs: a fine bead, rich, deep aromatics, and a complex minerality emphasizing freshness and purity. The Fournys believe in minimal dosage for all of their Champagnes, preferring to let the individual terroirs express themselves more clearly. Dosage: 6 g/L. Malolactic encouraged. 25% barrel aged. 3 years on lees.	AP	$25.00

newIdArray.forEach(function (e) {
  let id = e.id;
  let value = e.value;
  filterWineOnClick = glasses;
  if (id == "description") {
    console.log("dude");
    let glassesList = filteredWines;
    glassesList.forEach(function (f) {
      let descriptionList = f.description.map(capitilize);
      for (let i = 0; i < descriptionList.length; i++) {
        if (descriptionList[i] == value) {
          filterWineOnClick.push(f);
          console.log(filterWineOnClick);
        }
      }
    });
  }
});

this.setState({ glasses: filterWineOnClick });


let glassesList = glasses;
if (value == "true") {
  filterWineOnClick = glassesList.filter(
    (result) => result.coravin == true
  );
  console.log("cor" + filterWineOnClick);
} else {
  let glassesList = glasses;
  filterWineOnClick = glassesList.filter(
    (result) => result.coravin == false
  );
  console.log("non" + filterWineOnClick);
}
// filterWineOnClick = glasses.filter((result) => {
//   if (value1 === "true") {
//     console.log("bro");
//     result.coravin === true;
//   } else {
//     console.log("dude");
//     result.coravin === false;
//   }
// });


else if (id == "coravin" && value == "false") {
  let glassesList = glasses;
  filterWineOnClick = glassesList.filter(
    (result) => result.coravin == false
  );
  console.log("non" + filterWineOnClick);
}


else if (stringer !== "non-coravin" && "coravin") {
  filterWineOnClick = unFilteredWines.filter(
    (result) => filterNulls(result[id]) == value
  );
}



else if (id == "coravin") {
  filterWineOnClick = unFilteredWines.filter(
    (result) => result.coravin === false
  );
}






newIdArray.forEach(function (e) {
  let id = e.id;
  let value = e.value;
  if (id == "description") {
    let glassesList = unFilteredWines;
    glassesList.forEach(function (f) {
      let descriptionList = f.description.map(capitilize);
      for (let i = 0; i < descriptionList.length; i++) {
        if (descriptionList[i] == value) {
          filterWineOnClick.push(f);
        }
      }
    });
  } else if (id == "grape") {
    let glassesList = unFilteredWines;
    glassesList.forEach(function (f) {
      let grapeList = f.grape.map(capitilize);
      for (let i = 0; i < grapeList.length; i++) {
        if (grapeList[i] == value) {
          filterWineOnClick.push(f);
        }
      }
    });
  } else if (id == "coravin") {
    if (value === false) {
      filterWineOnClick = unFilteredWines.filter(
        (result) => result.coravin == false
      );
    } else {
      filterWineOnClick = unFilteredWines.filter(
        (result) => result.coravin !== false
      );
    }
  } else {
    filterWineOnClick = unFilteredWines.filter(
      (result) => filterNulls(result[id]) == value
    );
  }
});