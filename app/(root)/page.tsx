import SearchForm from "../components/SearchForm";
import Projectcard from "../components/Projectcard";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {
  const query =(await searchParams).query;

  const posts=[{
    _createAt:new Date().toISOString(),
    views:5,
    author:{id:1 , name:"author"},
    _id:1,
    description:'This is a description',
    title:'This is a title',
    tags:['tag1','tag2'],
    image:'https://via.placeholder.com/150',
    category:'category',
  }]
  return (
    <>
    <section className="pink_container">
    <h1 className="heading">Pitch your Idea , <br/> collabrate  and learn together with diffrent develpoer <br/>  inspire and keep track of all your project progress </h1>
    <p className="sub-heading !max-w-3xl"> Sumbit idea , collabrate on idea  and finish the unfishied project </p>

    <SearchForm query={query}/>
    </section>
<section className="section-container">
<p className ="text-30-semibold">
  {query ?`Search results for ${query}`: 'Latest Projects'}
</p>

<ul className="mt-7 card_gird">
{posts?.length >0?(
  posts.map((post:Projectcard,index:number)=>(
    <Projectcard key={post?._id} post={post}/>
  ))
):(
  <p className="no-result">Oops! We dont have that , it could be a new idea </p>
)
}
</ul>
</section>
 
    </>
  );
}
