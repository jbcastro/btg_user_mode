class Glasses {
  constructor(data) {
    console.log(data);

    this.wine = data;
    this.name = data.name;
    this.grapes = data.grapes;
    console.log(this.name);
  }
}

export default Glasses;
