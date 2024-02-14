import React, {useState} from "react";


const reviewData= [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];


const Review= ()=>{

    const [index,setIndex] = useState(0);
    const {id,name,job,image,text}= reviewData[index];
    let ID= `author-${id}`



    function nextClick(){
        
        if(index< reviewData.length-1){
            setIndex(index+1);
        }
        else{
            return;
        }
    }

    function prevClick(){

       
        if(index>0){
            setIndex(index-1);
        }
        else{
            return;
        }
    }

    function randomClick(){
        let num = Math.floor(Math.random()* (reviewData.length));
        setIndex(num);
        
    }

    return(
        <div className="review">
            <div>
                <p id={ID} className="author">{name}</p>
                <p className="job">{job}</p>
                <p className="info">{text}</p>
                <img src={image} className="person-img"  />
            </div>
            <div>
                <button onClick={nextClick} className="next-btn">next</button>
                <button onClick={prevClick} className="prev-btn">previous</button>
                <button onClick={randomClick} className="random-btn">surprise me</button>
            </div>

        
        </div>
    )
}

export default Review