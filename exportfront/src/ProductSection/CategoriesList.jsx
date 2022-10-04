import CategorySection from "./CategorySection"

export default function CategoriesList({ categories }) {   
   return <>
        {
            categories.map(category => {
                return <>
                    <CategorySection category={category} />
                </>
            })
        }
    </>
}