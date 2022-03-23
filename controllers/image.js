module.exports = {
  index: (req, res) => {
    const viewModel = {
      image: {
        uniqueId: 1,
        title: '示例图片1',
        description: '这是张测试图片',
        filename: 'sample1.jpg',
        views: 0,
        likes: 0,
        timestamp: Date.now(),
      },
      comments: [
        {
          image_id: 1,
          email: 'test@testing.com',
          name: 'Test Tester',
          comment: 'Test 1',
          timestamp: Date.now(),
        },
        {
          image_id: 1,
          email: 'test@testing.com',
          name: 'Test Tester',
          comment: 'Test 2',
          timestamp: Date.now(),
        },
      ],
    };
    res.render('image', viewModel);
  },
  create: (req, res) => {
    res.send('The image:create POST controller');
  },
  like: (req, res) => {
    res.send('The image:like POST controller');
  },
  comment: (req, res) => {
    res.send('The image:comment POST controller');
  },
}