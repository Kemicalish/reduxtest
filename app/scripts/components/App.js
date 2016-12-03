import React from 'react'
import Gallery from '../components/gallery'

const elements = [
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
    'http://www.publicdomainpictures.net/pictures/20000/t2/portrait-of-lioness-112940816603Iz.jpg',
    'http://www.publicdomainpictures.net/pictures/20000/t2/small-stream-11299071647wvI.jpg',
    'http://www.publicdomainpictures.net/pictures/90000/t2/wine-cork-background.jpg',
    'http://thumb11.shutterstock.com/thumb_large/106495/106495,1225106844,1/stock-photo-funny-kitten-19546774.jpg',
    'http://www.publicdomainpictures.net/pictures/40000/t2/aisle-st-mark-church-pensnett-1362570664iKo.jpg',
    'http://www.publicdomainpictures.net/pictures/10000/t2/965-12392731797CyO.jpg'
].map((img, i) => { return { id:i, src: img }; });

console.log(elements);

const App = () => (
  <div>
    <Gallery elements={elements}/>
  </div>
)

export default App