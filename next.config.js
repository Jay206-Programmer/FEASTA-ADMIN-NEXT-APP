const withImages = require('next-images')

module.exports = withImages({
    images: {
      domains: ['https://feasta-image-bucket.s3.us-east-2.amazonaws.com/'],
    },
  })