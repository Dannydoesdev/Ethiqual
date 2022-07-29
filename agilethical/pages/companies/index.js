import styles from '../../styles/Companies.module.css'
import Link from 'next/link';

// runs BEFORE the component is rendered (as opposed to using useEffect)
export const getStaticProps = async () => {
  // returns a response object - pass it to JSON
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // Make it into an array of objects
  const data = await res.json();

  // return the value from the function to be used in the browser - it has a props property

  // put things you want to make available in the component
  // NOTE the curly bracers - returning an object
  return {
    // gets attached to the props in the below component
    props: { companies: data }
  }

}

// 'destructure' the property for the value what you want
const Companies = ({ companies }) => {
  return ( 
    <div>
      <h1>All Companies</h1>
      {/* map through the returned object note the round brackets */}
      {companies.map(company => (
        // return a unique id + the names in the data
        <div key={ company.id }>
          <Link href={`/companies/${company.id}`}>
            <a className={styles.single}>
              <h3>{company.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default Companies;