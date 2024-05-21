
import Card from "@/components/home/Card";
import CarouselComponent from "@/components/home/Carousel";
import { Inter } from "next/font/google";
import cardData from '../store/cardData.json'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
     let categories = new Set();
     let categoryArray ;

     const foodData = []
     const handleData = () => {
      cardData.map((data) =>{
        return foodData.push(data), categories.add(data.category)
      })
     }
     handleData()
     categoryArray = [...categories]
  return (
   <div>

    <CarouselComponent/>

  <div className=" container mx-auto">
  {categoryArray.map((category) =>{
    return (
      <>
      <div
      key={category}
      className=" text-4xl mt-10 mb-3 uppercase font-bold"
      >
      {category}
      </div>
      <hr/>
      <div className=" flex flex-col items-center justify-center">
            <div>
              {foodData
              ?.filter((foodData) =>category === foodData.category)
              ?.map((data)=> {
                return <Card key={data.name} foodData={data}/>
              })}
            </div>
      </div>
      </>
    )
   })}
  </div>
   
   </div>
  );
}
 