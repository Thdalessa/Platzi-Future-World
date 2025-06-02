
interface CategoriesProps {
  params: {
    categories: string[],
   
  },
  searchParams?:string
}

export default function Categories(props:CategoriesProps) {
  
    const {params,searchParams} = props
    
    console.log(searchParams)
    return (
        <div>
            <h1>Category: {params.categories}</h1>
            <h2>Search Params: {"searchParams"}</h2>
        </div>
    );
}