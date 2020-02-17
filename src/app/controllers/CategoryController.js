import Category from '../models/Category';

class CategoryController {
  async store(req, res) {
    const category = await Category.create({
      name: 'agora testando pra mostrar',
    });

    return res.json({
      category,
    });
  }
}

export default new CategoryController();
