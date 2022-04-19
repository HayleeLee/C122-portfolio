  window.addEventListener('DOMContentLoaded', () => {
        const channel = 'photos-sent-by-others';

        fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
          .then(response => response.json())
          .then(data => {
            console.log(data);
            renderBlocks(data);
          });
        
      });

const renderBlocks = (data) => {
    let blocks = data['contents'];
    blocks.forEach((block) => {
        console.log(block);
        let blockClass= block['class'];
        console.log(blockClass);
        
        if (blockClass == 'Image') {
            renderImage(block);
        }
    });
    };

const renderImage = (block) => {
    let imageUrl = block['image']['display']['url']
    console.log(imageUrl);
    console.log(block['title']);
    let imageBlockTemplate = document.getElementById('image-block')
    let clone = imageBlockTemplate.content.cloneNode(true);
    
    clone.querySelector('img').src = imageUrl;
    clone.querySelector('p').innerText = block['title'];
    clone.querySelector('h5').innerText = block['position'];
    
    document.getElementById('contents').appendChild(clone);
};

        