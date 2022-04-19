    window.addEventListener('DOMContentLoaded', () => {
        const channel = 'photos-sent-by-others';

        fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
         .then(response => response.json())
          .then(data => {
            console.log(data);
            renderTitle(data);
            
            renderBlocks(data);
          });
        
      });
        const renderTitle = (data) => {
            console.log(data['title']);
            let title = data['title'];
            document.getElementsByTagName('iframe').src = "https://www.are.na/themis-k/photos-sent-by-others";
        }
        