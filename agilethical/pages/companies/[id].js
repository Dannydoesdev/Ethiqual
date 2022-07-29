// Asychronous function - we fetch everything and then return it to next so we know how many pages and routes to generate

export const getStaticPaths = async () => {
// fetch the data (same data as our mapped fn)
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // Save data as an array - the response object .json
  const data = await res.json();

  // Return the data as an object property
  // Return an array of objects where each object will be a route
  // define that route based on a kv pair in the object
  // Set the route to a path
  // To traverse the array we use .map

  const paths = data.map(company => {
    // return an object from the array that represents the route -use the params property
    return {
      // will return an integer - so we make it into an id
      params: { id: company.id.toString() }
    }
  })
 
    // now return an object property - NOTE fallback pages are advanced
  // if the user visits a route that exists they get a 404 if false
  // will build a page and a router for each page we specify (that is returned)
  return {
    paths,
    fallback: false
  }
}

//use getStaticProps so we wait for the returned data and send it to the component
//Next bases the number of fetches to the number of paths returned
// the context object will give us the access to the properties

export const getStaticProps = async (context) => {
  // this will run 10 times and get the id from the context opbject
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
  const data = await res.json();

  // return the single object
  return {
    props: { company: data }
  }
}

// destruct the object as a property
const Details = ({ company }) => {
  // use the returned single fetch object details
  return ( 
    <div>
      <h1>{company.name}</h1>
      <p>{company.email}</p>
      <p>{company.website}</p>
      <p>{company.address.city}</p>
    </div>
   );
}
 
export default Details;