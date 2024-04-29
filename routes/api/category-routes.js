const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll().catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findByPk(req.params.id);
  res.json(categoryData);
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async function (req, res) {
  console.log (req.body);
  // create a new category
  Category.create(req.body)
  .then((categoryData) => {
    res.json(categoryData);
  })
  // const categoryData = await Category.create(req.body).catch((err) => {
  //   res.json(err);
  // });
  // res.json(categoryData);
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,
  {
    where:{
    id: req.params.id
  }
  } 
)
.then((updateId)=>{
  res.json(updateId);
})
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
      where:{
        id: req.params.id,
      }
    })
      .then((deletedCategory) => {
        res.json(deletedCategory);
      })
      .catch((err) => res.json(err));
  });

module.exports = router;
