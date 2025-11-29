export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }
  async getData() {
    const data = await fetch(this.path).then(res => res.json());
    if (Array.isArray(data)) return data;
    if (data.Result) return data.Result;
    return data;
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find(item => item.Id === id);
  }
}




