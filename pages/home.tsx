import { useEffect, useState } from "react";
import Title from "../components/title";
import { getTitle } from "../services/getTitle";

export default function Home() {
    const[title, setTitle] = useState("")
    useEffect(()=>{
        onGetTitle();
    },[])

    const onGetTitle = async () => {
       const title =  await getTitle()
       setTitle(title.title)
    }
    return (
        <div data-testid="container" >
           { 
           title && <Title title={title}/>
           }
        </div>
    )
}