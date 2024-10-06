class Repository {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }

  findAll() {
    throw new Error("Method must be implemented.");
  }

  findById(id) {
    throw new Error("Method must be implemented.");
  }

  create(item) {
    throw new Error("Method must be implemented.");
  }

  update(item) {
    throw new Error("Method must be implemented.");
  }

  delete(id) {
    throw new Error("Method must be implemented.");
  }
}

class ProductRepository extends Repository {
  constructor(dbConnection) {
    super(dbConnection);
  }

  findAll() {
    return this.dbConnection.query("SELECT * FROM products");
  }

  findById(id) {
    return this.dbConnection.query("SELECT * FROM products WHERE id = ?", [id]);
  }

  create(product) {
    const query = "INSERT INTO products SET ?";
    return this.dbConnection.query(query, product);
  }

  update(product) {
    const query = "UPDATE products SET ? WHERE id = ?";
    return this.dbConnection.query(query, [product, product.id]);
  }

  delete(id) {
    const query = "DELETE FROM products WHERE id = ?";
    return this.dbConnection.query(query, [id]);
  }
}

class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getAllProducts() {
    const products = await this.productRepository.findAll();
    return products.map(this.formatProduct);
  }

  async getProductById(id) {
    const product = await this.productRepository.findById(id);
    return this.formatProduct(product[0]);
  }

  async addProduct(product) {
    const result = await this.productRepository.create(product);
    return { ...product, id: result.insertId };
  }

  async updateProduct(product) {
    const result = await this.productRepository.update(product);
    return this.formatProduct(result);
  }

  async deleteProduct(id) {
    await this.productRepository.delete(id);
    return `Product ${id} deleted successfully`;
  }

  formatProduct(product) {
    // Format the product object as needed
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      // Add other fields as needed
    };
  }
}
